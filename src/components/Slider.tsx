/* eslint-disable */
import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";
// import * as motion from "motion/react-client";
interface Project {
  title: string;
  img: string;
  previewLink: string;
}
function Slider() {
  const projects: Project[] = [
    {
      title: "Melodia",
      img: "/assets/melo.png",
      previewLink: "https://melodialeox.vercel.app/",
    },

    {
      title: "coffee landing page",
      img: "/assets/coffe.png",
      previewLink: "https://coffe-delta-liart.vercel.app/",
    },
    {
      title: "Landing page",
      img: "/assets/landing page.png",
      previewLink: "https://landingpage-umber-one.vercel.app/",
    },
    {
      title: "Wait List",
      img: "/assets/screencapture-waitlist-lyart-theta-vercel-app-2025-02-10-00_50_45 Cropped (1).png",
      previewLink: "https://waitlist-lyart-theta.vercel.app/",
    },
  ];
  return (
    <>
      <section className="px-6 md:px-[4.2rem] mt-16">
        <h1 className="text-[#1E293B] text-[30px] font-bold">
          Some Projects I've Built
        </h1>
      </section>

      <main className="overflow-x-hidden- mt-16  w-full overflow-hidden ">
        <Marquee
          speed={30}
          direction="right"
          pauseOnHover={true}
          gradientWidth={50}
        >
          <article className="flex gap-3 items-center">
            {projects.map((project, index) => (
              <div key={index} className="relative group  duration-300">
                <Image
                  src={project.img}
                  alt={project.title}
                  width={300}
                  height={300}
                  className="object-cover transform group-hover:scale-75 rounded-lg transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-semibold mb-2 jost">
                    {project.title}
                  </h3>
                  <a
                    href={project.previewLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-[#1E293B] rounded-[3px] transition-colors duration-300"
                  >
                    Preview
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </article>
        </Marquee>
      </main>
    </>
  );
}

export default Slider;
