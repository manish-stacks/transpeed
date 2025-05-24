"use client";
import React, { useEffect, useState } from "react";
import {
  Search,
  Calendar,
  User,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Tag,
} from "lucide-react";
import Image from "next/image";
const img1 = "/images/logistic_banner1.png";
import { useParams } from "next/navigation";
import axios from "axios";

const BlogPostPage = () => {
  const params = useParams();
  const [blog, setBlog] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!params?.slug) return;

    const fetchBlog = async () => {
      try {
        console.log("Fetching blog...");
        setLoading(true);

        const [blogRes, catRes] = await Promise.all([
          axios.get(`/api/blogs/${params.slug}`),
          axios.get("/api/blogs-category"),
        ]);
        console.log("Blog and categories fetched successfully", catRes);

        setBlog(blogRes.data);
        setCategories(catRes.data);
      } catch (error) {
        console.error("Failed to fetch blog or categories:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [params?.slug]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p>Loading...</p>
      </div>
    );
  }

  console.log("blog", blog);
  console.log("categories", categories);

  const recentPosts = [
    {
      title: "The Definitive Guide To Supply Chain Management",
      date: "Mar 15, 2024",
      image: "/api/placeholder/80/60",
    },
    {
      title: "Key Industry Trends That Will Shape 2024",
      date: "Mar 12, 2024",
      image: "/api/placeholder/80/60",
    },
    {
      title: "Digital Transformation Best Practices",
      date: "Mar 10, 2024",
      image: "/api/placeholder/80/60",
    },
  ];

  const tags = [
    "Supply Chain",
    "Logistics",
    "Management",
    "Technology",
    "Business",
    "Innovation",
  ];

  return (
    <div className="min-h-screen bg-blue-100 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Hero Image */}
            <div className="relative mb-8">
              <Image
                src={img1}
                alt="Container shipping port"
                width={1200}
                height={800}
                className="w-full h-64 md:h-80 lg:h-96 object-cover rounded-2xl"
              />
              <div className="absolute bottom-4 left-4">
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Business
                </span>
              </div>
            </div>

            {/* Breadcrumb */}
            <nav className="text-sm mb-6">
              <span className="text-gray-500">Home</span>
              <span className="text-gray-400 mx-2">/</span>
              <span className="text-gray-500">Blog</span>
              <span className="text-gray-400 mx-2">/</span>
              <span className="text-blue-600 font-medium">Supply Chain</span>
            </nav>

            {/* Article Content */}
            <article className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6">
                <div className="flex items-center">
                  <User className="w-4 h-4 mr-2" />
                  <span>Admin</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>March 15, 2024</span>
                </div>
                <div className="flex items-center">
                  <Tag className="w-4 h-4 mr-2" />
                  <span>Supply Chain, Business</span>
                </div>
              </div>

              {/* Article Title */}
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                The Complete Guide to Modern Supply Chain Management and
                Logistics Optimization
              </h1>

              {/* Article Content */}
              <div className="prose max-w-none">
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Supply chain management has evolved dramatically over the past
                  decade, with technology playing an increasingly critical role
                  in optimizing operations and improving efficiency. In todays
                  interconnected global economy, businesses must navigate
                  complex networks of suppliers, manufacturers, and distributors
                  to deliver products to customers effectively.
                </p>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  Modern supply chain management encompasses everything from
                  procurement and inventory management to logistics and customer
                  service. Companies that excel in these areas often gain
                  significant competitive advantages through reduced costs,
                  improved customer satisfaction, and enhanced operational
                  resilience.
                </p>

                {/* Quote Block */}
                <blockquote className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8 rounded-r-lg">
                  <p className="text-lg font-medium text-gray-900 mb-2">
                    Logistics is the ball and chain of retailer existence.
                  </p>
                  <p className="text-gray-600 italic">— Warren Buffett</p>
                  <cite className="text-sm text-gray-500 block mt-2">
                    BUSINESS MAGNATE
                  </cite>
                </blockquote>

                {/* Content Section */}
                <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                  Negotiate with several carriers
                </h2>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  One of the most effective strategies for optimizing your
                  supply chain costs is to maintain relationships with multiple
                  carriers and negotiate competitive rates. This approach not
                  only helps you secure better pricing but also provides backup
                  options when your primary carrier faces capacity constraints
                  or service disruptions.
                </p>

                {/* Three Column Images */}
                <div className="grid md:grid-cols-3 gap-6 my-8">
                  <div className="space-y-3">
                    <Image
                      src={img1}
                      alt="Container shipping port"
                      width={1200}
                      height={800}
                      className="w-full h-40 object-cover rounded-lg"
                    />
                    <p className="text-sm text-gray-600">
                      Modern warehouse management systems help optimize
                      inventory tracking and reduce operational costs.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <Image
                      src={img1}
                      alt="Container shipping port"
                      width={1200}
                      height={800}
                      className="w-full h-40 object-cover rounded-lg"
                    />
                    <p className="text-sm text-gray-600">
                      Strategic logistics planning involves coordinating
                      multiple transportation modes for maximum efficiency.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <Image
                      src={img1}
                      alt="Container shipping port"
                      width={1200}
                      height={800}
                      className="w-full h-40 object-cover rounded-lg"
                    />
                    <p className="text-sm text-gray-600">
                      Advanced analytics provide insights into supply chain
                      performance and optimization opportunities.
                    </p>
                  </div>
                </div>

                {/* Key Points */}
                <div className="bg-gray-50 p-6 rounded-lg my-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Key Considerations:
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">
                        Evaluate carrier performance based on reliability, cost,
                        and service quality
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">
                        Establish long-term partnerships while maintaining
                        competitive alternatives
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">
                        Leverage technology to optimize routes and reduce
                        transportation costs
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">
                        Monitor and analyze shipping data to identify
                        improvement opportunities
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pt-8 mt-8 border-t border-gray-200 gap-4">
                <div>
                  <span className="text-gray-500 text-sm">
                    ← Previous Article
                  </span>
                  <p className="text-blue-600 font-medium hover:text-blue-700 cursor-pointer">
                    Digital Marketing Trends for 2024
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-gray-500 text-sm">Next Article →</span>
                  <p className="text-blue-600 font-medium hover:text-blue-700 cursor-pointer">
                    The Guide On How to Stop Overthinking
                  </p>
                </div>
              </div>
            </article>

            {/* Author/Contact Section */}
            <div className="bg-blue-900 text-white rounded-2xl p-6 md:p-8 mt-8">
              <div className="flex items-center space-x-4">
                <div className="bg-white p-3 rounded-full">
                  <span className="text-blue-900 font-bold text-xl">SM</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">Information</h3>
                  <p className="text-blue-100 mb-4">
                    We provide comprehensive logistics and supply chain
                    management consulting services to help businesses optimize
                    their operations and reduce costs. Our team of experts
                    brings decades of experience in transportation, warehousing,
                    and distribution optimization.
                  </p>
                  <div className="flex items-center space-x-4 text-sm">
                    <span className="flex items-center">
                      <Phone className="w-4 h-4 mr-2" />
                      +01245-6789
                    </span>
                    <span className="flex items-center">
                      <Mail className="w-4 h-4 mr-2" />
                      info@company.com
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Search */}
            <div className="bg-blue-600 p-6 rounded-2xl">
              <h3 className="text-white font-bold mb-4">Search</h3>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full p-3 pr-12 rounded-lg border-0 focus:ring-2 focus:ring-blue-300"
                />
                <Search className="absolute right-3 top-3 w-5 h-5 text-gray-400" />
              </div>
            </div>

            {/* Categories */}
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="font-bold text-gray-900 mb-4">Categories</h3>
              <div className="space-y-3">
                {categories.map((category, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0"
                  >
                    <span className="text-gray-700 hover:text-blue-600 cursor-pointer transition-colors">
                      {category.name}
                    </span>
                    <span className="text-gray-400 text-sm">
                      ({category?.count || 0})
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Posts */}
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="font-bold text-gray-900 mb-4">Recent Post</h3>
              <div className="space-y-4">
                {recentPosts.map((post, index) => (
                  <div key={index} className="flex space-x-3">
                    <Image
                      src={img1}
                      width={600}
                      height={400}
                      alt={post.title}
                      className="w-16 h-12 object-cover rounded-lg flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-medium text-gray-900 line-clamp-2 mb-1">
                        {post.title}
                      </h4>
                      <p className="text-xs text-gray-500">{post.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tag Cloud */}
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="font-bold text-gray-900 mb-4">Tag Cloud</h3>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-blue-100 hover:text-blue-700 cursor-pointer transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Contact Card */}
            <div className="bg-blue-900 text-white p-6 rounded-2xl">
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Phone className="w-8 h-8 text-blue-900" />
                </div>
                <h3 className="font-bold text-lg mb-2">+01245-6789</h3>
                <p className="text-blue-100 text-sm">
                  Contact us for consultation and support
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostPage;
