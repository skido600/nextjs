import { FiExternalLink } from "react-icons/fi";
import Link from "next/link";
const Ideal: React.FC = () => {
  return (
    <>
      <main className="bg-[#081B29] w-full mt-16">
        <section className="text-white  px-6 py-6 md:py-[6rem] md:px-[4.2rem]">
          <article className="md:grid grid-cols-2">
            <div>
              <h1 className="text-[19px]">I run an agency on the side.</h1>
              <h2 className="text-2xl md:text-3xl font-bold">
                Have an idea in <span className="text-[#289B32]">mind?</span>
              </h2>
              <h2 className="text-[20px]">Let’s build and scale it!</h2>
            </div>
            <div>
              {/* <a href="#contact.me"> */}
              {/* <Link to="/contact"> */}

              <Link href="#cont">
                <button className="bg-[#018134] items-center drop-shadow-lg gap-x-2 flex w-full justify-center px-4 py-4 mt-4 rounded-lg">
                  <p>Get in Touch</p>
                  <FiExternalLink size={20} />
                </button>
              </Link>
              {/* </Link> */}
              {/* </a> */}
            </div>
          </article>
        </section>
      </main>
    </>
  );
};
export default Ideal;
