"use client";
import CategoryForm from "@/components/admin/blogs-category/category-form";
import Heading from "@/components/shared/heading";


export default function AddCategoryPage() {
  return (
    <div className="p-6">
      <Heading
        title="Add Category"
        description="Create a new blog category"
      />

      <div className="max-w-2xl mt-6 bg-white p-4 shadow rounded">
        <CategoryForm />
      </div>
    </div>
  );
}
