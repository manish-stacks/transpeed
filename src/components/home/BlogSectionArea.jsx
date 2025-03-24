// import React from 'react'

// export default function BlogSectionArea() {
//   return (
//     <div>Blog Section Area</div>
//   )
// }

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

const BlogSection = () => {
  const blogs = [
    {
      title: "COVID-19 How We Can Help your Logistics",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Mauris nullam the as integer quam dolor nunc semper. It Ornare non nulla faucibus pulvinar vulputate neque. The as Suscipit tristique nam enim mauris consectetur as the platea. The Cras aliquet accumsan. ",
      date: "27 DEC, 2024",
    },
    {
      title: "Remote Asset Monitoring and Control",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Mauris nullam the as integer quam dolor nunc semper. It Ornare non nulla faucibus pulvinar vulputate neque. The as Suscipit tristique nam enim mauris consectetur as the platea. The Cras aliquet accumsan. ",
      date: "27 DEC, 2024",
    },
    {
      title: "Your Guide To Picking The Right Shipping...",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Mauris nullam the as integer quam dolor nunc semper. It Ornare non nulla faucibus pulvinar vulputate neque. The as Suscipit tristique nam enim mauris consectetur as the platea. The Cras aliquet accumsan. ",
      date: "27 DEC, 2024",
    },
    {
      title: "Delivering the best global logistics services",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Mauris nullam the as integer quam dolor nunc semper. It Ornare non nulla faucibus pulvinar vulputate neque. The as Suscipit tristique nam enim mauris consectetur as the platea. The Cras aliquet accumsan. ",
      date: "27 DEC, 2024",
    },
  ];

  return (
    <section className="bg-[#d3edff] py-16 px-6 md:px-20">
      <h3 className="text-blue-600 text-sm font-semibold text-center">OUR BLOG</h3>
      <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Updated Blogs & News</h2>
      <div className="pt-8 grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        {/* Left Column - Image & Content */}
        <div className="relative rounded-3xl overflow-hidden">
          <img
            src="images/sea-freight.webp"
            alt="Blog Thumbnail"
            className="w-full h-auto rounded-xl" />
          <div className="absolute bottom-3 left-3 bg-gray-100 p-6 rounded-xl shadow-lg w-2/4">
            <span className="text-sm bg-yellow-500 text-gray-900 px-3 py-1 rounded-md">Logistics</span>
            <h3 className="text-lg font-semibold mt-2">
              Three reasons you can be visible in supply chain.
            </h3>
          </div>
        </div>

        {/* Right Column - Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-3xl shadow-md transform transition duration-300 hover:-translate-y-2 relative"
            >
              <h3 className="text-lg text-gray-900 font-bold">{blog.title}</h3>
              <p className="text-gray-900 text-sm mt-2 mb-3 line-clamp-3">{blog.description}</p>
              <p className="text-gray-800 text-xs mt-4 absolute bottom-4 left-4">SHIPEXPBM - {blog.date}</p>
              <div className="absolute bottom-4 right-4 w-10 h-10 flex items-center justify-center bg-[#168cbd] text-white rounded-full transform transition duration-300 hover:rotate-45">
                <ArrowUpRight size={20} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;

