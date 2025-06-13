"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { getPageById } from "@/lib/data-utils";
import Heading from "@/components/shared/heading";
import PageForm from "@/components/admin/pages/page-form";

export default function EditPagePage() {
  const params = useParams();
  const [page, setPage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPage = async () => {
      try {
        const data = await getPageById(params.pageId);
        setPage(data);
      } catch (error) {
        console.error("Failed to fetch page:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPage();
  }, [params.pageId]);

  if (loading) {
    return (
      <div>
        <Heading title="Edit Page" description="Update an existing page" />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 animate-pulse">
          <div className="lg:col-span-2 space-y-6">
            <div className="h-80 w-full bg-gray-200 rounded" />
            <div className="h-40 w-full bg-gray-200 rounded" />
          </div>
          <div className="space-y-6">
            <div className="h-60 w-full bg-gray-200 rounded" />
            <div className="flex justify-end gap-x-2">
              <div className="h-10 w-24 bg-gray-200 rounded" />
              <div className="h-10 w-32 bg-gray-200 rounded" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Heading title="Edit Page" description="Update an existing page" />

      <PageForm initialData={page} />
    </div>
  );
}
