"use client";

import { use, useEffect, useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import axios from "axios";

const seoFormSchema = z.object({
  siteName: z.string().min(1, "Site name is required"),
  siteDescription: z.string().min(1, "Site description is required"),
  siteKeywords: z.string(),
  ogTitle: z.string(),
  ogDescription: z.string(),
  ogImage: z.string().optional(),
  twitterHandle: z.string(),
  headScript: z.string(),
  bodyScript: z.string(),
  footerScript: z.string(),
});

export default function SettingsPage() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const response = await axios.get("/api/settings");
        if (response.status === 200) {
          // Update the form values after data is fetched
          seoForm.reset({
            siteName: response.data.siteName || "My Website",
            siteDescription:
              response.data.siteDescription || "This is my website",
            siteKeywords: response.data.siteKeywords || "",
            ogTitle: response.data.ogTitle || "My Website",
            ogDescription: response.data.ogDescription || "This is my website",
            ogImage: response.data.ogImage || "",
            twitterHandle: response.data.twitterHandle || "",
            headScript: response.data.headScript || "",
            bodyScript: response.data.bodyScript || "",
            footerScript: response.data.footerScript || "",
          });
        } else {
          throw new Error("Failed to fetch settings");
        }
      } catch (error) {
        console.error("Fetch error:", error);
        toast.error("Failed to load settings");
      }
    };

    fetchSettings();
  }, []);

  const seoForm = useForm({
    resolver: zodResolver(seoFormSchema),
    defaultValues: {
      siteName: "",
      siteDescription: "",
      siteKeywords: "",
      ogTitle: "",
      ogDescription: "",
      ogImage: "",
      twitterHandle: "",
      headScript: "",
      bodyScript: "",
      footerScript: "",
    },
  });

  const onSeoSubmit = async (data) => {
    try {
      setLoading(true);

      const response = await axios.post("/api/settings", data);
      if (response.status !== 200) {
        throw new Error("Failed to update settings");
      }

      toast.success("SEO settings updated successfully!");
    } catch {
      toast.error("Failed to update SEO settings");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div className="bg-white shadow-md rounded-md p-4">
        <h1 className="text-2xl font-bold">Settings</h1>
        <p className="text-gray-500">
          Manage your website settings and configurations
        </p>
      </div>

      <div className="border-b border-gray-200" />

      <div className="bg-white shadow-md rounded-md p-4">
        <h2 className="text-xl font-semibold">SEO Settings</h2>
        <form
          onSubmit={seoForm.handleSubmit(onSeoSubmit)}
          className="mt-4 space-y-4"
        >
          <div>
            <label className="block text-sm font-medium">Site Name</label>
            <input
              {...seoForm.register("siteName")}
              disabled={loading}
              className="mt-1 w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">
              Site Description
            </label>
            <textarea
              {...seoForm.register("siteDescription")}
              disabled={loading}
              className="mt-1 w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Keywords</label>
            <input
              {...seoForm.register("siteKeywords")}
              disabled={loading}
              className="mt-1 w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
            />
            <p className="text-xs text-gray-500">
              Separate keywords with commas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium">OG Title</label>
              <input
                {...seoForm.register("ogTitle")}
                disabled={loading}
                className="mt-1 w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">
                OG Description
              </label>
              <textarea
                {...seoForm.register("ogDescription")}
                disabled={loading}
                className="mt-1 w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">OG Image URL</label>
              <input
                {...seoForm.register("ogImage")}
                disabled={loading}
                className="mt-1 w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">
                Twitter Handle
              </label>
              <input
                {...seoForm.register("twitterHandle")}
                disabled={loading}
                className="mt-1 w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Head Script</label>
              <textarea
                {...seoForm.register("headScript")}
                rows={4}
                placeholder="Add your script here"
                disabled={loading}
                className="mt-1 w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Body Script</label>
              <textarea
                {...seoForm.register("bodyScript")}
                rows={4}
                placeholder="Add your script here"
                disabled={loading}
                className="mt-1 w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Footer Script</label>
              <textarea
                {...seoForm.register("footerScript")}
                rows={4}
                placeholder="Add your script here"
                disabled={loading}
                className="mt-1 w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
          >
            {loading && (
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
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
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8H4z"
                ></path>
              </svg>
            )}
            Save SEO Settings
          </button>
        </form>
      </div>
    </div>
  );
}
