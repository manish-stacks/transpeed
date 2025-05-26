"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { getEnquiries } from "@/lib/data-utils";
import { toast } from "sonner";
import { Edit, Eye, MoreHorizontal, Trash } from "lucide-react";

export default function EnquiryPage() {
  const router = useRouter();
  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [enquiryToDelete, setEnquiryToDelete] = useState(null);

  useEffect(() => {
    const fetchEnquiries = async () => {
      try {
        const data = await getEnquiries();
        setEnquiries(data);
      } catch (error) {
        toast.error("Failed to load enquiries");
      } finally {
        setLoading(false);
      }
    };
    fetchEnquiries();
  }, []);

  const handleDelete = (enquiryId) => {
    setEnquiryToDelete(enquiryId);
    setDeleteDialogOpen(true);
  };

  const confirmDelete = () => {
    setTimeout(() => {
      setEnquiries(enquiries.filter((e) => e.id !== enquiryToDelete));
      toast.success("Enquiry deleted successfully");
      setDeleteDialogOpen(false);
    }, 500);
  };

  const getStatusBadge = (status) => {
    const baseClass = "px-2 py-1 rounded text-xs font-medium";
    switch (status) {
      case "new":
        return (
          <span className={`${baseClass} bg-blue-100 text-blue-700`}>New</span>
        );
      case "in-progress":
        return (
          <span className={`${baseClass} bg-yellow-100 text-yellow-700`}>
            In Progress
          </span>
        );
      case "completed":
        return (
          <span className={`${baseClass} bg-green-100 text-green-700`}>
            Completed
          </span>
        );
      default:
        return (
          <span className={`${baseClass} bg-gray-100 text-gray-700`}>
            {status}
          </span>
        );
    }
  };

  return (
    <div className="p-6">
      <div className="mb-6 bg-white p-4 rounded shadow">
        <h1 className="text-2xl font-bold">Enquiries</h1>
        <p className="text-gray-600">
          Manage and respond to customer enquiries
        </p>
      </div>

      <div className="overflow-x-auto bg-white p-4 rounded shadow">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="p-3">Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">Subject</th>
              <th className="p-3">Date</th>
              <th className="p-3">Status</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {enquiries.map((enquiry) => (
              <tr key={enquiry.id} className="border-t">
                <td className="p-3">{enquiry.name}</td>
                <td className="p-3">{enquiry.email}</td>
                <td className="p-3">{enquiry.subject}</td>
                <td className="p-3">{enquiry.date}</td>
                <td className="p-3">{getStatusBadge(enquiry.status)}</td>
                <td className="p-3">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => router.push(`/admin/pages/${page.id}`)}
                      className="flex items-center  py-2 text-sm hover:bg-gray-100"
                    >
                      <Edit className="w-4 h-4 mr-2" />
                    </button>
                    <button
                      onClick={() => handleDelete(page.id)}
                      className="flex items-center  py-2 text-sm text-red-600 hover:bg-red-50"
                    >
                      <Trash className="w-4 h-4 mr-2" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            {!loading && enquiries.length === 0 && (
              <tr>
                <td colSpan="6" className="p-4 text-center text-gray-500">
                  No enquiries found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Confirmation Modal */}
      {deleteDialogOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white p-6 rounded shadow-lg max-w-md w-full">
            <h2 className="text-lg font-bold mb-2">Are you sure?</h2>
            <p className="text-gray-600 mb-4">
              This will permanently delete the enquiry.
            </p>
            <div className="flex justify-end gap-2">
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
