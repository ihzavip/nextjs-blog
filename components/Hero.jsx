import { UilMusicNote } from "@iconscout/react-unicons";
const Hero = () => {
  return (
    <section className="relative px-4 pt-28 h-screen lg:px-2 bg-sand/80">
      <div className="flex flex-col items-center text-4xl text-black lg:text-9xl carlo">
        <h3 className="uppercase">self taught</h3>
        <h3 className="uppercase">programmer.</h3>
      </div>

      <div className="pt-10 text-xl text-center underline libre underline-offset-8">
        <h2>passionate about</h2>
      </div>

      <div className="flex flex-col gap-10 pt-10 lg:flex-row lg:gap-16 lg:justify-center lg:items-start lg:px-24">
        {/* hero left paragraphs divs */}
        <div className="flex flex-col gap-10 max-w-xs text-xs italic tracking-widest lg:gap-4 lg:text-sm leading-[1.4em]">
          <p className="">
            <span className="font-extrabold">Programming</span> ipsum dolor sit
            amet, qui minim labore adipisicing minim sint cillum sint
            consectetur cupidatat.
          </p>

          <p className="">
            <span className="font-extrabold">Human</span> ipsum dolor sit amet,
            qui minim labore adipisicing minim sint cillum sint consectetur
            cupidatat.
          </p>
        </div>

        {/* hero right paragraphs div */}
        <div className="flex flex-col gap-10 max-w-xs text-xs italic tracking-widest lg:gap-4 lg:text-sm leading-[1.4em]">
          <p className="">
            <span className="font-extrabold">Books</span> ipsum dolor sit amet,
            qui minim labore adipisicing minim sint cillum sint consectetur
            cupidatat. jfdkjfdsfoewiwjf
          </p>

          <p className="">
            <span className="font-extrabold">Philosophy</span> ipsum dolor sit
            amet, qui minim labore adipisicing minim sint cillum sint
            consectetur cupidatat.
          </p>
        </div>
      </div>

      <button
        type="button"
        className="fixed right-4 bottom-4 z-20 w-12 h-12 rounded-full lg:right-8 lg:bottom-8 lg:w-16 lg:h-16 bg-charcoal"
      >
        <UilMusicNote
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          size="30"
          color="#f4efeb"
        />
      </button>
    </section>
  );
};

export default Hero;
