"use client";
import Head from "next/head";
import Navbar from "@/components/navbar";
import LeftSidebar from "@/components/leftSidebar";
import RightSidebar from "@/components/rightSidebar";
import { motion } from "framer-motion";
import Hero from "@/components/hero";
import About from "@/components/about";
import Experience from "@/components/experience";
import Projects from "@/components/projects";
import Archive from "@/components/Archive";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useState } from "react";

export default function Home() {
  const [isOverflowHidden, setIsOverflowHidden] = useState(false);

  const toggleOverflow = (hide: boolean) => {
    setIsOverflowHidden(hide);
  };

  return (
    <>
      <Head>
        <link rel="icon" href="/images/icon.ico" />
      </Head>
      <main
        className={`w-full min-h-screen font-bodyFont bg-bodyColor text-textLight ${
          isOverflowHidden ? "overflow-hidden" : "overflow-y-scroll"
        } scroll-smooth`}
      >
        <Navbar onToggleOverflow={toggleOverflow} />

        <div className="w-full h-[88vh] xl:flex items-center gap-20 justify-between">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.5 }}
            className="hidden xl:inline-flex w-32 h-full fixed left-0 bottom-0"
          >
            <LeftSidebar />
          </motion.div>
          <div className="h-[88vh] mx-auto p-4 ">
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Archive />
            <Contact />
            <Footer />
          </div>

          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.5 }}
            className="hidden xl:inline-flex  h-[88vh] fixed -right-24 bottom-0"
          >
            <RightSidebar />
          </motion.div>
        </div>
      </main>
    </>
  );
}
