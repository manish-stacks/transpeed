"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { getBlogById } from "@/lib/data-utils";
import { CalendarIcon, Edit, Tag } from "lucide-react";
import { format } from "date-fns";

export default function ViewBlogPage() {
  const router = useRouter();
  const params = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const data = await getBlogById(params.blogId);
        setBlog(data);
      } catch (error) {
        console.error("Failed to fetch blog:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [params.blogId]);

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="h-8 w-1/3 bg-gray-200 dark:bg-gray-700 rounded" />
          <div className="h-10 w-24 bg-gray-200 dark:bg-gray-700 rounded" />
        </div>
        <div className="border rounded-lg p-6 space-y-4 bg-white dark:bg-gray-900">
          <div className="h-8 w-3/4 bg-gray-200 dark:bg-gray-700 rounded" />
          <div className="h-6 w-1/2 bg-gray-200 dark:bg-gray-700 rounded" />
          <div className="h-[300px] w-full bg-gray-200 dark:bg-gray-700 rounded" />
          <div className="space-y-2">
            <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded" />
            <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded" />
            <div className="h-4 w-3/4 bg-gray-200 dark:bg-gray-700 rounded" />
          </div>
        </div>
      </div>
    );
  }

  const blogContent = `
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
    <h2>Section Heading</h2>
    <p>Sed ut perspiciatis unde omnis iste natus...</p>
  `;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">View Blog</h1>
        <button
          onClick={() => router.push(`/admin/blogs/${blog.id}`)}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          <Edit className="h-4 w-4" />
          Edit Blog
        </button>
      </div>

      {/* Blog Card */}
      <div className="border rounded-lg p-6 bg-white dark:bg-gray-900 space-y-6 shadow">
        {/* Title and Status */}
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">{blog.title}</h2>
          <span className={`px-3 py-1 text-sm rounded-full ${
            blog.status === "published" ? "bg-green-100 text-green-800" : "bg-gray-200 text-gray-800"
          }`}>
            {blog.status === "published" ? "Published" : "Draft"}
          </span>
        </div>

        {/* Meta Info */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
          <div className="flex items-center gap-1">
            <CalendarIcon className="h-4 w-4" />
            {format(new Date(blog.date), "MMMM d, yyyy")}
          </div>
          <div className="flex items-center gap-1">
            <Tag className="h-4 w-4" />
            {blog.category}
          </div>
          <div>By {blog.author}</div>
        </div>

        {/* Image */}
        <div className="relative aspect-video w-full overflow-hidden rounded-md">
          <img
            src={blog.image}
            alt={blog.title}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Excerpt */}
        <div>
          <h3 className="text-lg font-medium mb-2">Excerpt</h3>
          <p className="text-gray-600 dark:text-gray-400">{blog.excerpt}</p>
        </div>

        {/* Separator */}
        <div className="h-px bg-gray-200 dark:bg-gray-700" />

        {/* Content */}
        <div>
          <h3 className="text-lg font-medium mb-2">Content</h3>
          <div
            className="prose max-w-none dark:prose-invert prose-headings:font-semibold prose-p:text-gray-600 dark:prose-p:text-gray-400"
            dangerouslySetInnerHTML={{ __html: blogContent }}
          />
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center pt-4 border-t dark:border-gray-700 text-sm text-gray-600 dark:text-gray-400">
          <span>Slug: {blog.slug}</span>
          <button
            onClick={() => router.push("/admin/blogs")}
            className="px-4 py-2 border rounded hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            Back to Blogs
          </button>
        </div>
      </div>
    </div>
  );
}
