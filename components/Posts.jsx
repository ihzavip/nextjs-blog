const Posts = () => {
  return (
    <section className="px-2 pt-12 h-screen">
      <h2 className="mb-6 text-4xl text-center carlo">Posts</h2>

      <div className="flex flex-col gap-2 justify-center items-center">
        <div className="overflow-hidden w-full h-52 border border-charcoal">
          <img
            src="/images/first-post-image.jpg"
            className="object-cover w-full h-full brightness-75"
            alt="first post image"
          />
        </div>
        <p className="text-xs roboto text-charcoal/80">02 February 2023</p>
        <h3>The reality of self taught programmer.</h3>

        <div className="my-10 w-full h-[1px] bg-charcoal/60"></div>
      </div>
    </section>
  );
};

export default Posts;
