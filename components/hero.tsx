import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="max-w-contentContainer mx-auto py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-98 mdl:px-10 xl:px-4"
    >
      <motion.h3
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-lg font-titleFont text-textGreen"
      >
        Hello, welcome to
      </motion.h3>
      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="text-4xl lgl:text-6xl font-titleFont font-semiBold flex flex-col"
      >
        Rachel Lim&apos;s<span className="text-textDark">portfolio website. </span>
      </motion.h1>
      <motion.p
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        className="text-base md:max-w-[650px] text-textDark font-medium"
      >
        {" "}
        I am a final-year software engineering student with a passion for technology and creating solutions that make a
        difference. My experience encompasses web, mobile, front-end, and back-end development. While I strive to stay
        current with the latest trends and technologies, I believe that strong fundamentals are essential for
        effectively understanding and applying new concepts.{" "}
      </motion.p>

      <Link href="#projects">
        <motion.button
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.0 }}
          className="w-52 h-14 px-4 py-2 rounded-md text-textGreen text-[16px] border border-textGreen hover:bg-hoverColor"
        >
          View My Projects!
        </motion.button>
      </Link>
    </section>
  );
}
