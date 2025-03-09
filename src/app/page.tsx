import { HiCard, EmployeeStatusCard } from "@/components/CardAnimated";
import { AboutSection } from "@/components/AboutSection";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[radial-gradient(circle,#d3d3d3_1.2px,transparent_1.2px)] bg-[size:26px_26px]">
      {/* parent */}
      <header className="relative h-screen flex items-center justify-center w-[720px]">

        {/* child1 */}
        <div className="flex flex-col items-center gap-1">
          <h1 className="font-bold text-[52px] text-[#474747]">Hi, I&#39;m Juvita</h1>
          <p className="font-gaegu font-bold text-[24px] text-[rgb(138,138,138)]">A passionate Frontend Developer.</p>
        </div>

        {/* child2 */}
        <div className="absolute top-[50%]  bottom-[-186px] right-[0]  w-[256px]">
          <div className="relative">
            <HiCard />

          </div>
          <div className="relative">
            <EmployeeStatusCard />
          </div>
        </div>
      </header>
      <div className="w-[720px]">
        <AboutSection />

      </div>

    </div>
  );
}



