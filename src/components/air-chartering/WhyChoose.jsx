import React from 'react'

export default function WhyChoose() {
    return (
        <>
            <div className="bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-sky-500 to-sky-900 dark:bg-grid-white/[0.05] text-white py-20 text-center">
                <div className='grid grid-cols-1'>
                    <h2 className="text-xl md:text-5xl max-[768px]:text-3xl font-bold mb-4 w-full max-[767px]:w-5xl mx-auto">Why Choose Transpeed’s<br/>Air Chartering Services? </h2>
                    {/* <p className="text-white mb-10">When multiple factors matter, we provide versatile air freight solutions:  </p> */}
                </div>
                <div className="relative grid min-[992px]:grid-cols-3 min-[768px]:grid-col-2 w-full md:px-40 px:5">                  
                    <div className="relative bg-slate-100/10 text-center mx-6 my-5 p-5 rounded-lg">
                    <div className=''>
                        <img src="/images/aircraft1.png" className='mx-auto w-20'/>
                    </div>
                        <h3 className="mt-4 text-xl font-bold">
                            <span className="text-yellow-500">Exclusive Aircraft Access</span>
                        </h3>
                        <div className=" text-gray-300 mt-2">
                            <p> Gain access to a wide range of aircraft, from light jets to large freighters, depending on the size and urgency of your shipment.</p>
                        </div>
                    </div>
                    <div className="relative bg-slate-100/10 text-center mx-6 my-5 p-5 rounded-lg">
                    <div className=''>
                        <img src="/images/scheduling-1.png" className='mx-auto w-20'/>
                    </div>
                        <h3 className="mt-4 text-lg font-bold">
                            <span className="text-yellow-500">Flexible Scheduling</span>
                        </h3>
                        <div className=" text-gray-300 mt-2">
                            <p> We work around your schedule, providing on-demand services that adapt to your business needs. </p>
                        </div>
                    </div>
                    <div className="relative bg-slate-100/10 text-center mx-6 my-5 p-5 rounded-lg">
                    <div className=''>
                        <img src="/images/gloable-reach.png" className='mx-auto w-20'/>
                    </div>
                        <h3 className="mt-4 text-lg font-bold">
                            <span className="text-yellow-500">Global Reach</span>
                        </h3>
                        <div className=" text-gray-300 mt-2">
                            <p> Our strategic partnerships with leading carriers and airport authorities allow us to deliver anywhere in the world.  </p>
                        </div>
                    </div>
                </div >
                <div className="relative grid min-[992px]:grid-cols-2 min-[768px]:grid-col-2 w-full md:px-40 px:5">                  
                    <div className="relative bg-slate-100/10 text-center mx-6 my-5 p-5 rounded-lg">
                    <div className=''>
                        <img src="/images/management1.png" className='mx-auto w-20'/>
                    </div>
                        <h3 className="mt-4 text-xl font-bold">
                            <span className="text-yellow-500">End-to-End Management </span>
                        </h3>
                        <div className=" text-gray-300 mt-2">
                            <p>  From route planning and customs clearance to ground handling and delivery, we manage the entire process for you. </p>
                        </div>
                    </div>
                    <div className="relative bg-slate-100/10 text-center mx-6 my-5 p-5 rounded-lg">
                    <div className=''>
                        <img src="/images/tracking.png" className='mx-auto w-20'/>
                    </div>
                        <h3 className="mt-4 text-lg font-bold">
                            <span className="text-yellow-500">Real-Time Tracking</span>
                        </h3>
                        <div className=" text-gray-300 mt-2">
                            <p>Stay informed with full visibility of your cargo&apos;s journey through our advanced<br/>tracking systems. </p>
                        </div>
                    </div>
                </div >
            </div >
        </>
    )
}
