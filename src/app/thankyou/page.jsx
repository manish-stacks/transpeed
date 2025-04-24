"use client";
import Link from "next/link";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";

export default function ThankYou() {
  // const searchParams = useSearchParams()
  // const name = searchParams.get('name')

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-lg w-full space-y-8 bg-white p-8 rounded-2xl shadow-lg"
      >
        <div className="text-center">
          <div className="mb-6">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center"
            >
              <svg
                className="w-8 h-8 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </motion.div>
          </div>
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
            Thank You
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Your quotation request has been received successfully. Our team will
            review your request and get back to you shortly.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-primary hover:bg-primary/90 transition-colors duration-300"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Return to Home
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
