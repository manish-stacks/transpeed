"use client";
import React, { useEffect, useState } from "react";
import { Search, Calendar, User, Phone, Mail } from "lucide-react";
import Image from "next/image";
const img1 = "/images/logistic_banner1.png";
import { useParams } from "next/navigation";
import axios from "axios";
import Link from "next/link";

const BlogPostPage = ({ slug }) => {
   
  //   const params = useParams();
  const [blog, setBlog] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [recentPosts, setRecentPosts] = useState([]);
  const [previousBlog, setPreviousBlog] = useState(null);
  const [nextBlog, setNextBlog] = useState(null);

  useEffect(() => {
    if (!slug) return;

    const fetchBlog = async () => {
      try {
        console.log("Fetching blog...");
        setLoading(true);

        const [blogRes, catRes] = await Promise.all([
          axios.get(`/api/blogs/${slug}`),
          axios.get("/api/blogs-category"),
        ]);

        setBlog(blogRes.data.blog);
        setRecentPosts(blogRes.data.recentPosts);
        setPreviousBlog(blogRes.data.previousBlog);
        setNextBlog(blogRes.data.nextBlog);
        setCategories(catRes.data);
      } catch (error) {
        console.error("Failed to fetch blog or categories:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [slug]);

  console.log(previousBlog);
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p>Loading...</p>
      </div>
    );
  }

  // const recentPosts = [
  //   {
  //     title: "The Definitive Guide To Supply Chain Management",
  //     date: "Mar 15, 2024",
  //     image: "/api/placeholder/80/60",
  //   },
  //   {
  //     title: "Key Industry Trends That Will Shape 2024",
  //     date: "Mar 12, 2024",
  //     image: "/api/placeholder/80/60",
  //   },
  //   {
  //     title: "Digital Transformation Best Practices",
  //     date: "Mar 10, 2024",
  //     image: "/api/placeholder/80/60",
  //   },
  // ];

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
                src={blog?.image?.url}
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
              <span className="text-blue-600 font-medium">
                {blog?.category?.name}
              </span>
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
                  <span>{new Date(blog?.createdAt).toLocaleDateString()}</span>
                </div>
                {/* <div className="flex items-center">
                  <Tag className="w-4 h-4 mr-2" />
                  <span>{blog?.tags.join(", ")}</span>
                </div> */}
              </div>

              {/* Article Title */}
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                {blog?.title}
              </h1>

              {/* Article Content */}
              <div
                className="prose max-w-none"
                dangerouslySetInnerHTML={{ __html: blog?.content }}
              />

              {/* Navigation */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pt-8 mt-8 border-t border-gray-200 gap-4">
                <div>
                  <span className="text-gray-500 text-sm">
                    ← Previous Article
                  </span>
                  <p className="text-blue-600 font-medium hover:text-blue-700 cursor-pointer">
                    <Link href={`/blog-detail/${previousBlog?.slug}`}>
                      {previousBlog?.title}
                    </Link>
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-gray-500 text-sm">Next Article →</span>
                  <p className="text-blue-600 font-medium hover:text-blue-700 cursor-pointer">
                    <Link href={`/blog-detail/${nextBlog?.slug}`}>
                      {nextBlog?.title}
                    </Link>
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
                    <Link
                      href={`/blogs/${category.slug}`}
                      className="text-gray-700 hover:text-blue-600 cursor-pointer transition-colors"
                    >
                      {category.name}
                    </Link>
                    <span className="text-gray-400 text-sm">
                      ({category?.blogCount || 0})
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
                  <Link
                    key={index}
                    href={`/blog-detail/${post.slug}`}
                    className="flex-shrink-0"
                  >
                    <div className="flex space-x-3">
                      <Image
                        src={post.image?.url || img1}
                        width={600}
                        height={400}
                        alt={post.title}
                        className="w-16 h-12 object-cover rounded-lg flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-medium text-gray-900 line-clamp-2 mb-1">
                          {post.title}
                        </h4>
                        <p className="text-xs text-gray-500">
                          {new Date(post.createdAt).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  </Link>
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
