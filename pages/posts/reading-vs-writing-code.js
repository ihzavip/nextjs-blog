import Head from "next/head";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import { getReadingTime } from "../../lib/readingTime";

const body = (
  <>
    <div className="space-y-7 font-lora text-[1.05rem] leading-[1.85] text-parchment/85">
      <p className="drop-cap">
        Reading someone else's clean, well-structured code feels like
        understanding it. You follow the logic, you see why each decision
        was made, you nod along. It seems obvious once it is in front of
        you. Then you close the file and try to write something similar
        from scratch, and you discover how thin that understanding
        actually was.
      </p>
      <p>
        This is one of the stranger things about learning to program.
        Reading comprehension and writing ability are related skills, but
        they are not the same skill. A reader needs to follow a path that
        already exists. A writer has to make one. Those require different
        things from your brain.
      </p>
      <p>
        I spent a long time thinking I understood more than I did because
        I could follow code without getting lost. What I could not do was
        produce that code when starting from nothing. The blank file
        revealed the gap.
      </p>
    </div>

    <blockquote className="my-14 border-l-2 border-gold/50 pl-8">
      <p className="font-display text-2xl font-normal leading-snug text-parchment italic lg:text-3xl">
        "You can follow every line of someone else's code and still be
        completely lost the moment you close the file."
      </p>
    </blockquote>

    <div className="space-y-7 font-lora text-[1.05rem] leading-[1.85] text-parchment/85">
      <p>
        The fix, as far as I can tell, is to write more than you read.
        Not to stop reading — reading good code is genuinely useful — but
        to always be in the middle of building something. Reading informs
        the building. The building tests the reading.
      </p>
      <p>
        There is also something to be said for trying to reproduce code
        you have just read, without looking at it. That exercise is
        uncomfortable in a way that is directly proportional to how well
        you actually understood it.
      </p>
    </div>

    <div className="my-14 flex items-center gap-5">
      <div className="h-px flex-1 bg-divider" />
      <span className="text-gold/60 text-xs">✦</span>
      <div className="h-px flex-1 bg-divider" />
    </div>

    <div className="space-y-7 font-lora text-[1.05rem] leading-[1.85] text-parchment/85">
      <p>
        Understanding code when it is shown to you is a low bar. The
        higher bar — the one that actually matters — is being able to
        produce it when it is not. That is what interviews test. That is
        what the job requires. And the only way to get there is to spend
        more time in front of the blank file.
      </p>
    </div>
  </>
);

export default function ReadingVsWritingCode() {
  return (
    <>
      <Head>
        <title>The Gap Between Reading Code and Writing It — Ihza's Journal</title>
        <link rel="icon" href="/images/favicon.ico" />
      </Head>

      <Navbar />

      <header className="bg-ink px-6 pt-32 pb-0 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 flex items-center gap-3">
            <span className="roboto text-[10px] uppercase tracking-[.3em] text-gold">Programming</span>
            <span className="text-divider">·</span>
            <span className="roboto text-[10px] text-parchment-muted">19 April 2023</span>
          </div>
          <h1
            className="font-display text-parchment font-normal max-w-3xl"
            style={{ fontSize: "clamp(2.4rem, 5.5vw, 5.5rem)", lineHeight: 1.02 }}
          >
            The gap between reading code and writing it.
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
              alt="The gap between reading code and writing it"
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
            <span className="roboto text-[10px] text-parchment-faint">19 Apr 2023</span>
          </div>
        </div>
      </main>
    </>
  );
}
