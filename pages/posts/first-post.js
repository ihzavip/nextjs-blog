import Link from "next/link";

export default function FirstPost() {
  return (
    <>
      <h1>First Post</h1>
      <h2 className="text-red-900">
        <Link href="/">Back to Home</Link>
      </h2>
    </>
  );
}
