import React from 'react'
import { EmployeeStatusCard, HiCard } from '../atoms/CardAnimated'

const HeroSection = () => {
    return (
        <header className="relative h-screen flex items-center justify-center">
            {/* child1 */}
            <div className="flex flex-col items-center gap-1">
                <h1 className="font-bold text-[52px] text-[#474747]">Hi, I&#39;m Juvita</h1>
                <p className="font-gaegu font-bold text-[24px] text-[rgb(138,138,138)]">A passionate Frontend Developer.</p>
            </div>

            {/* child2 */}
            <div className="absolute top-[50%]  bottom-[-186px] right-[0]  w-[256px]">
                <div className="relative">
                    <HiCard />

                </div>
                <div className="relative">
                    <EmployeeStatusCard />
                </div>
            </div>
        </header>
    )
}

export default HeroSection