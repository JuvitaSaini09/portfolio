import React from "react";
import { Title } from "../Title";
import Image from "next/image";
// import dummyProject from 'public\images\dummyProject.jpg'

const Projects = [
    {
        title: "project1",
        description:
            "I developed user-focused delightful digital experiences.I developed user-focused delightful digital experiencesI developed user-focused.",
        link: "/project1",
        imgUrl:
            "https://plus.unsplash.com/premium_photo-1720796408865-77661f4f23c7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dmlkZW8lMjBsaWJyYXJ5fGVufDB8fDB8fHww",
    },
    {
        title: "project2",
        description: "project2 description",
        link: "/project1",
        imgUrl:
            "https://plus.unsplash.com/premium_photo-1720796408865-77661f4f23c7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dmlkZW8lMjBsaWJyYXJ5fGVufDB8fDB8fHww",
    },
    {
        title: "project3",
        description: "project3 description",
        link: "/project1",
        imgUrl:
            "https://plus.unsplash.com/premium_photo-1720796408865-77661f4f23c7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dmlkZW8lMjBsaWJyYXJ5fGVufDB8fDB8fHww",
    },
];

export const ProjectSection = () => {
    return (
        <div className="flex flex-col items-center w-full gap-24 mt-50">
            <Title label="Projects" />
            <div className="flex flex-col items-center gap-16">
                {Projects.map((project, index) => {
                    return (
                        <div
                            key={index}
                            className="w-[720px] flex border gap-16 h-64 p-2 pr-16 bg-[rgba(255,255,255)] rounded-lg">
                            <div className="overflow-hidden rounded-lg">
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
                                <h4 className="text-[#8C8FA6]">{project.description}</h4>
                            </div>
                        </div>
                    );
                })}
                <div className="flex items-center gap-4">
                    <p><span className="font-bold text-2xl text-gray-700">&#8594;</span></p>
                    <p className="text-2xl font-bold text-[#474747]">View all projects</p>
                </div>
            </div>
        </div>
    );
};
