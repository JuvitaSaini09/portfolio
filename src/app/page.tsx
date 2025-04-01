import { AboutSection } from "@/components/molecules/AboutSection";
import { ProjectSection } from "@/components/molecules/ProjectSection";
import Connect from "@/components/molecules/Connect";
import HeroSection from "@/components/molecules/HeroSection";


export default function Home() {
  return (
    <div className="mb-2 flex flex-col gap-[200px] items-center justify-center min-h-screen bg-[radial-gradient(circle,#d3d3d3_1.2px,transparent_1.2px)] bg-[size:26px_26px]">
      <div className="w-full max-w-[720px] px-4">
        <HeroSection />
      </div>

      <div className="w-full max-w-[800px] px-4">
        <AboutSection />
      </div>

      <div className="w-full max-w-[720px] px-4">
        <ProjectSection />
      </div>

      <div className="w-full max-w-[720px] px-4 md:w-[720px]">
        <Connect />
      </div>
    </div>
  );
}




