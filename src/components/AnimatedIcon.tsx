"use client";

import { motion } from "framer-motion";
import {
    TextAa, ListChecks, Shapes, ImagesSquare, Microphone, BookOpen, Sparkle, Waveform,
    ShieldCheck, Warning, ShieldWarning, MagnifyingGlass, HandGrabbing,
    ArrowsClockwise, Brain, CalendarPlus, TextT, FileText
} from "@phosphor-icons/react/dist/ssr";

export function AnimatedIcon({
    iconSymbol,
    color,
    size = "md",
    variant = "solid"
}: {
    iconSymbol: string;
    color: string;
    size?: "sm" | "md" | "lg" | "xl";
    variant?: "solid" | "light" | "app-icon";
}) {
    let iconSizeClass = "w-6 h-6";
    let containerSizeClass = "w-12 h-12 rounded-xl";
    let floatAnimation: any = undefined;

    if (size === "xl") {
        iconSizeClass = "w-10 h-10";
        containerSizeClass = "w-20 h-20 rounded-[1.2rem]";
    } else if (size === "lg") {
        iconSizeClass = "w-8 h-8";
        containerSizeClass = "w-16 h-16 rounded-2xl";
        floatAnimation = {
            y: [0, -6, 0],
            transition: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
            }
        };
    } else if (size === "sm") {
        iconSizeClass = "w-4 h-4";
        containerSizeClass = "w-8 h-8 rounded-lg";
    }

    const iconProps = { weight: "duotone" as const, className: iconSizeClass };

    let IconElement;

    switch (iconSymbol) {
        // Updated Mappings
        case "lock.shield": IconElement = <ShieldCheck {...iconProps} />; break;
        case "exclamationmark.triangle": IconElement = <Warning {...iconProps} />; break;
        case "exclamationmark.shield": IconElement = <ShieldWarning {...iconProps} />; break;
        case "text.magnifyingglass": IconElement = <MagnifyingGlass {...iconProps} />; break;
        case "hand.draw": IconElement = <HandGrabbing {...iconProps} />; break;
        case "arrow.triangle.2.circlepath": IconElement = <ArrowsClockwise {...iconProps} />; break;
        case "brain.head.profile": IconElement = <Brain {...iconProps} />; break;
        case "calendar.badge.plus": IconElement = <CalendarPlus {...iconProps} />; break;
        case "textformat": IconElement = <TextT {...iconProps} />; break;
        case "doc.text": IconElement = <FileText {...iconProps} />; break;

        // Existing Mappings
        case "doc.text.viewfinder": IconElement = <TextAa {...iconProps} />; break;
        case "checklist": case "list.bullet": IconElement = <ListChecks {...iconProps} />; break;
        case "photo.stack": IconElement = <ImagesSquare {...iconProps} />; break;
        case "sparkles": IconElement = <Sparkle {...iconProps} />; break;
        case "mic.badge.plus": case "waveform.and.mic": IconElement = <Microphone {...iconProps} />; break;
        case "waveform": IconElement = <Waveform {...iconProps} />; break;
        case "book.closed": IconElement = <BookOpen {...iconProps} />; break;

        default: IconElement = <Shapes {...iconProps} />; break;
    }

    // Styles for variants
    let className = `${containerSizeClass} flex items-center justify-center border`;
    let style: React.CSSProperties = {};

    if (variant === "solid") {
        className += " shadow-[0_8px_32px_rgba(0,0,0,0.06)] border-white/20";
        style = { backgroundColor: color, color: "white" };
    } else if (variant === "light") {
        className += " shadow-sm border-slate-100";
        style = { backgroundColor: `${color}1A`, color: color };
    } else if (variant === "app-icon") {
        className += " shadow-[0_8px_24px_rgba(0,0,0,0.12)] border-white/40";
        style = { backgroundColor: "white", color: color };
    }

    return (
        <motion.div
            animate={floatAnimation}
            className={className}
            style={style}
        >
            {IconElement}
        </motion.div>
    );
}
