export default function Navbar() {
  return (
    <>
      <nav className="flex fixed z-50 justify-between items-center py-4 px-5 w-full border-b lg:px-16 bg-beige/80 backdrop-blur-sm border-b-charcoal/50">
        <div className="flex items-center w-full logo-mobile">
          <div className="relative w-6 h-12 bg-charcoal">
            <div className="absolute right-1 top-1/2 w-1 h-1 bg-white rounded-full -translate-y-1/2"></div>
          </div>
          <div className="ml-2 text-xl uppercase text-charcoal carlo">
            <p>Ihza's</p>
            <p>Journal</p>
          </div>
        </div>
        <span className="text-black carlo">menu</span>
      </nav>
    </>
  );
}
