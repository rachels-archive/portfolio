"use client";
import Head from "next/head";
import Navbar from "@/components/navbar";
import LeftSidebar from "@/components/leftSidebar";
import RightSidebar from "@/components/rightSidebar";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" href="/images/icon.ico" />
      </Head>
      <main className="w-full h-screen font-bodyFont bg-bodyColor text-textLight overflow-x-hidden overflow-y-scroll">
        <Navbar />

        <div className="w-full h-[88vh] xl:flex items-center gap-20 justify-between">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="hidden xl:inline-flex w-32 h-full fixed left-0 bottom-0"
          >
            <LeftSidebar />
          </motion.div>
          <div></div>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="hidden xl:inline-flex  h-full fixed -right-24 bottom-0"
          >
            <RightSidebar />
          </motion.div>
        </div>
      </main>
    </>
  );
}
