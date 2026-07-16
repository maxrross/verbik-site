import { NextResponse } from "next/server";

const TYPE_LABELS: Record<string, string> = {
    feature: "Feature request",
    bug: "Bug report",
    word: "Word correction",
    other: "Feedback",
};

export async function POST(request: Request) {
    const contentLength = Number(request.headers.get("content-length") ?? 0);
    if (contentLength > 12_000) {
        return NextResponse.json({ error: "request too large" }, { status: 413 });
    }

    let body: Record<string, unknown>;
    try {
        body = await request.json();
    } catch {
        return NextResponse.json({ error: "invalid JSON" }, { status: 400 });
    }

    if (body.app !== "verbik") {
        return NextResponse.json({ error: "unknown app" }, { status: 400 });
    }

    // Honeypot used by web clients. The iOS app never supplies this field.
    if (typeof body.website === "string" && body.website.length > 0) {
        return NextResponse.json({ ok: true });
    }

    const type = typeof body.type === "string" && body.type in TYPE_LABELS ? body.type : "other";
    const message = typeof body.message === "string" ? body.message.trim().slice(0, 2_000) : "";
    const contact = typeof body.contact === "string" ? body.contact.trim().slice(0, 200) : "";
    const meta = typeof body.meta === "string" ? body.meta.trim().slice(0, 300) : "";

    if (message.length < 3) {
        return NextResponse.json({ error: "message too short" }, { status: 400 });
    }

    const webhook = process.env.VERBIK_FEEDBACK_WEBHOOK;
    if (!webhook) {
        return NextResponse.json({ error: "feedback is temporarily unavailable" }, { status: 503 });
    }

    const fields: Array<{ name: string; value: string; inline?: boolean }> = [];
    if (contact) fields.push({ name: "Contact", value: contact, inline: true });
    if (meta) fields.push({ name: "Device", value: meta, inline: true });

    const delivery = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            embeds: [
                {
                    title: `${TYPE_LABELS[type]} — Verbik`,
                    description: message,
                    color: type === "bug" ? 0xe74c3c : 0x5a00f5,
                    fields,
                    timestamp: new Date().toISOString(),
                },
            ],
        }),
        signal: AbortSignal.timeout(10_000),
    });

    if (!delivery.ok) {
        return NextResponse.json({ error: "delivery failed" }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
}
