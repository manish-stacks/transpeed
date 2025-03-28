import { flags } from '@/lib/flags';
import Image from 'next/image';
import React from 'react';

const Page = () => {
  return (
    <div className='max-w-7xl mx-auto min-h-screen px-4 py-10'>
      <h1 className='text-3xl md:text-4xl font-semibold text-center text-gray-800 mb-8'>
        Sea Ports in the World
      </h1>
      
      <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 '>
        {flags.flag.map((flag) => (
          <li 
            key={flag.country} 
            className='flex items-center space-x-3 p-1  rounded-lg'>
            <Image 
              src={flag.flag} 
              alt={flag.name} 
              width={24} 
              height={16} 
              className='object-contain'
            />
            <span className='text-gray-700 text-sm font-medium'>{flag.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Page;