import Head from "next/head";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import { getReadingTime } from "../../lib/readingTime";

const body = (
  <>
    <div className="space-y-7 font-lora text-[1.05rem] leading-[1.85] text-parchment/85">
      <p className="drop-cap">
        I came to C from JavaScript, which is about as comfortable a
        starting point as you can have in programming. JavaScript handles
        memory for you, types for you, a lot of the tedious machinery for
        you. It is a language designed to let you focus on what you are
        building rather than how the computer is handling it. C removes
        all of that. Every byte you need, you ask for. Every byte you are
        done with, you return. Nothing happens automatically.
      </p>
      <p>
        The first few weeks were humbling. Segmentation faults. Memory
        leaks I could not find. Pointer arithmetic that felt like working
        in a different alphabet. I was suddenly aware of an enormous
        amount of work that JavaScript had been quietly doing on my
        behalf, work I had never thought about because I had never needed to.
      </p>
      <p>
        But something shifted after a while. When you manually manage
        memory, you stop seeing garbage collection as a feature you are
        entitled to and start seeing it as an answer to a specific,
        difficult problem that someone solved for you. The abstraction
        becomes visible. And once you can see it, you understand the
        layer beneath it, which makes the layer above it make more sense.
      </p>
    </div>

    <blockquote className="my-14 border-l-2 border-gold/50 pl-8">
      <p className="font-display text-2xl font-normal leading-snug text-parchment italic lg:text-3xl">
        "When you manage memory by hand, you stop seeing garbage
        collection as a feature and start seeing it as an answer to a
        very specific problem."
      </p>
    </blockquote>

    <div className="space-y-7 font-lora text-[1.05rem] leading-[1.85] text-parchment/85">
      <p>
        Going back to JavaScript after spending time in C is strange. It
        feels different — not easier, exactly, but more legible. I have a
        better sense of what the runtime is doing, why certain patterns
        exist, what cost is being hidden behind a convenient API. The
        language did not change. My understanding of what it is built on
        top of did.
      </p>
      <p>
        I think this is the real argument for learning a lower-level
        language, even if you never intend to use it professionally.
        It is not about the language itself. It is about what understanding
        it does to your reading of everything written above it.
      </p>
    </div>

    <div className="my-14 flex items-center gap-5">
      <div className="h-px flex-1 bg-divider" />
      <span className="text-gold/60 text-xs">✦</span>
      <div className="h-px flex-1 bg-divider" />
    </div>

    <div className="space-y-7 font-lora text-[1.05rem] leading-[1.85] text-parchment/85">
      <p>
        I am still learning C. I am building a small game with it, slowly,
        mostly as a way to have something to show that required me to
        think carefully about memory and structure. It is difficult in
        ways that are different from the difficulties of JavaScript, and
        I think that is exactly why it is worth doing.
      </p>
    </div>
  </>
);

export default function LearningC() {
  return (
    <>
      <Head>
        <title>What Learning C Taught Me About Everything Above It — Ihza's Journal</title>
        <link rel="icon" href="/images/favicon.ico" />
      </Head>

      <Navbar />

      <header className="bg-ink px-6 pt-32 pb-0 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 flex items-center gap-3">
            <span className="roboto text-[10px] uppercase tracking-[.3em] text-gold">Programming</span>
            <span className="text-divider">·</span>
            <span className="roboto text-[10px] text-parchment-muted">22 May 2023</span>
          </div>
          <h1
            className="font-display text-parchment font-normal max-w-3xl"
            style={{ fontSize: "clamp(2.4rem, 5.5vw, 5.5rem)", lineHeight: 1.02 }}
          >
            What learning C taught me about everything above it.
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
              alt="What learning C taught me about everything above it"
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
            <span className="roboto text-[10px] text-parchment-faint">22 May 2023</span>
          </div>
        </div>
      </main>
    </>
  );
}
