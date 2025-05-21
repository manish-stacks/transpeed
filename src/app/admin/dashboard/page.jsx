"use client";
import React, { useState, useRef, useEffect } from "react";
import {
  Calendar,
  FileText,
  Settings,
  Bell,
  User,
  Clock,
  LayoutDashboard,
  MessageSquare,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function PatientDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const pathname = usePathname();

  //   const session = await getServerSession(authOptions);

  // Log the session to check its contents
  // if (!session) {
  //   redirect("/login");
  // }

  const navigation = [
    { icon: LayoutDashboard, label: "Dashboard", path: "/patient/dashboard" },
    {
      icon: Calendar,
      label: "Appointments",
      path: "/patient-dashboard/appointments",
    },
    { icon: User, label: "My Profile", path: "/patient-dashboard/profile" },
    {
      icon: MessageSquare,
      label: "Messages",
      path: "/patient-dashboard/messages",
    },
    {
      icon: Bell,
      label: "Notifications",
      path: "/patient-dashboard/notifications",
    },
    {
      icon: FileText,
      label: "Medical Records",
      path: "/patient-dashboard/records",
    },
    { icon: Settings, label: "Settings", path: "/patient-dashboard/settings" },
  ];

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setProfileDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [dropdownRef]);

  return (
    <>
      {/* Main Content Area */}
      <div className="p-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-2xl shadow-lg p-4 flex items-center justify-between">
        <div>
          <p className="text-sm">Total Posts</p>
          <h2 className="text-2xl font-bold">120</h2>
        </div>
        <span className="text-3xl">📝</span>
      </div>

      <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-2xl shadow-lg p-4 flex items-center justify-between">
        <div>
          <p className="text-sm">Media Files</p>
          <h2 className="text-2xl font-bold">87</h2>
        </div>
        <span className="text-3xl">🖼️</span>
      </div>

      <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-2xl shadow-lg p-4 flex items-center justify-between">
        <div>
          <p className="text-sm">Users</p>
          <h2 className="text-2xl font-bold">16</h2>
        </div>
        <span className="text-3xl">👥</span>
      </div>

      <div className="bg-gradient-to-r from-gray-700 to-gray-900 text-white rounded-2xl shadow-lg p-4 flex items-center justify-between">
        <div>
          <p className="text-sm">Settings</p>
          <h2 className="text-2xl font-bold">Active</h2>
        </div>
        <span className="text-3xl">⚙️</span>
      </div>

      <div className="col-span-1 md:col-span-2 xl:col-span-4 bg-white rounded-2xl shadow-md p-6 dark:bg-gray-900">
        <h3 className="text-lg font-semibold mb-4 dark:text-white">Weekly Blog Activity</h3>
        <div className="w-full h-64 bg-gray-100 dark:bg-gray-800 flex items-center justify-center rounded-md text-gray-500 dark:text-gray-400">
          Chart Placeholder
        </div>
      </div>
    </div>
    </>
  );
}
