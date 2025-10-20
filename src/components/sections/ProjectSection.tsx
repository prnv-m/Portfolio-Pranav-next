// src/components/sections/ProjectsSection.tsx
import Copy from '@/components/Copy';
import { ProjectCard } from '@/components/ProjectCard'; 

interface Project {
  title: string;
  description: string;
  imageUrl: string;
  stack: string[];
  githubUrl: string;
}

const projectsData: Project[] = [
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


export default function ProjectsSection() {
  return (
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
              {...project}
            />
          ))}
        </div>
      </div>
    </section>
  );
}