import Link from "next/link";
import { format } from "date-fns";

type Post = {
  id: number;
  title: string;
  excerpt: string;
  date: string;
};

export default async function HomePage() {
  const res = await fetch("http://localhost:3000/api/posts");
  const posts: Post[] = await res.json();

  return (
    <div className="flex min-h-screen items-center justify-center font-sans bg-gray-50 text-black">
      <main className="flex min-h-screen w-full max-w-7xl flex-col items-center py-32 px-16 sm:items-start">
        <h1 className="text-2xl md:text-5xl p-7 font-extrabold">Hot Topics</h1>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-x-8 lg:gap-x-12 lg:gap-y-12 md:gap-y-4 mb-4">
          {posts.map((post) => (
            <Link
              key={post.id}
              href={`/posts/${post.id}`}
              className="flex flex-col max-w-md border border-gray-300 bg-white p-4 shadow-sm cursor-pointer hover:shadow-md transition"
            >
              <div className="h-64 bg-gray-100 -m-4 mb-4"></div>
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-700 mb-2">
                {format(new Date(post.date), "MMMM dd, yyyy")}
              </p>
              <p className="text-gray-700">{post.excerpt}</p>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
