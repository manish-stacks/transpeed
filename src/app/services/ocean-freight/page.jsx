"use client";
import React from 'react'
import FeaturedServices from '@/components/sea-freight/FeaturedServices';
import Hero from '@/components/sea-freight/Hero';
import KeyBenefits from '@/components/sea-freight/KeyBenefits';
import ContactUs from '@/components/ContactUs';

export default function page() {
  return (
    <>
     <Hero />
     <FeaturedServices />
     <KeyBenefits />

     {/* content */}
     
     <section className='my-10 md:my-18'>
        <div className='px-5 md:px-40'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-10 items-center'>
            <div className='space-y-5 '>
              <h3 className="max-w-7xl mx-auto md:text-left text-xl md:text-4xl max-[768px]:text-3xl font-bold text-neutral-900 text-center">
              Commitment to Excellence and Innovation
              </h3>
              <p className='text-justify'>At <strong>Transpeed Cargo</strong>, we continuously innovate to improve our services and enhance customer experience. Our technology-driven approach ensures seamless coordination, increased visibility, and proactive risk management. We embrace Kaizen principles to drive operational excellence and maintain a global incident management system to safeguard service quality.</p>
              <p className='text-justify'><strong>Transpeed Cargo Pvt. Ltd. </strong>– Delivering reliable, efficient, and innovative ocean freight solutions to connect your business to the world. </p>

              {/* <div className='mt-5'>
              <strong>Our services in this area include:</strong>
              <div className='mt-3'>
                <p>Door Pickup <strong className='text-yellow-500'>|</strong> Sea Freight Import <strong className='text-yellow-500'>|</strong> Import consolidation <strong className='text-yellow-500'>|</strong> Less than-Container-Load Consolidation <strong className='text-yellow-500'>|</strong> Full-Container-Load consolidation <strong className='text-yellow-500'>|</strong> Import tracking systems <strong className='text-yellow-500'>|</strong> Multimodal transport operations <strong className='text-yellow-500'>|</strong> Infrastructure and services facilities at all sea ports and Dry parts <strong className='text-yellow-500'>|</strong> Customs Clearing <strong className='text-yellow-500'>|</strong> Door Delivery</p>
              </div>

              </div> */}
 
            </div>
            <div>
              <div className="relative rounded-3xl overflow-hidden p-6">
                <img src="/images/ship-loading.webp" alt="Blog Thumbnail" className="w-full h-auto rounded-xl" />

              </div>
            </div>
          </div>
        </div>
      </section>
    <ContactUs />
      
    </>
  )
}
