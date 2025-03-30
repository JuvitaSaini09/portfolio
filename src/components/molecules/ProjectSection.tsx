import React from "react";
import { Title } from "../atoms/Title";
import Image from "next/image";
import { VerticalLineCurved1, VerticalLineStraight } from "../atoms/VerticalLines";
import { HorizontalLineCurved1, HorizontalLineCurved2 } from "../atoms/HorizontalLines";
import CustomLink from "../atoms/CustomLink";
import { mainProjects } from "@/constants/data";
import FadeUp from "../atoms/FadeUp";

export const ProjectSection = () => {
    return (
        <div className="flex flex-col items-center w-full gap-24">
            <Title label="Projects" />
            <div className="flex flex-col items-center gap-16">
                {mainProjects.map((project, index) => {
                    return (
                        <FadeUp duration={0.4} key={index}>
                            <div
                                className="relative w-[720px] flex gap-16 h-64 p-4 pr-16 bg-[rgba(255,255,255)] rounded-lg overflow-hidden  border-gray-300 cursor-pointer">

                                {/* Top Border */}
                                <div className="absolute top-0 left-0 w-full">
                                    <HorizontalLineCurved1 />
                                </div>


                                {/* Bottom Border */}
                                <div className="absolute bottom-[-100px] left-0 w-full">
                                    <HorizontalLineCurved2 />
                                </div>

                                {/* Left Border */}
                                <div className="absolute top-0 left-[-45px] h-full z-10">
                                    <VerticalLineCurved1 />
                                </div>

                                {/* Right Border */}
                                <div className="absolute top-0 right-[-295px] h-full z-10">
                                    <VerticalLineStraight />
                                </div>




                                {/* Project Content */}
                                <div className="overflow-hidden rounded-lg ">
                                    <Image
                                        src={project.imgUrl}
                                        alt="project"
                                        width={258}
                                        height={258}
                                        className="w-full h-full object-cover rounded-lg transition-transform duration-300 ease-in-out hover:scale-105"
                                    />
                                </div>
                                <div className="flex flex-col gap-6 pt-8 w-[268px] overflow-hidden">
                                    <h3 className="text-[28px] font-bold">{project.title}</h3>
                                    <h4 className="text-[#8C8FA6] hidden md:block">{project.description}</h4>
                                </div>
                            </div>
                        </FadeUp>

                    );
                })}

                
                <CustomLink icon="&#8594;" label="View all projects" />
            </div>
        </div>
    );
};

