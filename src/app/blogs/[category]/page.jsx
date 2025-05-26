"use client";
import React, { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import axios from "axios";
import Link from "next/link";
import { useParams } from "next/navigation";

const BlogCategoryPage = () => {
  const params = useParams();
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(
          `/api/blogs?category=${params.category}`
        );
        setBlogs(response.data);
        // console.log("Blogs loaded successfully:", response.data);
      } catch (error) {
        console.error("Error loading blog category page:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const featuredArticle = blogs[0];

  if (!blogs || blogs.length === 0) {
    return <div className="flex items-center justify-center h-screen">No blogs found</div>;
  }
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 mt">
      {/* Hero Section */}
      <div className="bg-sky-100 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* left Image with Stats */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src={featuredArticle?.image?.url}
                  alt="POS System Dashboard"
                  className="w-full h-full object-cover"
                  width={600}
                  height={400}
                  priority
                />
              </div>
            </div>
            {/* right Content */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <span className="bg-white text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                  News!
                </span>
                <span className="text-gray-500 text-sm">
                  {new Date(featuredArticle?.createdAt).toDateString()}
                </span>
              </div>

              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                {featuredArticle?.title}
              </h1>

              <div
                dangerouslySetInnerHTML={{
                  __html: featuredArticle?.content.substring(0, 150),
                }}
                className="text-gray-700 mb-4"
              />
              {/* <p className="text-lg text-gray-900 leading-relaxed">
                {featuredArticle.content.substring(0, 150)}...
              </p> */}

              <Link
                href={`/blog-detail/${featuredArticle?.slug}`}
                className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
              >
                Read More
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Articles Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Section Header */}
        <div className="items-center mb-12">
          <div>
            <h2 className="text-3xl lg:text-4xl text-center font-bold text-gray-900 mb-2">
              Our Recent Articles
            </h2>
            <p className="text-gray-800 text-center">
              Stay Informed with Our Latest Insights
            </p>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((article) => (
            <div
              key={article?._id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative">
                <Image
                  src={article?.image?.url}
                  alt={article?.title}
                  className="w-full h-48 object-cover"
                  width={600}
                  height={400}
                />
              </div>

              <div className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <span className="text-blue-600 text-sm font-medium">
                    {"Admin"}
                  </span>
                  <span className="text-gray-400">•</span>
                  <span className="text-gray-500 text-sm">
                    {new Date(article.createdAt).toDateString()}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 leading-tight">
                  {article.title}
                </h3>

                <div
                  dangerouslySetInnerHTML={{
                    __html: article.content.substring(0, 150),
                  }}
                  className="text-gray-700 mb-4"
                />

                {/* <p className="text-gray-600 mb-4 line-clamp-3">
                  {article.content.substring(0, 100)}...
                </p> */}

                <Link
                  href={`/blog-detail/${article.slug}`}
                  className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                >
                  Read More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogCategoryPage;
