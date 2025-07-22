// create a route that revalidates the recipeOverview page when contentful is updated

import { revalidatePath } from "next/cache";

export async function POST(req: Request) {
  const secret = req.headers.get("x-revalidate-secret");

  if (secret !== process.env.CONTENTFULL_REVALIDATE_SECRET) {
    return new Response(JSON.stringify({ message: "Invalid token" }), {
      status: 401,
    });
  }

  try {
    revalidatePath("/recipes");
    revalidatePath("/recipes/[id]");

    return new Response(JSON.stringify({ revalidated: true }));
  } catch (err: any) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
    });
  }
}
