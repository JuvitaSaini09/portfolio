"use client"

import { motion } from "motion/react"
import React, { ReactNode } from 'react';
import { useInView } from "motion/react";

interface TiltInProps {
    children: ReactNode;
    className?: string;
    angle?: number; // How much tilt in degrees
}

export default function TiltIn({
    children,
    className = "",
    angle = -5  // Default tilt of -5 degrees
}: TiltInProps) {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.4 });

    return (
        <motion.div
            ref={ref}
            initial={{
                opacity: 0,
                y: 40,
                rotate: angle, // Initial rotation/tilt
                transformOrigin: "center"
            }}
            animate={isInView ? {
                opacity: 1,
                y: 0,
                rotate: 0  // Rotate back to normal (0 degrees)
            } : {
                opacity: 0,
                y: 40,
                rotate: angle
            }}
            transition={{
                duration: 1.2,
                type: "spring",
                damping: 12,
                stiffness: 90
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}