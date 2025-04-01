"use client"
import React from "react";
import { Title } from "../atoms/Title";
import { candidateInfo, socialLinks } from "@/constants/data";
import Socials from "../atoms/Socials";
const Connect = () => {

  return (
    <div className="flex flex-col items-center w-full gap-24 mb-10">
      <div>
        <Title label="Let's talk" />
      </div>
      <div className="flex flex-col gap-4">
        <a
          href={`mailto:${candidateInfo.email}`}
          className="relative text-[38px] font-extralight text-[#474747] group"
        >
          {candidateInfo.email}
          <span className="absolute bottom-[13px] block h-[3px] w-0 bg-[#474747] transition-all duration-0 group-hover:w-full"></span>
        </a>

        <div className="flex gap-6 justify-center">
          {socialLinks.map(({ id, url, Icon }, index) => (
            <Socials key={index} index={index} id={id} url={url} icon={<Icon />} />
          ))}
        </div>
      </div>

    </div>
  );
};

export default Connect;