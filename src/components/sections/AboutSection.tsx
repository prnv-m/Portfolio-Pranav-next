// src/components/sections/AboutSection.tsx
import { motion } from 'framer-motion';
import { PointerHighlight } from "@/components/ui/pointer-highlight";
import Copy from '@/components/Copy';

export default function AboutSection() {
  return (
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
              <PointerHighlight>
                <span>Data Science</span>
              </PointerHighlight>
              {" "}enthusiast and{" "}
              <PointerHighlight>
                <span>full-stack developer</span>
              </PointerHighlight>
              {" "}skilled in building scalable{" "}
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
  );
}