"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Edit, Eye, Plus, Trash } from "lucide-react";
import Image from "next/image";
import { getBlogs } from "@/lib/data-utils";
import Heading from "@/components/shared/heading";
import axios from "axios";

export default function BlogsPage() {
  const router = useRouter();
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [blogToDelete, setBlogToDelete] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        // const data = await getBlogs();
        const response = await axios.get("/api/blogs");
        const data = response.data;
        // console.log('blogs', data);
        setBlogs(data);
      } catch (error) {
        toast.error("Failed to load blogs");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const handleDelete = (blogId) => {
    setBlogToDelete(blogId);
    setDeleteDialogOpen(true);
  };

  const confirmDelete = () => {
    axios.delete(`/api/blogs/${blogToDelete}`);
    setBlogs((prev) => prev.filter((blog) => blog._id !== blogToDelete));
    toast.success("Blog deleted successfully");
    setDeleteDialogOpen(false);
  };

  return (
    <div className="p-6">
      {/* Heading */}
      <Heading
        title="Blogs"
        description="Manage your blog posts"
        button={true}
        buttonLabel="Add Category"
        buttonIcon={Plus}
        buttonAction={() => router.push("/admin/blogs/add")}
      />

      {/* Table */}
      <div className="overflow-x-auto bg-white p-4 shadow rounded">
        <table className="min-w-full bg-white shadow rounded">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="px-4 py-3">Title</th>
              <th className="px-4 py-3">Category</th>
              <th className="px-4 py-3">Date</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((blog) => (
              <tr key={blog._id} className="border-t hover:bg-gray-50">
                <td className="px-4 py-3 flex items-center gap-3">
                  <Image
                    width={40}
                    height={40}
                    src={blog?.image?.url}
                    alt={blog?.title}
                    className="h-10 w-10 rounded object-cover"
                  />
                  <div>
                    <div className="font-medium">{blog.title}</div>
                    <div className="text-sm text-gray-500">{blog.slug}</div>
                  </div>
                </td>
                <td className="px-4 py-3">{blog.category.name}</td>
                <td className="px-4 py-3">
                  {new Date(blog.createdAt).toDateString()}
                </td>
                <td className="px-4 py-3">
                  <span
                    className={`px-2 py-1 rounded text-xs font-medium ${
                      blog.status === "published"
                        ? "bg-green-100 text-green-700"
                        : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {blog.status === "published" ? "Published" : "Draft"}
                  </span>
                </td>
                <td className="px-4 py-3 space-x-2">
                  <button
                    onClick={() => router.push(`/admin/blogs/view/${blog._id}`)}
                    className="text-blue-600 hover:underline"
                    title="View"
                  >
                    <Eye size={16} />
                  </button>
                  <button
                    onClick={() => router.push(`/admin/blogs/${blog._id}`)}
                    className="text-yellow-600 hover:underline"
                    title="Edit"
                  >
                    <Edit size={16} />
                  </button>
                  <button
                    onClick={() => handleDelete(blog._id)}
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
      </div>

      {/* Delete Confirmation Modal */}
      {deleteDialogOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded shadow-md max-w-md w-full">
            <h2 className="text-xl font-semibold mb-2">
              Are you absolutely sure?
            </h2>
            <p className="text-gray-600 mb-4">
              This action cannot be undone. This will permanently delete the
              blog post.
            </p>
            <div className="flex justify-end space-x-3">
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
