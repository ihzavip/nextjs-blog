import Head from "next/head";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import { getReadingTime } from "../../lib/readingTime";

const body = (
  <>
    <div className="space-y-7 font-lora text-[1.05rem] leading-[1.85] text-parchment/85">
      <p className="drop-cap">
        There is a particular kind of discomfort that comes with not
        knowing where you stand. Not failure — just the suspended feeling
        of being somewhere in the middle with no clear marker. You have
        learned enough to know how much you do not know, and not enough
        to see the edge of it. That is where I have spent most of this
        year.
      </p>
      <p>
        Early on, the boundaries were clearer. I did not know JavaScript,
        then I did. I did not understand functions, then I did. Progress
        was legible. But somewhere after the basics, things became less
        discrete. You are no longer learning specific things — you are
        developing judgment, and judgment does not announce itself when
        it arrives.
      </p>
      <p>
        The hard part is that not knowing and not progressing feel
        identical from the inside. Both look like sitting at a desk,
        confused. Only one of them is actually moving somewhere.
      </p>
    </div>

    <blockquote className="my-14 border-l-2 border-gold/50 pl-8">
      <p className="font-display text-2xl font-normal leading-snug text-parchment italic lg:text-3xl">
        "Not knowing is not the same as not progressing. But it feels
        identical, and that is the problem."
      </p>
    </blockquote>

    <div className="space-y-7 font-lora text-[1.05rem] leading-[1.85] text-parchment/85">
      <p>
        I have started treating confusion as a signal rather than a
        verdict. When something does not make sense, it usually means I
        am at the edge of what I currently understand — which is exactly
        where learning happens. The confusion is not a sign that I should
        stop. It is a sign that I am in the right place.
      </p>
      <p>
        That reframe is easy to write and much harder to hold onto at
        eleven at night when the code is broken and nothing makes sense.
        But it is the thing I keep coming back to.
      </p>
    </div>

    <div className="my-14 flex items-center gap-5">
      <div className="h-px flex-1 bg-divider" />
      <span className="text-gold/60 text-xs">✦</span>
      <div className="h-px flex-1 bg-divider" />
    </div>

    <div className="space-y-7 font-lora text-[1.05rem] leading-[1.85] text-parchment/85">
      <p>
        There is a version of this that becomes comfortable. Not
        complacency — just the ability to keep working through the
        uncertainty without needing it to resolve immediately. To trust
        that the understanding will come, and in the meantime to keep
        building things that do not fully work yet.
      </p>
      <p>
        I am not fully there. But I am closer than I was six months ago,
        and I think that counts.
      </p>
    </div>
  </>
);

export default function SittingWithNotKnowing() {
  return (
    <>
      <Head>
        <title>On Learning to Sit With Not Knowing — Ihza's Journal</title>
        <link rel="icon" href="/images/favicon.ico" />
      </Head>

      <Navbar />

      <header className="bg-ink px-6 pt-32 pb-0 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 flex items-center gap-3">
            <span className="roboto text-[10px] uppercase tracking-[.3em] text-gold">Reflection</span>
            <span className="text-divider">·</span>
            <span className="roboto text-[10px] text-parchment-muted">14 March 2023</span>
          </div>
          <h1
            className="font-display text-parchment font-normal max-w-3xl"
            style={{ fontSize: "clamp(2.4rem, 5.5vw, 5.5rem)", lineHeight: 1.02 }}
          >
            On learning to sit with not knowing.
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
              alt="On learning to sit with not knowing"
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
            <span className="roboto text-[10px] text-parchment-faint">14 Mar 2023</span>
          </div>
        </div>
      </main>
    </>
  );
}
