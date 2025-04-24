"use client";

import { Package } from 'lucide-react';
import React from 'react'

export default function Hero() {
  return (
    <>
    <div className="relative h-[500px] md:h-[700px]  mt-16">
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full  object-cover bg-top z-0">
          <source src="/images/sear-fright.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-sky-600/70 to-sky-950/70 dark:bg-grid-white/[0.05]  flex items-center justify-center">
          <div className='space-y-4 md:space-y-48'>
            <div className="text-center text-white w-[350px] md:w-[650px] mx-auto">
              <p className=" text-sm md:text-xl text-yellow-500 w-[280px] md:w-[360px] px-4px mx-auto rounded ">Redefined Ocean Freight Services</p>
              <h1 className="text-3xl text-wrap md:text-6xl font-bold mt-4 ">Innovative Logistic Solutions</h1>
            </div>

            <div className="text-center text-white pt-10 px-5 w-[350px] md:w-[690px] mx-auto">
              <p className="mt-4 text-xl mb-5">Transpeed Cargo Pvt. Ltd. has a well-established global agency network supporting the FCL / LCL Forwarding service of Global Logistics</p>
              <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 mx-auto rounded-md flex items-center space-x-2 transition-colors">
                  <Package className="h-5 w-5" />
                  <span>GET A QUOTATION</span>
               </button>
              {/* <a href="" className="mt-6 inline-block border-2 border-white  text-white py-3 px-6 rounded-full">Get A Quote</a> */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
