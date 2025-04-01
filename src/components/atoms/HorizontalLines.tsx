"use client"
import React from 'react'
import { motion } from "framer-motion"


//// 720, 256

//top border
export const HorizontalLineCurved1 = () => {
    return (
        <svg width="" height="1000" >
            <motion.path
                stroke="#474747"
                strokeWidth="3"
                d="M0 0 Q 715 20,1000 0"
                strokeLinecap="round"
                fill="none"
            />
        </svg>
    )
}

//bottom border
export const HorizontalLineCurved2 = () => {
    return (
        <svg width="" >
            <motion.path
                stroke="#474747"
                strokeWidth="3"
                d="M0 50 Q 100 40,1000 45"
                strokeLinecap="round"
                fill="none"
            />
        </svg>

    )
}







