'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { PointerHighlight } from "@/components/ui/pointer-highlight";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { WobbleCard } from "@/components/ui/wobble-card"; 
import TechLogos from "@/components/TechLogos";
import Copy from '@/components/Copy';
import { ProjectCard } from '@/components/ProjectCard'; 
import { MultiStepLoader as Loader } from "@/components/ui/multi-step-loader";
import { ExperienceTimeline } from '@/components/ExperienceTimeline';
const loadingStates = [
  { text: "Initializing portfolio..." },
  { text: "Assembling creative components..." },
  { text: "Unveiling digital canvas..." },
];

const projectsData = [
  {
    title: "ApexPath",
    description: "Job Matching using BERT on a large database of 20 million+ resumes and jobs. Reverse fuzzy search implemented with various ML models tested too",
    imageUrl: "/project-apexpath.png",
    stack: ["ReactJS", "Vite", "ExpressJS", "Tailwind CSS", "PostgreSQL", "BERT"],
    githubUrl: "https://github.com/prnv-m/ApexPath", 
  },
  {
    title: "SecureBank",
    description: "Engineered a high-security, lightweight banking platform utilizing Zero Trust principles and a custom model to detect anomalous activities.",
    imageUrl: "/project-securebank.png",
    stack: ["React", "Tailwind CSS", "FastAPI", "PostgreSQL", "Docker", "ML"],
    githubUrl: "https://github.com/prnv-m/SecureBank", 
  },
  {
    title: "PriceInsights",
    description: "Architected a comprehensive full-stack price tracking solution that monitors product prices across 5+ e-commerce platforms, reducing user spending.",
    imageUrl: "/project-priceinsights.png",
    stack: ["React", "Tailwind CSS", "FastAPI", "PostgreSQL", "Docker", "ML"],
    githubUrl: "https://github.com/prnv-m/PriceInsights", 
  },
  {
    title: "ConvoStack",
    description: "Developed a full-stack video conferencing platform with real-time transcription, chunked media storage, boosting post-call review efficiency by 40%.",
    imageUrl: "/project-convostack_2025.png",
    stack: ["C++", "WebRTC", "Vosk", "React", "Amazon S3", "Gemini LLM", "Nginx"],
    githubUrl: "https://github.com/prnv-m/Transcent", 
  },
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
          <nav className="fixed top-0 right-0 p-4 z-50">
            <ul className="flex gap-6 text-white/80">
              <li><a href="#hero" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#education" className="hover:text-white transition-colors">Education</a></li>
              <li><a href="#projects" className="hover:text-white transition-colors">Projects</a></li>
            </ul>
          </nav>

          <section id="hero" className="relative w-full h-screen flex items-center justify-center overflow-hidden">
            <Image
              src="/background3.jpg"
              alt="Background"
              width={1920}
              height={1080}
              className="absolute inset-0 w-full h-full object-cover"
              priority
            />
            <div className="relative z-10 px-4 w-full max-w-6xl mx-auto flex items-center justify-between">
              <div className="text-left pl-16">
                <Copy animateOnScroll={true}>
                  <span className="block text-white/70 uppercase font-mono text-base font-medium mb-4">
                    Software Engineer & Data Analyst
                  </span>
                </Copy>
                <Copy delay={0.4}>
                  <h1 className="text-[3.5rem] md:text-[5rem] font-medium tracking-tight leading-none text-white">
                    Hello! I am <span className="text-green-500">Pranav</span> <br />
                    Welcome to my Portfolio
                  </h1>
                </Copy>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="flex items-center gap-6 mt-8"
                >
                  <HoverBorderGradient
                    containerClassName="rounded-full"
                    as="a"
                    href="/Pranav Madhu Resume.pdf"
                    download="Pranav Madhu Resume.pdf" 
                    className="bg-green-500 hover:bg-green-600 text-black font-medium flex items-center space-x-2 px-6 py-3 transition-colors duration-300"
                  >
                    <HiDownload className="h-5 w-5" />
                    <span>Download CV</span>
                  </HoverBorderGradient>
                  <a 
                    href="https://www.linkedin.com/in/madhu-pranav/"
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
                    className="text-green-500 hover:text-white transition-colors hover:scale-110 duration-200"
                  >
                    <FaLinkedin size={32} />
                  </a>
                  <a 
                    href="https://github.com/prnv-m"
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="GitHub Profile"
                    className="text-green-500 hover:text-white transition-colors hover:scale-110 duration-200"
                  >
                    <FaGithub size={32} />
                  </a>
                </motion.div>
              </div>
              <div className="relative w-96 h-96 overflow-hidden rounded-full shadow-xl">
                <Image
                  src="/background2.jpeg"
                  alt="Profile Background"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            <div className="absolute -bottom-8 left-0 right-0 bg-gradient-to-t from-black to-transparent pt-32 pb-8">
              <TechLogos />
            </div>
          </section>

          <section id="about" className="flex flex-col items-center justify-center min-h-screen py-24 px-4 md:px-16 bg-black text-white">
            <div className="w-full max-w-7xl mx-auto">
              <div className="flex flex-col md:flex-row items-start justify-between gap-12">
                <div className="w-full md:w-1/3">
                  <Copy>
                    <h2 className="text-[2.5rem] md:text-[3.5rem] font-medium tracking-tight text-white text-left">
                      About <span className="text-green-500">Me</span>
                    </h2>
                  </Copy>
                </div>
                <div className="w-full md:w-2/3">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-xl md:text-2xl font-medium leading-relaxed text-white/90 text-left"
                  >
                      Data Science
                    
                    enthusiast and{" "} <PointerHighlight><span>full-stack developer </span></PointerHighlight>{" "}skilled in building scalable{" "}
                    <PointerHighlight>
                      <span>AI solutions</span>
                    </PointerHighlight>
                    , automating analytics, and developing real-time web applications.
                    Experienced with Python, C++, React, and cloud tools, I deliver impactful
                    projects in{" "}
                    <PointerHighlight>
                      <span>machine learning</span>
                    </PointerHighlight>
                    ,{" "}
                    <PointerHighlight>
                      <span>computer vision</span>
                    </PointerHighlight>
                    , and data-driven decision-making.
                  </motion.div>
                </div>
              </div>
            </div>
          </section>

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

          <section id="projects" className="flex flex-col items-center justify-center min-h-screen py-24 px-4 md:px-16 bg-black text-white">
            <div className="relative z-10 w-full max-w-7xl mx-auto">
              <Copy>
                <h2 className="text-[2.5rem] md:text-[3.5rem] font-medium tracking-tight text-white text-center mb-16">
                  My <span className="text-green-500">Recent Projects</span>
                </h2>
              </Copy>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-4 gap-y-8 w-full">
                {projectsData.map((project) => (
                  <ProjectCard 
                    key={project.title}
                    title={project.title}
                    description={project.description}
                    imageUrl={project.imageUrl}
                    stack={project.stack}
                    githubUrl={project.githubUrl}
                  />
                ))}
              </div>
            </div>
          </section>
          <section id="experience" className="relative w-full py-24 px-4 md:px-16 overflow-hidden">
            <div className="absolute inset-0 z-0 opacity-20 overflow-hidden">
              <div
                className="absolute top-0 left-0 w-full h-[120vh] bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('/background5.jpg')" }}
              ></div>
              {/* 2. The mirrored image, starting where the first one ends */}
              <div
                className="absolute top-[120vh] left-0 w-full h-[120vh] bg-cover bg-center bg-no-repeat transform scale-y-[-1]"
                style={{ backgroundImage: "url('/background5.jpg')" }}
              ></div>
              {/* 3. The original image again, starting where the second one ends */}
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
        </motion.main>
      )}
    </>
  );
}