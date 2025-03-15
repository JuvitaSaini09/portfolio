"use client";
import React, { useState } from 'react'
import HoverLinkLine from './HoverLinkLine';

const CustomLink = ({icon, label}) => {
    const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="flex items-center gap-4 relative"
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}>
    <HoverLinkLine isHovered={isHovered} />
    <p><span className="font-bold text-2xl text-gray-700">{icon}</span></p>
    <p className="text-2xl font-bold text-[#474747]">{label}</p>

</div>
  )
}

export default CustomLink