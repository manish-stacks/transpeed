"use client";
import React from 'react'
import CounterHome from '@/components/home/CounterHome';
import StrategicFoundations from '@/components/home/StrategicFoundation';
import { Award, BarChart, Globe, Package, ThumbsUp, Users } from 'lucide-react';

export default function About() {
  return (
    <>
      <section className="w-full
            relative  overflow-hidden block z-10 bg-[url('/images/about-us-hero-bg.webp')]  bg-cover bg-no-repeat bg-fixed
            bg-center  before:content-[''] before:absolute before:inset-0 before:block 
            before:opacity-75
            before:z-[-5]  mt-16">
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
            <div className="title">
              <h2 className="max-w-7xl mx-auto text-3xl md:text-5xl font-bold font-sans mb-10 text-center md:text-start">About Transpeed Cargo</h2>
              <p className="text-justify">Transpeed Cargo Pvt Ltd is India &lsquo; s one of the top logistics solutions provider. Established in 2016 with the vision to provide Easy, Efficient and Economical integrated logistics solutions, Transpeed Cargo Pvt Ltd today is a reflection of it&lsquo;s founder&lsquo;s passion for innovative services and belief in ethical business practices, where continuous emphasis is placed on delivering the highest standards of customer satisfaction. The founder with their experience in various import/export, sales and managerial positions focused to provide innovative, focused customer oriented solutions to the consolidation and freight forwarding industry.</p>
              <p className='text-justify'>Transpeed Cargo Pvt Ltd has a menu of supply chain solutions that can optimize the effectiveness of your product promotion, and reduce the cost of your packaging and distribution as well as your carbon footprint. “Sales Lift” is music to any marketing, brand or merchandising manager&lsquo;s ears. Transpeed Cargo Pvt Ltd understands the impact packaging has when your customers are competing for market dollars.</p>
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


      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Our History</h2>
            <div className="h-1 w-24 bg-blue-500 mx-auto mb-8 rounded-full"></div>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200 rounded-full"></div>

            {/* Timeline items */}
            <div className="grid grid-cols-1 gap-12">
              <div className="relative">
                <div className="flex items-center justify-center">
                  <div className="bg-yellow-500 text-white text-xl font-bold rounded-full w-16 h-16 flex items-center justify-center z-10 mb-8">
                    2016
                  </div>
                </div>
                <div className="bg-white rounded-xl p-8 shadow-lg max-w-2xl mx-auto">
                  <h3 className="text-2xl font-bold text-blue-900 mb-4">Foundation</h3>
                  <p className="text-slate-900">
                    Transpeed Cargo Pvt Ltd was founded with a clear vision — to provide businesses with seamless,
                    efficient, and cost-effective logistics solutions. Our founders, with deep industry experience,
                    identified gaps in the market for a freight forwarder that combines reliability, transparency, and
                    tailored service.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="flex items-center justify-center">
                  <div className="bg-yellow-500 text-white text-xl font-bold rounded-full w-16 h-16 flex items-center justify-center z-10 mb-8">
                    2018
                  </div>
                </div>
                <div className="bg-white rounded-xl p-8 shadow-lg max-w-2xl mx-auto">
                  <h3 className="text-2xl font-bold text-blue-900 mb-4">Growth & Expansion</h3>
                  <p className="text-slate-900">
                    Starting with a small office and a handful of clients, we quickly built a reputation for delivering
                    shipments on time, managing complex cargo requirements, and handling critical logistics challenges
                    with ease. Over the years, we have expanded our network, forged strong alliances with leading
                    carriers, and established a global presence in key trade markets.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="flex items-center justify-center">
                  <div className="bg-yellow-500 text-white text-xl font-bold rounded-full w-16 h-16 flex items-center justify-center z-10 mb-8">
                    Today
                  </div>
                </div>
                <div className="bg-white rounded-xl p-8 shadow-lg max-w-2xl mx-auto">
                  <h3 className="text-2xl font-bold text-blue-900 mb-4">Industry Leader</h3>
                  <p className="text-slate-900">
                    From handling local shipments to coordinating complex cross-border logistics, Transpeed Cargo has
                    grown into a name synonymous with trust and efficiency. Today, we serve clients across diverse
                    industries, including manufacturing, automotive, retail, pharmaceuticals, and technology.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Our Achievements</h2>
          <p className="text-gray-600 text-lg">
            At Transpeed Cargo, our track record speaks for itself. We have achieved significant milestones that reflect
            our dedication to excellence.
          </p>
          <div className="h-1 w-24 bg-yellow-500 mx-auto mt-8 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-8 shadow-lg border-t-4 border-yellow-500 hover:transform hover:-translate-y-2 transition-transform duration-300">
            <div className="bg-blue-50 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <Globe className="w-8 h-8 text-yellow-500" />
            </div>
            <h3 className="text-xl font-bold text-blue-900 mb-3">Global Network</h3>
            <p className="text-gray-600">
              We have established a presence in over 30 countries, partnering with leading global carriers and logistics
              providers to offer seamless international freight solutions.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg border-t-4 border-yellow-500 hover:transform hover:-translate-y-2 transition-transform duration-300">
            <div className="bg-blue-50 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <Award className="w-8 h-8 text-yellow-500" />
            </div>
            <h3 className="text-xl font-bold text-blue-900 mb-3">Industry Recognition</h3>
            <p className="text-gray-600">
              Recognized as a top-performing freight forwarder, we have consistently been awarded for operational
              excellence, customer satisfaction, and innovative logistics solutions.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg border-t-4 border-yellow-500 hover:transform hover:-translate-y-2 transition-transform duration-300">
            <div className="bg-blue-50 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <Package className="w-8 h-8 text-yellow-500" />
            </div>
            <h3 className="text-xl font-bold text-blue-900 mb-3">High-Value Projects</h3>
            <p className="text-gray-600">
              We have successfully handled complex shipments, including project cargo, exhibition cargo, and
              time-critical deliveries for multinational corporations and large-scale infrastructure projects.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg border-t-4 border-yellow-500 hover:transform hover:-translate-y-2 transition-transform duration-300">
            <div className="bg-blue-50 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <ThumbsUp className="w-8 h-8 text-yellow-500" />
            </div>
            <h3 className="text-xl font-bold text-blue-900 mb-3">Customer Satisfaction</h3>
            <p className="text-gray-600">
              Our commitment to service excellence has resulted in a 98%+ client retention rate, reflecting the trust
              and confidence our clients place in us.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg border-t-4 border-yellow-500 hover:transform hover:-translate-y-2 transition-transform duration-300">
            <div className="bg-blue-50 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <BarChart className="w-8 h-8 text-yellow-500" />
            </div>
            <h3 className="text-xl font-bold text-blue-900 mb-3">Operational Efficiency</h3>
            <p className="text-gray-600">
              Through strategic investments in technology and process automation, we have reduced transit times and
              improved delivery accuracy, ensuring that shipments reach their destinations faster and more
              cost-effectively.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg border-t-4 border-yellow-500 hover:transform hover:-translate-y-2 transition-transform duration-300">
            <div className="bg-blue-50 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <Users className="w-8 h-8 text-yellow-500" />
            </div>
            <h3 className="text-xl font-bold text-blue-900 mb-3">Expert Team</h3>
            <p className="text-gray-600">
              Our team of industry professionals brings decades of combined experience in logistics, customs
              regulations, and supply chain management.
            </p>
          </div>
        </div>
      </section>
      <CounterHome />
      
      {/* <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Our History</h2>
            <div className="h-1 w-24 bg-blue-500 mx-auto mb-8 rounded-full"></div>
          </div>

          <div className="relative">
          
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200 rounded-full"></div>

           
            <div className="grid grid-cols-1 gap-12">
              <div className="relative">
                <div className="flex items-center justify-center">
                  <div className="bg-yellow-500 text-white text-xl font-bold rounded-full w-16 h-16 flex items-center justify-center z-10 mb-8">
                    2016
                  </div>
                </div>
                <div className="bg-white rounded-xl p-8 shadow-lg max-w-2xl mx-auto">
                  <h3 className="text-2xl font-bold text-blue-800 mb-4">Foundation</h3>
                  <p className="text-gray-700">
                    Transpeed Cargo Pvt Ltd was founded with a clear vision — to provide businesses with seamless,
                    efficient, and cost-effective logistics solutions. Our founders, with deep industry experience,
                    identified gaps in the market for a freight forwarder that combines reliability, transparency, and
                    tailored service.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="flex items-center justify-center">
                  <div className="bg-blue-600 text-white text-xl font-bold rounded-full w-16 h-16 flex items-center justify-center z-10 mb-8">
                    2018
                  </div>
                </div>
                <div className="bg-white rounded-xl p-8 shadow-lg max-w-2xl mx-auto">
                  <h3 className="text-2xl font-bold text-blue-800 mb-4">Growth & Expansion</h3>
                  <p className="text-gray-700">
                    Starting with a small office and a handful of clients, we quickly built a reputation for delivering
                    shipments on time, managing complex cargo requirements, and handling critical logistics challenges
                    with ease. Over the years, we have expanded our network, forged strong alliances with leading
                    carriers, and established a global presence in key trade markets.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="flex items-center justify-center">
                  <div className="bg-blue-600 text-white text-xl font-bold rounded-full w-16 h-16 flex items-center justify-center z-10 mb-8">
                    Today
                  </div>
                </div>
                <div className="bg-white rounded-xl p-8 shadow-lg max-w-2xl mx-auto">
                  <h3 className="text-2xl font-bold text-blue-800 mb-4">Industry Leader</h3>
                  <p className="text-gray-700">
                    From handling local shipments to coordinating complex cross-border logistics, Transpeed Cargo has
                    grown into a name synonymous with trust and efficiency. Today, we serve clients across diverse
                    industries, including manufacturing, automotive, retail, pharmaceuticals, and technology.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Achievements */}
      {/* <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Our Achievements</h2>
          <p className="text-gray-600 text-lg">
            At Transpeed Cargo, our track record speaks for itself. We have achieved significant milestones that reflect
            our dedication to excellence.
          </p>
          <div className="h-1 w-24 bg-blue-500 mx-auto mt-8 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-8 shadow-lg border-t-4 border-blue-500 hover:transform hover:-translate-y-2 transition-transform duration-300">
            <div className="bg-blue-50 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <Globe className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-blue-900 mb-3">Global Network</h3>
            <p className="text-gray-600">
              We have established a presence in over 30 countries, partnering with leading global carriers and logistics
              providers to offer seamless international freight solutions.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg border-t-4 border-blue-500 hover:transform hover:-translate-y-2 transition-transform duration-300">
            <div className="bg-blue-50 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <Award className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-blue-900 mb-3">Industry Recognition</h3>
            <p className="text-gray-600">
              Recognized as a top-performing freight forwarder, we have consistently been awarded for operational
              excellence, customer satisfaction, and innovative logistics solutions.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg border-t-4 border-blue-500 hover:transform hover:-translate-y-2 transition-transform duration-300">
            <div className="bg-blue-50 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <Package className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-blue-900 mb-3">High-Value Projects</h3>
            <p className="text-gray-600">
              We have successfully handled complex shipments, including project cargo, exhibition cargo, and
              time-critical deliveries for multinational corporations and large-scale infrastructure projects.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg border-t-4 border-blue-500 hover:transform hover:-translate-y-2 transition-transform duration-300">
            <div className="bg-blue-50 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <ThumbsUp className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-blue-900 mb-3">Customer Satisfaction</h3>
            <p className="text-gray-600">
              Our commitment to service excellence has resulted in a 98%+ client retention rate, reflecting the trust
              and confidence our clients place in us.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg border-t-4 border-blue-500 hover:transform hover:-translate-y-2 transition-transform duration-300">
            <div className="bg-blue-50 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <BarChart className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-blue-900 mb-3">Operational Efficiency</h3>
            <p className="text-gray-600">
              Through strategic investments in technology and process automation, we have reduced transit times and
              improved delivery accuracy, ensuring that shipments reach their destinations faster and more
              cost-effectively.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg border-t-4 border-blue-500 hover:transform hover:-translate-y-2 transition-transform duration-300">
            <div className="bg-blue-50 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <Users className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-blue-900 mb-3">Expert Team</h3>
            <p className="text-gray-600">
              Our team of industry professionals brings decades of combined experience in logistics, customs
              regulations, and supply chain management.
            </p>
          </div>
        </div>
      </section> */}
      <StrategicFoundations />



    </>
  );
};

