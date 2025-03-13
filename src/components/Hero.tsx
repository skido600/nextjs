"use client";
import { IoMdMail } from "react-icons/io";
import { FaMapLocationDot } from "react-icons/fa6";
import { ReactTyped } from "react-typed";
import Image from "next/image";
import { motion } from "framer-motion";
const Hero: React.FC = () => {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <>
      <main>
        <section className="pl-6 md:pl-[4.2rem] mt-20 lg:mt-8 md:mt-[4rem] flex justify-between items-center">
          <article>
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={variants}
              transition={{ duration: 0.3 }}
              className="text-[#5A4170] text-[15px] mb-2 tracking-[2px]"
            >
              HELLO, I AM
            </motion.h1>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={variants}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-[#1E293B] flex gap-6 text-[35px] w-full lg:text-[60px] font-[600]"
            >
              <p>Leonard</p>
              <p>Ebisi</p>
            </motion.div>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={variants}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="text-[#1E293B] md:text-[20px] font-[600]"
            >
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
            </motion.div>
            <a href="mailto:ebisileonard@gmail.com">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={variants}
                transition={{ duration: 0.5, delay: 1.2 }}
                className="flex items-center mt-4 mb-2 gap-4"
              >
                <IoMdMail size={30} className="text-[#008134]" />
                <span className="font-light"> hey@ebisileonard.com</span>
              </motion.div>
            </a>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={variants}
              transition={{ duration: 0.5, delay: 1.4 }}
              className="flex items-center gap-4"
            >
              <FaMapLocationDot size={30} className="text-[#008134]" />
              <span className="font-light">Nigeria</span>
            </motion.div>
          </article>
          <motion.div className="hidden md:block">
            <motion.figure
              initial="hidden"
              animate="visible"
              variants={variants}
              transition={{ duration: 0.5, delay: 1.6 }}
            >
              <Image
                src="/assets/medium-shot-anime-style-man-portrait.jpg"
                alt="leo wave leo x"
                className="lg:w-[40%] md:w-[50%] h-[90%] relative z-[-1] lg:mt-8 md:ml-[11rem] lg:ml-[25rem]  rounded-md"
                width={600}
                height={800}
              />
            </motion.figure>
          </motion.div>
        </section>
      </main>
    </>
  );
};

export default Hero;
