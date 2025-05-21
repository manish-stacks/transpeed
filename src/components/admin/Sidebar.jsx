import React from "react";
import {
  Bell,
  Calendar,
  FileText,
  LayoutDashboard,
  LogOut,
  Settings,
  User,
  X,
} from "lucide-react";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/admin/dashboard" },
  
  {
    icon: FileText,
    label: "BlogsNews & Insights",
    children: [
      { label: "Blogs Category", path: "/admin/blogs-category" },
      { label: "Blogs", path: "/admin/blogs" },
    ],
  },
  { icon: Calendar, label: "Pages", path: "/admin/pages" },
//   { icon: Users, label: "Patients", path: "/admin/patients" },
//   { icon: MessageSquare, label: "Schedule Timings", path: "/admin/schedule" },
  { icon: Bell, label: "Media / Gallery", path: "/admin/media" },
  { icon: User, label: "My Profile", path: "/admin/profile" },
  { icon: Settings, label: "Settings", path: "/admin/settings" },
];

const Sidebar = ({ sidebarOpen, setSidebarOpen, logout }) => {
  const pathname = usePathname();
  return (
    <>
      <div
        className={`fixed inset-y-0 left-0 z-40 w-64 bg-white ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:relative lg:translate-x-0 transition-transform duration-300 ease-in-out`}
      >
        <div className="h-16 flex items-center justify-between px-4 shadow-sm">
          <div className="text-2xl font-bold text-indigo-900">
            <span className="text-indigo-900 tracking-wider">MediDash</span>
          </div>
          <button className="lg:hidden" onClick={() => setSidebarOpen(false)}>
            <X className="h-6 w-6" />
          </button>
        </div>

        <nav className="mt-6">
          <div className="space-y-1">
            {navigation.map((link) => {
              const Icon = link.icon;
              const isActive = pathname === link.path;

              if (link.children) {
                const isParentActive = link.children.some(
                  (child) => pathname === child.path
                );

                return (
                  <div key={link.label} className="space-y-1">
                    <div
                      className={`flex items-center px-6 py-3 text-sm font-medium transition-colors cursor-default ${
                        isParentActive
                          ? "text-indigo-600 bg-indigo-50 border-r-2 border-indigo-600"
                          : "text-gray-600 hover:text-indigo-600 hover:bg-gray-50"
                      }`}
                    >
                      {Icon && <Icon className="w-5 h-5 mr-3" />}
                      {link.label}
                    </div>
                    <div className="pl-12 space-y-4 py-3">
                      {link.children.map((child) => {
                        const isChildActive = pathname === child.path;
                        return (
                          <Link
                            key={child.path}
                            href={child.path}
                            className={`block text-sm transition-colors ${
                              isChildActive
                                ? "text-indigo-600 font-medium"
                                : "text-gray-600 hover:text-indigo-600"
                            }`}
                          >
                            {child.label}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`flex items-center px-6 py-3 text-sm font-medium transition-colors ${
                    isActive
                      ? "text-indigo-600 bg-indigo-50 border-r-2 border-indigo-600"
                      : "text-gray-600 hover:text-indigo-600 hover:bg-gray-50"
                  }`}
                >
                  {Icon && <Icon className="w-5 h-5 mr-3" />}
                  {link.label}
                </Link>
              );
            })}
          </div>
        </nav>
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <button
            onClick={() => logout()}
            className="flex items-center px-6 py-3 text-sm font-medium text-gray-600 hover:text-indigo-600 hover:bg-gray-50 w-full"
          >
            <LogOut className="w-5 h-5 mr-3" />
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
