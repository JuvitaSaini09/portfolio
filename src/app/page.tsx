import { AboutSection } from "@/components/molecules/AboutSection";
import { ProjectSection } from "@/components/molecules/ProjectSection";
import Connect from "@/components/molecules/Connect";
import HeroSection from "@/components/molecules/HeroSection";

export default function Home() {
  return (
    <div className=" mb-2 flex flex-col gap-[200px] items-center justify-center min-h-screen bg-[radial-gradient(circle,#d3d3d3_1.2px,transparent_1.2px)] bg-[size:26px_26px]">
      <div className="w-[720px]">
        <HeroSection />
      </div>

      <div className="w-[720px]">
        <AboutSection />
      </div>

      <div className="w-[720px]">
        <ProjectSection />
      </div>

      <div className="w-[60%] md:w-[720px] ">
        <Connect />
      </div>
    </div>
  );
}



