import React from 'react'

export default function CustomizedAirChartering() {
  return (
    <>
        <section className='my-10 md:my-20'>
        <div className='px-5 md:px-40'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-10 items-center'>
            <div className='space-y-5 '>
              <h2 className="max-w-7xl mx-auto md:text-left text-xl md:text-5xl max-[768px]:text-3xl font-bold text-[#172554] text-center">
                 Customized Air Chartering Solutions for Your Business Needs
              </h2>
              <p className='text-justify'>At Transpeed Cargo Pvt. Ltd., we understand that some shipments require special handling, speed, and flexibility beyond traditional air freight services. Our Air Chartering Solutions provide you with the ultimate control over your cargo’s journey — from origin to destination — with dedicated aircraft tailored to your specific requirements. </p>
              <p className='text-justify'>Whether you need to transport time-sensitive goods, oversized cargo, or high-value shipments, our global network and industry expertise ensure that your cargo reaches its destination securely, on time, and with full visibility throughout the process.</p>
             
            </div>
            <div>
              <div className="relative rounded-3xl overflow-hidden">
                <img src="/images/sea-frieght.webp" alt="Blog Thumbnail" className="w-full h-auto rounded-xl" />
                <div className="absolute bottom-3 left-3 bg-gray-100 p-6 rounded-xl shadow-lg w-2/4">
                  <span className="text-sm bg-yellow-500 text-gray-900 px-3 py-1 rounded-md">Air Chartering</span>
                  <h3 className="text-lg font-semibold mt-2">
                  Specialized in urgent and time-sensitive cargo deliveries worldwide.
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
