import React from 'react'
import { Cover } from '../ui/cover'

export default function WhyChoose() {
    return (
        <>
            <div className="bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-sky-500 to-sky-900 dark:bg-grid-white/[0.05] text-white py-20 text-center">
                <div className='grid grid-cols-1'>

                    <h2 className="text-xl md:text-5xl max-[768px]:text-3xl font-bold mb-4 w-full max-[767px]:w-5xl mx-auto">Why Choose Transpeed’s<br /> Cargo for  <Cover>Custom Clearance Solutions</Cover> </h2>

                </div>
                <div className="relative grid min-[992px]:grid-cols-3 min-[768px]:grid-col-3 w-full md:px-40 px:5">
                <div className="relative bg-slate-100/10 text-center mx-6 my-5 p-5 rounded-lg">
                        <div className=''>
                            <img src="/images/rating.png" className='mx-auto w-20' />
                        </div>
                        <h3 className="mt-4 text-xl font-bold">
                            <span className="text-yellow-500">Expert Knowledge</span>
                        </h3>
                        <div className=" text-gray-300 mt-2">
                            <p>Our team stays updated on evolving global trade regulations to
                            avoid compliance issues.
                            </p>
                        </div>
                    </div>
                    <div className="relative bg-slate-100/10 text-center mx-6 my-5 p-5 rounded-lg">
                        <div className=''>
                            <img src="/images/speed.png" className='mx-auto w-20' />
                        </div>
                        <h3 className="mt-4 text-xl font-bold">
                            <span className="text-yellow-500">Speed and Efficiency</span>
                        </h3>
                        <div className=" text-gray-300 mt-2">
                            <p>  Our established relationships with customs authorities help
                            expedite the clearance process</p>
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
