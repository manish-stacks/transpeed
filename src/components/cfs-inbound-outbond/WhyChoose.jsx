import React from 'react'
import { Cover } from '../ui/cover'

export default function WhyChoose() {
    return (
        <>
            <div className="bg-[#D3EDFF] dark:bg-grid-white/[0.05] text-slate-900 py-20 text-center">
                <div className='grid grid-cols-1'>

                    <h2 className="text-xl md:text-5xl max-[768px]:text-3xl font-bold mb-4 w-full max-[767px]:w-5xl mx-auto">Why Choose Transpeed’s<br /> Cargo for CFS Inbound/Outbound? </h2>
                    {/* <Cover>CFS Inbound/Outbound?</Cover>  */}

                </div>
                <div className="relative grid min-[992px]:grid-cols-2 min-[425px]:grid-col-2 w-full lg:px-40 px:5">
                    <div className="relative bg-slate-100 text-center mx-6 my-5 p-5 rounded-lg">
                        <div className=''>
                            <img src="/images/loc.png" className='mx-auto w-20' />
                        </div>
                        <h3 className="mt-4 text-xl font-bold">
                            <span className="text-yellow-500">Strategic Location</span>
                        </h3>
                        <div className=" text-gray-900 mt-2">
                            <p> – Proximity to major ports and airports ensures quick turnaround..</p>
                        </div>
                    </div>
                    <div className="relative bg-slate-100 text-center mx-6 my-5 p-5 rounded-lg">
                        <div className=''>
                            <img src="/images/Advanced Technology.png" className='mx-auto w-20' />
                        </div>
                        <h3 className="mt-4 text-lg font-bold">
                            <span className="text-yellow-500">Advanced Technology</span>
                        </h3>
                        <div className=" text-gray-900 mt-2">
                            <p> Real-time tracking and automated systems for seamless operations</p>
                        </div>
                    </div>

                    <div className="relative bg-slate-100 text-center mx-6 my-5 p-5 rounded-lg">
                        <div className=''>
                            <img src="/images/rating.png" className='mx-auto w-20' />
                        </div>
                        <h3 className="mt-4 text-xl font-bold">
                            <span className="text-yellow-500">Expert Handling</span>
                        </h3>
                        <div className=" text-gray-900 mt-2">
                            <p> Experienced professionals ensuring smooth coordination and
                                minimal delays.
                            </p>
                        </div>
                    </div>

                    <div className="relative bg-slate-100 text-center mx-6 my-5 p-5 rounded-lg">
                        <div className=''>
                            <img src="/images/analyse.png" className='mx-auto w-20' />
                        </div>
                        <h3 className="mt-4 text-lg font-bold">
                            <span className="text-yellow-500">Customized Solutions</span>
                        </h3>
                        <div className=" text-gray-900 mt-2">
                            <p>Tailored services to meet the specific needs of your business.
                                At Transpeed Cargo, we make inbound and outbound logistics <b>faster</b>, <b>safer</b>, and more
                                <b>cost-effective</b>. Trust us to keep your supply chain running smoothly.</p>
                        </div>
                    </div>



                </div >

            </div >
        </>
    )
}
