import { Title } from "../atoms/Title";
import CustomLink from "../atoms/CustomLink";
import { experience, skills, socialLinks } from "@/constants/data";
import Link from "next/link";
import { candidateInfo } from "../../constants/data";
import Image from "next/image";

export function AboutSection() {
    return (
        <div className="flex flex-col items-center w-full">
            <Title label="About" />
            <div className="flex gap-10">
                <div className="flex flex-col gap-4 p-4">

                    <div className="flex flex-col items-center gap-6">

                        <div className="border-2 rounded-full h-32 w-32 overflow-hidden bg-[#d1d0d0]">
                            <Image
                                src={candidateInfo.profileImg2}
                                alt="profile"
                                className="w-full h-full object-cover"
                            />
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
                    {/* social links */}
                    <div className="flex flex-col gap-4">
                        <h3 className="text-[28px] font-bold">Links</h3>
                        <div className="flex gap-6">
                            {socialLinks.map(({ id, url, Icon }) => (


                                < Link href={url} key={id} className="border-2 rounded-xl text-center px-2 h-10 w-10 flex items-center justify-center cursor-pointer transition-transform duration-200 hover:scale-110"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Icon />
                                </Link>

                            ))}
                        </div>
                    </div>

                    {/* skills  */}
                    <div className="flex flex-col gap-4">
                        <h3 className="text-[28px] font-bold">Skills</h3>
                        <div className="flex flex-wrap gap-4">
                            {skills.map((skill, index) => (
                                <div key={index} className="border-2 rounded-xl text-center px-2 text-2xl">
                                    {skill}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* experience  */}
                    <div className="flex flex-col gap-4">
                        <h3 className="text-[28px] font-bold">Experience</h3>
                        {
                            experience.map((experience: any, index: number) => {
                                return (
                                    <div key={index}>
                                        <h4 className="text-xl font-bold">{experience.company}</h4>
                                        <div className="flex items-center gap-4">
                                            <p className="text-lg ">{experience.role}</p>
                                            <p className="text-[#8C8FA6]">{experience.duration}</p>
                                        </div>
                                        <h4 className="text-[#8C8FA6]">{experience.description}.</h4>
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