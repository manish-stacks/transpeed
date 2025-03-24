import React from 'react';
import {Headset, Route, RefreshCw, Binoculars, ShieldCheck } from 'lucide-react';

const timelineData = [
    {
        year: '1990',
        title: 'Consultation & Planning',
        description: ' We assess your cargo requirements and select the best aircraft for the job.',
        Icon: Headset,
    },
    {
        year: '2002',
        title: 'Route Optimization',
        description: ' We plan the most efficient route to minimize transit time and costs. ',
        Icon: Route,
    },
    {
        year: '2009',
        title: 'Loading & Handling',
        description: ' Expert teams ensure secure loading and proper handling based on cargo specifications.',
        Icon: RefreshCw,
    },
    {
        year: '2015',
        title: 'Real-Time Monitoring',
        description: 'You receive regular updates and tracking information during transit. ',
        Icon: Binoculars,
    },
    {
        year: '2015',
        title: 'Secure Delivery ',
        description: 'We coordinate with ground handling teams to ensure smooth customs clearance and final delivery.',
        Icon: ShieldCheck,
    }

];

function HowItWork() {
    return (
        <>
        <div className="min-h-[500px] bg-[#172554] text-white">
            <div className='grid grid-cols-1 pt-16'>
                <h2 className="text-xl md:text-5xl max-[768px]:text-3xl font-bold mb-4 w-full max-[767px]:w-5xl text-center">How It Works</h2>
            </div>
            <div className="relative pt-10 px-4 md:px-8 overflow-x-auto">
                {/* Timeline Container */}
                <div className="min-w-[1000px] relative">
                    {/* Timeline Line */}
                    <div className="absolute top-[5.5rem] left-0 w-full h-[2px] bg-[#f5bd24] opacity-30" />

                    {/* Timeline Items */}
                    <div className="flex gap-8">
                        {timelineData.map((item, index) => (
                            <div key={item.year} className="relative flex-1">
                                {/* Timeline Dot */}
                                <div className="absolute top-[4.5rem] left-1/2 transform -translate-x-1/2 w-4 h-4 bg-yellow-500 rounded-full" />

                                {/* Content */}
                                <div className="timeline-item text-center cursor-pointer">
                                    <div className="flex flex-col items-center gap-4 mb-3">
                                        <div className="w-20 h-20 rounded-full bg-yellow-500 bg-opacity-20 flex items-center justify-center">
                                            <item.Icon className="w-10 h-10 text-yellow-500" />
                                        </div>
                                        <div className="flex flex-col items-center">
                                            {/* <span className="text-5xl font-bold text-yellow-500">{item.year}</span> */}
                                            <h3 className="text-xl font-semibold mt-2">{item.title}</h3>
                                        </div>
                                    </div>
                                    <p className="text-gray-300 max-w-[250px] mx-auto">{item.description}</p>
                                </div>

                                {/* Connector Line (except for last item) */}
                                {index < timelineData.length - 1 && (
                                    <div className="absolute top-[5.5rem] right-0 w-full h-[2px] bg-yellow-500 opacity-30" />
                                )}
                            </div>
                        ))}
                    </div>

                </div>

                {/* Scroll Indicators */}
                {/* <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#012A36] to-transparent pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#012A36] to-transparent pointer-events-none" /> */}
            </div>
        </div>

        <div className="bg-[#d3edff] text-[#172554] py-20 text-center md:px-40 px-5">
                <div className='grid grid-cols-1'>
                    <h2 className="text-xl md:text-5xl max-[768px]:text-3xl font-bold mb-4 w-full max-[767px]:w-5xl mx-auto">Why Transpeed Cargo Pvt. Ltd.?</h2>
                </div>
                <div className="relative grid min-[992px]:grid-cols-1 min-[768px]:grid-col-2 w-full md:px-40 mt-4">
                    <div className="relative bg-slate-100 text-center mx-2 my-2 p-5 rounded-lg">
{/* 
                        <h3 className="mt-4 text-xl font-bold">
                            <span className="text-yellow-500">Emergency Shipments</span>
                        </h3> */}
                        <div className=" text-gray-900 mt-2">
                            <p> With years of experience in air freight and logistics, Transpeed Cargo Pvt. Ltd. is a trusted  name in the freight forwarding industry. Our air chartering solutions are designed to meet the  highest standards of efficiency, security, and reliability. No matter how complex your  shipment requirements are, we have the expertise and resources to deliver. </p>
                            <strong>Need to move cargo fast? Contact Transpeed Cargo today to explore our air chartering solutions. </strong>
                        </div>
                    </div>

                </div >


            </div >

        </>
    );
}

export default HowItWork;