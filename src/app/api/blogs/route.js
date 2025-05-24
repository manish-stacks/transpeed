import { uploadImage } from "@/lib/cloudinary";
import connectDB from "@/lib/mongodb";
import Blog from "@/model/Blog";
import BlogCategory from "@/model/BlogCategory";

import { NextResponse } from "next/server";

export async function GET() {
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

// export async function GET(request) {
//   try {
//     // Mock data for blogs
//     const blogs = [
//       {
//         id: 1,
//         title: "Introduction to Next.js 13",
//         slug: "introduction-to-nextjs-13",
//         excerpt: "Learn about the new features in Next.js 13 and how to use them.",
//         category: "Technology",
//         status: "published",
//         author: "John Doe",
//         date: "2023-12-15",
//         image: "https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg",
//         content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
//       },
//       {
//         id: 2,
//         title: "Marketing Strategies for 2023",
//         slug: "marketing-strategies-2023",
//         excerpt: "Discover the top marketing strategies that will dominate in 2023.",
//         category: "Marketing",
//         status: "published",
//         author: "Jane Smith",
//         date: "2023-12-10",
//         image: "https://images.pexels.com/photos/6476582/pexels-photo-6476582.jpeg",
//         content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
//       },
//       {
//         id: 3,
//         title: "UX Design Principles",
//         slug: "ux-design-principles",
//         excerpt: "A comprehensive guide to user experience design principles.",
//         category: "Design",
//         status: "draft",
//         author: "Alice Johnson",
//         date: "2023-12-05",
//         image: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg",
//         content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
//       },
//       {
//         id: 4,
//         title: "React vs Vue in 2023",
//         slug: "react-vs-vue-2023",
//         excerpt: "A comparison of React and Vue frameworks in 2023.",
//         category: "Development",
//         status: "published",
//         author: "Bob Williams",
//         date: "2023-11-28",
//         image: "https://images.pexels.com/photos/4974912/pexels-photo-4974912.jpeg",
//         content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
//       },
//       {
//         id: 5,
//         title: "Business Growth Tactics",
//         slug: "business-growth-tactics",
//         excerpt: "Proven tactics to grow your business in a competitive market.",
//         category: "Business",
//         status: "published",
//         author: "Michael Brown",
//         date: "2023-11-20",
//         image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
//         content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
//       },
//     ];

//     return new Response(JSON.stringify(blogs), {
//       headers: { "Content-Type": "application/json" },
//       status: 200,
//     });
//   } catch (error) {
//     return new Response(JSON.stringify({ error: "Failed to fetch blogs" }), {
//       headers: { "Content-Type": "application/json" },
//       status: 500,
//     });
//   }
// }

// export async function POST(request) {
//   try {
//     const body = await request.json();

//     // Validate request body
//     if (!body.title || !body.slug || !body.excerpt || !body.content || !body.category) {
//       return new Response(
//         JSON.stringify({ error: "Missing required fields" }),
//         {
//           headers: { "Content-Type": "application/json" },
//           status: 400,
//         }
//       );
//     }

//     // Mock response for creating a blog
//     const newBlog = {
//       id: Date.now(),
//       title: body.title,
//       slug: body.slug,
//       excerpt: body.excerpt,
//       content: body.content,
//       category: body.category,
//       status: body.status || "draft",
//       author: body.author || "Admin",
//       date: new Date().toISOString().split('T')[0],
//       image: body.image || "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg",
//     };

//     return new Response(JSON.stringify(newBlog), {
//       headers: { "Content-Type": "application/json" },
//       status: 201,
//     });
//   } catch (error) {
//     return new Response(
//       JSON.stringify({ error: "Failed to create blog" }),
//       {
//         headers: { "Content-Type": "application/json" },
//         status: 500,
//       }
//     );
//   }
// }
