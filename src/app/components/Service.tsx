"use client";
import service from "../components/json/service.json";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import Service_list from "./Service_list";

interface Service {
  starCount: number;
  Tittle: string;
  content: string;
}
const Service: React.FC = () => {
  //   const { scrollYProgress } = useScroll();

  return (
    <>
      <motion.div
      // style={{
      //   scaleX: scrollYProgress,
      //   height: "5px",
      //   backgroundColor: "#008134",
      //   position: "fixed",
      //   top: 0,
      //   left: 0,
      //   right: 0,
      //   transformOrigin: "0%",
      //   zIndex: 10,
      // }}
      />
      <main>
        <section id="skill" className="px-6 md:px-[4.2rem] mt-16">
          <div className="text-[#1E293B]">
            <h1 className="text-[#1E293B] text-[30px] font-bold">Services</h1>
            <p className="text-[15px]"></p>
            <ReactTyped
              strings={[
                "Explore the diverse skills I bring to every project, helping you to transform ideas into impactful results.",
              ]}
              typeSpeed={50}
              backSpeed={60}
              backDelay={1000}
              loop={false}
            />
          </div>
          <div className="md:grid grid-cols-2 gap-x-10 gap-y-8  mb-4">
            {service.map((skill, key) => (
              <Service_list key={key} skill={skill} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default Service;
