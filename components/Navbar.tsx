"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { MdOutlineClose } from "react-icons/md";

interface NavbarProps {
  onToggleOverflow: (hide: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onToggleOverflow }) => {
  const [showSideMenu, setShowSideMenu] = useState(false);

  useEffect(() => {
    onToggleOverflow(showSideMenu);
  }, [showSideMenu, onToggleOverflow]);

  return (
    <div className="w-full shadow-navbarShadow h-20 bg-bodyColor sticky top-0 z-50 px-4">
      <div className="max-w-container h-full mx-auto py-1 font-titleFont flex items-center justify-between">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <Image src="icon.ico" width={50} height={50} alt="logo" />
        </motion.div>

        <div className="hidden mdl:inline-flex items-center gap-7">
          <ul className="flex gap-7 text-[16px]">
            <Link
              href="#about"
              className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen duration-300 nav-link"
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                1. About
              </motion.li>
            </Link>

            <Link
              href="#experience"
              className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen duration-300 nav-link"
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                2. Experience
              </motion.li>
            </Link>

            <Link
              href="#projects"
              className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen duration-300 nav-link"
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.4 }}
              >
                3. Projects
              </motion.li>
            </Link>
          </ul>
          <Link href="#contact">
            <motion.button
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.5 }}
              className="px-4 py-2 rounded-md text-textGreen text-[16px] border border-textGreen hover:bg-textGreen hover:text-bodyColor "
            >
              Contact Me
            </motion.button>
          </Link>
        </div>
        {/* Hamburger Icon */}
        <div
          onClick={() => setShowSideMenu(true)}
          className="w-6 h-5 flex flex-col justify-between items-center mdl:hidden text-4xl text-textGreen cursor-pointer overflow-hidden group"
        >
          <span className="w-full h-[2px] bg-textGreen inline-flex transform group-hover:translate-x-2 transition-all ease-in-out duration-300"></span>
          <span className="w-full h-[2px] bg-textGreen inline-flex transform group-hover:translate-x-3 transition-all ease-in-out duration-300"></span>
          <span className="w-full h-[2px] bg-textGreen inline-flex transform group-hover:translate-x-1 transition-all ease-in-out duration-300"></span>
        </div>

        {showSideMenu && (
          <div className="absolute mdl:hidden top-0 right-0 w-full h-screen bg-black bg-opacity-50 flex flex-col items-end">
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.1 }}
              className="w-[80%] h-full overflow-y-scroll scrollbarHide bg-[#112240] flex flex-col justify-center items-center px-4 py-10 relative"
            >
              <MdOutlineClose
                onClick={() => setShowSideMenu(false)}
                className="text-3xl text-textGreen cursor-pointer hover:text-red-500 absolute top-4 right-4"
              />

              <div>
                <ul className="flex flex-col items-center text-base gap-7">
                  <Link
                    href="#about"
                    onClick={() => setShowSideMenu(false)}
                    className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen duration-300 nav-link"
                  >
                    <motion.li
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.1, ease: "easeIn" }}
                    >
                      1. About
                    </motion.li>
                  </Link>

                  <Link
                    href="#experience"
                    onClick={() => setShowSideMenu(false)}
                    className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen duration-300 nav-link"
                  >
                    <motion.li
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.1, ease: "easeIn" }}
                    >
                      2. Experience
                    </motion.li>
                  </Link>

                  <Link
                    href="#projects"
                    onClick={() => setShowSideMenu(false)}
                    className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen duration-300 nav-link"
                  >
                    <motion.li
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.1, ease: "easeIn" }}
                    >
                      3. Projects
                    </motion.li>
                  </Link>
                  <Link href="#contact">
                    <motion.button
                      onClick={() => setShowSideMenu(false)}
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.1, ease: "easeIn" }}
                      className="px-4 py-2 rounded-md text-textGreen text-[16px] border border-textGreen hover:bg-textGreen hover:text-bodyColor "
                    >
                      Contact Me
                    </motion.button>
                  </Link>
                </ul>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar; //
