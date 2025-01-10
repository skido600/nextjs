"use client";
import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import Link from "next/link";

const Nav: React.FC = () => {
  const [toggle, setToggle] = useState<boolean>(false);

  const handle = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <main>
        <nav className="flex gap-x-4 relative z-[10] px-4 md:px-[4.2rem] justify-between py-8 border-b-[1px] border-[#EAEAEA]">
          <div className="logo">
            <h1>
              Leo<span className="text-[#008134]">Wave</span>
            </h1>
          </div>
          <div className="list text-[#7B4155]">
            <ul className="md:flex space-x-8 text-[17px] hidden">
              <li>
                <Link href="/" onClick={handle}>
                  HOME
                </Link>
              </li>
              <li>
                <Link href="/projects" onClick={handle}>
                  PORTFOLIO
                </Link>
              </li>
              <li>
                <Link href="/contact" onClick={handle}>
                  CONTACT
                </Link>
              </li>
            </ul>
            {/* mobile */}
            <div
              className={`fixed top-0 bottom-0 right-0 left-0 z-0 bg-white text-[17px] md:hidden ${
                toggle ? "block" : "hidden"
              }`}
            >
              <div onClick={handle} className="float-right m-4">
                <IoClose size={30} className="hover:border border-gray-600" />
              </div>
              <ul className="py-14 space-y-8 px-6 text-[15px]">
                <li className="mb-4">
                  <Link href="/" onClick={handle}>
                    Home
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/projects" onClick={handle}>
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link href="/contact" onClick={handle}>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div onClick={handle} className="md:hidden">
            <IoMdMenu size={25} className="text-[#008134]" />
          </div>
        </nav>
      </main>
    </>
  );
};

export default Nav;
