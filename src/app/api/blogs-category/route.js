import BlogCategory from "@/model/BlogCategory";
import connectDB from "@/lib/mongodb";
import Blog from "@/model/Blog";

export async function GET() {
  try {
    await connectDB();
    const categories = await BlogCategory.find({}).sort({ createdAt: -1 });

    const categoriesWithCount = await Promise.all(
      categories.map(async (category) => {
        const count = await Blog.find({ category: category._id }).countDocuments();
        return {
          ...category.toObject(),
          blogCount: count,
        };
      })
    );

    
    if (!categoriesWithCount.length) {
      return new Response(JSON.stringify({ error: "No categories found" }), {
        headers: { "Content-Type": "application/json" },
        status: 404,
      });
    }

    return new Response(JSON.stringify(categoriesWithCount), {
      headers: { "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    console.error("Error fetching categories:", error);
    return new Response(
      JSON.stringify({ error: "Failed to fetch categories" }),
      {
        headers: { "Content-Type": "application/json" },
        status: 500,
      }
    );
  }
}

export async function POST(request) {
  try {
    await connectDB();
    const body = await request.json();

    // Validate request body
    if (!body.name || !body.slug) {
      return new Response(
        JSON.stringify({ error: "Name and slug are required" }),
        {
          headers: { "Content-Type": "application/json" },
          status: 400,
        }
      );
    }

    const { name, slug } = body;
    const newCategory = await BlogCategory.create({ name, slug });

    return new Response(JSON.stringify(newCategory), {
      headers: { "Content-Type": "application/json" },
      status: 201,
    });
  } catch (error) {
    console.error("Error creating category:", error);
    return new Response(
      JSON.stringify({ error: "Failed to create category" }),
      {
        headers: { "Content-Type": "application/json" },
        status: 500,
      }
    );
  }
}

export async function PUT(request) {
  try {
    await connectDB();
    const body = await request.json();

    // Validate request body
    if (!body.name || !body.slug) {
      return new Response(
        JSON.stringify({ error: "Name and slug are required" }),
        {
          headers: { "Content-Type": "application/json" },
          status: 400,
        }
      );
    }

    const { name, slug, id } = body;
    const updatedCategory = await BlogCategory.findByIdAndUpdate(
      id,
      { name, slug },
      { new: true }
    );

    if (!updatedCategory) {
      return new Response(JSON.stringify({ error: "Category not found" }), {
        headers: { "Content-Type": "application/json" },
        status: 404,
      });
    }

    return new Response(JSON.stringify(updatedCategory), {
      headers: { "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    console.error("Error updating category:", error);
    return new Response(
      JSON.stringify({ error: "Failed to update category" }),
      {
        headers: { "Content-Type": "application/json" },
        status: 500,
      }
    );
  }
}
