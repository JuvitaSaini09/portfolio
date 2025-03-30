import { Title } from "../atoms/Title";
import CustomLink from "../atoms/CustomLink";
import { experience, skills, socialLinks } from "@/constants/data";
import { candidateInfo } from "../../constants/data";
import Image from "next/image";
import SubTitle from "../atoms/SubTitle";
import Skills from "../atoms/Skills";
import Socials from "../atoms/Socials";
import FadeUp from "../atoms/FadeUp";
import TiltIn from "../atoms/TiltIn";
import CardsGrid from "../atoms/CardsGrid";

export function AboutSection() {
    return (
        <div className="flex flex-col items-center w-full gap-24">
            <Title label="About" />
            <div className="flex flex-col md:flex-row gap-10 px-4">
                <div className="flex flex-col gap-4 p-4">
                    <div className="flex flex-col items-center gap-6">
                        <FadeUp>
                            <div className="border-2 rounded-full h-32 w-32 overflow-hidden bg-[#d1d0d0]">
                                <Image
                                    src={candidateInfo.profileImg2}
                                    alt="profile"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </FadeUp>

                        <FadeUp>
                            <p className="text-[32px] font-bold">Yours Truly</p>
                        </FadeUp>

                    </div>
                    {/* <TiltIn angle={45}>
                    </TiltIn> */}
                    <div className="flex flex-col gap-4 items-center">
                        <div className="flex gap-3">

                            <TiltIn angle={45}>
                                <div
                                    className={`p-4 bg-[#B8FFC6] shadow-[0_20px_10px_-14px_#4031a047] w-33 h-33 flex items-center justify-center`}>
                                    <p className="text-center text-xl font-bold text-[#474747]">5 + years in startups</p>
                                </div>
                            </TiltIn>



                            <TiltIn angle={45}> <div
                                className={` mt-10 p-4 bg-[#FFA3A3] shadow-[0_20px_10px_-14px_#4031a047] w-33 h-33 flex items-center justify-center`}>
                                <p className="text-center text-xl font-bold text-[#474747]">versatile skill pool</p>
                            </div></TiltIn>


                        </div>
                        <div className="flex  gap-4 ">
                            <TiltIn angle={45}> <div
                                className={`z-10 relative bottom-7 p-4 bg-[#FFE5A3] shadow-[0_20px_10px_-14px_#4031a047] w-33 h-33 flex items-center justify-center`}>
                                <p className="text-center text-xl font-bold text-[#474747]">Over a decade of experience in the industry</p>
                            </div></TiltIn>

                            <TiltIn angle={45}> <div
                                className={`z-1 relative right-10 top-8 p-4 bg-[#94E6FF] shadow-[0_20px_10px_-14px_#4031a047] w-33 h-33 flex items-center justify-center`}>
                                <p className="text-center text-xl font-bold text-[#474747]">Berlin</p>
                            </div></TiltIn>

                        </div>
                        <div className="flex  gap-4 ">
                            <TiltIn angle={45}> <div
                                className={`relative top-10 left-15 z-1 p-4 bg-[#CDA3FF] shadow-[0_20px_10px_-14px_#4031a047] w-33 h-33 flex items-center justify-center`}>
                                <p className="text-center text-xl font-bold text-[#474747]">Framer partner</p>
                            </div></TiltIn>

                            <TiltIn angle={45}> <div
                                className={`relative top-34 left-2 z-10 p-4 bg-[#FBFF94] shadow-[0_20px_10px_-14px_#4031a047] w-33 h-33 flex items-center justify-center`}>
                                <p className="text-center text-xl font-bold text-[#474747]">sticky</p>
                            </div></TiltIn>

                        </div>
                    </div>


                </div>

                <div className="flex flex-col gap-10 items-center md:items-start">
                    {/* social links */}
                    <div className="flex flex-col gap-4 items-center md:items-start">
                        <SubTitle label="Links" />
                        <div className="flex gap-6">
                            {socialLinks.map(({ id, url, Icon }, index) => (
                                <Socials key={index} index={index} id={id} url={url} icon={<Icon />} />

                            ))}
                        </div>
                    </div>

                    {/* skills  */}
                    <div className="flex flex-col gap-4 items-center md:items-start max-w-md">
                        <SubTitle label="Skills" />
                        <div className="flex flex-wrap gap-4">
                            {skills.map((skill, index) => (
                                <Skills key={index} skill={skill} index={index} />
                            ))}
                        </div>
                    </div>

                    {/* experience  */}
                    <div className="flex flex-col gap-4 items-center md:items-start">
                        <SubTitle label="Experience" />
                        {
                            experience.map((experience: Record<string, string | string[]>, index: number) => {
                                return (
                                    <div key={index} className="flex flex-col items-center md:items-start">
                                        <h4 className="text-xl font-bold">{experience.company}</h4>
                                        <div className="flex gap-4">
                                            <p className="text-lg ">{experience.role}</p>
                                            <p className="text-[#8C8FA6]">{experience.duration}</p>
                                        </div>
                                        <h4 className="text-[#8C8FA6]">{experience.description}</h4>
                                    </div>

                                )
                            })
                        }
                        <CustomLink icon="&#8595;" label="Download Resume" />

                    </div>
                </div>
            </div>
        </div >
    )
}