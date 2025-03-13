/* eslint-disable */
import React from "react";
import Image from "next/image";
import { FaRegEye } from "react-icons/fa";
import { motion } from "framer-motion";

interface Project {
  title: string;
  img: string;
  description: string;
  previewLink: string;
  languages: string[];
}

function Slider() {
  const projects: Project[] = [
    {
      img: "/assets/melodia.png",
      title: "Melodia",
      description:
        "A modern music web app designed with React, Firebase, and Tailwind CSS, offering seamless streaming and personalized playlists.",
      previewLink: "https://melodialeox.vercel.app/",
      languages: ["ReactJs", "JavaScript", "TailwindCSS", "Firebase"],
    },
    {
      title: "Wait List",
      img: "/assets/waitlist.png",
      description:
        "A waitlist application built using Next.js, TypeScript, Firebase, and Nodemailer for email notifications.",
      languages: [
        "TypeScript",
        "TailwindCSS",
        "Next.js",
        "Firebase",
        "Nodemailer",
      ],
      previewLink: "https://waitlist-lyart-theta.vercel.app/",
    },
  ];
  return (
    <>
      <main className="px-6 md:px-[4.2rem] mt-16 relative z-[-10]">
        <h1 className="text-[#1E293B] text-[20px]  font-bold">
          Featured Projects
        </h1>

        <article className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              key={index}
              className="relative  border-[#D1D5DB] border  overflow-hidden shadow-sm drop-shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <figure>
                <Image
                  src={project.img}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="object-cover w-full h-48 p-3 rounded-[20px]"
                />
              </figure>

              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  {project.title}
                </h3>

                <p className="text-gray-600 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.languages.map((language, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      {language}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center mt-6">
                  <a
                    href={project.previewLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="flex items-center gap-2 px-4 py-2  bg-[#1E293B] text-white rounded-lg hover:opacity-90 transition-opacity">
                      <FaRegEye className="text-lg" />

                      <p>Preview</p>
                    </button>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </article>
        {/* </Marquee> */}
      </main>
    </>
  );
}

export default Slider;
