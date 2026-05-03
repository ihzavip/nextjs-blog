import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-divider bg-ink/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 lg:px-12">
        <Link href="/" className="carlo text-xl text-parchment">
          Ihza's Journal
        </Link>
        <div className="flex items-center gap-8">
          <Link
            href="/#posts"
            className="roboto text-[10px] uppercase tracking-[.2em] text-parchment-muted transition-colors duration-200 hover:text-parchment"
          >
            Writing
          </Link>
          <Link
            href="/about"
            className="roboto text-[10px] uppercase tracking-[.2em] text-parchment-muted transition-colors duration-200 hover:text-parchment"
          >
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}
