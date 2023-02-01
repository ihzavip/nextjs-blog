import Head from "next/head";
import Link from "next/link";
import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import WebAbout from "../components/WebAbout.jsx";
import Posts from "../components/Posts.jsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ihza's Journal</title>
        <link rel="icon" href="/images/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
      <WebAbout />
      <Posts />
    </>
  );
}
