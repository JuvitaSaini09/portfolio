"use client"
import React from 'react'
import { motion } from "framer-motion"


//// 720, 256

//left
export const VerticalLineCurved1 = () => {
    return (
        <svg width="" height="256" >
            <motion.path
                stroke="#474747"
                strokeWidth="3"
                d="M50 0 C60 50,40 200, 50 256"
                strokeLinecap="round"
                fill="none"
            />
        </svg>

    )
}
//right
export const VerticalLineStraight = () => {
    return (
        <svg width="" height="256">
        <motion.path
            stroke="#474747"
            strokeWidth="6"
            d="M0 0,0 248"
            strokeLinecap="round"
            fill="none"
        />
    </svg>
    )
}





