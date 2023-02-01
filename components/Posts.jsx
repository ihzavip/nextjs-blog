const Posts = () => {
  return (
    <section className="px-2 pt-12 h-screen">
      <h2 className="text-4xl text-center mb-6 carlo">Posts</h2>

      <div className="flex flex-col justify-center items-center gap-2">
        <div className="w-full h-52 overflow-hidden border border-charcoal">
          <img
            src="/images/first-post-image.jpg"
            className="object-cover h-full w-full brightness-75"
            alt="first post image"
          />
        </div>
        <p className="text-xs roboto text-charcoal/80">02 February 2023</p>
        <h3>The reality of self taught programmer.</h3>

        <div className="h-[1px] w-full bg-charcoal/60 my-10"></div>
      </div>
    </section>
  );
};

export default Posts;
