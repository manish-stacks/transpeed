import connectDB from "@/lib/mongodb";
import Blog from "@/model/Blog";
import BlogCategory from "@/model/BlogCategory";
import { isValidObjectId } from "mongoose";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  try {
    await connectDB();
    let blog = null;
    if (isValidObjectId(params.id)) {
      blog = await Blog.findById(params.id).populate({
        path: "category",
        model: BlogCategory,
      });
    } else {
      blog = await Blog.findOne({ slug: params.id }).populate({
        path: "category",
        model: BlogCategory,
      });
    }

    if (!blog) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    return NextResponse.json(blog, { status: 200 });
  } catch (error) {
    console.error("Error fetching blog:", error);
    return NextResponse.json(
      { error: "Failed to fetch blog" },
      { status: 500 }
    );
  }
}

export async function PUT(request, { params }) {
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

    const blog = await Blog.findByIdAndUpdate(
      params.id,
      { ...body, image: imageData },
      {
        new: true,
      }
    );

    if (!blog) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    return NextResponse.json(blog, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to update blog" },
      { status: 500 }
    );
  }
}

export async function DELETE(request, { params }) {
  try {
    await connectDB();
    const blog = await Blog.findByIdAndDelete(params.id);

    if (!blog) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    return NextResponse.json(
      { message: "Blog deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to delete blog" },
      { status: 500 }
    );
  }
}
