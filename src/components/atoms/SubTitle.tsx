"use client"

import { motion, useInView } from "motion/react"
import React from 'react';

export default function SubTitle({ label }: { label: string }) {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    return (
        <motion.h3
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0 }}
            transition={{ duration: 1.2, type: "spring", damping: 10, stiffness: 100 }}
            className="text-[28px] font-bold">
            {label}
        </motion.h3>
    )
}