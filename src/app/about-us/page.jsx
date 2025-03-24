"use client";
import React from 'react'
import CounterHome from '@/components/home/CounterHome';
import StrategicFoundations from '@/components/home/StrategicFoundation';
import { Package } from 'lucide-react';

export default function About() {
  return (
    <>
      <section className="w-full
            relative  overflow-hidden block z-10 bg-[url('/images/about-us-hero-bg.webp')]  bg-cover bg-no-repeat bg-fixed
            bg-center  before:content-[''] before:absolute before:inset-0 before:block 
            before:opacity-75
            before:z-[-5]">
        <div className=" text-white py-10">
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-center my-10 md:my-24 relative">
            <div className="space-y-5 flex flex-col w-full lg:w-2/3 items-center md:items-start p-8 ">
              <div>
                <h1 className="text-3xl md:text-5xl text-yellow-500 tracking-loose">
                  Transpeed Cargo
                </h1>
              </div>
              <div>
                <h2 className="md:text-6xl text-5xl mb-2 font-extrabold">
                  We Are Global
                </h2>
              </div>
              <div>
                <p className="text-2xl md:tex-3xl text-center md:text-start text-gray-50">
                  We are focus on international sea freight and airfreight business and integrating trucking, Customs clearance and warehousing into a large-sized modern logistics enterprise.
                </p>
              </div>
              <div className='pt-10'>
                {/* <a href="#" className="bg-transparent hover:bg-yellow-300 text-yellow-300 hover:text-black text-lg rounded shadow hover:shadow-lg py-3 px-8 border border-yellow-300 hover:border-transparent" >
                  Explore Now
                </a> */}
                <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-md flex items-center space-x-2 transition-colors">
                  <Package className="h-5 w-5" />
                  <span>GET A QUOTATION</span>
               </button>
              </div>
              
            </div>

            <div className="p-8 mt-12 mb-6 md:mb-0 md:mt-0 ml-0 md:ml-12 lg:w-2/3">
              <div className="">
                <div>
                  <img
                    className="mb-10"
                    src="/images/transpeed-about-us-hero.webp"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* about us section */}
      <section className="mt-20 mb-20">
        <div className="w-full max-auto xl:px-52 lg:px-10 md:px-10 px-5 grid grid-cols-1 md:grid-cols-2 items-center">
          <div className="pr-0 md:pr-5">
            <div class="title">
              <h2 class="max-w-7xl mx-auto text-3xl md:text-5xl font-bold font-sans mb-10 text-center md:text-start">About Transpeed Cargo</h2>
              <p className="text-justify">Transpeed Cargo Pvt Ltd is India’s one of the top logistics solutions provider. Established in 2016 with the vision to provide Easy, Efficient and Economical integrated logistics solutions, Transpeed Cargo Pvt Ltd today is a reflection of it’s founder's passion for innovative services and belief in ethical business practices, where continuous emphasis is placed on delivering the highest standards of customer satisfaction. The founder with their experience in various import/export, sales and managerial positions focused to provide innovative, focused customer oriented solutions to the consolidation and freight forwarding industry.</p>
              <p className='text-justify'>Transpeed Cargo Pvt Ltd has a menu of supply chain solutions that can optimize the effectiveness of your product promotion, and reduce the cost of your packaging and distribution as well as your carbon footprint. “Sales Lift” is music to any marketing, brand or merchandising manager’s ears. Transpeed Cargo Pvt Ltd understands the impact packaging has when your customers are competing for market dollars.</p>
              <p className='text-justify'>Transpeed Cargo Pvt Ltd is taking optimization to a whole new level. It has evolved into a comprehensive, fully integrated program designed to maximize productivity, minimize waste, and above all your product promotion, and reduce the cost of your packaging and distribution as well as your carbon footprint.</p>
            </div>
          </div>
          <div className="">
            <div>
              <img src='/images/about-transpeed.webp'></img>
            </div>
          </div>
        </div>
      </section>

      <CounterHome />
      <StrategicFoundations />



    </>
  );
};

