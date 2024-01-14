import connectMongoDB from "@/lib/mongodb";
import { Blogs } from "@/models/blogSchema";
import { NextResponse } from "next/server";

export async function GET() {
  await connectMongoDB();
  const blogs = await Blogs.find();
  return NextResponse.json(
    { variant: "success", msg: "all blogs", innerData: blogs },
    { status: 200 }
  );
}

export async function POST(request: any) {
  const { title, desc } = await request.json();
  await connectMongoDB();
  await Blogs.create({ title, desc });
  return NextResponse.json(
    { variant: "success", msg: "blog is created", innerData: null },
    { status: 201 }
  );
}
