"use client";

import { useMemo, useRef, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import ImageUpload from "@/components/shared/image-upload";
import axios from "axios";
import JoditEditor from "jodit-react";

const formSchema = z.object({
  title: z.string().min(5).max(100),
  slug: z
    .string()
    .min(5)
    .max(100)
    .regex(/^[a-z0-9-]+$/),
  content: z.string().min(50),
  category: z.string(),
  status: z.enum(["published", "draft"]),
  featured: z.boolean().default(false),
  image: z.string().optional(),
  metaTitle: z.string().max(60).optional(),
  metaDescription: z.string().max(160).optional(),
  metaKeywords: z.string().optional(),
  ogTitle: z.string().optional(),
  ogDescription: z.string().optional(),
  ogImage: z.string().optional(),
  twitterTitle: z.string().optional(),
  twitterDescription: z.string().optional(),
  twitterImage: z.string().optional(),
});

export default function BlogForm({ initialData }) {
  initialData = { ...initialData, category: initialData?.category?._id };
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const editor = useRef(null);
  const [content, setContent] = useState(initialData?.content || "");

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get("/api/blogs-category");
        const data = response.data;
        setCategories(data);
      } catch (error) {
        console.error("Failed to load categories", error);
        toast.error("Failed to load categories");
      }
    };
    fetchCategories();
  }, []);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: initialData || {
      title: "",
      slug: "",
      content: "",
      category: "",
      status: "draft",
      featured: false,
      image: "",
      metaTitle: "",
      metaDescription: "",
      metaKeywords: "",
      ogTitle: "",
      ogDescription: "",
      ogImage: "",
      twitterTitle: "",
      twitterDescription: "",
      twitterImage: "",
    },
  });

  useEffect(() => {
    if (initialData?.category) {
      form.setValue("category", initialData?.category);
    }

    if (initialData?.image) {
      form.setValue("image", initialData?.image?.url);
    }
  }, []);

  const onSubmit = async (data) => {
    data.event?.preventDefault();
    console.log("Form data before submission:", data);
    try {
      setLoading(true);

      const submitData = {
        ...data,
        content: content || data.content,
      };

      console.log("Final submit data:", submitData);

      let response;
      if (initialData?._id) {
        response = await axios.put(`/api/blogs/${initialData._id}`, submitData);
      } else {
        response = await axios.post("/api/blogs", submitData);
      }

      console.log("API Response:", response.data);

      toast.success(
        initialData
          ? "Blog updated successfully!"
          : "Blog created successfully!"
      );
      //router.push("/admin/blogs");
    } catch (error) {
      console.error("API Error:", error);
      const errorMessage =
        error.response?.data?.message ||
        error.response?.data?.error ||
        error.message ||
        "Something went wrong. Please try again.";
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const autoGenerateSlug = (e) => {
    const title = e.target.value;

    const slug = title
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .trim();

    form.setValue("slug", slug);

    if (!form.getValues("metaTitle")) form.setValue("metaTitle", title);
    if (!form.getValues("ogTitle")) form.setValue("ogTitle", title);
    if (!form.getValues("twitterTitle")) form.setValue("twitterTitle", title);
  };

  const config = useMemo(
    () => ({
      height: 400,
      readonly: false,
      placeholder: "Start typing...",
    }),
    []
  );

  const handleContentChange = (newContent) => {
    setContent(newContent);
    form.setValue("content", newContent);
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white shadow rounded p-6 space-y-4">
            <div>
              <label className="block text-sm font-medium">Title</label>
              <input
                type="text"
                {...form.register("title")}
                onChange={(e) => {
                  form.setValue("title", e.target.value);
                  autoGenerateSlug(e);
                }}
                className="mt-1 w-full rounded border px-3 py-2"
                disabled={loading}
              />
              {form.formState.errors.title && (
                <p className="text-red-500 text-sm mt-1">
                  {form.formState.errors.title.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium">Slug</label>
              <input
                type="text"
                {...form.register("slug")}
                className="mt-1 w-full rounded border px-3 py-2"
                disabled={loading}
              />
              {form.formState.errors.slug && (
                <p className="text-red-500 text-sm mt-1">
                  {form.formState.errors.slug.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium">Content</label>
              <JoditEditor
                ref={editor}
                value={content}
                config={config}
                tabIndex={1}
                onBlur={(newContent) => handleContentChange(newContent)}
                onChange={(newContent) => handleContentChange(newContent)}
              />
              {form.formState.errors.content && (
                <p className="text-red-500 text-sm mt-1">
                  {form.formState.errors.content.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium">
                Featured Image
              </label>
              <ImageUpload
                value={form.watch("image")}
                onChange={(val) => form.setValue("image", val)}
                disabled={loading}
              />
              {form.formState.errors.image && (
                <p className="text-red-500 text-sm mt-1">
                  {form.formState.errors.image.message}
                </p>
              )}
            </div>
          </div>

          <div className="bg-white shadow rounded p-6 space-y-4">
            <h3 className="text-lg font-semibold">SEO Settings</h3>
            <input
              placeholder="Meta Title"
              {...form.register("metaTitle")}
              className="w-full border rounded px-3 py-2"
              disabled={loading}
            />
            <textarea
              placeholder="Meta Description"
              {...form.register("metaDescription")}
              rows={2}
              className="w-full border rounded px-3 py-2"
              disabled={loading}
            />
            <input
              placeholder="Meta Keywords"
              {...form.register("metaKeywords")}
              className="w-full border rounded px-3 py-2"
              disabled={loading}
            />
            <h4 className="font-medium">Open Graph</h4>
            <input
              placeholder="OG Title"
              {...form.register("ogTitle")}
              className="w-full border rounded px-3 py-2"
              disabled={loading}
            />
            <textarea
              placeholder="OG Description"
              {...form.register("ogDescription")}
              rows={2}
              className="w-full border rounded px-3 py-2"
              disabled={loading}
            />
            <input
              placeholder="OG Image URL"
              {...form.register("ogImage")}
              className="w-full border rounded px-3 py-2"
              disabled={loading}
            />
            <h4 className="font-medium">Twitter Card</h4>
            <input
              placeholder="Twitter Title"
              {...form.register("twitterTitle")}
              className="w-full border rounded px-3 py-2"
              disabled={loading}
            />
            <textarea
              placeholder="Twitter Description"
              {...form.register("twitterDescription")}
              rows={2}
              className="w-full border rounded px-3 py-2"
              disabled={loading}
            />
            <input
              placeholder="Twitter Image URL"
              {...form.register("twitterImage")}
              className="w-full border rounded px-3 py-2"
              disabled={loading}
            />
          </div>
        </div>

        <div className="space-y-6 sticky top-0 self-start">
          <div className="bg-white shadow rounded p-6 space-y-4">
            <div>
              <label className="block text-sm font-medium">Status</label>
              <select
                {...form.register("status")}
                className="w-full border rounded px-3 py-2"
                disabled={loading}
              >
                <option value="draft">Draft</option>
                <option value="published">Published</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium">Category</label>
              <select
                {...form.register("category")}
                className="w-full border rounded px-3 py-2"
                disabled={loading}
              >
                <option value="">Select a category</option>
                {categories.map((c) => (
                  <option key={c._id} value={c._id}>
                    {c.name}
                  </option>
                ))}
              </select>
              {form.formState.errors.category && (
                <p className="text-red-500 text-sm mt-1">
                  Category is required
                </p>
              )}
            </div>
            <div className="flex items-center justify-between border rounded p-3">
              <span className="text-sm font-medium">Featured</span>
              <input
                type="checkbox"
                {...form.register("featured")}
                className="w-5 h-5"
                disabled={loading}
              />
            </div>
          </div>

          <div className="flex justify-end gap-x-2">
            <button
              type="button"
              onClick={() => router.push("/admin/blogs")}
              disabled={loading}
              className="px-4 py-2 border rounded hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
            >
              {loading
                ? "Saving..."
                : initialData
                ? "Update Blog"
                : "Create Blog"}
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
