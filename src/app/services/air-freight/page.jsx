"use client";
import AirHero from '@/components/air-freight/AirHero';
import React from 'react'

export default function Page() {
  return (
    <>
      <AirHero />

      <section className='my-10 md:my-20'>
        <div className='px-5 md:px-40'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-10 items-center'>
            <div className='space-y-5 '>
              <h2 className="max-w-7xl mx-auto md:text-left text-xl md:text-5xl max-[768px]:text-3xl font-bold text-[#172554] text-center">
                Stay in Control While Moving Fast Tailored Air Freight Solutions for Your Business
              </h2>
              <p className='text-justify'>When your business depends on air freight, rely on Transpeed Cargo Pvt Ltd for efficient and cost-effective delivery. With our strong global network and strategic alliances, we offer flexible air freight solutions tailored to your specific needs — all with complete end-to-end visibility and control.  </p>
              <h3 className="max-w-7xl mx-auto md:text-left text-xl md:text-4xl max-[768px]:text-2xl font-bold text-[#172554] text-center">
                Lead Time-Based Services
              </h3>
              <p className='text-justify'>Choose the right service based on your delivery urgency: </p>

              <div className="flex gap-3">
                <div className="relative w-70 bg-gradient-to-r from-sky-700 to-cyan-600 text-white rounded-sm overflow-hidden shadow-lg cursor-pointer group">
                  <div className="px-4 py-2 transition-transform duration-500 transform group-hover:-translate-y-3">
                    <h2 className="text-lg md:text-2xl font-bold">Express</h2>
                    <p className="mt-2 opacity-80">
                      1-2 days for urgent shipments
                    </p>
                  </div>
                </div>

                <div className="relative w-70 bg-gradient-to-r from-sky-700 to-cyan-600 text-white rounded-sm overflow-hidden shadow-lg cursor-pointer group">
                  <div className="px-4 py-2 transition-transform duration-500 transform group-hover:-translate-y-3">
                    <h2 className="text-lg md:text-2xl font-bold">Standard</h2>
                    <p className="mt-2 opacity-80">
                      3-5 days for a balanced solution
                    </p>
                  </div>
                </div>

                <div className="relative w-70 bg-gradient-to-r from-sky-700 to-cyan-600 text-white rounded-sm overflow-hidden shadow-lg cursor-pointer group">
                  <div className="px-4 py-2 transition-transform duration-500 transform group-hover:-translate-y-3">
                    <h2 className="text-lg md:text-2xl font-bold">Economy</h2>
                    <p className="mt-2 opacity-80">
                      5-7 days for maximum cost efficiency
                    </p>
                  </div>
                </div>

              </div>

            </div>
            <div>
              <div className="relative rounded-3xl overflow-hidden">
                <img src="/images/about-air-frieght.webp" alt="Blog Thumbnail" className="w-full h-auto rounded-xl" />
                <div className="absolute bottom-3 left-3 bg-gray-100 p-6 rounded-xl shadow-lg w-2/4">
                  <span className="text-sm bg-yellow-500 text-gray-900 px-3 py-1 rounded-md">Air Freight</span>
                  <h3 className="text-lg font-semibold mt-2">
                    Fast and reliable air freight services for domestic and international shipments.
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-sky-500 to-sky-900 dark:bg-grid-white/[0.05] text-white py-20 text-center">
        <div className='grid grid-cols-1'>
          <h2 className="text-xl md:text-5xl max-[768px]:text-3xl font-bold mb-4 w-full max-[767px]:w-5xl mx-auto">Specialized Services for Capacity,<br />Speed, and Cost Efficiency </h2>
          <p className="text-white mb-10">When multiple factors matter, we provide versatile air freight solutions:  </p>
        </div>
        <div className="relative grid min-[992px]:grid-cols-3 min-[768px]:grid-col-2 w-full md:px-40 px:5">
          <div className="absolute left-0 w-full border-t-2 border-dashed border-orange-500 -z-10"></div>
          <div className="relative bg-slate-100/10 text-center mx-6 my-5 p-5 rounded-lg">
            <h3 className="mt-4 text-xl font-bold">
              <span className="text-yellow-500">Charter Services</span>
            </h3>
            <div className=" text-gray-300 mt-2">
              <p>Through our global partnerships, we can arrange charter flights for oversized, heavy, or time-critical cargo. </p>
            </div>
          </div>
          <div className="relative bg-slate-100/10 text-center mx-6 my-5 p-5 rounded-lg">
            <h3 className="mt-4 text-lg font-bold">
              <span className="text-yellow-500">Air and Sea Combination</span>
            </h3>
            <div className=" text-gray-300 mt-2">
              <p>Benefit from the cost-effectiveness of ocean freight with faster transit times through integrated air and sea solutions. </p>
            </div>
          </div>
          <div className="relative bg-slate-100/10 text-center mx-6 my-5 p-5 rounded-lg">
            <h3 className="mt-4 text-lg font-bold">
              <span className="text-yellow-500">Air and Truck Combination</span>
            </h3>
            <div className=" text-gray-300 mt-2">
              <p> For inland destinations, our combined air and trucking services offer quick and reliable transport. </p>
            </div>
          </div>
        </div >
      </div >

      <div className="bg-[#d3edff] text-[#172554] py-20 text-center md:px-40 px-5">
        <div className='grid grid-cols-1'>
          <h2 className="text-xl md:text-5xl max-[768px]:text-3xl font-bold mb-4 w-full max-[767px]:w-5xl mx-auto">Industry-Specific Solutions</h2>
          <p className="text-[#111] mb-10">We understand the unique requirements of different industries and offer tailored handling
            and storage solutions, including: </p>
        </div>
        <div className="relative grid min-[992px]:grid-cols-3 min-[768px]:grid-col-2 w-full md:px-40">
          <div className="relative bg-slate-100 text-center mx-2 my-2 p-5 rounded-lg">
            <h3 className="mt-4 text-xl font-bold">
              <span className="text-yellow-500">Cold Chain Logistics</span>
            </h3>
            <div className=" text-gray-900 mt-2">
              <p> Maintaining temperature integrity for sensitive products</p>
            </div>
          </div>
          <div className="relative bg-slate-100 text-center mx-2 my-2 p-5 rounded-lg">
            <h3 className="mt-4 text-lg font-bold">
              <span className="text-yellow-500">Perishable Commodities</span>
            </h3>
            <div className=" text-gray-900 mt-2">
              <p> Fast and secure handling for time-sensitive shipments</p>
            </div>
          </div>
          <div className="relative bg-slate-100 text-center mx-2 my-2 p-5 rounded-lg">
            <h3 className="mt-4 text-lg font-bold">
              <span className="text-yellow-500">Small Package Service</span>
            </h3>
            <div className=" text-gray-900 mt-2">
              <p> Quick and efficient delivery for smaller items</p>
            </div>
          </div>
        </div >
        <div className="relative grid min-[992px]:grid-cols-2 min-[768px]:grid-col-2 w-full md:px-40 px:5">
          <div className="relative bg-slate-100 text-center mx-2 my-2 p-5 rounded-lg">
            <h3 className="mt-4 text-xl font-bold">
              <span className="text-yellow-500">Sensitive Equipment</span>
            </h3>
            <div className=" text-gray-900 mt-2">
              <p>  Expert handling to protect high-value cargo </p>
            </div>
          </div>
          <div className="relative bg-slate-100 text-center mx-2 my-2 p-5 rounded-lg">
            <h3 className="mt-4 text-lg font-bold">
              <span className="text-yellow-500">Project Cargo</span>
            </h3>
            <div className=" text-gray-900 mt-2">
              <p>Customized solutions for heavy or oversized shipments</p>
            </div>
          </div>
        </div >

        <div className='grid grid-cols-1 mt-6'>
          <div className='space-y-5'>
            <h3 className='text-3xl font-bold'>Why Choose Transpeed Cargo? </h3>
            <p className='text-[#111]'>Our expertise in air freight forwarding ensures seamless planning and execution, giving your
              business the flexibility and reliability it needs. </p>
            <h3 className='text-3xl font-bold'>Connect with Our Air Freight Experts</h3>
            <p className='text-[#111]'>Discover how Transpeed Cargo can enhance your supply chain with tailored air freight solutions. Let’s discuss how we can help your business grow. </p>
          </div>
        </div>
      </div >
    </>
  )
}
