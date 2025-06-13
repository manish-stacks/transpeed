import BlogForm from "@/components/admin/blog/blog-form";
import Heading from "@/components/shared/heading";

export default function AddBlogPage() {
  return (
    <div className="p-6">
      <Heading title="Add Blog" description="Create a new blog post" />

      <BlogForm />
    </div>
  );
}
