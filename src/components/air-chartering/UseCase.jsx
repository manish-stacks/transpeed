import React from 'react'

export default function UseCase() {
    return (
        <>
            <div className="bg-[#d3edff] text-[#172554] py-20 text-center md:px-40 px-5">
                <div className='grid grid-cols-1'>
                    <h2 className="text-xl md:text-5xl max-[768px]:text-3xl font-bold mb-4 w-full max-[767px]:w-5xl mx-auto">Use Cases for Transpeed’s<br />Air Chartering Solutions </h2>
                </div>
                <div className="relative grid min-[992px]:grid-cols-3 min-[768px]:grid-col-2 w-full md:px-40 mt-4">
                    <div className="relative bg-slate-100 text-center mx-2 my-2 p-5 rounded-lg">
                        <div className=''>
                            <img src="/images/shield1.png" className='mx-auto w-20' />
                        </div>
                        <h3 className="mt-4 text-xl font-bold">
                            <span className="text-yellow-500">Emergency Shipments</span>
                        </h3>
                        <div className=" text-gray-900 mt-2">
                            <p> When time is critical, our air chartering service ensures that urgent cargo — such as medical supplies, automotive parts, or critical documents — reaches its destination within hours. </p>
                        </div>
                    </div>
                    <div className="relative bg-slate-100 text-center mx-2 my-2 p-5 rounded-lg">
                        <div className=''>
                            <img src="/images/rocket1.png" className='mx-auto w-20' />
                        </div>
                        <h3 className="mt-4 text-lg font-bold">
                            <span className="text-yellow-500">Project Cargo and Heavy Equipment</span>
                        </h3>
                        <div className=" text-gray-900 mt-2">
                            <p> Handling oversized or heavy machinery? Our charter solutions are ideal for transporting construction equipment, oil and gas machinery, and other project cargo with specialized handling requirements.</p>
                        </div>
                    </div>
                    <div className="relative bg-slate-100 text-center mx-2 my-2 p-5 rounded-lg">
                        <div className=''>
                            <img src="/images/globe1.png" className='mx-auto w-20' />
                        </div>
                        <h3 className="mt-4 text-lg font-bold">
                            <span className="text-yellow-500">High-Value and Sensitive Goods</span>
                        </h3>
                        <div className=" text-gray-900 mt-2">
                            <p> For valuable shipments like electronics, pharmaceuticals, and luxury goods, our secure handling and real-time tracking ensure the highest level of protection and accuracy. </p>
                        </div>
                    </div>
                </div >
                <div className="relative grid min-[992px]:grid-cols-2 min-[768px]:grid-col-2 w-full md:px-40 px:5">
                    <div className="relative bg-slate-100 text-center mx-2 my-2 p-5 rounded-lg">
                    <div className=''>
                            <img src="/images/target1.png" className='mx-auto w-20' />
                        </div>
                        <h3 className="mt-4 text-xl font-bold">
                            <span className="text-yellow-500">Special Events and Trade Shows</span>
                        </h3>
                        <div className=" text-gray-900 mt-2">
                            <p>Need to transport equipment for a product launch or exhibition? Our chartering service provides seamless delivery with minimal handling and quick turnaround times.</p>
                        </div>
                    </div>
                    <div className="relative bg-slate-100 text-center mx-2 my-2 p-5 rounded-lg">
                    <div className=''>
                            <img src="/images/trophy1.png" className='mx-auto w-20' />
                        </div>
                        <h3 className="mt-4 text-lg font-bold">
                            <span className="text-yellow-500">Military and Government Cargo</span>
                        </h3>
                        <div className=" text-gray-900 mt-2">
                            <p>We have the experience and security clearance to handle confidential and sensitive government or defense-related shipments under strict compliance. </p>
                        </div>
                    </div>
                </div >

            </div >
        </>
    )
}
