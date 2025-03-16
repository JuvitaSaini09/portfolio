import { Title } from "../atoms/Title";
import CustomLink from "../atoms/CustomLink";

export function AboutSection() {
    return (
        <div className="flex flex-col items-center w-full">
            <Title label="About" />
            <div className="flex gap-10">
                <div className="flex flex-col gap-4 p-4">

                    <div className="flex flex-col items-center gap-6">
                        <div className="border-2 rounded-full h-32 w-32">
                        </div>
                        <p className="text-[32px] font-bold">Yours Truly</p>
                    </div>

                    <div className="flex flex-col gap-4">
                        <div className="flex  gap-4">
                            <div
                                className={`p-4 bg-[#B8FFC6] shadow-[0_20px_10px_-14px_#4031a047] w-33 h-33 flex items-center justify-center`}>
                                <p className="text-center text-xl font-bold text-[#474747]">5 + years in startups</p>
                            </div>
                            <div
                                className={`p-4 bg-[#FFA3A3] shadow-[0_20px_10px_-14px_#4031a047] w-33 h-33 flex items-center justify-center`}>
                                <p className="text-center text-xl font-bold text-[#474747]">versatile skill pool</p>
                            </div>
                        </div>
                        <div className="flex  gap-4">
                            <div
                                className={`p-4 bg-[#FFE5A3] shadow-[0_20px_10px_-14px_#4031a047] w-33 h-33 flex items-center justify-center`}>
                                <p className="text-center text-xl font-bold text-[#474747]">Over a decade of experience in the industry</p>
                            </div>
                            <div
                                className={`p-4 bg-[#94E6FF] shadow-[0_20px_10px_-14px_#4031a047] w-33 h-33 flex items-center justify-center`}>
                                <p className="text-center text-xl font-bold text-[#474747]">Berlin</p>
                            </div>
                        </div>
                        <div className="flex  gap-4">
                            <div
                                className={`p-4 bg-[#CDA3FF] shadow-[0_20px_10px_-14px_#4031a047] w-33 h-33 flex items-center justify-center`}>
                                <p className="text-center text-xl font-bold text-[#474747]">Framer partner</p>
                            </div>
                            <div
                                className={`p-4 bg-[#FBFF94] shadow-[0_20px_10px_-14px_#4031a047] w-33 h-33 flex items-center justify-center`}>
                                <p className="text-center text-xl font-bold text-[#474747]">sticky</p>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="flex flex-col gap-10">
                    <div className="flex flex-col gap-4">
                        <h3 className="text-[28px] font-bold">Links</h3>
                        <div className="flex gap-6">
                            <div className="border-2 rounded-xl text-center px-2 ">Twitter</div>
                            <div className="border-2 rounded-xl text-center px-2">Linkdin</div>
                            <div className="border-2 rounded-xl text-center px-2">Github</div>
                            <div className="border-2 rounded-xl text-center px-2">Leetcode</div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h3 className="text-[28px] font-bold"> Skills</h3>
                        <div className="flex flex-col gap-4 ">
                            <div className="flex gap-6">
                                <div className="border-2 rounded-xl text-center px-2 text-2xl">Framer</div>
                                <div className="border-2 rounded-xl text-center px-2 text-2xl">UI design</div>
                            </div>
                            <div className="flex gap-6">
                                <div className="border-2 rounded-xl text-center px-2 text-2xl">UX research</div>
                                <div className="border-2 rounded-xl text-center px-2 text-2xl">Animation</div>
                            </div>
                            <div className="flex gap-6">
                                <div className="border-2 rounded-xl text-center px-2 text-2xl">Animation</div>
                                <div className="border-2 rounded-xl text-center px-2 text-2xl">Branding</div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h3 className="text-[28px] font-bold">Experience</h3>
                        <div>
                            <h4 className="text-xl font-bold">Framer</h4>
                            <div className="flex items-center gap-4">
                                <p className="text-lg ">Senior Product Designer</p>
                                <p className="text-[#8C8FA6]">2023 - Current</p>
                            </div>
                            <h4 className="text-[#8C8FA6]">I developed user-focused delightful digital experiences.</h4>
                        </div>
                        <div>
                            <h4 className="text-xl font-bold">Acme</h4>
                            <div className="flex items-center gap-4">
                                <p className="text-lg ">Product Designer</p>
                                <p className="text-[#8C8FA6]">2021 - 2023</p>
                            </div>
                            <h4 className="text-[#8C8FA6]">Lead the initiative to develop Acme mobile application interface.</h4>
                        </div>

                        <CustomLink icon="&#8595;" label="Download Resume" />

                    </div>
                </div>
            </div>
        </div>
    )
}