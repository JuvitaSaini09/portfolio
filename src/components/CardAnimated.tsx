"use client";
import { motion } from "motion/react";

export function HiCard() {
    return (
        <motion.div
            drag
            whileHover={{ scale: 1.1, rotate: -5 }}
            className={`p-4 bg-[#faefcc] shadow-[0_20px_10px_-14px_#4031a047] w-33 h-33 flex items-center justify-center border-green-500 absolute right-[0] z-2 cursor-move`}>
            <p className="text-center text-[52px] font-bold text-[#474747]">👋</p>
        </motion.div>
    );
}


export function EmployeeStatusCard() {
    return (
        <motion.div
            drag
            whileHover={{ scale: 1.1, rotate: 10 }}
            className={`p-4 bg-[#B8FFC6] shadow-[0_20px_10px_-14px_#4031a047] w-33 h-33 flex items-center justify-center absolute top-[70px] z-1 cursor-move`}>
            <p className="text-center text-xl font-bold text-[#474747]">Available for hiring</p>
        </motion.div>
    );
}

