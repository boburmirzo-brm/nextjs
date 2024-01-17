import connectMongoDB from "@/lib/mongodb";
import { Blogs } from "@/models/blogSchema";
import { NextResponse, NextRequest } from "next/server";

interface PARAMS {
  params: {
    id: string;
  };
}

export async function DELETE(request: NextRequest, { params }: PARAMS) {
  connectMongoDB();
  const blogDeleted = await Blogs.findByIdAndDelete(params.id);
  return NextResponse.json(
    { variant: "success", msg: "blog is deleted", innerData: blogDeleted },
    { status: 201 }
  );
}

export async function PUT(request: NextRequest, { params }: PARAMS) {
  const body = await request.json();
  connectMongoDB();
  const blogUpdated = await Blogs.findByIdAndUpdate(params.id, body, {
    new: true,
  });

  return NextResponse.json(
    { variant: "success", msg: "blog is updated", innerData: blogUpdated },
    { status: 201 }
  );
}
