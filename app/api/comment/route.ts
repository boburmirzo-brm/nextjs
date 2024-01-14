import { NextResponse, NextRequest } from "next/server";

export async function GET() {
  return NextResponse.json(
    { variant: "success", msg: "all blogs", innerData: null },
    { status: 200 }
  );
}