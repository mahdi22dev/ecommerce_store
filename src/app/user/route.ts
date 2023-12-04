import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function GET() {
  const { userId } = auth();
  console.log(userId);

  if (!userId) {
    return new Response("Unauthorized", { status: 401 });
  }

  const data = { userId };

  return NextResponse.json({ message: "from api", data });
}
