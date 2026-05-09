import Head from "next/head";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer.jsx";
import { getReadingTime } from "../../lib/readingTime";

const body = (
  <>
    <div className="space-y-7 font-lora text-[1.05rem] leading-[1.85] text-parchment/85">
      <p className="drop-cap">
        At some point you will encounter someone your age — or younger —
        who has been programming since they were fifteen and can build
        things in a weekend that would take you a month. This will feel
        bad. It will feel like evidence of a gap you cannot close, a
        starting line you missed, a door that is no longer open to you.
        Most of that feeling is wrong.
      </p>
      <p>
        The programmer who started at fifteen did not start with more
        ability. They started with more time. Those are not the same
        thing. You are not behind because you are slower. You are behind
        because you began later. That distinction matters, because one is
        a fixed quality and the other is just arithmetic.
      </p>
      <p>
        The comparison also ignores what you did with the years before
        you started coding. You were not wasting them. You were building
        other things — other ways of thinking, other references, other
        instincts. Those do not vanish when you open a code editor.
        Sometimes they are exactly what makes your solutions interesting.
      </p>
    </div>

    <blockquote className="my-14 border-l-2 border-gold/50 pl-8">
      <p className="font-display text-2xl font-normal leading-snug text-parchment italic lg:text-3xl">
        "The programmer who started at fifteen did not start with more
        ability. They started with more time. That distinction matters."
      </p>
    </blockquote>

    <div className="space-y-7 font-lora text-[1.05rem] leading-[1.85] text-parchment/85">
      <p>
        The more useful comparison is with who you were six months ago.
        That person knew less than you do now. The gap between you and
        them is entirely your own work. No one gave it to you, and no one
        can take it away.
      </p>
      <p>
        The people ahead of you are not your competition. They are your
        evidence that where you want to go is reachable. That is a better
        use of them.
      </p>
    </div>

    <div className="my-14 flex items-center gap-5">
      <div className="h-px flex-1 bg-divider" />
      <span className="text-gold/60 text-xs">✦</span>
      <div className="h-px flex-1 bg-divider" />
    </div>

    <div className="space-y-7 font-lora text-[1.05rem] leading-[1.85] text-parchment/85">
      <p>
        I still catch myself doing it — measuring my progress against
        someone who has had years more of it. The feeling does not fully
        go away. But I am getting faster at recognising it for what it is:
        not useful information, just noise. And noise can be ignored.
      </p>
    </div>
  </>
);

export default function ComparingYourself() {
  return (
    <>
      <Head>
        <title>On Comparing Yourself to People Who Started Earlier — Ihza's Journal</title>
        <link rel="icon" href="/images/favicon.ico" />
      </Head>

      <Navbar />

      <header className="bg-ink px-6 pt-32 pb-0 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 flex items-center gap-3">
            <span className="roboto text-[10px] uppercase tracking-[.3em] text-gold">Life</span>
            <span className="text-divider">·</span>
            <span className="roboto text-[10px] text-parchment-muted">03 May 2023</span>
          </div>
          <h1
            className="font-display text-parchment font-normal max-w-3xl"
            style={{ fontSize: "clamp(2.4rem, 5.5vw, 5.5rem)", lineHeight: 1.02 }}
          >
            On comparing yourself to people who started earlier.
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
              alt="On comparing yourself to people who started earlier"
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
            <span className="roboto text-[10px] text-parchment-faint">03 May 2023</span>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
