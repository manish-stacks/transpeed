import { AreaChartComponent, BarChartComponent } from "@/components/admin/dashboard/chart-component";
import RecentActivity from "@/components/admin/dashboard/recent-activity";
import StatsCard from "@/components/admin/dashboard/stats-card";
import { Newspaper, PieChart, Users, FileText, PlusCircle, Upload, MessageSquare } from "lucide-react";

export default function DashboardPage() {
  const statsData = [
    { title: "Total Blogs", value: "142", icon: Newspaper, trend: "up", trendValue: "12%" },
    { title: "Total Pages", value: "24", icon: FileText, trend: "up", trendValue: "4%" },
    { title: "Total Enquiries", value: "89", icon: Users, trend: "down", trendValue: "2%" },
    { title: "Media Files", value: "562", icon: PieChart, trend: "up", trendValue: "9%" },
  ];

  const activities = [
    { user: "Admin", action: "published a new blog post", time: "2 hours ago", userAvatar: "" },
    { user: "John Doe", action: "updated the About Us page", time: "5 hours ago", userAvatar: "" },
    { user: "Jane Smith", action: "uploaded 5 new media files", time: "Yesterday at 12:42 PM", userAvatar: "" },
    { user: "Admin", action: "responded to an enquiry", time: "Yesterday at 10:30 AM", userAvatar: "" },
    { user: "Mark Wilson", action: "created a new blog category", time: "2 days ago", userAvatar: "" },
  ];

  const trafficData = [
    { name: "Jan", visitors: 4000 },
    { name: "Feb", visitors: 3000 },
    { name: "Mar", visitors: 5000 },
    { name: "Apr", visitors: 4780 },
    { name: "May", visitors: 5890 },
    { name: "Jun", visitors: 4390 },
    { name: "Jul", visitors: 6490 },
    { name: "Aug", visitors: 5300 },
    { name: "Sep", visitors: 7200 },
    { name: "Oct", visitors: 8500 },
    { name: "Nov", visitors: 7800 },
    { name: "Dec", visitors: 9000 },
  ];

  const contentData = [
    { name: "Jan", blogs: 5, pages: 2 },
    { name: "Feb", blogs: 8, pages: 1 },
    { name: "Mar", blogs: 12, pages: 3 },
    { name: "Apr", blogs: 7, pages: 0 },
    { name: "May", blogs: 15, pages: 4 },
    { name: "Jun", blogs: 10, pages: 1 },
  ];

  return (
    <div className="p-6 bg-gray-50 dark:bg-gray-800">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
        {statsData.map((stat, index) => (
          <StatsCard key={index} {...stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-6">
        <div className="lg:col-span-2">
          <AreaChartComponent data={trafficData} title="Website Traffic" dataKey="visitors" />
        </div>
        <div className="lg:col-span-2">
          <BarChartComponent data={contentData} title="Content Creation" />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <RecentActivity activities={activities} />

        <div className="bg-white dark:bg-gray-900 border rounded-lg shadow-sm p-4 col-span-1">
          <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
          <div className="space-y-4">
            <button
              className="w-full flex items-center justify-start gap-2 border rounded-md px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800"
              //onClick={() => (window.location.href = "/admin/blogs/add")}
            >
              <PlusCircle className="h-4 w-4" />
              Add New Blog Post
            </button>
            <button
              className="w-full flex items-center justify-start gap-2 border rounded-md px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800"
             // onClick={() => (window.location.href = "/admin/pages/add")}
            >
              <PlusCircle className="h-4 w-4" />
              Create New Page
            </button>
            <button
              className="w-full flex items-center justify-start gap-2 border rounded-md px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800"
             // onClick={() => (window.location.href = "/admin/media")}
            >
              <Upload className="h-4 w-4" />
              Upload Media
            </button>
            <button
              className="w-full flex items-center justify-start gap-2 border rounded-md px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800"
             // onClick={() => (window.location.href = "/admin/enquiry")}
            >
              <MessageSquare className="h-4 w-4" />
              View Enquiries
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
