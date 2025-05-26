import { uploadImage } from "@/lib/cloudinary";
import connectDB from "@/lib/mongodb";
import Blog from "@/model/Blog";
import BlogCategory from "@/model/BlogCategory";

import { NextResponse } from "next/server";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category");

  if (category) {
    try {
      await connectDB();
      const categoryDoc = await BlogCategory.findOne({ slug: category });
      const blogs = await Blog.find({ category: categoryDoc._id })
        .sort({ createdAt: -1 })
        .populate({
          path: "category",
          model: BlogCategory,
        });
 
      return NextResponse.json(blogs, { status: 200 });
    } catch (error) {
      return NextResponse.json(
        { error: "Failed to fetch blogs" },
        { status: 500 }
      );
    }
  }

  try {
    await connectDB();
    const blogs = await Blog.find().sort({ createdAt: -1 }).populate({
      path: "category",
      model: BlogCategory,
    });

    return NextResponse.json(blogs, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch blogs" },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    await connectDB();
    const body = await request.json();

    if (!body.title || !body.content || !body.category) {
      return NextResponse.json(
        { error: "Required fields missing" },
        { status: 400 }
      );
    }

    let imageData = null;

    // Handle image upload if present
    if (body.image && body.image.startsWith("data:image/")) {
      console.log("Uploading image to Cloudinary...");
      try {
        imageData = await uploadImage(body.image, "blog-images");
        console.log("Image uploaded successfully:", imageData.url);
      } catch (uploadError) {
        console.error("Image upload failed:", uploadError);
        return NextResponse.json(
          { error: `Image upload failed: ${uploadError.message}` },
          { status: 400 }
        );
      }
    } else if (body.image && !body.image.startsWith("http")) {
      imageData = {
        url: body.image,
      };
    }

    const blog = await Blog.create({ ...body, image: imageData });
    return NextResponse.json(blog, { status: 201 });
  } catch (error) {
    console.error("Error creating blog:", error);
    return NextResponse.json(
      { error: "Failed to create blog" },
      { status: 500 }
    );
  }
}

