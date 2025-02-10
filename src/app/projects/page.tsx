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
      title: "coffee landing page",
      description:
        "A coffee landing page is a one-page website designed to showcase a coffee brand, promote a specific product, or capture leads for a coffee-related business. Whether you're building a landing page for a coffee shop, an online store, or a subscription service, the goal is to create an inviting and visually appealing experience for visitors. ",
      tags: ["TypeScript", "TailwindCSS", "React"],
      previewLink: "https://coffe-delta-liart.vercel.app/",
      githubLink: "https://github.com/skido600/landing_2.git",
    },
    {
      title: "Landing page",
      description:
        "This project is a fully responsive landing page built using React, TypeScript, and Tailwind CSS. The goal was to take a Figma design and transform it into a pixel-perfect, high-performance web page.",
      tags: ["TypeScript", "TailwindCSS", "React"],
      previewLink: "https://landingpage-umber-one.vercel.app/",
      githubLink: "https://github.com/skido600/landingpage.git",
    },
    {
      title: "Wait List",
      description:
        "A waitlist application built using Next.js, TypeScript, and Tailwind CSS. It integrates Firebase for data management and authentication, while Nodemailer handles email notifications efficiently.",
      tags: ["TypeScript", "TailwindCSS", "Nextjs", "Firebase", "Nodemailer"],
      previewLink: "https://waitlist-lyart-theta.vercel.app/",
    },
    {
      title: "Landing page",
      description:
        "This project is a fully responsive landing page built using React, TypeScript, and Tailwind CSS. The goal was to take a Figma design and transform it into a pixel-perfect, high-performance web page.",
      tags: ["TypeScript", "TailwindCSS", "React"],
      previewLink: "https://landingpage-umber-one.vercel.app/",
      githubLink: "https://github.com/skido600/landingpage.git",
    },
    {
      title: "Wait List",
      description:
        "A waitlist application built using Next.js, TypeScript, and Tailwind CSS. It integrates Firebase for data management and authentication, while Nodemailer handles email notifications efficiently.",
      tags: ["TypeScript", "TailwindCSS", "Nextjs", "Firebase", "Nodemailer"],
      previewLink: "https://waitlist-lyart-theta.vercel.app/",
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
            strings={["some Project i have work on"]}
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
