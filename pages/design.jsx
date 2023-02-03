export default function DesignSystem() {
  return (
    <>
      <div className="pt-12 w-screen h-screen bg-neutral-200 text-charcoal">
        <h2 className="text-2xl text-center">Design System</h2>

        <div className="grid grid-cols-2 mx-24 mt-12">
          <div className="max-w-xs">
            <h2 className="text-xl">colors</h2>

            <div className="mt-6">
              <div className="w-44 h-10 border-2 border-b-0 border-black bg-sand">
                sand
              </div>
              <div className="w-44 h-10 border-2 border-b-0 border-black bg-creamy">
                creamy
              </div>
              <div className="w-44 h-10 border-2 border-b-0 border-black bg-beige">
                beige
              </div>
              <div className="w-44 h-10 border-2 border-black bg-charcoal">
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
