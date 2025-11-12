import { posts } from "@/data/posts";

export async function GET() {
  const dataForCards = posts.map(({ id, title, excerpt, date }) => ({
    id,
    title,
    excerpt,
    date,
  }));
  return new Response(JSON.stringify(dataForCards));
}
