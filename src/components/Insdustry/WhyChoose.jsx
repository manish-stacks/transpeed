import React from 'react'
import { Cover } from '../ui/cover'

export default function WhyChoose() {
    return (
        <>
            <div className="bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-sky-500 to-sky-900 dark:bg-grid-white/[0.05] text-white py-20 text-center">
                <div className='grid grid-cols-1'>

                    <h2 className="text-xl md:text-5xl max-[768px]:text-3xl font-bold mb-4 w-full max-[767px]:w-5xl mx-auto">Why Choose Transpeed’s <Cover className={'rounded-xl'}>Cargo</Cover>   </h2>

                </div>
                <div className="relative grid min-[992px]:grid-cols-4 min-[569px]:grid-cols-2 w-full lg:px-40 px:5">
                    <div className="relative bg-slate-100/10 text-center mx-6 my-5 p-5 rounded-lg">
                        <div className=''>
                            <img src="/images/rating.png" className='mx-auto w-20' />
                        </div>
                        <h3 className="mt-4 text-xl font-bold">
                            <span className="text-yellow-500">Industry Expertise</span>
                        </h3>
                        <div className=" text-gray-300 mt-2">
                            <p>Customized solutions for every sector
                            </p>
                        </div>
                    </div>
                    <div className="relative bg-slate-100/10 text-center mx-6 my-5 p-5 rounded-lg">
                        <div className=''>
                            <img src="/images/internet.png" className='mx-auto w-20' />
                        </div>
                        <h3 className="mt-4 text-xl font-bold">
                            <span className="text-yellow-500">Technology-Driven</span>
                        </h3>
                        <div className=" text-gray-300 mt-2">
                            <p>  Real-time tracking & supply chain optimization
                            </p>
                        </div>
                    </div>
                    <div className="relative bg-slate-100/10 text-center mx-6 my-5 p-5 rounded-lg">
                        <div className=''>
                            <img src="/images/speed.png" className='mx-auto w-20' />
                        </div>
                        <h3 className="mt-4 text-xl font-bold">
                            <span className="text-yellow-500">Global Network</span>
                        </h3>
                        <div className=" text-gray-300 mt-2">
                            <p>  Reliable international logistics partners
                            </p>
                        </div>
                    </div>
                    <div className="relative bg-slate-100/10 text-center mx-6 my-5 p-5 rounded-lg">
                        <div className=''>
                            <img src="/images/support.png" className='mx-auto w-20' />
                        </div>
                        <h3 className="mt-4 text-lg font-bold">
                            <span className="text-yellow-500">✅ End-to-End Support</span>
                        </h3>
                        <div className=" text-gray-300 mt-2">
                            <p> From shipment booking to last-mile delivery, we provide complete
                                logistics solutions</p>
                        </div>
                    </div>








                </div >

            </div >
        </>
    )
}
