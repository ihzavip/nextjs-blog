const Posts = () => {
  return (
    <section className="pt-12 h-screen">
      <h2 className="text-4xl text-center lg:mb-20 carlo">Posts</h2>

      <div className="flex justify-center items-center mx-auto border-8 lg:items-start w-fit border-charcoal">
        <div className="overflow-hidden w-80 h-96 border border-charcoal">
          <img
            src="/images/first-post-image.jpg"
            className="object-cover w-full h-full brightness-75"
            alt="first post image"
          />
        </div>

        <div className="flex flex-col justify-start items-center py-12 px-8 space-y-4 h-96 text-center max-w-[20rem]">
          <h3>The reality of self taught programmer.</h3>
          <p className="text-xs roboto text-charcoal/80">02 February 2023</p>
        </div>
      </div>
    </section>
  );
};

export default Posts;
