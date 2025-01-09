"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface Skill {
  starCount: number;
  Tittle: string;
  content: string;
}

const Service_list: React.FC<{ skill: Skill }> = ({ skill }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement | null>(null);

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, scale: 1.05 },
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.main
      className="flex justify-center items-center relative z-[-1]"
      ref={ref}
      variants={itemVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      transition={{ duration: 0.5, type: "spring", stiffness: 300 }}
    >
      <motion.section
        whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
        whileTap={{ scale: 1.05, transition: { duration: 0.3 } }}
        className="mt-8 border-[#D1D5DB] border  md:h-[240px] lg:h-[200px] h-[240px] md:px-4 px-3 py-4 rounded-[6px]"
      >
        <h1 className="mb-4">0{skill.starCount}</h1>
        <h1 className="text-[#1E293B] text-[20px] md:text-[20px] font-bold">
          {skill.Tittle}
        </h1>
        <p className="text-[#1E293B] mt-4 text-[15px] md:text-[14px]">
          {skill.content}
        </p>
      </motion.section>
    </motion.main>
  );
};

export default Service_list;
