import { container } from '@/lib/container';
import Image from 'next/image';
import React from 'react';

const Page = () => {
    return (
        <div className='max-w-7xl mx-auto min-h-screen px-4 py-10 mt-20 mb-32'> 
            <h1 className='text-3xl md:text-4xl font-semibold text-center text-slate-900 mb-8'>
                Air Craft Specification
            </h1>
            
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                {container.conatiners.map((item, index) => (
                    <div 
                        key={index} 
                        className='bg-white border border-black p-5 rounded-lg cursor-pointer flex flex-col items-center text-center hover:shadow-lg transition-shadow'
                    >
                        <Image 
                            src={item.svg} 
                            alt={item.name} 
                            width={180} 
                            height={180} 
                            className='object-contain'
                        />
                        <h2 className='text-lg font-medium text-gray-700 mt-4'>
                            {item.name}
                        </h2>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Page;