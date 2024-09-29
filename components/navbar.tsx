"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <div className="w-full shadow-navbarShadow h-20 bg-bodyColor  sticky top-0 z-50 px-4">
      <div className="max-w-container h-full mx-auto py-1 font-titleFont flex items-center justify-between">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <Image src="/assets/icon.ico" width={50} height={50} alt="logo" />
        </motion.div>
        <div className="hidden mdl:inline-flex items-center gap-7">
          <ul className="flex gap-7 text-[16px]">
            <Link
              href="#home"
              className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen duration-300 nav-link"
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                1. Home
              </motion.li>
            </Link>

            <Link
              href="#about"
              className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen duration-300 nav-link"
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                2. About
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
                3. Experience
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
                4. Projects
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
      </div>
    </div>
  );
}
