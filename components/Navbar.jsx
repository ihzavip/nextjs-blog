export default function Navbar() {
  return (
    <>
      <nav className="fixed w-full px-5 h-16 bg-beige/10 backdrop-blur-3xl border-b border-b-charcoal/40 flex items-center justify-between">
        <div className="logo-mobile flex items-center">
          <div className="h-12 w-6 bg-charcoal relative">
            <div className="h-1 w-1 rounded-full bg-white absolute top-1/2 right-1 -translate-y-1/2"></div>
          </div>
          <div className="text-charcoal uppercase ml-2 carlo text-xl">
            <p>Ihza's</p>
            <p>Journal</p>
          </div>
        </div>
        <span className="carlo">menu</span>
      </nav>
    </>
  );
}
