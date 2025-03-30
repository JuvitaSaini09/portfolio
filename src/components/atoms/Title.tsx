"use client"

import { motion, useInView } from "motion/react"
import { useRef } from "react"

export function Title({ label }: { label: string }) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.5 })
    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0 }}
            transition={{ duration: 1.2, type: "spring", damping: 10, stiffness: 100 }}
            className="flex items-center justify-center gap-10 w-full">
            <div className="w-[100px] h-[3px] bg-grid-small bg-[#474747] rounded"></div>
            <h1 className="text-center text-[52px] font-bold text-[#474747]">{label}</h1>
            <div className="w-[100px] h-[3px] bg-grid-small bg-[#474747] rounded"></div>
        </motion.div>
    )
}