import Image from "next/image";
import { motion } from "framer-motion";
interface Skill {
  title: string;
  meaning: string;
  img: string;
}
const Main_skill: React.FC = () => {
  const skills: Skill[] = [
    {
      title: "HTML",
      meaning: "Markup Language",
      img: "/skill/html-5.png",
    },
    {
      title: "CSS",
      meaning: "Styling",
      img: "/skill/css-3.png",
    },
    {
      title: "JavaScript",
      meaning: "Programming Language",
      img: "/skill/js.png",
    },
    {
      title: "Typescript",
      meaning: "Programming Language",
      img: "/skill/typescript.png",
    },
    {
      title: "ReactJs",
      meaning: "Frontend Framework",
      img: "/skill/atom.png",
    },
    {
      title: "Firebase",
      meaning: "Database/Auth",
      img: "/skill/1175544_firebase_google_icon.png",
    },
    {
      title: "TailwindCSS",
      meaning: "Utility-First Styling",
      img: "/skill/wind_2.png",
    },
    {
      title: "Search Engine Optimization",
      meaning: "",
      img: "/skill/seo.png",
    },
    {
      title: "Next js",
      meaning: "Fullstack Framework",
      img: "/skill/next.webp",
    },
    {
      title: "Git/Github",
      meaning: "Version Control",
      img: "/skill/github.png",
    },
    {
      title: ". . .",
      meaning: "",
      img: "/skill/8665223_circle_plus_icon.png",
    },
  ];
  return (
    <>
      <main>
        <section className="px-6 md:px-[4.2rem] mt-16">
          <div className="text-[#1E293B]">
            <h1 className="text-[#1E293B] text-[30px] font-bold">Skills</h1>
            <p className="text-[15px]">
              These are some of the skills I&aposve learnt over the past years.
            </p>
          </div>
          <article className="md:grid grid-cols-3 gap-x-4 ">
            {skills.map((skill, index) => (
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                key={index}
                className="flex items-center mt-4 dark:bg-[hsl(222.2, 84%, 1%)] dark:border-none border-[#D1D5DB] border py-2 rounded-[5px] "
              >
                <div className="bg-[#5e7a7a] mx-4 py-2 rounded-[10px]">
                  <figure>
                    <Image
                      src={skill.img}
                      alt={skill.title}
                      width={50}
                      height={50}
                      className="object-contain rounded-lg mx-2"
                    />
                  </figure>
                </div>
                <div>
                  <h1 className="text-[12px] font-bold">{skill.title}</h1>
                  <p className="text-[#1E293B] text-[11px]">{skill.meaning}</p>
                </div>
              </motion.div>
            ))}
          </article>
        </section>
      </main>
    </>
  );
};
export default Main_skill;
