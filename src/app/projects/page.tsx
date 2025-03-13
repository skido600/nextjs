"use client";
import { motion } from "framer-motion";
import { IoMdArrowDropupCircle } from "react-icons/io";
import { ReactTyped } from "react-typed";
import { useState, useEffect } from "react";
import ProjectCard from "@/components/ProjectCard";

interface Project {
  title: string;
  description: string;
  tags: string[];
  previewLink: string;
  githubLink?: string;
}

const Portfolio: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const projects: Project[] = [
    {
      title: "Melodia",
      description:
        "A modern music web app designed with React, Firebase, and Tailwind CSS, offering seamless streaming and personalized playlists.",
      tags: ["ReactJs", "JavaScript", "TailwindCSS", "Firebase"],
      previewLink: "https://melodialeox.vercel.app/homepage/home",
    },
    {
      title: "Momentum AI",
      description:
        "An enhanced version of AskAI, reimagined with TypeScript and React, featuring improved functionality and Firebase integration.",
      tags: ["TypeScript", "TailwindCSS", "Gemini"],
      previewLink: "https://modify-askmain-3kt4.vercel.app/",
      githubLink: "https://github.com/skido600/modify_ASKMAIN.git",
    },
    {
      title: "Coffee Landing Page",
      description:
        "A visually appealing coffee landing page showcasing a brand and promoting coffee-related products or services.",
      tags: ["TypeScript", "TailwindCSS", "React"],
      previewLink: "https://coffe-delta-liart.vercel.app/",
      githubLink: "https://github.com/skido600/landing_2.git",
    },
    {
      title: "Landing Page",
      description:
        "A fully responsive landing page built using React, TypeScript, and Tailwind CSS, transformed from a Figma design.",
      tags: ["TypeScript", "TailwindCSS", "React"],
      previewLink: "https://landingpage-umber-one.vercel.app/",
      githubLink: "https://github.com/skido600/landingpage.git",
    },
    {
      title: "Wait List",
      description:
        "A waitlist application built using Next.js, TypeScript, Firebase, and Nodemailer for email notifications.",
      tags: ["TypeScript", "TailwindCSS", "Next.js", "Firebase", "Nodemailer"],
      previewLink: "https://waitlist-lyart-theta.vercel.app/",
    },
  ];

  return (
    <main className="min-h-screen">
      <section className="px-6 md:px-12 lg:px-24 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold text-[#1E293B] mb-4"
            >
              My Projects
            </motion.h1>
            <div className="text-lg md:text-xl text-gray-600">
              <ReactTyped
                strings={[
                  "Here are some of the fun and recent projects I’ve worked on",
                ]}
                typeSpeed={50}
                backSpeed={40}
                loop
              />
            </div>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.2 } },
            }}
          >
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </motion.div>
        </div>
      </section>

      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 bg-[#1E293B] text-white p-3 rounded-full shadow-lg hover:bg-indigo-800 transition"
        >
          <IoMdArrowDropupCircle size={30} />
        </button>
      )}
    </main>
  );
};

export default Portfolio;
