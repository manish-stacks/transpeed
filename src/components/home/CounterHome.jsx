"use client";
import React from 'react'

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const counters = [
  { label: "Metric Tones of Air Cargo", endValue: 500},
  { label: "Containers", endValue: 1200 },
  { label: "Domestic Hubs", endValue: 100 },
  { label: "Happy Customers", endValue: 500 },
];

const CounterHome = () => {
  const [counts, setCounts] = useState(counters.map(() => 0));

  useEffect(() => {
    const interval = setInterval(() => {
      setCounts((prevCounts) =>
        prevCounts.map((count, index) =>
          count < counters[index].endValue ? count + Math.ceil(counters[index].endValue / 100) : counters[index].endValue
        )
      );
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-sky-800 bg-[url('/images/transpeed-counter-bg.webp')] bg-blend-multiply bg-cover bg-center bg-fixed py-20 px-6">
      <div className='title'>
        <h2 className='max-w-7xl pl-4 mx-auto text-xl md:text-5xl max-[768px]:text-3xl font-bold font-sans text-center mb-12 text-white'>Redefining Logistics Through Our Unrivaled Scale</h2>
      </div>
      <div className="container mx-auto px-6">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          {counters.map((counter, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-xl shadow-lg text-center"
            >
              <h2 className="text-5xl font-extrabold text-yellow-500">{counts[index]}+</h2>
              <p className="mt-2 text-lg text-gray-900 font-bold">{counter.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default CounterHome;