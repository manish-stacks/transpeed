"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import axios from "axios";

const formSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Category name must be at least 2 characters." })
    .max(50, { message: "Category name must be less than 50 characters." }),
  slug: z
    .string()
    .min(2, { message: "Slug must be at least 2 characters." })
    .max(50, { message: "Slug must be less than 50 characters." })
    .regex(/^[a-z0-9-]+$/, {
      message: "Slug can only contain lowercase letters, numbers, and hyphens.",
    }),
});

export default function CategoryForm({ initialData }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  // console.log('initialData',initialData);
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: initialData || { name: "", slug: "" },
  });

  const onSubmit = async (data) => {
    // console.log('data',data);
    try {
      setLoading(true);

      const response = await axios({
        method: initialData ? "put" : "post",
        url: "/api/blogs-category",
        headers: {
          "Content-Type": "application/json",
        },
        data: initialData ? { ...data, id: initialData._id } : data,
      });

      // console.log(response.data);

      toast.success(
        initialData
          ? "Category updated successfully!"
          : "Category created successfully!"
      );
      router.push("/admin/blogs-category");
    } catch (err) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleNameChange = (e) => {
    const name = e.target.value;
    const slug = name
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-");
    setValue("slug", slug);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Name Field */}
      <div>
        <label className="block font-medium mb-1">Category Name</label>
        <input
          type="text"
          placeholder="e.g. Technology"
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          disabled={loading}
          {...register("name")}
          onChange={(e) => {
            register("name").onChange(e);
            handleNameChange(e);
          }}
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
        )}
      </div>

      {/* Slug Field */}
      <div>
        <label className="block font-medium mb-1">Slug</label>
        <input
          type="text"
          placeholder="e.g. technology"
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          disabled={loading}
          {...register("slug")}
        />
        {errors.slug && (
          <p className="text-red-500 text-sm mt-1">{errors.slug.message}</p>
        )}
      </div>

      {/* Buttons */}
      <div className="flex justify-end gap-3">
        <button
          type="button"
          onClick={() => router.push("/admin/blogs-category")}
          className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-black rounded"
          disabled={loading}
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 flex items-center"
          disabled={loading}
        >
          {loading && (
            <svg
              className="animate-spin mr-2 h-4 w-4 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              />
            </svg>
          )}
          {initialData ? "Update Category" : "Create Category"}
        </button>
      </div>
    </form>
  );
}
