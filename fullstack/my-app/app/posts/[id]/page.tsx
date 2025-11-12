import Link from "next/link";
import { format } from "date-fns";
import { AiOutlineArrowLeft } from "react-icons/ai";

type Post = {
  id: number;
  title: string;
  content: string;
  date: string;
};

//this function use to render the every post
export default async function PostPage({ params }: { params: { id: number } }) {
  const { id } = await params;
  const res = await fetch(`http://localhost:3000/api/posts/${id}`);

  //this check if the response is not ok and then render the not found page
  if (!res.ok) {
    return (
      <div className="h-screen flex item-center justify-center mt-8">
        <main className="max-w-7xl">
          <Link href="/" className="text-blue-600 hover:underline mb-4 block">
            <AiOutlineArrowLeft />
          </Link>
          <p className="text-gray-500 text-sm mb-6 text-xs md:text-xl m-4">
            Post does not exist.
          </p>
        </main>
      </div>
    );
  }

  const post: Post = await res.json();

  //render the post if the response is ok
  return (
    <div className="h-screen flex item-center justify-center mt-8">
      <main className="max-w-7xl">
        <Link href="/" className="text-2xl text-black-600 p-4 b-2 m-4">
          <AiOutlineArrowLeft />
        </Link>

        <h1 className="text-xl md:text-4xl font-bold mb-2 m-4">{post.title}</h1>
        <p className="text-gray-500 text-sm mb-6 text-xs md:text-xl m-4">
          {format(new Date(post.date), "MMMM dd, yyyy")}
        </p>
        <div className="text-gray-700 text-xs leading-relaxed m-4 md:text-xl">
          {post.content}
        </div>
      </main>
    </div>
  );
}
