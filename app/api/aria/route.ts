import { NextResponse } from "next/server";
import { runARIA } from "@/ariaEngine";

export async function POST(
  req: Request
) {
  const body = await req.json();

  return NextResponse.json(
    await runARIA(body.prompt)
  );
}
