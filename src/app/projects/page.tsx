"use client";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { AiFillEye } from "react-icons/ai";
import { useState, useEffect } from "react";
import { IoMdArrowDropupCircle } from "react-icons/io";
import { ReactTyped } from "react-typed";

interface Project {
  title: string;
  description: string;
  img: string;
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
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const projects: Project[] = [
    {
      title: "AskAI",
      description:
        "An AI-powered chat application built using JavaScript, Gemini API, and Tailwind CSS, providing intelligent and responsive user interactions.",
      img: "/projects/screencapture-aso-ai-vercel-app-2024-12-09-01_45_54.png",
      tags: ["TailwindCSS", "JavaScript"],
      previewLink: "https://aso-ai.vercel.app/",
    },
    {
      title: "Momentum AI",
      description:
        "An enhanced version of AskAI, reimagined with TypeScript and React, featuring improved functionality and Firebase integration.",
      img: "/projects/screencapture-modify-askmain-3kt4-vercel-app-2024-12-09-01_57_33.png",
      tags: ["TypeScript", "TailwindCSS", "Firebase"],
      previewLink: "https://modify-askmain-3kt4.vercel.app/",
      githubLink: "https://github.com/skido600/modify_ASKMAIN.git",
    },
    {
      title: "Melodia",
      description:
        "A modern music web app designed with React, Firebase, and Tailwind CSS, offering seamless streaming and personalized playlists.",
      img: "/projects/screencapture-melodialeox-vercel-app-homepage-home-2024-12-09-01_57_04.png",
      tags: ["ReactJs", "JavaScript", "TailwindCSS", "Firebase"],
      previewLink: "https://melodialeox.vercel.app/homepage/home",
    },
    {
      title: "Password Generator",
      description:
        "A user-friendly tool built with React and Tailwind CSS for generating secure and customizable passwords on demand.",
      img: "/projects/screencapture-generator-1we10kt5j-leowaves-projects-vercel-app-2024-12-09-01_58_34.png",
      tags: ["ReactJs", "JavaScript", "TailwindCSS"],
      previewLink: "https://generator-xi.vercel.app/",
      githubLink: "https://github.com/skido600/generator.git",
    },
    {
      title: "Weather App",
      description:
        "A sleek weather application using React, Tailwind CSS, and a weather API to deliver real-time forecasts and conditions.",
      img: "/projects/screencapture-waether-with-react-johv-vercel-app-2024-12-09-02_02_33.png",
      tags: ["ReactJs", "JavaScript", "TailwindCSS", "Weather API"],
      previewLink: "https://waether-with-react-johv.vercel.app/",
    },
    {
      title: "Link Shortener",
      description:
        "A simple and efficient React-based tool for shortening URLs, powered by the TinyURL API and styled with Tailwind CSS.",
      img: "/projects/screencapture-link-shortner-teal-omega-vercel-app-2024-12-09-01_58_09.png",
      tags: ["ReactJs", "JavaScript", "TailwindCSS", "TinyURL API"],
      previewLink: "https://link-shortner-teal-omega.vercel.app/",
    },
    {
      title: "Landing page",
      description:
        "A simple and responsive landing page designed with ReactJS and styled using Tailwind CSS. It highlights a sleek UI/UX, optimized for both performance and user experience.",
      img: "/projects/screencapture-steak-eta-vercel-app-2024-12-09-01_59_52.png",
      tags: ["ReactJs", "TailwindCSS"],
      previewLink: "https://steak-eta.vercel.app/",
      githubLink: "https://github.com/skido600/steak.git",
    },
    {
      title: "GPA Calculator",
      description:
        "A user-friendly tool designed to calculate your Grade Point Average (GPA) with ease. Built using HTML, Tailwind CSS, and JavaScript.",
      img: "/projects/screencapture-127-0-0-1-5501-index-html-2024-12-22-23_19_06.png",
      tags: ["HTML", "TailwindCSS", "JavaScript"],
      previewLink: "https://gpacal-team.vercel.app/",
    },
  ];

  return (
    <main>
      <section className="px-6 md:px-[4.2rem]">
        <h1 className="text-[#1E293B] md:text-[50px] font-bold mt-8 text-[30px]">
          Projects
        </h1>
        <div className="text-[#1E293B] mt-5">
          <ReactTyped
            strings={[
              "A glimpse into side projects I’ve had the pleasure of working on.",
            ]}
            typeSpeed={50}
            backSpeed={60}
            backDelay={1000}
            loop={false}
          />
        </div>

        <article className="md:grid grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#d0f5f5] px-3 py-4 mb-8  shadow-sm"
            >
              <h1 className="text-[30px] font-bold mb-2">{project.title}</h1>
              <p className="text-[15px]">{project.description}</p>
              <div className="font-bold mt-4">{project.tags.join(", ")}</div>
              <div className="flex justify-between items-center mt-4">
                <a
                  href={project.previewLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white border-2 hover:bg-[#018134] border-[#018134] py-2 rounded-lg flex justify-center items-center gap-x-2 px-2 group"
                  >
                    <p className="text-[#018134] group-hover:text-white">
                      View project
                    </p>
                    <AiFillEye
                      size={20}
                      className="text-[#018134] group-hover:text-white ml-4"
                    />
                  </motion.button>
                </a>
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-white border-2 hover:bg-[#018134] border-[#018134] py-2 rounded-lg flex justify-center items-center gap-x-2 px-8 group"
                    >
                      <FaGithub
                        size={20}
                        className="text-[#018134] group-hover:text-white"
                      />
                    </motion.button>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </article>
      </section>

      {isVisible && (
        <div
          onClick={scrollToTop}
          style={{
            position: "fixed",
            bottom: "50px",
            right: "30px",
            cursor: "pointer",
          }}
        >
          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="text-green-600"
          >
            <IoMdArrowDropupCircle size={50} />
          </motion.div>
        </div>
      )}
    </main>
  );
};

export default Portfolio;
