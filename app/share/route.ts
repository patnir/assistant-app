import { Comment } from "../types";

export async function POST(request: Request) {
  const dataArray: Comment[] = await request.json();
  console.log(dataArray);
  const randomId = Math.random().toString(36).substring(7);
  return new Response(JSON.stringify({ id: randomId }), { status: 200 });
}