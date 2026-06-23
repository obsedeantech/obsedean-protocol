import { NextResponse } from "next/server";
import { spawnAgents } from "@/agentSwarm";

export async function GET() {
  return NextResponse.json(
    await spawnAgents()
  );
}
