import { flags } from '@/lib/flags';
import Image from 'next/image';
import React from 'react';

const Page = () => {
  return (
    <div className='max-w-7xl mx-auto min-h-screen px-4 py-10 mt-28 mb-16'>
      <h1 className='bg-yellow-500 p-3 rounded-md text-3xl lg:text-5xl font-bold text-center text-slate-100 mb-12 '>
        Sea Ports in the World
      </h1>
      
      <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 '>
        {flags.flag.map((flag) => (
          <li  
          key={flag.country} 
            className='flex items-center space-x-3 m-2 p-2 rounded-sm bg-white shadow-md hover:shadow-xl transition-shadow '>
            <Image 
              src={flag.flag} 
              alt={flag.name} 
              width={24} 
              height={16} 
              className='object-contain'
            />
            <span className='text-slate-800 text-sm font-medium'>{flag.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Page;