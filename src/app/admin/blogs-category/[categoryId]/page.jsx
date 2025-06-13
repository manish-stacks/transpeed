"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Heading from "@/components/shared/heading";
import CategoryForm from "@/components/admin/blogs-category/category-form";
import axios from "axios";

export default function EditCategoryPage() {
  const params = useParams();
  const [category, setCategory] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `/api/blogs-category/${params.categoryId}`
        );
        setCategory(response.data);
      } catch (error) {
        console.error("Failed to fetch category:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategory();
  }, [params.categoryId]);

  if (loading) {
    return (
      <div className="p-6 bg-white shadow rounded">
        <Heading
          title="Edit Category"
          description="Update an existing blog category"
        />
        <div className="max-w-2xl space-y-6 animate-pulse">
          <div className="space-y-4">
            <div className="h-10 w-full bg-gray-200 rounded-md" />
            <div className="h-10 w-full bg-gray-200 rounded-md" />
          </div>
          <div className="flex justify-end gap-x-2">
            <div className="h-10 w-24 bg-gray-200 rounded-md" />
            <div className="h-10 w-32 bg-gray-200 rounded-md" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6">
      <Heading
        title="Edit Category"
        description="Update an existing blog category"
      />

      <div className="max-w-2xl mt-6 bg-white p-4 shadow rounded">
        <CategoryForm initialData={category} />
      </div>
    </div>
  );
}
