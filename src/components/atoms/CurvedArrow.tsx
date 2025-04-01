"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const CurvedArrow = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });
    return (
        <motion.svg
            className="w-full max-w-md"
            ref={ref}
        >
            <motion.path
                d="M150 100 C 50 90, 50 30,130 20"
                stroke="#474747"
                strokeWidth="3"
                strokeLinecap="round"
                fill="transparent"
                initial={{ pathLength: 0 }}
                // animate={{ pathLength: 1 }}
                animate={isInView ? { pathLength: 1 } : {}}

                transition={{ duration: 1, ease: "easeInOut" }}
            />
            <motion.path
                d="M100 10 L 130 20 L 110 40"
                stroke="#474747"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="transparent"
                initial={{ pathLength: 0, opacity: 0 }}
                // animate={{ pathLength: 1, opacity: 1 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : {}}

                transition={{ duration: 1, ease: "easeInOut", delay: 0.8 }}
            />


        </motion.svg>
    );
};

export default CurvedArrow;


