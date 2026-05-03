import Link from "next/link";

const WebAbout = () => {
  return (
    <section className="bg-ink-light py-24 px-6 lg:px-12">
      <div className="mx-auto max-w-4xl">

        <div className="mb-12 flex items-center gap-6">
          <span className="roboto text-[10px] uppercase tracking-[.25em] text-parchment-muted">
            About This Journal
          </span>
          <div className="flex-1 h-px bg-divider" />
        </div>

        <div className="flex flex-col gap-6 font-lora text-sm leading-7 text-parchment-muted lg:flex-row lg:gap-14">
          <p className="max-w-xs">
            Lorem ipsum dolor sit amet, officia excepteur ex fugiat
            reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit
            ex esse exercitation amet.
          </p>
          <p className="max-w-xs">
            Lorem ipsum dolor sit amet, officia excepteur ex fugiat
            reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit
            ex esse exercitation amet.
          </p>
        </div>

        <Link
          href="/about"
          className="mt-10 inline-block roboto text-[10px] uppercase tracking-[.25em] text-parchment-muted border-b border-divider pb-px hover:text-gold hover:border-gold/40 transition-colors duration-200"
        >
          Tentang Saya
        </Link>
      </div>
    </section>
  );
};

export default WebAbout;
