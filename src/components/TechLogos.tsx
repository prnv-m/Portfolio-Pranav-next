import LogoLoop from "@/components/LogoLoop";
import Image from "next/image";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiPython,
  SiC,
  SiCplusplus,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiFlask,
  SiFastapi,
  SiNodedotjs,
  SiDocker,
  SiGit,
  SiGithub,
  SiPostman,
  SiPostgresql,
  SiSqlite,
  SiOracle,
  SiPytest,
} from "react-icons/si";

import { FaDatabase, FaCode, FaJava } from "react-icons/fa";
import { IoGitBranchOutline } from "react-icons/io5";

// Wrapper component to style icons
const StyledIcon = ({ children, title }: { children: React.ReactNode; title: string }) => (
  <div className="group relative">
    <span className="inline-flex items-center justify-center w-12 h-12 bg-zinc-800 text-white/90 rounded-lg transition-all hover:bg-zinc-700 hover:scale-110">
      {children}
    </span>
    <div className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-2 bg-zinc-800 text-white text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap shadow-lg z-50">
      {title}
      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-zinc-800 rotate-45"></div>
    </div>
  </div>
);

export const techLogos = [
  // 🧠 Programming Languages
  { node: <StyledIcon title="Python"><SiPython className="w-8 h-8" /></StyledIcon>, title: "Python", href: "https://www.python.org" },
  { node: <StyledIcon title="Java"><FaJava className="w-8 h-8" /></StyledIcon>, title: "Java", href: "https://www.java.com" },
  { node: <StyledIcon title="C"><SiC className="w-8 h-8" /></StyledIcon>, title: "C", href: "https://en.wikipedia.org/wiki/C_(programming_language)" },
  { node: <StyledIcon title="C++"><SiCplusplus className="w-8 h-8" /></StyledIcon>, title: "C++", href: "https://isocpp.org" },
  { node: <StyledIcon title="JavaScript"><SiJavascript className="w-8 h-8" /></StyledIcon>, title: "JavaScript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { node: <StyledIcon title="TypeScript"><SiTypescript className="w-8 h-8" /></StyledIcon>, title: "TypeScript", href: "https://www.typescriptlang.org" },

  // ⚙️ DevOps, Version Control & Testing
  { node: <StyledIcon title="Docker"><SiDocker className="w-8 h-8" /></StyledIcon>, title: "Docker", href: "https://www.docker.com" },
  { node: <StyledIcon title="Git"><SiGit className="w-8 h-8" /></StyledIcon>, title: "Git", href: "https://git-scm.com" },
  { node: <StyledIcon title="GitHub"><SiGithub className="w-8 h-8" /></StyledIcon>, title: "GitHub", href: "https://github.com" },
  { node: <StyledIcon title="Postman"><SiPostman className="w-8 h-8" /></StyledIcon>, title: "Postman", href: "https://www.postman.com" },
  { node: <StyledIcon title="Pytest"><SiPytest className="w-8 h-8" /></StyledIcon>, title: "Pytest", href: "https://pytest.org" },

  // 🎨 Frontend Web Technologies
  { node: <StyledIcon title="HTML"><SiHtml5 className="w-8 h-8" /></StyledIcon>, title: "HTML", href: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  { node: <StyledIcon title="CSS"><SiCss3 className="w-8 h-8" /></StyledIcon>, title: "CSS", href: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  { node: <StyledIcon title="React"><SiReact className="w-8 h-8" /></StyledIcon>, title: "React", href: "https://react.dev" },
  { node: <StyledIcon title="Next.js"><SiNextdotjs className="w-8 h-8" /></StyledIcon>, title: "Next.js", href: "https://nextjs.org" },
  { node: <StyledIcon title="Tailwind CSS"><SiTailwindcss className="w-8 h-8" /></StyledIcon>, title: "Tailwind CSS", href: "https://tailwindcss.com" },

  // 🧩 Backend Technologies & Databases
  { node: <StyledIcon title="Flask"><SiFlask className="w-8 h-8" /></StyledIcon>, title: "Flask", href: "https://flask.palletsprojects.com" },
  { node: <StyledIcon title="FastAPI"><SiFastapi className="w-8 h-8" /></StyledIcon>, title: "FastAPI", href: "https://fastapi.tiangolo.com" },
  { node: <StyledIcon title="Node.js"><SiNodedotjs className="w-8 h-8" /></StyledIcon>, title: "Node.js", href: "https://nodejs.org" },
  { node: <StyledIcon title="REST APIs"><FaDatabase className="w-8 h-8" /></StyledIcon>, title: "REST APIs", href: "https://restfulapi.net" },
  { node: <StyledIcon title="PostgreSQL"><SiPostgresql className="w-8 h-8" /></StyledIcon>, title: "PostgreSQL", href: "https://www.postgresql.org" },
  { node: <StyledIcon title="SQLite"><SiSqlite className="w-8 h-8" /></StyledIcon>, title: "SQLite", href: "https://www.sqlite.org" },
  { node: <StyledIcon title="Oracle SQL"><SiOracle className="w-8 h-8" /></StyledIcon>, title: "Oracle SQL", href: "https://www.oracle.com/database" },

  // 🧭 Development Practices
 
];

export default function Home() {
  return (
    <div className="w-full relative">
      <LogoLoop 
        logos={techLogos}
        speed={80}
        direction="left"
        logoHeight={48}
        gap={48}
        pauseOnHover
        scaleOnHover
        style={{
          padding: '2rem 0',
          background: 'transparent',
          position: 'relative',
          zIndex: 10,
        }}
        ariaLabel="Technology partners"/>
    </div>
  );
}