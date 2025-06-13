import BlogCategory from "@/model/BlogCategory";

export async function GET(request, { params }) {
  try {
    const id = params.id;

    const category = await BlogCategory.findById(id);

    if (!category) {
      return new Response(JSON.stringify({ error: "Category not found" }), {
        headers: { "Content-Type": "application/json" },
        status: 404,
      });
    }

    return new Response(JSON.stringify(category), {
      headers: { "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to fetch category" }), {
      headers: { "Content-Type": "application/json" },
      status: 500,
    });
  }
}

export async function DELETE(request, { params }) {
  try {
    const id = params.id;

    const deletedCategory = await BlogCategory.findByIdAndDelete(id);

    if (!deletedCategory) {
      return new Response(JSON.stringify({ error: "Category not found" }), {
        headers: { "Content-Type": "application/json" },
        status: 200,
      });
    }
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Failed to delete category" }),
      {
        headers: { "Content-Type": "application/json" },
        status: 500,
      }
    );
  }
}
