"use client"

import { motion } from "motion/react"
import React, { ReactNode } from 'react';
import { useInView } from "motion/react";

interface TiltInProps {
    children: ReactNode;
    className?: string;
}

export default function TiltIn({
    children,
    className = "",
}: TiltInProps) {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });

    return (
        <motion.div
            ref={ref}
            drag
            initial={{ x: 0, y: 0, opacity: 1, rotate: 30 }}
            animate={isInView ? { x: 0, y: 0, opacity: 1, rotate: 0 } : { x: 0, y: 0, opacity: 1, rotate: 30 }}
            whileHover={{ scale: 1.1, rotate: 0, transition: { duration: 0.2 } }}
            transition={{ duration: 0.1, type: "spring", damping: 8, stiffness: 80, mass: 1 }}
            className={className}
        >
            {children}
        </motion.div>
    );
}