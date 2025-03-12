"use client";

import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export function WhyChooseHome() {
  return (
    (<div
      className="h-[50rem] flex flex-col antialiased bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-sky-500 to-sky-900 dark:bg-grid-white/[0.05] items-center justify-center relative">
      <div className='title w-[40%] max-[768px]:w-[90%]'>
        <h2 className='max-w-7xl pl-4 mx-auto text-xl md:text-5xl max-[768px]:text-3xl font-bold font-sans text-center mb-10 text-white'>Why Choose Transpeed Cargo for Logistic Services?</h2>
        <p className="text-white text-center mb-7">In today's fast-paced global economy, efficient logistics is the backbone of any successful business. At Transpeed Cargo Pvt Ltd, we understand the importance of seamless supply chain management and offer top-tier logistics solutions tailored to your needs.</p>
      </div>
      <InfiniteMovingCards items={testimonials} direction="right" speed="slow"/>
    </div>)
  );
}

const testimonials = [
  {
    quote:
      "We prioritize punctuality and reliability, ensuring that every shipment reaches its destination without delays. Our real-time tracking systems and proactive logistics planning help us maintain on-time deliveries, minimizing disruptions to your supply chain.",
    name: "Charles Dickens",
    title: "Reliable & Timely Delivery",
  },
  {
    quote:
      "From freight forwarding and warehousing to transportation and customs clearance, Transpeed Cargo provides end-to-end logistics services. We cater to businesses of all sizes, handling domestic and international shipments with efficiency and care.",
    name: "William Shakespeare",
    title: "Comprehensive Logistics Solutions",
  },
  {
    quote: "Our state-of-the-art logistics management system allows clients to track their shipments in real time. With AI-driven route optimization and automated scheduling, we enhance efficiency and reduce transit times, ensuring a smooth delivery experience.",
    name: "Edgar Allan Poe",
    title: "Advanced Technology & Tracking",
  },
  {
    quote:
      "Transpeed Cargo has a well-established global network of carriers, shipping lines, and customs brokers, enabling us to provide seamless international shipping solutions. Our strong industry partnerships allow us to offer competitive rates and efficient freight management.",
    name: "Jane Austen",
    title: "Global Network & Strong Partnerships",
  },
  {
    quote:
      "We offer strategically located warehouses with advanced security systems and climate-controlled storage facilities. Our inventory management solutions ensure that goods are stored safely and dispatched efficiently, reducing costs and improving supply chain performance.",
    name: "Herman Melville",
    title: "Secure & Efficient Warehousing",
  },
  {
    quote:
      "Every business has unique logistics requirements. At Transpeed Cargo, we provide tailor-made solutions to suit your specific needs, whether it’s express shipping, bulk transportation, or specialized cargo handling.",
    name: "Herman Melville",
    title: "Customized Solutions for Every Business",
  },
  {
    quote:
      "We believe in offering the best value for money. Our transparent pricing model ensures no hidden charges, helping businesses optimize costs without compromising service quality.",
    name: "Herman Melville",
    title: "Cost-Effective & Transparent Pricing",
  },
];
