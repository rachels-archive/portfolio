import Navbar from "@/components/navbar";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Rachel&apos;s Portfolio</title>
        <meta name="description" content="My Portfolio built with NextJS" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="icon.ico" />
      </Head>
      <main>
        <Navbar />
      </main>
    </>
  );
}
