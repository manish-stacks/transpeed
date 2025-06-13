"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getBlogsCategories } from "@/lib/data-utils";
import { toast } from "sonner";
import { Edit, Trash, Plus } from "lucide-react";
import Heading from "@/components/shared/heading";
import axios from "axios";

export default function BlogsCategoryPage() {
  const router = useRouter();
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [categoryToDelete, setCategoryToDelete] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get("/api/blogs-category");
        const data = response.data;
        setCategories(data);
      } catch (error) {
        toast.error("Failed to load categories");
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  const handleDelete = (categoryId) => {
    setCategoryToDelete(categoryId);
    setDeleteDialogOpen(true);
  };

  const confirmDelete = async() => {
    try {
      const response = await axios.delete(`/api/blogs-category/${categoryToDelete}`);
      setCategories((prev) =>
        prev.filter((category) => category._id !== categoryToDelete)
      );
      toast.success("Category deleted successfully");
    } catch (error) {
      toast.error("Failed to delete category");
    }
    setDeleteDialogOpen(false);
  };

  return (
    <div className="p-6 ">
      {/* Heading */}
      <Heading
        title="Blog Categories"
        description="Manage your blog categories"
        button={true}
        buttonLabel="Add Category"
        buttonIcon={Plus}
        buttonAction={() => router.push("/admin/blogs-category/add")}
      />

      {/* Table */}
      <div className="overflow-x-auto bg-white p-4 shadow rounded">
        <table className="min-w-full">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Slug</th>
              <th className="px-4 py-3">Blog Count</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category) => (
              <tr
                key={category._id}
                className="border-t hover:bg-gray-50 transition"
              >
                <td className="px-4 py-3">{category.name}</td>
                <td className="px-4 py-3">{category.slug}</td>
                <td className="px-4 py-3">{category.count || 0}</td>
                <td className="px-4 py-3 space-x-2">
                  <button
                    onClick={() =>
                      router.push(`/admin/blogs-category/${category._id}`)
                    }
                    className="text-yellow-600 hover:underline"
                    title="Edit"
                  >
                    <Edit size={16} />
                  </button>
                  <button
                    onClick={() => handleDelete(category._id)}
                    className="text-red-600 hover:underline"
                    title="Delete"
                  >
                    <Trash size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {loading && (
          <p className="p-4 text-gray-500 text-sm">Loading categories...</p>
        )}
        {!loading && categories.length === 0 && (
          <p className="p-4 text-gray-500 text-sm">No categories found.</p>
        )}
      </div>

      {/* Delete Confirmation Dialog */}
      {deleteDialogOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded shadow max-w-md w-full">
            <h2 className="text-lg font-semibold mb-2">
              Are you absolutely sure?
            </h2>
            <p className="text-gray-600 mb-4">
              This action cannot be undone. This will permanently delete the
              category and may affect associated blog posts.
            </p>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setDeleteDialogOpen(false)}
                className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
