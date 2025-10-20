// src/components/sections/EducationSection.tsx
import Image from 'next/image';
import { WobbleCard } from "@/components/ui/wobble-card"; 
import Copy from '@/components/Copy';

export default function EducationSection() {
  return (
    <section id="education" className="relative flex flex-col items-center justify-center min-h-screen py-24 px-4 md:px-16 overflow-hidden">
      <Image
        src="/background.jpg"
        alt="Education Background"
        fill
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      />
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <Copy>
          <h2 className="text-[2.5rem] md:text-[3.5rem] font-medium tracking-tight text-white text-center mb-16">
            My <span className="text-green-500">Education</span>
          </h2>
        </Copy>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto w-full">
          {/* VIT Card */}
          <WobbleCard containerClassName="col-span-1 min-h-[300px]" className="p-8 h-full bg-zinc-900/90 backdrop-blur-sm rounded-2xl shadow-xl border border-zinc-800">
            <div className="relative h-full flex flex-col justify-between">
              <div>
                <h3 className="text-left text-balance text-xl md:text-2xl font-semibold tracking-[-0.015em] text-white mb-4">Vellore Institute of Technology (VIT)</h3>
                <p className="text-zinc-300 mb-2 text-base/6">B.Tech in Computer Science Engineering</p>
                <p className="text-zinc-400 mb-4 italic text-base/6">(Specialization in Data Science)</p>
              </div>
              <div>
                <p className="text-green-400 font-medium mb-2 text-lg">CGPA: 9.20 / 10</p>
                <p className="text-zinc-500 text-base/6">Expected September 2026</p>
              </div>
            </div>
          </WobbleCard>
          {/* GEMS Card */}
          <WobbleCard containerClassName="col-span-1 min-h-[300px]" className="p-8 h-full bg-zinc-900/90 backdrop-blur-sm rounded-2xl shadow-xl border border-zinc-800">
            <div className="relative h-full flex flex-col justify-between">
              <div>
                <h3 className="text-left text-balance text-xl md:text-2xl font-semibold tracking-[-0.015em] text-white mb-4">GEMS New Millennium School</h3>
                <p className="text-zinc-300 mb-4 text-base/6">Grade 12 (CBSE)</p>
              </div>
              <div>
                <p className="text-green-400 font-medium mb-2 text-lg">Percentage: 91%</p>
                <p className="text-zinc-500 text-base/6">2022</p>
              </div>
            </div>
          </WobbleCard>
          {/* Mayoor Card */}
          <WobbleCard containerClassName="col-span-1 min-h-[300px]" className="p-8 h-full bg-zinc-900/90 backdrop-blur-sm rounded-2xl shadow-xl border border-zinc-800">
            <div className="relative h-full flex flex-col justify-between">
              <div>
                <h3 className="text-left text-balance text-xl md:text-2xl font-semibold tracking-[-0.015em] text-white mb-4">Mayoor School</h3>
                <p className="text-zinc-300 mb-4 text-base/6">Grade 10 (CBSE)</p>
              </div>
              <div>
                <p className="text-green-400 font-medium mb-2 text-lg">Percentage: 93%</p>
                <p className="text-zinc-500 text-base/6">2020</p>
              </div>
            </div>
          </WobbleCard>
        </div>
      </div>
    </section>
  );
}