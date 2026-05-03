import Head from "next/head";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import { getReadingTime } from "../../lib/readingTime";

const body = (
  <>
    <div className="space-y-7 font-lora text-[1.05rem] leading-[1.85] text-parchment/85">
      <p className="drop-cap">
        No one tells you about the silence. The long, directionless hours
        you spend staring at a blank editor, cursor blinking, wondering
        whether you are actually learning or just performing the act of
        learning. That is the part the tutorials skip — the part between
        understanding a concept and being able to use it. Self-teaching is
        not a path so much as an open field, and most of the time you have
        no map.
      </p>
      <p>
        I started coding about two years ago with nothing more than a
        laptop and a vague sense that software was where I wanted to be.
        I watched the videos, read the documentation, built the todo apps.
        The process felt good — almost addictive, in fact. Every working
        button, every piece of CSS that finally aligned the way I wanted
        it to, each one gave me a hit of something I can only describe as
        clarity. I thought that feeling meant I was making progress.
      </p>
      <p>
        What I did not understand then is that beginner-level competence
        and job-ready competence are separated by a vast, invisible gap.
        You can spend months getting comfortable with the syntax of a
        language and still have no real idea how software is actually
        built — how teams structure code, how decisions get made, what
        problems actually need solving in the real world.
      </p>
    </div>

    <blockquote className="my-14 border-l-2 border-gold/50 pl-8">
      <p className="font-display text-2xl font-normal leading-snug text-parchment italic lg:text-3xl">
        "The thing nobody tells you about self-teaching is that you spend
        half your time wondering whether you even know the right
        questions to ask."
      </p>
    </blockquote>

    <div className="space-y-7 font-lora text-[1.05rem] leading-[1.85] text-parchment/85">
      <p>
        I have found that the hardest part of learning without a teacher
        is not finding information — information is everywhere — it is
        knowing what is worth your attention. The internet will
        confidently send you in seventeen different directions at once.
        Learn React. No, learn vanilla JavaScript first. No, start with
        Python. Don't bother with frameworks until you understand data
        structures. The noise is relentless.
      </p>
      <p>
        At some point I had to make peace with the fact that there is no
        perfect curriculum. I would always be missing something. I would
        always be a little behind some benchmark I had invented for
        myself. That anxiety either paralyzes you or it stops mattering.
        I chose to let it stop mattering.
      </p>
    </div>

    <div className="my-14 flex items-center gap-5">
      <div className="h-px flex-1 bg-divider" />
      <span className="text-gold/60 text-xs">✦</span>
      <div className="h-px flex-1 bg-divider" />
    </div>

    <div className="space-y-7 font-lora text-[1.05rem] leading-[1.85] text-parchment/85">
      <p>
        What I have found instead is something more useful: I am good at
        learning how to learn. Not in the motivational-poster sense, but
        in the literal, practical sense. I know how to read documentation
        without panicking. I know that confusion is temporary and almost
        always dissolves with enough time. I know that building something
        broken is worth more than reading about building something perfect.
      </p>
      <p>
        The self-taught path is slower than a bootcamp and less structured
        than a degree. But it is yours in a way that nothing else quite is.
        Every concept you understand, you understand because you went and
        found it — not because someone handed it to you on a schedule. That
        ownership is worth something, even when it is hard to see.
      </p>
      <p>
        This journal is partly an attempt to document that process as it
        unfolds — the gaps, the small wins, the frameworks I am just now
        understanding, the things I thought I understood and didn't. If any
        of it is useful to someone at the beginning of a similar road,
        then that is enough.
      </p>
    </div>
  </>
);

export default function FirstPost() {
  return (
    <>
      <Head>
        <title>The Reality of the Self-Taught Programmer — Ihza's Journal</title>
        <link rel="icon" href="/images/favicon.ico" />
      </Head>

      <Navbar />

      <header className="bg-ink px-6 pt-32 pb-0 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 flex items-center gap-3">
            <span className="roboto text-[10px] uppercase tracking-[.3em] text-gold">Life</span>
            <span className="text-divider">·</span>
            <span className="roboto text-[10px] text-parchment-muted">02 February 2023</span>
          </div>
          <h1
            className="font-display text-parchment font-normal max-w-3xl"
            style={{ fontSize: "clamp(2.4rem, 5.5vw, 5.5rem)", lineHeight: 1.02 }}
          >
            The reality of the self-taught programmer.
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
              alt="The reality of the self-taught programmer"
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
            <span className="roboto text-[10px] text-parchment-faint">02 Feb 2023</span>
          </div>
        </div>
      </main>
    </>
  );
}
