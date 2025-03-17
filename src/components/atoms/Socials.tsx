"use client"

import { motion } from "motion/react"
import Link from "next/link"
import React from 'react';
import { useInView } from "motion/react";

export default function Socials({ index, url, icon }: { index: number, id: string, url: string, icon: React.ReactNode }) {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0 }}
            transition={{ duration: 1.2, type: "spring", damping: 8, stiffness: 100, delay: index * 0.1 }}
        >
            <Link href={url} className="border-2 rounded-xl text-center px-2 h-10 w-10 flex items-center justify-center cursor-pointer transition-transform duration-200 hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
            >
                {icon}
            </Link>
        </motion.div>

    )
}