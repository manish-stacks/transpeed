'use client';
import Image from 'next/image';
import React from 'react';

const Page = () => {
    return (
        <div className='max-w-7xl mx-auto min-h-screen px-4 py-10 mt-20 mb-32'>
            {/* <h1 className='text-3xl md:text-4xl font-semibold text-center text-slate-900 mb-8'>
                Air Craft Specification
            </h1> */}

            <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6'>
                <div className=''>
                    <Image width={1920} height={1000} src="/images/air-craft-1.jpg" alt='Air craft 1' className='rounded border border-yellow-300 p-3 mb-5' />
                    <Image width={1920} height={1000} src="/images/air-craft-2.webp" alt='Air craft 2' className='rounded border border-yellow-300 p-3 mb-5' />
                    <Image width={1920} height={1000} src="/images/air-craft-3.webp" alt='Air craft 3' className='rounded border border-yellow-300 p-3 mb-5' />
                    <Image width={1920} height={1000} src="/images/air-craft-4.webp" alt='Air craft 4' className='rounded border border-yellow-300 p-3 mb-5' />
                    <Image width={1920} height={1000} src="/images/air-craft-5.webp" alt='Air craft 5' className='rounded border border-yellow-300 p-3 mb-5' />
                    <Image width={1920} height={1000} src="/images/air-craft-6.webp" alt='Air craft 6' className='rounded border border-yellow-300 p-3 mb-5' />
                    <Image width={1920} height={1000} src="/images/air-craft-7.webp" alt='Air craft 7' className='rounded border border-yellow-300 p-3 mb-5' />
                    <Image width={1920} height={1000} src="/images/air-craft-8.webp" alt='Air craft 8' className='rounded border border-yellow-300 p-3 mb-5' />
                    <Image width={1920} height={1000} src="/images/air-craft-9.webp" alt='Air craft 9' className='rounded border border-yellow-300 p-3 mb-5' />
                    <Image width={1920} height={1000} src="/images/air-craft-10.webp" alt='Air craft 10' className='rounded border border-yellow-300 p-3 mb-5' />
                    <Image width={1920} height={1000} src="/images/air-craft-11.webp" alt='Air craft 11' className='rounded border border-yellow-300 p-3 mb-5' />
                    <Image width={1920} height={1000} src="/images/air-craft-12.webp" alt='Air craft 12' className='rounded border border-yellow-300 p-3 mb-5' />
                    <Image width={1920} height={1000} src="/images/air-craft-13.webp" alt='Air craft 13' className='rounded border border-yellow-300 p-3 mb-5' />
                    <Image width={1920} height={1000} src="/images/air-craft-14.webp" alt='Air craft 13' className='rounded border border-yellow-300 p-3 mb-5' />

                </div>
            </div>
        </div>
    );
};

export default Page;