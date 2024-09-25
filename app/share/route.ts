import prisma from "@/prisma/db";
import { Comment } from "../types";

export type ShareRequest = {
  url: string;
  comments: Comment[];
}

export async function POST(request: Request) {
  const data: ShareRequest = await request.json();

  console.log(data);

  const comments = {
    create: data.comments.map((comment) => {
      return {
        offsetX: comment.offsetX,
        offsetY: comment.offsetY,
        selector: comment.selector,
        text: comment.text,
      }
    })
  }

  const page = await prisma.page.create({
    data: {
      url: data.url,
      comments,
    },
  })

  return new Response(JSON.stringify({ id: page.id }), { status: 200 });
}