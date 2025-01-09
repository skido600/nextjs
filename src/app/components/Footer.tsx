import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
const Footer: React.FC = () => {
  return (
    <>
      <main className="">
        <footer className="px-6 md:grid grid-cols-1  lg:grid-cols-2 justify-between border-t border-b py-12 border-[#D1D5DB] md:px-[4.2rem] mt-18 text-[#1E293B]">
          <article>
            <h1 className="md:text-[25px] text-[20px] mb-2 md:mb-0  font-bold">
              Based in Nigeria, working worldwide.
            </h1>
            <Link href="/contact" className="cursor-pointer">
              <h1 className="font-bold md:text-[50px] mb-2 md:mb-0 text-[30px] tracking-wide underline">
                Get in touch
              </h1>
            </Link>
          </article>
          <section className="md:flex md:space-x-[8rem] mt-8">
            <div className="space-y-2 mb-8 md:mb-0 ">
              <h1 className="font-bold text-[20px] mb-2 md:mb-0">Social</h1>
              <div className="flex items-center space-x-2">
                <CiLinkedin size={20} />
                <a
                  href="https://www.linkedin.com/in/leo-wave-309637239/"
                  target="_blank"
                >
                  <p className="text-[15px]">Linkedin</p>
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <FaGithub size={20} />
                <a
                  href="https://github.com/skido600"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[15px]"
                >
                  Github
                </a>
              </div>

              <div className="flex items-center space-x-2">
                <FaXTwitter size={20} />
                <a
                  href="https://x.com/Momentum1962"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2"
                >
                  <p className="text-[15px]">X (formerly Twitter)</p>
                </a>
              </div>
            </div>

            <div className="space-y-2">
              <h1 className="font-bold text-[20px] mb-2 md:mb-0">
                Quick Links
              </h1>
              <div className="text-[15px]">
                <p>Portfolio</p>
              </div>
              <div>
                <a href="#skill">
                  <p className="text-[15px]">Skills and Experience</p>
                </a>
              </div>
              <div>
                <a href="/contact">
                  <p className="text-[15px]">Contact</p>{" "}
                </a>
              </div>
            </div>
          </section>
        </footer>

        <div className="text-center text-[12px]">Copyright ©2024 leowave</div>
      </main>
    </>
  );
};
export default Footer;
