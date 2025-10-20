import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pranav Madhu | Software Engineer & Data Analyst",
  description: "Portfolio of Pranav Madhu, a data science enthusiast and full-stack developer skilled in building scalable AI solutions and real-time web applications.", 
  keywords: "Pranav Madhu, Portfolio, Software Engineer, Data Analyst, Full Stack Developer, React, AI, Machine Learning",
  authors: [{ name: "Pranav Madhu" }],
  
  // 1. ADD THIS: The Open Graph metadata object
  openGraph: {
    title: "Pranav Madhu | Software Engineer & Data Analyst",
    description: "Welcome to my portfolio. Explore my projects, experience, and journey in software engineering and data science.",
    url: "https://your-domain.com", // IMPORTANT: Replace with your actual domain name
    siteName: "Pranav Madhu's Portfolio",
    images: [
      {
        url: "/og-image.jpg", // The path to your image in the /public folder
        width: 1200,
        height: 630,
        alt: "Pranav Madhu - Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // 2. IMPORTANT: Add the "dark" class for sitewide dark mode, alongside "scroll-smooth"
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}