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
import CurvedArrow from "../atoms/CurvedArrow";

export function AboutSection() {
    return (
        <div className="flex flex-col items-center w-full gap-24">
            <Title label="About" />
            <div className="flex flex-col md:flex-row gap-10 px-4">
                <div className="flex flex-col gap-16 md:gap-4 p-4  mb-40 md:mb-0">
                    <div className="flex flex-col items-center gap-10 relative">
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

                        <div className="absolute bottom-[-20px] left-[-30px] md:bottom-[-20px] md:left-[-100px]">
                            <CurvedArrow />
                        </div>

                    </div>
                    <div className="flex flex-col gap-4 items-center">
                        <div className="flex gap-3">

                            <TiltIn>
                                <div
                                    className={`p-4 bg-[#B8FFC6] shadow-[0_20px_10px_-14px_#4031a047] w-33 h-33 flex items-center justify-center`}>
                                    <p className="text-center text-lg font-bold text-[#474747]"> Year+ Startup Experience</p>
                                </div>
                            </TiltIn>



                            <TiltIn> <div
                                className={` mt-10 p-4 bg-[#FFA3A3] shadow-[0_20px_10px_-14px_#4031a047] w-33 h-33 flex items-center justify-center`}>
                                <p className="text-center text-lg font-bold text-[#474747]">React and Next.js is love</p>
                            </div></TiltIn>


                        </div>
                        <div className="flex  gap-4 ">
                            <TiltIn> <div
                                className={`z-10 relative bottom-7 p-4 bg-[#FFE5A3] shadow-[0_20px_10px_-14px_#4031a047] w-33 h-33 flex items-center justify-center`}>
                                <p className="text-center text-lg font-bold text-[#474747]">Dev Speaker at Peerlist Meetup </p>
                            </div></TiltIn>

                            <TiltIn > <div
                                className={`z-1 relative right-8 top-8 p-4 bg-[#94E6FF] shadow-[0_20px_10px_-14px_#4031a047] w-33 h-33 flex items-center justify-center`}>
                                <p className="text-center text-lg font-bold text-[#474747]">From Pathankot to Pune & Beyond</p>
                            </div></TiltIn>

                        </div>
                        <div className="flex  gap-4 ">
                            <TiltIn > <div
                                className={`relative top-10 left-15 z-1 p-4 bg-[#CDA3FF] shadow-[0_20px_10px_-14px_#4031a047] w-33 h-33 flex items-center justify-center`}>
                                <p className="text-center text-lg font-bold text-[#474747]">Built & Migrated React Apps to Vite</p>
                            </div></TiltIn>

                            <TiltIn > <div
                                className={`relative top-34 left-2 z-10 p-4 bg-[#FBFF94] shadow-[0_20px_10px_-14px_#4031a047] w-33 h-33 flex items-center justify-center`}>
                                <p className="text-center text-lg font-bold text-[#474747]">NeoG Camp Grad || Leveling Up in React</p>
                            </div></TiltIn>

                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-16 items-center md:items-start">
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
                        <div className=" p-10 md:p-0 flex justify-center items-center flex-wrap  gap-4">
                            {skills.map((skill, index) => (
                                <Skills key={index} skill={skill} index={index} />
                            ))}
                        </div>
                    </div>

                    {/* experience  */}
                    <div className="flex flex-col gap-6 items-center md:items-start">
                        <SubTitle label="Experience" />
                        {
                            experience.map((experience: Record<string, string | string[]>, index: number) => {
                                return (
                                    <div key={index} className="flex flex-col items-center md:items-start">
                                        <FadeUp><p className="text-2xl font-bold ">{experience.company}</p></FadeUp>
                                        <FadeUp> <div className="flex gap-4">
                                            <p className="text-xl ">{experience.role}</p>
                                            <p className="text-xl text-[#8C8FA6]">{experience.duration}</p>
                                        </div></FadeUp>
                                        <FadeUp><h4 className="text-[#8C8FA6] max-w-lg md:max-w-2xl">{experience.description}</h4></FadeUp>
                                    </div>


                                )
                            })
                        }

                        <CustomLink link="https://drive.google.com/file/d/1y7PSD1vDGv6ZYjqYxuzfQqnBFc4Lc69-/view?usp=sharing" icon="&#8595;" label="Download Resume"
                            newTab={true}
                        />

                    </div>
                </div>
            </div>
        </div >
    )
}