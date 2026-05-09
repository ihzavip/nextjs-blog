import Head from "next/head";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer.jsx";
import { getReadingTime } from "../../lib/readingTime";

const body = (
  <>
    <div className="space-y-7 font-lora text-[1.05rem] leading-[1.85] text-parchment/85">
      <p className="drop-cap">
        At some point I had fifty browser tabs open and nothing to show
        for it. Courses half-finished. YouTube playlists bookmarked and
        never started. A Notion page of resources I was definitely going
        to get to. I was consuming enormous amounts of content about
        programming without actually programming very much.
      </p>
      <p>
        The tutorial trap is easy to fall into because it feels
        productive. You are learning things. The instructor explains
        something, you follow along, it works, you feel capable. But that
        feeling is borrowed — it belongs to the person who wrote the
        tutorial, not to you. The moment the scaffolding is gone and you
        have to start from a blank file, the competence goes with it.
      </p>
      <p>
        The turning point for me was closing all the tabs and building
        something that did not work yet. Not following a guide. Just
        deciding what I wanted to make and trying to make it — badly, at
        first, with a lot of Googling for specific things rather than
        structured lessons.
      </p>
    </div>

    <blockquote className="my-14 border-l-2 border-gold/50 pl-8">
      <p className="font-display text-2xl font-normal leading-snug text-parchment italic lg:text-3xl">
        "Every tutorial you finish gives you the feeling of progress
        without the friction of actual progress."
      </p>
    </blockquote>

    <div className="space-y-7 font-lora text-[1.05rem] leading-[1.85] text-parchment/85">
      <p>
        The friction is the point. Getting stuck on something for two
        hours and eventually finding the answer means you will remember
        that answer. Following a tutorial to a working result and moving
        on means you will not. The struggle is not a sign that you are
        doing it wrong. It is the mechanism by which the learning
        actually sticks.
      </p>
      <p>
        I still use tutorials. But now I use them the way you use a
        reference — to look up a specific thing I need for something I
        am already building, not as a substitute for building it myself.
      </p>
    </div>

    <div className="my-14 flex items-center gap-5">
      <div className="h-px flex-1 bg-divider" />
      <span className="text-gold/60 text-xs">✦</span>
      <div className="h-px flex-1 bg-divider" />
    </div>

    <div className="space-y-7 font-lora text-[1.05rem] leading-[1.85] text-parchment/85">
      <p>
        The shift is from learning about programming to learning through
        programming. Both involve sitting at a desk. One of them produces
        software.
      </p>
      <p>
        I deleted the Notion resource list. I have not missed it.
      </p>
    </div>
  </>
);

export default function StopCollectingTutorials() {
  return (
    <>
      <Head>
        <title>Why I Stopped Collecting Tutorials — Ihza's Journal</title>
        <link rel="icon" href="/images/favicon.ico" />
      </Head>

      <Navbar />

      <header className="bg-ink px-6 pt-32 pb-0 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 flex items-center gap-3">
            <span className="roboto text-[10px] uppercase tracking-[.3em] text-gold">Programming</span>
            <span className="text-divider">·</span>
            <span className="roboto text-[10px] text-parchment-muted">01 April 2023</span>
          </div>
          <h1
            className="font-display text-parchment font-normal max-w-3xl"
            style={{ fontSize: "clamp(2.4rem, 5.5vw, 5.5rem)", lineHeight: 1.02 }}
          >
            Why I stopped collecting tutorials and started breaking things.
          </h1>
          <div className="mt-8 mb-14 flex items-center gap-4">
            <span className="roboto text-[10px] tracking-wide text-parchment-muted">by Ihza Hasibuaan</span>
            <span className="text-divider">·</span>
            <span className="roboto text-[10px] text-parchment-muted">{getReadingTime(body)}</span>
          </div>
        </div>
      </header>

      <div className="bg-ink">
        <div className="mx-auto max-w-6xl px-6 lg:px-12">
          <div className="h-[45vh] overflow-hidden lg:h-[62vh]">
            <img
              src="/images/first-post-image.jpg"
              className="h-full w-full object-cover brightness-[0.65]"
              alt="Why I stopped collecting tutorials"
            />
          </div>
        </div>
      </div>

      <main className="article-body bg-ink px-6 py-20 lg:px-12">
        <div className="mx-auto max-w-[680px]">
          {body}
          <div className="mt-20 flex items-center justify-between border-t border-divider pt-10">
            <Link
              href="/"
              className="roboto text-[10px] uppercase tracking-[.2em] text-parchment-muted border-b border-divider pb-px transition-colors duration-200 hover:border-parchment-muted hover:text-parchment"
            >
              ← Back to Writing
            </Link>
            <span className="roboto text-[10px] text-parchment-faint">01 Apr 2023</span>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
