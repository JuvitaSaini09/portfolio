"use client"

import { motion } from "motion/react"

export function Title({ label }: { label: string }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, type: "spring", damping: 10, stiffness: 100 }}
            className="flex items-center justify-center gap-10 w-full">
            <div className="w-[100px] h-[3px] bg-grid-small bg-[#474747] rounded"></div>
            <h1 className="text-center text-[52px] font-bold text-[#474747]">{label}</h1>
            <div className="w-[100px] h-[3px] bg-grid-small bg-[#474747] rounded"></div>
        </motion.div>
    )
}