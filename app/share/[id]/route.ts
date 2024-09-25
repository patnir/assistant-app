import prisma from "@/prisma/db";

export async function GET(request: Request,
  { params }: { params: { id: string } }
) {

  const page = await prisma.page.findUnique({
    where: {
      id: params.id,
    },
    include: {
      comments: true,
    },
  });

  return new Response(JSON.stringify(page), { status: 200 });
}