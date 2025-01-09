"use client";
import { FiExternalLink } from "react-icons/fi";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import Link from "next/link";
const About = () => {
  // Define type-safe refs
  const imgRef = useRef<HTMLImageElement>(null);
  const pRef = useRef<HTMLParagraphElement>(null);
  const pRefOne = useRef<HTMLParagraphElement>(null);
  const pRefTwo = useRef<HTMLParagraphElement>(null);
  const pRefThree = useRef<HTMLParagraphElement>(null);
  const pRefFour = useRef<HTMLButtonElement>(null);

  // Check if elements are in view
  const isInViewImg = useInView(imgRef);
  const isInViewPara = useInView(pRef);
  const isInViewParaOne = useInView(pRefOne);
  const isInViewParaTwo = useInView(pRefTwo);
  const isInViewParaThree = useInView(pRefThree);
  const isInViewParaFour = useInView(pRefFour);

  useEffect(() => {
    console.log("Image in view:", isInViewImg);
    console.log("Paragraph in view:", isInViewPara);
    document.title = "About";
  }, [isInViewImg, isInViewPara]);

  return (
    <main className="bg-[#081B29] mt-8 py-4">
      <motion.section className="px-6 md:px-[4.2rem]">
        <motion.div>
          <h1 className="text-[#1E293B]">ABOUT ME</h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: isInViewPara ? 1 : 0,
              y: isInViewPara ? 0 : 20,
            }}
            transition={{ duration: 0.5, delay: 0.3 }}
            ref={pRef}
            className="text-white md:text-[25px] text-[18px] font-[700] font-poppins"
          >
            I am a Software Developer based in Nigeria, with a rich experience
            of over 3 years in website & product development.
          </motion.p>
        </motion.div>

        <div className="items-center gap-x-4 mt-6">
          <div className="text-center mb-3">
            <p className="text-white text-[15px]">
              &quot;born to conquer&quot;
            </p>
          </div>

          <div className="text-white text-sm">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: isInViewParaOne ? 1 : 0,
                y: isInViewParaOne ? 0 : 20,
              }}
              transition={{ duration: 0.5, delay: 0.7 }}
              ref={pRefOne}
              className="mb-4"
            >
              I love to work on solutions that drive progress and make a
              tangible impact. Having a track record of initiating and leading
              successful projects & teams; I thrive in challenging, fast-paced
              environments.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: isInViewParaTwo ? 1 : 0,
                y: isInViewParaTwo ? 0 : 20,
              }}
              transition={{ duration: 0.5, delay: 0.9 }}
              ref={pRefTwo}
              className="mb-4"
            >
              In my free time, I’m an autodidact and love to read engineering
              blogs + watch YouTube videos to see what’s new in the Javascript
              ecosystem.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: isInViewParaThree ? 1 : 0,
                y: isInViewParaThree ? 0 : 20,
              }}
              transition={{ duration: 0.5, delay: 1.5 }}
              ref={pRefThree}
            >
              Always excited to bring my skills and experience to new projects
              and teams!
            </motion.p>
            <Link href="/contact">
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: isInViewParaFour ? 1 : 0,
                  y: isInViewParaFour ? 0 : 20,
                }}
                transition={{ duration: 0.5, delay: 1.8 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#018134] p-2 my-4 mt-8 rounded-lg flex justify-center items-center gap-x-2 lg:w-[40%] w-[100%]"
                ref={pRefFour}
              >
                <p className="text-[13px]">
                  Hire me for a project? let&apos;s talk
                </p>
                <FiExternalLink size={20} />
              </motion.button>
            </Link>
          </div>
        </div>
      </motion.section>
    </main>
  );
};

export default About;
