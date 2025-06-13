"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { getBlogById } from "@/lib/data-utils";
import Heading from "@/components/shared/heading";
import BlogForm from "@/components/admin/blog/blog-form";
import axios from "axios";

export default function EditBlogPage() {
  const params = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        // const data = await getBlogById(params.blogId);
        const response = await axios.get(`/api/blogs/${params.blogId}`);
        // console.log(response.data.blog);
        setBlog(response.data.blog);
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
      <div className="flex items-center justify-center h-screen">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div>
      <Heading title="Edit Blog" description="Update an existing blog post" />

      <BlogForm initialData={blog} />
    </div>
  );
}
