export default function Footer() {
  return (
    <footer className="bg-ink px-6 py-12 lg:px-12">
      <div className="mx-auto max-w-4xl border-t border-divider pt-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="roboto text-[10px] uppercase tracking-[.2em] text-parchment-faint">
          © 2023 Ihza Hasibuan
        </p>
        <div className="flex items-center gap-6">
          <a
            href="mailto:hasibuanihza@gmail.com"
            className="roboto text-[10px] uppercase tracking-[.2em] text-parchment-muted hover:text-parchment transition-colors duration-200"
          >
            Email
          </a>
          <a
            href="https://github.com/ihzavip"
            target="_blank"
            rel="noopener noreferrer"
            className="roboto text-[10px] uppercase tracking-[.2em] text-parchment-muted hover:text-parchment transition-colors duration-200"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
