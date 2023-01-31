import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/Navbar.jsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Blog Ihza</title>
        <link rel="icon" href="/images/favicon.ico" />
      </Head>

      <Navbar />
    </>
  );
}
