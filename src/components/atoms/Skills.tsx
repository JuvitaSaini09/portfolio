"use client"

import { motion } from "motion/react"
import React from 'react';
import { useInView } from "motion/react";

export default function Skills({ skill, index }: { skill: string, index: number }) {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0 }}
            transition={{ duration: 1.2, type: "spring", damping: 10, stiffness: 100, delay: index * 0.1 }}
            className="border-2 rounded-xl text-center px-2 text-2xl text-[#474747] gaegu-font">
            {skill}
        </motion.div>
    )
}