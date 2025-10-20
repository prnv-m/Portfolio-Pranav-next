"use client";

import React from "react";
import { Timeline } from "@/components/ui/timeline";
import Link from "next/link";

const timelineData = [
  {
    title: "Aug. 2025 – Present",
    content: (
      <div className="text-left">
        <h3 className="text-xl font-bold text-white mb-1">SecureBank</h3>
        <h4 className="text-sm font-mono text-zinc-400 mb-4">
          Typescript, React, WebSockets, Docker, Redis, MongoDB
        </h4>
        <ul className="list-disc pl-5 space-y-2 text-zinc-300">
          <li>
            Engineered a high-security, lightweight banking platform utilizing Zero Trust principles and a custom model to detect anomalous activities.
          </li>
          <li>
            Designed and implemented a real-time Behavioral Biometrics Authentication module that analyzes keystroke dynamics, achieving 98.5% accuracy.
          </li>
          <li>
            Owned development of an Anomaly Detection pipeline processing 1,000+ transactions/sec to identify 95% of fraudulent patterns.
          </li>
        </ul>
        <Link href="https://github.com/prnv-m/SecureBank" target="_blank" className="text-green-500 mt-4 inline-block hover:underline">
          View on GitHub →
        </Link>
      </div>
    ),
  },
  {
    title: "May 2025 – Aug 2025",
    content: (
      <div className="text-left">
        <h3 className="text-xl font-bold text-white mb-1">Data Analyst Intern</h3>
        <h4 className="text-md font-medium text-zinc-400 mb-4">
          Ozibook | Bengaluru, India
        </h4>
        <ul className="list-disc pl-5 space-y-2 text-zinc-300">
          <li>
            Deployed Python and SQL scripts to automate data workflows, improving decision-making accuracy by 25%.
          </li>
          <li>
            Created multiple workflow automations using n8n, increasing the on-time project delivery rate by 30%.
          </li>
          <li>
            Developed a data pipeline for real-time reporting that helped increase user engagement on client content by 15%.
          </li>
        </ul>
      </div>
    ),
  },
  {
    title: "May 2025 – Jul 2025",
    content: (
      <div className="text-left">
        <h3 className="text-xl font-bold text-white mb-1">ConvoStack</h3>
        <h4 className="text-sm font-mono text-zinc-400 mb-4">
          C++, WebRTC, Vosk, React, Amazon S3, Gemini LLM, Nginx
        </h4>
        <ul className="list-disc pl-5 space-y-2 text-zinc-300">
          <li>
            Developed a full-stack video conferencing platform with features boosting post-call review efficiency by 40%.
          </li>
          <li>
            Architected a native C++ (Vosk) transcription engine for local Speech-to-Text, achieving 100% cost reduction on core APIs.
          </li>
          <li>
            Integrated an LLM for Q&A on transcripts, cutting manual review time by 60%.
          </li>
        </ul>
        <Link href="https://github.com/prnv-m/Transcent" target="_blank" className="text-green-500 mt-4 inline-block hover:underline">
          View on GitHub →
        </Link>
      </div>
    ),
  },
  {
    title: "Nov 2024 – Jan 2025",
    content: (
      <div className="text-left">
        <h3 className="text-xl font-bold text-white mb-1">PriceInsights</h3>
        <h4 className="text-sm font-mono text-zinc-400 mb-4">
          React, Tailwind CSS, FastAPI, PostgreSQL, Docker, ML
        </h4>
        <ul className="list-disc pl-5 space-y-2 text-zinc-300">
          <li>
            Architected a price tracking solution across 5+ e-commerce platforms, reducing user spending by up to 15%.
          </li>
          <li>
            Engineered a scalable web scraping infrastructure processing 10,000+ products daily with a 99.2% success rate.
          </li>
          <li>
            Utilized a time-series forecasting model (Prophet) to predict price fluctuations with 87% accuracy.
          </li>
        </ul>
         <Link href="https://github.com/prnv-m/PriceInsights" target="_blank" className="text-green-500 mt-4 inline-block hover:underline">
          View on GitHub →
        </Link>
      </div>
    ),
  },
];

export function ExperienceTimeline() {
  return (
    <div className="relative w-full max-w-4xl mx-auto bg-transparent">
      <Timeline data={timelineData} />
    </div>
  );
}