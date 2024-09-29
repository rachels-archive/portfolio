import Head from "next/head";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" href="/images/icon.ico" />
      </Head>
      <main>
        <Navbar />
      </main>
    </>
  );
}
