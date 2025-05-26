"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import ImageUpload from "@/components/shared/image-upload";

const formSchema = z.object({
  title: z.string().min(2).max(100),
  slug: z.string().min(2).max(100).regex(/^[a-z0-9-]+$/),
  content: z.string().min(50),
  status: z.enum(["published", "draft"]),
  featured: z.boolean().default(false),
  image: z.string().url().optional(),
  metaTitle: z.string().max(60).optional(),
  metaDescription: z.string().max(160).optional(),
  metaKeywords: z.string().optional(),
  ogTitle: z.string().optional(),
  ogDescription: z.string().optional(),
  ogImage: z.string().url().optional(),
  twitterTitle: z.string().optional(),
  twitterDescription: z.string().optional(),
  twitterImage: z.string().url().optional(),
  canonicalUrl: z.string().url().optional(),
  structuredData: z.string().optional(),
});

export default function PageForm({ initialData }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: initialData || {
      title: "",
      slug: "",
      content: "",
      status: "draft",
      featured: false,
    },
  });

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      await new Promise((res) => setTimeout(res, 1000));
      toast.success(initialData ? "Page updated!" : "Page created!");
      router.push("/admin/pages");
    } catch {
      toast.error("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  const handleTitleChange = (e) => {
    const title = e.target.value;
    const slug = title.toLowerCase().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-");
    setValue("slug", slug);
    if (!getValues("metaTitle")) setValue("metaTitle", title);
    if (!getValues("ogTitle")) setValue("ogTitle", title);
    if (!getValues("twitterTitle")) setValue("twitterTitle", title);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white p-6 rounded-lg shadow space-y-4">
            <div>
              <label className="block font-medium">Title</label>
              <input
                {...register("title")}
                onChange={(e) => {
                  register("title").onChange(e);
                  handleTitleChange(e);
                }}
                disabled={loading}
                className="w-full mt-1 p-2 border rounded"
                placeholder="Enter title"
              />
              {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}
            </div>

            <div>
              <label className="block font-medium">Slug</label>
              <input
                {...register("slug")}
                disabled={loading}
                className="w-full mt-1 p-2 border rounded"
                placeholder="Enter slug"
              />
              {errors.slug && <p className="text-red-500 text-sm">{errors.slug.message}</p>}
            </div>

            <div>
              <label className="block font-medium">Content</label>
              <textarea
                {...register("content")}
                disabled={loading}
                rows={10}
                className="w-full mt-1 p-2 border rounded"
                placeholder="Write content here..."
              />
              {errors.content && <p className="text-red-500 text-sm">{errors.content.message}</p>}
            </div>
          </div>

          <div>
            <label className="block font-medium mb-2">Featured Image</label>
            <ImageUpload
              value={getValues("image")}
              onChange={(val) => setValue("image", val)}
              disabled={loading}
            />
          </div>

          <div className="bg-white p-6 rounded-lg shadow space-y-6">
            <h3 className="text-lg font-medium">SEO Settings</h3>

            {[
              { label: "Meta Title", name: "metaTitle", type: "input" },
              { label: "Meta Description", name: "metaDescription", type: "textarea" },
              { label: "Meta Keywords", name: "metaKeywords", type: "input" },
              { label: "OG Title", name: "ogTitle", type: "input" },
              { label: "OG Description", name: "ogDescription", type: "textarea" },
              { label: "OG Image URL", name: "ogImage", type: "input" },
              { label: "Twitter Title", name: "twitterTitle", type: "input" },
              { label: "Twitter Description", name: "twitterDescription", type: "textarea" },
              { label: "Twitter Image URL", name: "twitterImage", type: "input" },
              { label: "Canonical URL", name: "canonicalUrl", type: "input" },
              { label: "Structured Data (JSON-LD)", name: "structuredData", type: "textarea", className: "font-mono" },
            ].map(({ label, name, type, className }) => (
              <div key={name}>
                <label className="block font-medium">{label}</label>
                {type === "input" ? (
                  <input
                    {...register(name)}
                    className={`w-full mt-1 p-2 border rounded ${className || ""}`}
                    disabled={loading}
                  />
                ) : (
                  <textarea
                    {...register(name)}
                    className={`w-full mt-1 p-2 border rounded ${className || ""}`}
                    rows={type === "textarea" && name === "structuredData" ? 6 : 3}
                    disabled={loading}
                  />
                )}
                {errors[name] && <p className="text-red-500 text-sm">{errors[name]?.message}</p>}
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6 sticky top-0 self-start">
          <div className="bg-white p-6 rounded-lg shadow space-y-4">
            <div>
              <label className="block font-medium">Status</label>
              <select
                {...register("status")}
                className="w-full mt-1 p-2 border rounded"
                disabled={loading}
              >
                <option value="draft">Draft</option>
                <option value="published">Published</option>
              </select>
            </div>

            <div className="flex items-center justify-between p-3 border rounded">
              <label className="font-medium">Featured</label>
              <input
                type="checkbox"
                {...register("featured")}
                disabled={loading}
                className="h-4 w-4"
              />
            </div>
          </div>

          <div className="flex justify-end gap-4">
            <button
              type="button"
              className="px-4 py-2 border rounded text-gray-600 hover:bg-gray-100"
              disabled={loading}
              onClick={() => router.push("/admin/pages")}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
              disabled={loading}
            >
              {loading ? "Saving..." : initialData ? "Update Page" : "Create Page"}
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
