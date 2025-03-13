"use client";
import React, { useEffect, useState } from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Service from "@/components/Service";
import { IoMdArrowDropupCircle } from "react-icons/io";
import Main_skill from "@/components/Main_skill";
import Ideal from "@/components/Ideal";
import Slider from "@/components/Slider";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }; // Closing the scrollToTop function here

  return (
    <>
      <Hero />
      <About />
      <Service />
      <Ideal />
      <Slider />
      <Main_skill />
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
          <button
            onClick={scrollToTop}
            className="fixed bottom-5 right-5 bg-indigo-600 text-white p-3 rounded-full shadow-lg hover:bg-indigo-800 transition"
          >
            <IoMdArrowDropupCircle size={30} />
          </button>
        </div>
      )}
    </>
  );
};

export default Home;
