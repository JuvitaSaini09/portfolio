import React from "react";
import { Title } from "../atoms/Title";
import Image from "next/image";
import { VerticalLineCurved1, VerticalLineStraight } from "../atoms/VerticalLines";
import { HorizontalLineCurved1, HorizontalLineCurved2 } from "../atoms/HorizontalLines";
import CustomLink from "../atoms/CustomLink";
import { mainProjects } from "@/constants/data";
import FadeUp from "../atoms/FadeUp";
import Link from "next/link";

export const ProjectSection = () => {
    return (
        <div className="flex flex-col items-center w-full gap-24">
            <Title label="Projects" />
            <div className="flex flex-col items-center gap-16">
                {mainProjects.map((project, index) => {
                    return (
                        <FadeUp duration={0.4} key={index}>
                            <Link href={project.link} target="_blank"
                                // h-64
                                className="relative md:w-[720px] flex flex-col md:flex-row md:gap-16  p-4 md:pb-5 md:pr-16 bg-[rgba(255,255,255)] rounded-lg overflow-hidden  border-gray-300 cursor-pointer ">

                                {/* Top Border */}
                                <div className="absolute top-0 left-0 w-full pointer-events-none">
                                    <HorizontalLineCurved1 />
                                </div>


                                {/* Bottom Border */}
                                <div className="absolute bottom-[-100px] left-0 w-full pointer-events-none">
                                    <HorizontalLineCurved2 />
                                </div>

                                {/* Left Border */}
                                <div className="absolute top-0 left-[-45px] h-full z-10 pointer-events-none">
                                    <VerticalLineCurved1 />
                                </div>

                                {/* Right Border */}
                                <div className="absolute top-0 right-[-295px] h-full z-10 pointer-events-none">
                                    <VerticalLineStraight />
                                </div>




                                {/* Project Content */}
                                <div className="overflow-hidden rounded-lg">
                                    <Image
                                        src={project.imgUrl}
                                        alt="project"
                                        width={258}
                                        height={258}
                                        className="w-full h-full object-cover rounded-lg transition-transform duration-300 ease-in-out hover:scale-120"
                                    />
                                </div>
                                <div className=" flex flex-col gap-6 pt-8 md:w-[268px] overflow-hidden">
                                    <h3 className="text-[28px] font-bold">{project.title}</h3>
                                    <h4 className="text-[#8C8FA6] hidden md:block">{project.description}</h4>
                                </div>
                            </Link>
                        </FadeUp>

                    );
                })}


                <CustomLink link="/" icon="&#8594;" label="View all projects" newTab={false} />
            </div>
        </div>
    );
};

