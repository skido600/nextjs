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

  interface menudata {
    menu: string;
    Link: string;
  }

  const menu: menudata[] = [
    { menu: "HOME", Link: "/" },
    // { menu: "PROJECTS", Link: "/projects" },
    { menu: "  CONTACT", Link: "/contact" },
  ];

  const handleClick = (index: number) => {
    setActiveIndex(Number(index));
  };

  return (
    <>
      <main>
        <nav className="flex gap-x-4  mb-8 right-0 left-0 top-0 fixed z-[10] bg-white/50 backdrop-blur-sm px-4 md:px-[4.2rem] justify-between py-3 ">
          <div className="">
            <h1 className=" jost">
              Leo <span className="text-[#008134]">Wave</span>
            </h1>
          </div>
          <div className="list text-[#7B4155]">
            <ul className="md:flex space-x-8 text-[12px] hidden">
              {menu.map((items, index) => (
                <Link key={index} href={items.Link} onClick={handle}>
                  <li
                    onClick={() => handleClick(index)}
                    className={`cursor-pointer ${
                      activeIndex === index
                        ? "  px-4 py-1  bg-[#1e293b] rounded-[5px] text-white"
                        : ""
                    }`}
                  >
                    {items.menu}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
          {/* mobile */}

          <div onClick={handle} className="md:hidden">
            {toggle ? (
              <IoClose
                onClick={() => setToggle(!toggle)}
                size={30}
                className="hover:border border-gray-600"
              />
            ) : (
              <IoMdMenu size={25} className="text-[#008134]" />
            )}
          </div>
        </nav>
        {toggle && (
          <div
            className={`fixed top-0 bottom-0 right-0 left-0 z-0  border border-red-600 text-[17px] md:hidden 
              
              `}
          >
            <div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setToggle(!toggle)}
            />
            <div className="relative bg-white z-30 min-h-screen w-[75%] ml-auto pt-8 px-4 shadow-xl">
              <ul className="py-14 space-y-8 mt-12 px-6 text-[30px]">
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
        )}

        {/* <div onClick={handle} className="md:hidden">
            {toggle ? (
              <IoClose
                onClick={() => setToggle(!toggle)}
                size={30}
                className="hover:border border-gray-600"
              />
            ) : (
              <IoMdMenu size={25} className="text-[#008134]" />
            )}
          </div> */}
      </main>
    </>
  );
};

export default Nav;
