"use client";

import React from 'react'
export default function FeaturedServices() {
  return (
    <>
       
      <section className=" h-[360px] md:h-[360px] bg-[#172554] overflow-hidden">
        <div className="relative">
          <div>
            <img src='/images/bg-map-pattarn.png' />
          </div>
          <div className='absolute top-16 bottom-16 text-white px-5 md:px-40'>
            <h2 className='min-[1152px]:text-6xl max-[1150px]:text-3xl font-bold leading-10'>Connect to Opportunities <span className='text-yellow-500'>Worldwide</span> with <span className='text-yellow-500'>Transpeed Cargo</span> Reliable Ocean Freight Solutions Built on Expertise and Experience </h2>
          </div>
        </div>
      </section>

      <section className='my-10 md:my-20'>
        <div className='px-5 md:px-40'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-10 items-center'>
            <div className='space-y-5 '>
              {/* <h2 className="max-w-7xl mx-auto md:text-left text-xl md:text-5xl max-[768px]:text-3xl font-bold text-neutral-900 text-center">
                Get To Know Our Featured Services
              </h2> */}
              <p className='text-justify'>At Transpeed Cargo Pvt Ltd, we empower businesses to connect with opportunities across the globe through secure, efficient, and flexible ocean freight forwarding solutions. By leveraging our extensive global network and strong partnerships with major carriers, we provide customized transportation solutions tailored to your business needs — from securing the best shipping schedules to negotiating competitive rates. Whether you need to consolidate shipments, split loads, or integrate with other services like air freight, multimodal transport, cross-border services, or customs clearance, Transpeed Cargo is your trusted partner for seamless global logistics. </p>
               <h3 className="max-w-7xl mx-auto md:text-left text-xl md:text-4xl max-[768px]:text-2xl font-bold text-[#172554] text-center">
               Expertise You Can Rely On 
              </h3>
              <p className='text-justify'>Our team of ocean freight specialists across the world possesses deep industry knowledge and diverse experience, ensuring your cargo is handled with care and delivered reliably, no matter the destination. </p> 
             
            </div>
            <div>
              <div className="relative rounded-3xl overflow-hidden">
                <img src="/images/sea-frieght.webp" alt="Blog Thumbnail" className="w-full h-auto rounded-xl" />
                <div className="absolute bottom-3 left-3 bg-gray-100 p-6 rounded-xl shadow-lg w-2/4">
                  <span className="text-sm bg-yellow-500 text-gray-900 px-3 py-1 rounded-md">Ocean Freight</span>
                  <h3 className="text-lg font-semibold mt-2">
                    Reliable Shipping And Supply Chain
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
 
    </>
  )
}
