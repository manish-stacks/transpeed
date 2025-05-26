import connectDB from "@/lib/mongodb";
import PageModel from "@/model/PageModel";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDB();
    const pages = await PageModel.find().sort({ createdAt: -1 });
    
    return NextResponse.json(pages, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch pages" },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    await connectDB();
    const body = await request.json();
    
    if (!body.title || !body.content) {
      return NextResponse.json(
        { error: "Required fields missing" },
        { status: 400 }
      );
    }
    
    const page = await PageModel.create(body);
    return NextResponse.json(page, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create page" },
      { status: 500 }
    );
  }
}