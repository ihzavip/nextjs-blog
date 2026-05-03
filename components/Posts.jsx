import Link from "next/link";

const PostCard = ({ title, date, category, excerpt, image, slug }) => (
  <Link href={`/posts/${slug}`} className="group block border border-divider hover:border-parchment-faint transition-colors duration-300">
    <div className="overflow-hidden h-52">
      <img
        src={image}
        className="h-full w-full object-cover brightness-50 transition-all duration-500 group-hover:brightness-[0.6] group-hover:scale-[1.02]"
        alt={title}
      />
    </div>

    <div className="p-6">
      <div className="mb-4 flex items-center gap-3">
        <span className="roboto text-[9px] uppercase tracking-[.3em] text-gold">
          {category}
        </span>
        <span className="text-divider">·</span>
        <span className="roboto text-[9px] text-parchment-muted">{date}</span>
      </div>

      <h2 className="font-display text-xl font-normal text-parchment leading-snug mb-3">
        {title}
      </h2>

      <p className="font-lora text-sm text-parchment-muted leading-relaxed line-clamp-3">
        {excerpt}
      </p>
    </div>
  </Link>
);

const Posts = () => {
  const posts = [
    {
      slug: "first-post",
      title: "The reality of the self-taught programmer.",
      date: "02 Feb 2023",
      category: "Life",
      excerpt:
        "No one tells you about the silence. The long, directionless hours you spend staring at a blank editor, wondering whether you are actually learning or just performing the act of learning.",
      image: "/images/first-post-image.jpg",
    },
    {
      slug: "sitting-with-not-knowing",
      title: "On learning to sit with not knowing.",
      date: "14 Mar 2023",
      category: "Reflection",
      excerpt:
        "There is a particular kind of discomfort that comes with not knowing where you stand. Not failure — just the suspended feeling of being somewhere in the middle with no clear marker.",
      image: "/images/first-post-image.jpg",
    },
    {
      slug: "stop-collecting-tutorials",
      title: "Why I stopped collecting tutorials and started breaking things.",
      date: "01 Apr 2023",
      category: "Programming",
      excerpt:
        "At some point I had fifty browser tabs open and nothing to show for it. The turning point was deleting them all and building something that did not work yet.",
      image: "/images/first-post-image.jpg",
    },
    {
      slug: "reading-vs-writing-code",
      title: "The gap between reading code and writing it.",
      date: "19 Apr 2023",
      category: "Programming",
      excerpt:
        "Reading someone else's clean code feels like understanding it. Writing your own from scratch quickly reveals how thin that understanding actually was.",
      image: "/images/first-post-image.jpg",
    },
    {
      slug: "comparing-yourself",
      title: "On comparing yourself to people who started earlier.",
      date: "03 May 2023",
      category: "Life",
      excerpt:
        "The programmer who has been coding since fifteen did not start with more talent. They started with more time. Those are not the same thing.",
      image: "/images/first-post-image.jpg",
    },
    {
      slug: "learning-c",
      title: "What learning C taught me about everything above it.",
      date: "22 May 2023",
      category: "Programming",
      excerpt:
        "Dropping down to C and managing memory by hand made JavaScript feel less like magic and more like a very well-organised set of decisions someone made on your behalf.",
      image: "/images/first-post-image.jpg",
    },
  ];

  return (
    <section id="posts" className="bg-ink py-24 px-6 lg:px-12">
      <div className="mx-auto max-w-6xl">

        <div className="mb-14 flex items-center gap-6">
          <span className="roboto text-[10px] uppercase tracking-[.25em] text-parchment-muted">
            Recent Writing
          </span>
          <div className="flex-1 h-px bg-divider" />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => (
            <PostCard key={i} {...post} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Posts;
