"use client";

import { IconMailDown, IconMapPin, IconPhone } from "@tabler/icons-react";

export default function ContactForm() {
    return (
      <div className="flex flex-col md:flex-row items-center justify-center min-h-auto py-20 px-5 bg-[url('/images/about-us-hero-bg.webp')]  bg-cover bg-no-repeat bg-center">
        {/* Left Section */}
        <div className="text-white w-full max-w-lg md:mr-10">
          <button className="bg-yellow-500 px-4 py-2 rounded-md mb-4 flex max-[768px]:mx-auto">Contact Us</button>
          <h2 className="min-[768px]:text-5xl max-[767px]:text-3xl font-bold text-yellow-500 text-center md:text-left">Have a Query? <br /> Get in touch</h2>
          <div className=" space-y-3 mt-8 mb-5">
          <p className="flex text-xl items-center bg-gray-100/15 p-2 max-w-md rounded-md"><span className="font-semibold"><IconPhone className="mr-2"/></span> +91-9354382988</p>
          <p className="flex text-xl items-center bg-gray-100/15 p-2 max-w-md rounded-md"><span className="font-semibold"><IconMailDown className="mr-2"/> </span> contact@transpeed.in</p>
          <p className="flex text-xl items-center bg-gray-100/15 p-2 max-w-md rounded-md"><span className="font-semibold"><IconMailDown className="mr-2"/> </span> arpit@transpeed.in</p>
          <p className="flex text-xl items-center bg-gray-100/15 p-2 max-w-md rounded-md"><span className="font-semibold"><IconMailDown className="mr-2"/> </span> anubhav@transpeed.in</p>
          <p className="flex text-xl items-center bg-gray-100/15 p-2 max-w-md rounded-md"><span className="font-semibold"><IconMapPin className="mr-2" /></span> AD - 7E, Pitampura, Delhi 110034</p>
          </div>
        </div>
        
        {/* Right Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full md:mt-0">
          <h3 className="text-xl font-bold text-b   lue-900 mb-4">Request a call back</h3>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700">Name</label>
              <input type="text" placeholder="Your Full Name" className="w-full p-2 border rounded-md" />
            </div>
            <div>
              <label className="block text-gray-700">Email address</label>
              <input type="email" placeholder="Your email address" className="w-full p-2 border rounded-md" />
            </div>
            <div>
              <label className="block text-gray-700">Phone number</label>
              <input type="tel" placeholder="Your phone number" className="w-full p-2 border rounded-md" />
            </div>
            <div>
              <label className="block text-gray-700">Message</label>
              <textarea placeholder="Your query related messages" className="w-full p-2 border rounded-md" rows="3"></textarea>
            </div>
            <button type="submit" className="w-full bg-yellow-500 text-white py-2 rounded-md hover:bg-orange-600">SUBMIT</button>
          </form>
        </div>
      </div>
    );
  }
  