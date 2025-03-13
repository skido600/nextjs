/* eslint-disable */
import React from "react";
import Image from "next/image";
import { FaRegEye } from "react-icons/fa";
import { motion } from "framer-motion";
// import Marquee from "react-fast-marquee";

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
      img: "/melodia.png",
      title: "Melodia",
      description:
        "A modern music web app designed with React, Firebase, and Tailwind CSS, offering seamless streaming and personalized playlists.",
      previewLink: "https://melodialeox.vercel.app/",
      languages: ["React", "Node.js", "MongoDB"],
    },
  ];
  return (
    <>
      <main className="px-6 md:px-[4.2rem] mt-16">
        <h1 className="text-[#1E293B] text-[20px] px-6 mb-4 font-bold">
          Featured Projects
        </h1>

        <article className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              key={index}
              className="relative border border-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <Image
                src={project.img}
                alt={project.title}
                width={400}
                height={300}
                className="object-cover w-full h-48 p-3 rounded-[20px]"
              />

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
