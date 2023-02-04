const Posts = () => {
  return (
    <>
      {/* <h2 className="mb-10 text-4xl text-center lg:mb-20 carlo">Posts</h2> */}
      <section className="flex flex-col gap-12 py-12 px-4 lg:gap-y-44 lg:px-0">
        <div className="flex flex-col justify-center items-center mx-auto w-full border lg:flex-row lg:items-start lg:border-8 border-charcoal h-[75vh] lg:w-fit">
          <div className="overflow-hidden w-full h-full lg:w-96">
            <img
              src="/images/first-post-image.jpg"
              className="object-cover w-full h-full brightness-75"
              alt="first post image"
            />
          </div>

          <div className="flex flex-col gap-9 justify-start items-center py-6 px-4 text-center lg:py-12 lg:px-8 max-w-[24rem]">
            <div className="space-y-2">
              <h3 className="text-xl leading-6 text-black">
                The reality of self taught programmer.
              </h3>
              <p className="text-[10px] roboto text-charcoal/80">
                02 February 2023
              </p>
            </div>
            <p className="text-sm leading-5 text-left">
              Lorem ipsum dolor sit amet, officia excepteur ex fugiat
              reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit
              ex esse exercitation amet. Nisi anim cupidatat excepteur officia.
              Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet
              voluptate voluptate dolor minim nulla est proident. Nostrud
              officia pariatur
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center mx-auto w-full border lg:flex-row lg:items-start lg:border-8 border-charcoal h-[75vh] lg:w-fit">
          <div className="overflow-hidden w-full h-full lg:w-96">
            <img
              src="/images/first-post-image.jpg"
              className="object-cover w-full h-full brightness-75"
              alt="first post image"
            />
          </div>

          <div className="flex flex-col gap-9 justify-start items-center py-6 px-4 text-center lg:py-12 lg:px-8 max-w-[24rem]">
            <div className="space-y-2">
              <h3 className="text-xl leading-6 text-black">
                The reality of self taught programmer.
              </h3>
              <p className="text-[10px] roboto text-charcoal/80">
                02 February 2023
              </p>
            </div>
            <p className="text-sm leading-5 text-left">
              Lorem ipsum dolor sit amet, officia excepteur ex fugiat
              reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit
              ex esse exercitation amet. Nisi anim cupidatat excepteur officia.
              Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet
              voluptate voluptate dolor minim nulla est proident. Nostrud
              officia pariatur
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Posts;
