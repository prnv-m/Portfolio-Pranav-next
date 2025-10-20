// src/app/page.tsx (The new, clean version)

'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MultiStepLoader as Loader } from "@/components/ui/multi-step-loader";

// Import all the new section components
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import EducationSection from '@/components/sections/EducationSection';
import ProjectsSection from '@/components/sections/ProjectSection';
import ExperienceSection from '@/components/sections/ExperienceSection';

const loadingStates = [
  { text: "Initializing portfolio..." },
  { text: "Assembling creative components..." },
  { text: "Unveiling digital canvas..." },
];

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); 

    return () => clearTimeout(timer);
  }, []);

  const mainVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.8,
        delay: 0.2
      } 
    },
  };

  return (
    <>
      <Loader loadingStates={loadingStates} loading={loading} duration={1000} />  
      
      {!loading && (
        <motion.main
          variants={mainVariants}
          initial="hidden"
          animate="visible"
          className="w-full min-h-screen flex flex-col bg-black text-white"
        >
          {/* Navigation remains here */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/100 to-transparent p-4 sm:p-6">
          <div className="w-full max-w-10xl mx-auto flex justify-center sm:justify-end">
            <ul className="flex flex-wrap justify-center gap-x-4 gap-y-2 sm:gap-6 text-white/80">
              <li><a href="#hero" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#education" className="hover:text-white transition-colors">Education</a></li>
              <li><a href="#projects" className="hover:text-white transition-colors">Projects</a></li>
              <li><a href="#experience" className="hover:text-white transition-colors">Journey</a></li>
            </ul>
          </div>
        </nav>
          
          {/* Render the section components */}
          <HeroSection />
          <AboutSection />
          <EducationSection />
          <ProjectsSection />
          <ExperienceSection />
          
        </motion.main>
      )}
    </>
  );
}