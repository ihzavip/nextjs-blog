export default function DesignSystem() {
  return (
    <>
      <div className="bg-neutral-200 text-charcoal w-screen h-screen pt-12 ">
        <h2 className="text-2xl text-center">Design System</h2>

        <div className="mt-12 mx-24 grid grid-cols-2 ">
          <div className="max-w-xs">
            <h2 className="text-xl">colors</h2>

            <div className="mt-6 ">
              <div className="h-10 w-44 bg-sand border-2 border-b-0 border-black">
                sand
              </div>
              <div className="h-10 w-44 bg-creamy border-2 border-b-0 border-black">
                creamy
              </div>
              <div className="h-10 w-44 bg-beige border-2 border-b-0 border-black">
                beige
              </div>
              <div className="h-10 w-44 bg-charcoal border-2 border-black">
                <p className="text-white">charcoal</p>
              </div>
            </div>
          </div>

          <div className="">
            <div>
              <h2>fonts</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
