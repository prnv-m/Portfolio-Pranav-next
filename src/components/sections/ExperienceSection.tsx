// src/components/sections/ExperienceSection.tsx
import Copy from '@/components/Copy';
import { ExperienceTimeline } from '@/components/ExperienceTimeline';

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative w-full py-24 px-4 md:px-16 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20 overflow-hidden">
        {/* 1. Original image */}
        <div
          className="absolute top-0 left-0 w-full h-[120vh] bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/background5.jpg')" }}
        ></div>
        {/* 2. Mirrored image */}
        <div
          className="absolute top-[120vh] left-0 w-full h-[120vh] bg-cover bg-center bg-no-repeat transform scale-y-[-1]"
          style={{ backgroundImage: "url('/background5.jpg')" }}
        ></div>
        {/* 3. Original image again */}
        <div
          className="absolute top-[240vh] left-0 w-full h-[120vh] bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/background5.jpg')" }}
        ></div>
      </div>
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <Copy>
          <h2 className="text-[2.5rem] md:text-[3.5rem] font-medium tracking-tight text-white text-center mb-16">
            My <span className="text-green-500">Journey</span>
          </h2>
        </Copy>
        <ExperienceTimeline />
      </div>
    </section>
  );
}