import { posts } from "@/data/posts";

//this function render the single post based on the id of the clicked link. This function is called when the user clicks on a link
//this function does not return the 'excerpts' since it will not diesplay in the page.
export async function GET(_request, { params }) {
  const { id } = await params;
  const postToGet = posts.find((post) => post.id === parseInt(id));

  if (!postToGet) {
    return new Response("Post not found", { status: 404 });
  }

  return new Response(JSON.stringify(postToGet), {
    headers: { "Content-Type": "application/json" },
  });
}
