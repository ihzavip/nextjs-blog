import Head from "next/head";
import Link from "next/link";
import Navbar from "../components/Navbar";

export default function About() {
  return (
    <>
      <Head>
        <title>About — Ihza's Journal</title>
        <link rel="icon" href="/images/favicon.ico" />
      </Head>

      <Navbar />

      {/* Header */}
      <header className="bg-ink px-6 pt-32 pb-0 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <p className="roboto text-[10px] uppercase tracking-[.35em] text-gold mb-8">
            About
          </p>
          <h1
            className="font-display text-parchment font-normal"
            style={{ fontSize: "clamp(3rem, 7vw, 7rem)", lineHeight: 0.97 }}
          >
            Ihza<br />Hasibuan.
          </h1>
        </div>
      </header>

      {/* Intro — image + text */}
      <section className="bg-ink px-6 py-20 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <div className="flex flex-col gap-12 lg:flex-row lg:gap-20 lg:items-start">

            <div className="h-72 w-full overflow-hidden flex-shrink-0 lg:h-96 lg:w-72">
              <img
                src="/images/hero-image.jpg"
                className="h-full w-full object-cover brightness-75"
                alt="Ihza Hasibuaan"
              />
            </div>

            <div className="flex flex-col gap-6 font-lora text-[1.05rem] leading-[1.85] text-parchment/85">
              <p>
                I am a self-taught programmer from Indonesia, working toward a
                career in the tech industry. My main interests are frontend
                development and building things that feel considered — software
                that works well and looks like someone cared about it.
              </p>
              <p>
                I started coding without a degree, without a bootcamp, and
                without a clear roadmap. Just a laptop, an internet connection,
                and a stubborn conviction that I could figure it out. Two years
                in, I am still figuring it out — but I know a lot more about
                what I do not know than I did when I started, which feels like
                progress.
              </p>
              <p>
                Right now I work mostly in React and Angular on the frontend.
                On the side I am learning C, slowly building a small game as a
                portfolio project — partly because game development is genuinely
                interesting to me, and partly because writing C forces you to
                understand what is actually happening under everything else.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="bg-ink px-6 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <div className="flex items-center gap-5">
            <div className="h-px flex-1 bg-divider" />
            <span className="text-gold/50 text-xs">✦</span>
            <div className="h-px flex-1 bg-divider" />
          </div>
        </div>
      </div>

      {/* Interests grid */}
      <section className="bg-ink-light px-6 py-20 lg:px-12">
        <div className="mx-auto max-w-4xl">

          <div className="mb-12 flex items-center gap-6">
            <span className="roboto text-[10px] uppercase tracking-[.25em] text-parchment-muted">
              Outside of Code
            </span>
            <div className="flex-1 h-px bg-divider" />
          </div>

          <div className="grid grid-cols-2 gap-px bg-divider border border-divider lg:grid-cols-4">
            {[
              { label: "Reading", detail: "Philosophy, history" },
              { label: "Music", detail: "Most things" },
              { label: "Games", detail: "Building & playing" },
              { label: "Writing", detail: "This journal" },
            ].map(({ label, detail }) => (
              <div key={label} className="bg-ink p-8">
                <p className="font-display text-xl text-parchment font-normal italic mb-1">
                  {label}
                </p>
                <p className="roboto text-[10px] text-parchment-muted tracking-wide">
                  {detail}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Footer nav */}
      <div className="bg-ink px-6 py-16 lg:px-12">
        <div className="mx-auto max-w-4xl flex items-center justify-between border-t border-divider pt-10">
          <Link
            href="/"
            className="roboto text-[10px] uppercase tracking-[.2em] text-parchment-muted border-b border-divider pb-px hover:text-parchment hover:border-parchment-muted transition-colors duration-200"
          >
            ← Back to Home
          </Link>
          <Link
            href="/#posts"
            className="roboto text-[10px] uppercase tracking-[.2em] text-parchment-muted border-b border-divider pb-px hover:text-parchment hover:border-parchment-muted transition-colors duration-200"
          >
            Read the Journal →
          </Link>
        </div>
      </div>
    </>
  );
}
