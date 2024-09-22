import { randomComments } from "@/app/types";

export async function GET(request: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  return new Response(JSON.stringify({ id: id, comments: randomComments(5) }), { status: 200 });
}