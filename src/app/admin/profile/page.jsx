"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

const profileFormSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email(),
  bio: z.string().max(500).optional(),
});

const passwordFormSchema = z
  .object({
    currentPassword: z.string().min(8),
    newPassword: z.string().min(8),
    confirmPassword: z.string().min(8),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export default function ProfilePage() {
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("general");

  const profileForm = useForm({
    resolver: zodResolver(profileFormSchema),
    defaultValues: {
      name: "Admin User",
      email: "admin@example.com",
      bio: "Administrator for the website. Manages content and users.",
    },
  });

  const passwordForm = useForm({
    resolver: zodResolver(passwordFormSchema),
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  });

  const onProfileSubmit = async (data) => {
    setLoading(true);
    try {
      await new Promise((r) => setTimeout(r, 1000));
      toast.success("Profile updated!");
    } catch {
      toast.error("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  const onPasswordSubmit = async (data) => {
    setLoading(true);
    try {
      await new Promise((r) => setTimeout(r, 1000));
      toast.success("Password updated!");
      passwordForm.reset();
    } catch {
      toast.error("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div className="bg-white shadow rounded-lg p-6 mb-4">
        <h1 className="text-2xl font-bold">My Profile</h1>
        <p className="text-gray-500">Manage your account settings.</p>
      </div>

      <hr className="border border-gray-200" />

      <div className="grid md:grid-cols-4 gap-6">
        {/* Profile Info Card */}
        <div className="bg-white shadow rounded-lg p-6 text-center">
          <div className="mx-auto w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center text-2xl font-semibold text-gray-600">
            AD
          </div>
          <h2 className="mt-4 text-lg font-semibold">Admin User</h2>
          <p className="text-sm text-gray-500">admin@example.com</p>
          <p className="text-sm text-gray-400 mt-1">Administrator</p>
        </div>

        {/* Tabs & Forms */}
        <div className="md:col-span-3">
          {/* Tabs */}
          <div className="flex border-b mb-4">
            {["general", "password"].map((tab) => (
              <button
                key={tab}
                className={`px-4 py-2 font-medium text-sm border-b-2 ${
                  activeTab === tab
                    ? "border-blue-600 text-blue-600"
                    : "border-transparent text-gray-500"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab === "general" ? "General Info" : "Password"}
              </button>
            ))}
          </div>

          {/* General Info Form */}
          {activeTab === "general" && (
            <form
              onSubmit={profileForm.handleSubmit(onProfileSubmit)}
              className="bg-white p-6 rounded-lg shadow space-y-4"
            >
              <h2 className="text-lg font-semibold">General Information</h2>
              <div>
                <label className="block text-sm font-medium">Name</label>
                <input
                  className="mt-1 block w-full border rounded px-3 py-2 text-sm"
                  disabled={loading}
                  {...profileForm.register("name")}
                />
                <p className="text-red-500 text-sm mt-1">
                  {profileForm.formState.errors.name?.message}
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium">Email</label>
                <input
                  type="email"
                  className="mt-1 block w-full border rounded px-3 py-2 text-sm"
                  disabled={loading}
                  {...profileForm.register("email")}
                />
                <p className="text-red-500 text-sm mt-1">
                  {profileForm.formState.errors.email?.message}
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium">Bio</label>
                <textarea
                  rows={4}
                  className="mt-1 block w-full border rounded px-3 py-2 text-sm"
                  disabled={loading}
                  {...profileForm.register("bio")}
                />
                <p className="text-red-500 text-sm mt-1">
                  {profileForm.formState.errors.bio?.message}
                </p>
              </div>

              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded text-sm"
                disabled={loading}
              >
                {loading ? "Saving..." : "Save Changes"}
              </button>
            </form>
          )}

          {/* Password Form */}
          {activeTab === "password" && (
            <form
              onSubmit={passwordForm.handleSubmit(onPasswordSubmit)}
              className="bg-white p-6 rounded-lg shadow space-y-4"
            >
              <h2 className="text-lg font-semibold">Change Password</h2>

              <div>
                <label className="block text-sm font-medium">Current Password</label>
                <input
                  type="password"
                  className="mt-1 block w-full border rounded px-3 py-2 text-sm"
                  disabled={loading}
                  {...passwordForm.register("currentPassword")}
                />
                <p className="text-red-500 text-sm mt-1">
                  {passwordForm.formState.errors.currentPassword?.message}
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium">New Password</label>
                <input
                  type="password"
                  className="mt-1 block w-full border rounded px-3 py-2 text-sm"
                  disabled={loading}
                  {...passwordForm.register("newPassword")}
                />
                <p className="text-red-500 text-sm mt-1">
                  {passwordForm.formState.errors.newPassword?.message}
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium">Confirm Password</label>
                <input
                  type="password"
                  className="mt-1 block w-full border rounded px-3 py-2 text-sm"
                  disabled={loading}
                  {...passwordForm.register("confirmPassword")}
                />
                <p className="text-red-500 text-sm mt-1">
                  {passwordForm.formState.errors.confirmPassword?.message}
                </p>
              </div>

              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded text-sm"
                disabled={loading}
              >
                {loading ? "Updating..." : "Update Password"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
