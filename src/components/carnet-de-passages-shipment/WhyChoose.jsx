import React from 'react'
import { Cover } from '../ui/cover'

export default function WhyChoose() {
    return (
        <>
            <div className="bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-sky-500 to-sky-900 dark:bg-grid-white/[0.05] text-white py-20 text-center">
                <div className='grid grid-cols-1'>
                    
                    <h2 className="text-xl md:text-5xl max-[768px]:text-3xl font-bold mb-4 w-full max-[767px]:w-5xl mx-auto">Why Choose Transpeed’s<br/>for  <Cover>Carnet de Passages Shipment</Cover> </h2>
                  
                </div>
                <div className="relative grid min-[992px]:grid-cols-2 min-[768px]:grid-col-2 w-full md:px-40 px:5">                  
                <div className="relative bg-slate-100/10 text-center mx-6 my-5 p-5 rounded-lg">
                        <div className=''>
                            <img src="/images/rating.png" className='mx-auto w-20' />
                        </div>
                        <h3 className="mt-4 text-xl font-bold">
                            <span className="text-yellow-500">Expert Handling</span>
                        </h3>
                        <div className=" text-gray-300 mt-2">
                            <p> Experienced professionals ensuring smooth coordination and
                                minimal delays.
                            </p>
                        </div>
                    </div>


                    <div className="relative bg-slate-100/10 text-center mx-6 my-5 p-5 rounded-lg">
                    <div className=''>
                        <img src="/images/planning.png" className='mx-auto w-20'/>
                    </div>
                        <h3 className="mt-4 text-lg font-bold">
                            <span className="text-yellow-500">Customized Transport Planning</span>
                        </h3>
                        <div className=" text-gray-300 mt-2">
                            <p> We create customized transport plans using multimodal solutions (sea, air, road, rail) to optimize cost, transit time, and security.</p>
                        </div>
                    </div>


                    <div className="relative bg-slate-100/10 text-center mx-6 my-5 p-5 rounded-lg">
                    <div className=''>
                        <img src="/images/internet.png" className='mx-auto w-20'/>
                    </div>
                        <h3 className="mt-4 text-lg font-bold">
                            <span className="text-yellow-500">Global Network and Local Expertise</span>
                        </h3>
                        <div className=" text-gray-300 mt-2">
                            <p> With global partnerships and local expertise, we seamlessly handle cross-border logistics, managing regulations, customs, and <compliance className=""></compliance></p>
                        </div>
                    </div>



                    <div className="relative bg-slate-100/10 text-center mx-6 my-5 p-5 rounded-lg">
                    <div className=''>
                        <img src="/images/management1.png" className='mx-auto w-20'/>
                    </div>
                        <h3 className="mt-4 text-xl font-bold">
                            <span className="text-yellow-500">End-to-End Visibility and Control</span>
                        </h3>
                        <div className=" text-gray-300 mt-2">
                            <p>  Our tracking systems offer real-time cargo updates, ensuring transparency and control throughout the shipment.</p>
                        </div>
                    </div>
                </div >
              
            </div >
        </>
    )
}
