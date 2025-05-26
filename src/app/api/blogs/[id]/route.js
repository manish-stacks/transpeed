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

    const recentPosts = await Blog.find({ _id: { $ne: blog._id } })
      .sort({ createdAt: -1 })
      .limit(3)
      .select("title slug image");

    const previousBlog = await Blog.findOne({ _id: { $lt: blog._id } })
      .sort({ _id: -1 })
      .select("title slug");

    const nextBlog = await Blog.findOne({ _id: { $gt: blog._id } })
      .sort({ _id: 1 })
      .select("title slug");

    return NextResponse.json(
      { blog, recentPosts, previousBlog, nextBlog },
      { status: 200 }
    );
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
    const { title, content, category, image, ...rest } = body;

    console.log("Updating blog with body:", body);

    if (!title || !content || !category) {
      return NextResponse.json(
        { error: "Title, content, and category are required." },
        { status: 400 }
      );
    }

    // Fetch existing blog
    const existingBlog = await Blog.findById(params.id);
    if (!existingBlog) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    let imageData = existingBlog.image;

    // Upload only if a new base64 image is provided
    if (image && image.startsWith("data:image/")) {
      try {
        console.log("Uploading image to Cloudinary...");
        imageData = await uploadImage(image, "blog-images");
        console.log("Image uploaded successfully:", imageData.url);
      } catch (uploadError) {
        console.error("Image upload failed:", uploadError);
        return NextResponse.json(
          { error: `Image upload failed: ${uploadError.message}` },
          { status: 500 }
        );
      }
    }

    const updatedBlog = await Blog.findByIdAndUpdate(
      params.id,
      {
        title,
        content,
        category,
        image: imageData,
        ...rest,
      },
      { new: true }
    );

    return NextResponse.json(updatedBlog, { status: 200 });
  } catch (error) {
    console.error("Error updating blog:", error);
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
