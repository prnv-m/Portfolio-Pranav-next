// src/components/ProjectCard.tsx
"use client";

import React from "react";
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { FaReact, FaDocker, FaNodeJs } from "react-icons/fa";
import { SiPostgresql, SiTailwindcss, SiNextdotjs, SiTypescript, SiVite, SiExpress, SiRedis, SiMongodb, SiFastapi, SiWebrtc, SiNginx, SiCplusplus, SiAmazons3 } from "react-icons/si";
import { FaArrowRight } from "react-icons/fa6";

// Define a mapping from stack names to icons
const techIcons: { [key: string]: React.ReactNode } = {
  "React": <FaReact size={20} />,
  "ReactJS": <FaReact size={20} />,
  "Next.js": <SiNextdotjs size={20} />,
  "TypeScript": <SiTypescript size={20} />,
  "Vite": <SiVite size={20} />,
  "ExpressJS": <SiExpress size={20} />,
  "Node.js": <FaNodeJs size={20} />,
  "Tailwind CSS": <SiTailwindcss size={20} />,
  "PostgreSQL": <SiPostgresql size={20} />,
  "Docker": <FaDocker size={20} />,
  "Redis": <SiRedis size={20} />,
  "MongoDB": <SiMongodb size={20} />,
  "FastAPI": <SiFastapi size={20} />,
  "WebRTC": <SiWebrtc size={20} />,
  "Amazon S3": <SiAmazons3 size={20} />,
  "Nginx": <SiNginx size={20} />,
  "C++": <SiCplusplus size={20} />,
  // Add other icons as needed, e.g., Vosk, Gemini LLM might not have standard icons
  "Vosk": <span className="text-xs font-mono">Vosk</span>,
  "Gemini LLM": <span className="text-xs font-mono">Gemini</span>,
  "BERT": <span className="text-xs font-mono">BERT</span>,
  "ML": <span className="text-xs font-mono">ML</span>,
};

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  stack: string[];
  githubUrl: string;
}

export function ProjectCard({ title, description, imageUrl, stack, githubUrl}: ProjectCardProps) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-zinc-900/90 relative group/card dark:hover:shadow-2xl dark:hover:shadow-green-500/[0.2] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto h-auto rounded-xl p-6 border border-zinc-800">
        {/* Project Image */}
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={imageUrl}
            height="1000"
            width="1000"
            className="aspect-video w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt={`${title} project thumbnail`}
          />
        </CardItem>
        
        <div className="mt-8">
            {/* Project Title */}
            <CardItem
            translateZ="60"
            className="text-2xl font-bold text-neutral-100"
            >
            {title}
            </CardItem>
            
            {/* Project Description */}
            <CardItem
            as="p"
            translateZ="50"
            className="text-neutral-400 text-sm max-w-sm mt-2"
            >
            {description}
            </CardItem>
        </div>

        {/* Tech Stack and Links */}
        <div className="flex justify-between items-center mt-10">
          {/* Tech Stack Icons */}
          <CardItem translateZ={40} className="flex gap-2 items-center">
            {stack.slice(0, 5).map((tech) => ( // Show first 5 icons
              <div key={tech} className="p-2 bg-black rounded-full border border-zinc-700" title={tech}>
                {techIcons[tech] || <span className="text-xs font-mono">{tech.slice(0,2)}</span>}
              </div>
            ))}
          </CardItem>

          {/* Link to Project */}
          <CardItem
            translateZ={40}
            as="a"
            href={githubUrl}
            target="__blank"
            className="px-4 py-2 rounded-xl text-green-500 text-sm font-bold flex items-center gap-2"
          >
            View on GitHub
            <FaArrowRight />
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}