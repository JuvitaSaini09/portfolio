"use client";
import React from "react";
import { motion } from "framer-motion";

const HoverLinkLine = ({ isHovered }: { isHovered: boolean }) => {
    return (
        <svg width="170" height="50" viewBox="0 0 180 20" className="absolute bottom-[-30px] left-5">
            <motion.path
                stroke="#474747"
                strokeWidth="3"
                d="M0 23 Q 90 0 ,200 10"
                strokeLinecap="round"
                fill="none"
                initial="hidden"
                animate={isHovered ? "visible" : "hidden"}
                strokeLinejoin="round"
                variants={{
                    hidden: { pathLength: 0, opacity: 0 },
                    visible: {
                        pathLength: 1,
                        opacity: 1,
                        transition: { delay: 0.1, duration: 0.2, ease: "easeInOut" },
                    },
                }}
            />
        </svg>
    );
};

export default HoverLinkLine;
