"use client";
import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import Link from "next/link";

const Nav: React.FC = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const [activeIndex, setActiveIndex] = useState<null | number>(0);
  const handle = () => {
    setToggle(!toggle);
  };
  // const = menu=["HOME","PORTFOLIO","CONTACT"]
  interface menudata {
    menu: string;
    Link: string;
  }

  const menu: menudata[] = [
    { menu: "HOME", Link: "/" },
    { menu: "PROJECTS", Link: "/projects" },
    { menu: "  CONTACT", Link: "/contact" },
  ];

  const handleClick = (index: number) => {
    setActiveIndex(Number(index));
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
              {menu.map((items, index) => (
                <Link key={index} href={items.Link} onClick={handle}>
                  <li
                    onClick={() => handleClick(index)}
                    className={` cursor-pointer ${
                      activeIndex === index
                        ? " grad px-4 py-1 rounded-[5px] text-white"
                        : ""
                    }`}
                  >
                    {items.menu}
                    {/* {activeIndex === index && (
                      <span className="ml-2  text-[50px]">-</span>
                    )} */}
                  </li>
                </Link>
              ))}
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
              <ul className="py-14 space-y-8 mt-12 px-6 text-[40px]">
                {menu.map((items, index) => (
                  <Link
                    href={items.Link}
                    key={index}
                    onClick={handle}
                    className="flex items-center"
                  >
                    <li className="mb-4" onClick={() => handleClick(index)}>
                      {items.menu}
                    </li>
                    {activeIndex === index && (
                      <span className="ml-2 sm:hidden  text-[40px]">-</span>
                    )}
                  </Link>
                ))}
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
