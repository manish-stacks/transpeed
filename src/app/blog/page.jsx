"use client";
import React from "react";
import { ChevronLeft, ChevronRight, ArrowRight, Link } from "lucide-react";
import Image from "next/image";
const img1 = "/images/logistic_banner1.png";

const BlogCategoryPage = () => {
  const featuredArticle = {
    title: "Unlocking Efficiency: The Power Of A Modern POS System",
    excerpt:
      "In today's fast-paced business landscape, efficiency is key to success. From small local shops to large-scale enterprises, businesses are constantly seeking ways to streamline their operations and enhance customer experi...",
    readTime: "8 mins read",
    isNew: true,
    image: "https://www.aranca.com/assets/uploads/blogs/logistic_banner1.png",
    imageWidth: 600,
    imageHeight: 400,
    alt: "POS System Dashboard",
 
  };

  const articles = [
    {
      id: 1,
      title:
        "Beyond Transactions: Unlocking the Full Potential of Your POS System",
      excerpt:
        "In the realm of modern business operations, a Point of Sale (POS) system serves as more than just a tool for processing transactions...",
      author: "Sam Pitak",
      date: "20 Apr 2024",
      image: "https://www.aranca.com/assets/uploads/blogs/logistic_banner1.png",
      category: "POS Systems",
      imageWidth: 600,
      imageHeight: 400,
      alt: "POS System Dashboard",
    },
    {
      id: 2,
      title:
        "From Brick-and-Mortar to Online Storefront: Integrating Your POS with E-commerce",
      excerpt:
        "In the realm of modern business operations, a Point of Sale (POS) system serves as more than just a tool for processing transactions...",
      author: "Yuli Sumpil",
      date: "20 Apr 2024",
      image: "https://www.aranca.com/assets/uploads/blogs/logistic_banner1.png",
      category: "E-commerce",
      imageWidth: 600,
      imageHeight: 400,
      alt: "POS System Dashboard",
      
    },
    {
      id: 3,
      title:
        "Security First: Protecting Your Business with Advanced POS System Features",
      excerpt:
        "One of the primary functions of a POS system is to process transactions and handle sensitive customer data. As businesses increasingly...",
      author: "Ambon Fanda",
      date: "20 Apr 2024",
      image: "https://www.aranca.com/assets/uploads/blogs/logistic_banner1.png",
      category: "Security",
      imageWidth: 600,
      imageHeight: 400,
      alt: "POS System Dashboard",
    },
       {
      id: 4,
      title:
        "Security First: Protecting Your Business with Advanced POS System Features",
      excerpt:
        "One of the primary functions of a POS system is to process transactions and handle sensitive customer data. As businesses increasingly...",
      author: "Ambon Fanda",
      date: "20 Apr 2024",
      image: "https://www.aranca.com/assets/uploads/blogs/logistic_banner1.png",
      category: "Security",
      imageWidth: 600,
      imageHeight: 400,
      alt: "POS System Dashboard",
    },
       {
      id: 5,
      title:
        "Security First: Protecting Your Business with Advanced POS System Features",
      excerpt:
        "One of the primary functions of a POS system is to process transactions and handle sensitive customer data. As businesses increasingly...",
      author: "Ambon Fanda",
      date: "20 Apr 2024",
      image: "https://www.aranca.com/assets/uploads/blogs/logistic_banner1.png",
      category: "Security",
      imageWidth: 600,
      imageHeight: 400,
      alt: "POS System Dashboard",
    },
     {
      id: 6,
      title: "Security First: Protecting Your Business with Advanced POS System Features",
      excerpt: "One of the primary functions of a POS system is to process transactions and handle sensitive customer data. As businesses increasingly...",
      author: "Ambon Fanda",
      date: "20 Apr 2024",
      image: "https://www.aranca.com/assets/uploads/blogs/logistic_banner1.png",
      category: "Security",
      imageWidth: 600,
      imageHeight: 400,
      alt: "POS System Dashboard",
    },
  ];

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
                  src={img1}
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
                  {featuredArticle.readTime}
                </span>
              </div>

              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                {featuredArticle.title}
              </h1>

              <p className="text-lg text-gray-900 leading-relaxed">
                {featuredArticle.excerpt}
              </p>

              <a href="/blog-detail" className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                Read More
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
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
          {articles.map((article) => (
            <div
              key={article.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative">
                <Image
                  src={img1}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                  width={600}
                 height={400}

                />
              </div>

              <div className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <span className="text-blue-600 text-sm font-medium">
                    {article.author}
                  </span>
                  <span className="text-gray-400">•</span>
                  <span className="text-gray-500 text-sm">{article.date}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 leading-tight">
                  {article.title}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-3">
                  {article.excerpt}
                </p>

                <button className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                  Read More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogCategoryPage;
