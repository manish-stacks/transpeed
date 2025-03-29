import React from 'react'
import { Cover } from '../ui/cover'

export default function WhyChoose() {
    return (
        <>
            <div className="bg-[#D3EDFF] dark:bg-grid-white/[0.05] text-gray-800 py-20 text-center">
                <div className='grid grid-cols-1'>
                    
                    <h2 className="text-xl md:text-5xl max-[768px]:text-3xl font-bold mb-4 w-full max-[767px]:w-5xl mx-auto">Why Choose Transpeed’s<br/>for Project Cargo?</h2>
                    {/* <Cover>Project Cargo?</Cover> */}
                  
                </div>
                <div className="relative grid min-[992px]:grid-cols-4  min-[425px]:grid-cols-2 w-full lg:px-40 px:5">                  
                    <div className="relative bg-slate-100 text-center mx-6 my-5 p-5 rounded-lg">
                    <div className=''>
                        <img src="/images/cruise.png" className='mx-auto w-20'/>
                    </div>
                        <h3 className="mt-4 text-xl font-bold">
                            <span className="text-yellow-500"> Expertise in Heavy and Oversized Shipments</span>
                        </h3>
                        <div className=" text-gray-900 mt-2">
                            <p> Our team specializes in out-of-gauge (OOG) and heavy-lift cargo, offering end-to-end logistics, including route planning, permits, and specialized equipment handling.</p>
                        </div>
                    </div>
                    <div className="relative bg-slate-100 text-center mx-6 my-5 p-5 rounded-lg">
                    <div className=''>
                        <img src="/images/planning.png" className='mx-auto w-20'/>
                    </div>
                        <h3 className="mt-4 text-lg font-bold">
                            <span className="text-yellow-500">Customized Transport Planning</span>
                        </h3>
                        <div className=" text-gray-900 mt-2">
                            <p> We create customized transport plans using multimodal solutions (sea, air, road, rail) to optimize cost, transit time, and security.</p>
                        </div>
                    </div>
                    <div className="relative bg-slate-100 text-center mx-6 my-5 p-5 rounded-lg">
                    <div className=''>
                        <img src="/images/internet.png" className='mx-auto w-20'/>
                    </div>
                        <h3 className="mt-4 text-lg font-bold">
                            <span className="text-yellow-500">Global Network and Local Expertise</span>
                        </h3>
                        <div className=" text-gray-900 mt-2">
                            <p> With global partnerships and local expertise, we seamlessly handle cross-border logistics, managing regulations, customs, and <compliance className=""></compliance></p>
                        </div>
                    </div>


                    <div className="relative bg-slate-100 text-center mx-6 my-5 p-5 rounded-lg">
                    <div className=''>
                        <img src="/images/management1.png" className='mx-auto w-20'/>
                    </div>
                        <h3 className="mt-4 text-xl font-bold">
                            <span className="text-yellow-500">End-to-End Visibility and Control</span>
                        </h3>
                        <div className=" text-gray-900 mt-2">
                            <p>  Our tracking systems offer real-time cargo updates, ensuring transparency and control throughout the shipment.</p>
                        </div>
                    </div>
                </div >
              
            </div >
        </>
    )
}
