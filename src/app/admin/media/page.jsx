"use client";

import { useState, useEffect } from "react";
import { toast } from "sonner";
import { getMedia } from "@/lib/data-utils";
import {
  Copy,
  Download,
  File,
  FilePlus,
  Image,
  MoreHorizontal,
  Trash,
  Upload,
} from "lucide-react";

export default function MediaPage() {
  const [media, setMedia] = useState([]);
  const [loading, setLoading] = useState(true);
  const [uploadDialogOpen, setUploadDialogOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [mediaToDelete, setMediaToDelete] = useState(null);
  const [view, setView] = useState("grid");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const fetchMedia = async () => {
      try {
        const data = await getMedia();
        setMedia(data);
      } catch (error) {
        toast.error("Failed to load media");
      } finally {
        setLoading(false);
      }
    };
    fetchMedia();
  }, []);

  const handleDelete = (mediaId) => {
    setMediaToDelete(mediaId);
    setDeleteDialogOpen(true);
  };

  const confirmDelete = () => {
    setTimeout(() => {
      setMedia(media.filter((item) => item.id !== mediaToDelete));
      toast.success("Media deleted successfully");
      setDeleteDialogOpen(false);
    }, 500);
  };

  const handleUpload = (e) => {
    e.preventDefault();
    const demoFiles = [
      {
        id: media.length + 1,
        name: "new-image.jpg",
        url: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg",
        type: "image/jpeg",
        size: "1.5 MB",
        dimensions: "1920x1080",
        uploadedBy: "Admin",
        uploadedOn: new Date().toISOString().split("T")[0],
      },
    ];
    setMedia([...demoFiles, ...media]);
    setUploadDialogOpen(false);
    toast.success("Media uploaded successfully");
  };

  const filteredMedia =
    filter === "all"
      ? media
      : filter === "images"
      ? media.filter((item) => item.type.startsWith("image"))
      : media.filter((item) => !item.type.startsWith("image"));

  const getFileIcon = (type) => {
    return <File className="h-6 w-6" />;
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6 bg-white p-4 rounded shadow">
        <div>
          <h1 className="text-2xl font-semibold">Media Library</h1>
          <p className="text-sm text-gray-500">
            Manage your media files and images
          </p>
        </div>
        <button
          onClick={() => setUploadDialogOpen(true)}
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          <Upload className="w-4 h-4" /> Upload Media
        </button>
      </div>

      <div className="flex justify-between items-center mb-4 bg-white p-4 rounded shadow">
        <div className="flex gap-2">
          {["all", "images", "documents"].map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`px-3 py-1.5 rounded ${
                filter === tab
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700"
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => setView("grid")}
            className={`p-2 rounded ${
              view === "grid" ? "bg-blue-600 text-white" : "bg-gray-200"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h4v4H4zM10 6h4v4h-4zM16 6h4v4h-4zM4 12h4v4H4zM10 12h4v4h-4zM16 12h4v4h-4z"
              />
            </svg>
          </button>
          <button
            onClick={() => setView("list")}
            className={`p-2 rounded ${
              view === "list" ? "bg-blue-600 text-white" : "bg-gray-200"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {view === "grid" ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredMedia.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded shadow overflow-hidden"
            >
              <div className="aspect-square bg-gray-100 flex justify-center items-center">
                {item.type.startsWith("image") ? (
                  <img
                    src={item.url}
                    alt={item.name}
                    className="object-cover w-full h-full"
                  />
                ) : (
                  getFileIcon(item.type)
                )}
              </div>
              <div className="p-3 flex justify-between items-center">
                <div>
                  <p className="font-medium text-sm truncate">{item.name}</p>
                  <p className="text-xs text-gray-500">{item.size}</p>
                </div>
                <div className="flex mt-1 w-32">
                  <button
                    className="flex items-center px-3 py-2 text-sm w-full hover:bg-gray-100"
                    onClick={() => toast.success("URL copied to clipboard")}
                  >
                    <Copy className="w-4 h-4 mr-2" />
                  </button>
                  <button className="flex items-center px-3 py-2 text-sm w-full hover:bg-gray-100">
                    <Download className="w-4 h-4 mr-2" />
                  </button>
                  <hr />
                  <button
                    className="flex items-center px-3 py-2 text-sm w-full text-red-600 hover:bg-red-50"
                    onClick={() => handleDelete(item.id)}
                  >
                    <Trash className="w-4 h-4 mr-2" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="space-y-2">
          {filteredMedia.map((item) => (
            <div
              key={item.id}
              className="bg-white p-3 rounded shadow flex justify-between items-center"
            >
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 flex items-center justify-center bg-gray-200 rounded">
                  {getFileIcon(item.type)}
                </div>
                <div>
                  <p className="font-medium text-sm">{item.name}</p>
                  <p className="text-xs text-gray-500">
                    {item.size} • Uploaded on {item.uploadedOn}
                  </p>
                </div>
              </div>
              <button
                onClick={() => handleDelete(item.id)}
                className="text-sm text-red-600 hover:underline"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}

      {uploadDialogOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg w-full max-w-md">
            <h2 className="text-lg font-bold mb-2">Upload Media</h2>
            <p className="text-sm text-gray-500 mb-4">
              Upload images, documents, and other media files to your library.
            </p>
            <form onSubmit={handleUpload}>
              <div className="border-2 border-dashed p-6 text-center rounded mb-4">
                <FilePlus className="h-8 w-8 mx-auto text-gray-400" />
                <p className="mt-2 text-sm">Click to upload or drag and drop</p>
                <p className="text-xs text-gray-500">
                  JPG, PNG, GIF, PDF up to 10MB
                </p>
                <input type="file" className="hidden" />
              </div>
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setUploadDialogOpen(false)}
                  className="px-4 py-2 bg-gray-200 rounded"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded"
                >
                  Upload
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {deleteDialogOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg w-full max-w-sm text-center">
            <h2 className="text-lg font-bold mb-2">Are you sure?</h2>
            <p className="text-sm text-gray-500 mb-4">
              This action will permanently delete the file.
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => setDeleteDialogOpen(false)}
                className="px-4 py-2 bg-gray-200 rounded"
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                className="px-4 py-2 bg-red-600 text-white rounded"
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
