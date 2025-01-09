"use client";
import { IoMdMail } from "react-icons/io";
import { FaMapLocationDot } from "react-icons/fa6";
import { ReactTyped } from "react-typed";
import Image from "next/image";
const Hero: React.FC = () => {
  return (
    <>
      <main>
        <section className="pl-6 md:pl-[4.2rem] mt-8 lg:mt-8 md:mt-[4rem] flex justify-between items-center">
          <article>
            <h1 className="text-[#5A4170] text-[15px] mb-2 tracking-[2px]">
              HELLO, I AM
            </h1>
            <div className="text-[#1E293B] flex gap-6 text-[35px] w-full lg:text-[60px] font-[600]">
              <p>Leonard</p>
              <p>Ebisi</p>
            </div>
            <p className="text-[#1E293B] md:text-[20px] font-[600]">
              <ReactTyped
                strings={[
                  "Creative Frontend Developer",
                  "I create simple, beautiful, and easy-to-use websites.",
                  "Feel free to explore!",
                  "Bringing designs to life with modern technology.",
                  "Focused on delivering exceptional user experiences.",
                  "Transforming ideas into interactive web solutions.",
                  "Passionate about crafting responsive designs.",
                  "Your vision, my code!",
                  "Let’s build something amazing together.",
                ]}
                typeSpeed={50}
                backSpeed={60}
                backDelay={1000}
                loop
              />
            </p>
            <a href="mailto:ebisileonard@gmail.com">
              <div className="flex items-center mt-4 mb-2 gap-4">
                <IoMdMail size={30} className="text-[#008134]" />
                <span className="font-light"> hey@ebisileonard.com</span>
              </div>
            </a>
            <div className="flex items-center gap-4">
              <FaMapLocationDot size={30} className="text-[#008134]" />
              <span className="font-light">Nigeria</span>
            </div>
          </article>
          <div className="hidden md:block">
            <figure>
              <Image
                src="/assets/medium-shot-anime-style-man-portrait.jpg"
                alt="leo wave leo x"
                className="lg:w-[40%] md:w-[50%] h-[90%] relative z-[-1] lg:mt-8 md:ml-[11rem] lg:ml-[25rem] rounded-tl-[20%] rounded-br-[20%]"
                width={600}
                height={800}
              />
            </figure>
          </div>
        </section>
      </main>
    </>
  );
};

export default Hero;
