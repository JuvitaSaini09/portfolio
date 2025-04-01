"use client";
import React, { useState } from 'react'
import HoverLinkLine from './HoverLinkLine';
import FadeUp from './FadeUp';
import { motion } from 'framer-motion';
import Link from 'next/link';

const CustomLink = ({ icon, label, link, newTab = false }: { icon: string, label: string, link: string, newTab?: boolean }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <FadeUp>
      <Link href={link} target={newTab ? '_blank' : '_self'}>
        <motion.div className="flex items-center gap-4 relative cursor-pointer"
          whileHover={{
            y: -8,
            transition: { type: "spring", damping: 10, stiffness: 200 }
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}

        >
          <HoverLinkLine isHovered={isHovered} />
          <p><span className="font-bold text-2xl text-gray-700">{icon}</span></p>
          <p className="text-2xl font-bold text-[#474747]">{label}</p>
        </motion.div>
      </Link>

    </FadeUp>

  )
}

export default CustomLink