// src/components/sections/HeroSection.tsx
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import Copy from '@/components/Copy';
import TechLogos from '@/components/TechLogos';

export default function HeroSection() {
  return (
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
        <div className="hidden md:block relative w-96 h-96 overflow-hidden rounded-full shadow-xl">
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
  );
}