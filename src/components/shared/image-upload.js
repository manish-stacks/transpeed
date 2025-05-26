"use client";

import { useState, useRef } from "react";
import { ImageIcon, Trash, Upload } from "lucide-react";

export default function ImageUpload({ value, onChange, disabled }) {
  const [preview, setPreview] = useState(value);
  const fileInputRef = useRef(null);

  const handleUrlChange = (e) => {
    const url = e.target.value;
    setPreview(url);
    onChange(url);
  };

  // const handleFileChange = (e) => {
  //   const file = e.target.files[0];
  //   if (file) {
  //     const imageUrl = URL.createObjectURL(file); // blob URL
  //     setPreview(imageUrl);
  //     onChange(imageUrl); // OR upload to server and send real URL
  //     toast.success("Image uploaded successfully!");
  //   }
  // };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    try {
      

      const imageUrl = URL.createObjectURL(file); // blob URL
      setPreview(imageUrl);

      // Convert file to base64 data URI
      const base64 = await new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(file);
      });

      // Pass the base64 string to parent component
      onChange(base64);
    } catch (error) {
      console.error("Error converting file:", error);
    } 
  };

  const handleUpload = () => {
    fileInputRef.current?.click(); // trigger hidden file input
  };

  const handleRemove = () => {
    setPreview("");
    onChange("");
  };

  return (
    <div className="space-y-4">
      <div className="border rounded-md overflow-hidden bg-white shadow-sm">
        {preview ? (
          <div className="relative aspect-video w-full">
            <img
              src={preview.url || preview}
              alt="Preview"
              className="object-cover w-full h-full"
            />
            <button
              type="button"
              onClick={handleRemove}
              disabled={disabled}
              className="absolute top-2 right-2 bg-red-600 hover:bg-red-700 text-white p-2 rounded-full shadow-md disabled:opacity-50"
            >
              <Trash className="h-4 w-4" />
            </button>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-[200px] bg-gray-100 text-gray-500">
            <ImageIcon className="h-10 w-10 mb-2" />
            <p className="text-sm">No image selected</p>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {/* <input
          type="text"
          placeholder="Enter image URL"
          value={preview ? "" : preview}
          onChange={handleUrlChange}
          disabled={disabled}
          className="w-full border px-3 py-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"
        /> */}

        <div className="flex items-center gap-2">
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleFileChange}
            disabled={disabled}
            className="hidden"
          />
          <button
            type="button"
            onClick={handleUpload}
            disabled={disabled}
            className="inline-flex w-full items-center justify-center px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md text-sm font-medium disabled:opacity-50"
          >
            <Upload className="h-4 w-4 mr-2" />
            Upload Image
          </button>
        </div>
      </div>
    </div>
  );
}
