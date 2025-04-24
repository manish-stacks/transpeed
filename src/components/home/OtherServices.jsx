"use client";
import React from 'react'
export default function OtherServices() {
  const infoData = [
    {
      title: "Project Logistics",
      description: "Transpeed Cargo Pvt Ltd support their client base in handling major projects shipments without complication.",
      icon: "/images/project-logistics.png",
    },
    {
      title: "Warehousing & Distribution",
      description: "We provide warehousing and distribution centers for companies with a need for a high-performance, yet flexible infrastructure.",
      icon: "/images/warehousing.png",
    },
    {
      title: "E-com Shipping",
      description: "Transpeed Cargo Pvt Ltd is determined to provide a reliable, cost-saving solution for all eCommerce shipping needs.",
      icon: "/images/e-com.png",
    },
    {
      title: "NVOCC",
      description: "Transpeed Cargo Pvt Ltd NVOCC division ( Non Vessel Operating Container Carrier) is representing various Principals, Box owners from Far East, South East Asia and Intra Asia.",
      icon: "/images/nvocc.png",
    },
    {
      title: "Trade Management",
      description: "Let Transpeed Cargo Pvt Ltd assist you navigate today's dynamic and increasingly complex world of Transpeed Cargo Pvt Ltd commerce.",
      icon: "/images/trade-management.png",
    },
    {
      title: "4th Party Logistics",
      description: "Being a 4PL service Provider Transpeed Cargo Pvt Ltd is an independent, singularly accountable, non-asset based integrator who will assemble the resources.",
      icon: "/images/4th-party-logistics.png",
    },
  ];

  return (
    <div className="bg-[#d3edff] py-16 px-6">

      <div className='title'>
        <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl max-[768px]:text-3xl font-bold font-sans text-center mb-10">More Services</h2>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-8">
        {infoData.map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-start transition-transform duration-300 hover:-translate-y-3"
          >
            <div className="bg-gradient-to-l from-[#01385e] to-[#168cbd] p-3 rounded-xl mb-4 transition-transform duration-300 hover:-translate-y-3">
              <img src={item.icon} alt={item.title} className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
            <p className="text-gray-600 mt-2">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}



