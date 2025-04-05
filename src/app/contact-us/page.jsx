"use client";

import React from 'react'
import ContactUs from '@/components/ContactUs'
import GoogleMap from '@/components/GoogleMap';

export default function page() {
  return (
    <>
      <div className='mt-20'>
        <ContactUs />

      </div>
      <section className='bg-[#d3edff] py-16 px-6'>
        <div className='mail-id max-w-7xl mx-auto'>
          <div className='department-mail grid lg:grid-cols-4 md:grid-cols-2 gap-5'>
            <div className='bg-white rounded-md text-center p-8 shadow-lg'>
              <h3 className='font-bold text-lg text-[#0B476A]'>Management Contact Email</h3>
              <p className='text-lg'>arpit@transpeed.in</p>
              <p className='text-lg'>anubhav@transpeed.in</p>
            </div>
            <div className='bg-white rounded-md text-center p-8 shadow-lg'>
              <h3 className='font-bold text-lg text-[#0B476A]'>Operations Email </h3>
              <p className='text-lg'>ops@transpeed.in</p>
              <p className='text-lg'>air@transpeed.in</p>
            </div>
            <div className='bg-white rounded-md text-center p-8  shadow-lg'>
              <h3 className='font-bold text-lg text-[#0B476A]'>Sales</h3>
              <p className='text-lg'>sales@transpeed.in</p>
              <p className='text-lg'>overseas@transpeed.in</p>
            </div>
            <div className='bg-white rounded-md text-center p-8  shadow-lg'>
              <h3 className='font-bold text-lg text-[#0B476A]'>Accounts & Finance </h3>
              <p className='text-lg'>accounts@transpeed.in</p>
              {/* <p className='text-lg'>anubhav@transpeed.in</p> */}
            </div>
            
          </div>
        </div>
      </section>
      <GoogleMap />
    </>
  )
}
