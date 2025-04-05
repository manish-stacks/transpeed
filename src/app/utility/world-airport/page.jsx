"use client";
import { airportdata } from '@/lib/airport-data';
import { Search } from 'lucide-react';
import React, { useState } from 'react';

const Page = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const airportsPerPage = 20;

    // Filter data based on search term
    const filteredAirports = airportdata.filter((airport) => {
        const name = airport.name?.toLowerCase() || '';
        const iata = airport.iata?.toLowerCase() || '';
        const icao = airport.icao?.toLowerCase() || '';
        const country = airport.country?.toLowerCase() || '';
        const query = searchTerm.toLowerCase();

        return (
            name.includes(query) ||
            iata.includes(query) ||
            icao.includes(query) ||
            country.includes(query)
        );
    });


    const totalPages = Math.ceil(filteredAirports.length / airportsPerPage);
    const startIndex = (currentPage - 1) * airportsPerPage;
    const currentAirports = filteredAirports.slice(startIndex, startIndex + airportsPerPage);

    const handlePrev = () => {
        setCurrentPage((prev) => Math.max(prev - 1, 1));
    };

    const handleNext = () => {
        setCurrentPage((prev) => Math.min(prev + 1, totalPages));
    };

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
        setCurrentPage(1); // Reset to page 1 on new search
    };

    return (
        <div className='max-w-7xl mx-auto min-h-screen px-4 py-10 mt-36 mb-32'>
            <div className='grid grid-cold-1 md:grid-cols-2 gap-10'>
                <h1 className='text-3xl md:text-4xl font-bold text-center md:text-start text-slate-900 mb-6'>
                    World Airports
                </h1>

                {/* Search Field */}         
                    <div className="mb-6 flex justify-end items-center">
                        <input
                            type="text"
                            placeholder="Search by name, IATA, ICAO or country"
                            value={searchTerm}
                            onChange={handleSearch}
                            className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-l focus:outline-none focus:ring-1 focus:ring-[#0B476A]"
                        />
                        <div className='bg-[#0B476A] p-2 text-white absolute rounded-r border border-[#0B476A]'>
                            <span><Search /></span>
                        </div>
                    </div>
            </div>


            <div className="overflow-x-auto shadow-md rounded-lg">
                <table className="w-full text-sm text-left text-[#111] dark:text-gray-400">
                    <thead className="bg-[#0B476A] text-white text-lg">
                        <tr>
                            <th className="px-6 py-4">Airport Name</th>
                            <th className="px-6 py-4">IATA</th>
                            <th className="px-6 py-4">ICAO</th>
                            <th className="px-6 py-4">Country</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentAirports.map((airport, index) => (
                            <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
                                <td className="px-6 py-4 text-[16px]">{airport.name}</td>
                                <td className="px-6 py-4 text-[16px]">{airport.iata}</td>
                                <td className="px-6 py-4 text-[16px]">{airport.icao}</td>
                                <td className="px-6 py-4 text-[16px]">{airport.country}</td>
                            </tr>
                        ))}
                        {currentAirports.length === 0 && (
                            <tr>
                                <td colSpan={4} className="text-center py-6 text-gray-500">
                                    No matching airports found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* Pagination Controls */}
            <div className="flex justify-between items-center mt-6">
                <button
                    onClick={handlePrev}
                    disabled={currentPage === 1}
                    className="px-4 py-2 bg-[#0B476A] text-white rounded disabled:opacity-50"
                >
                    Previous
                </button>
                <span className="text-sm text-gray-700">
                    Page {currentPage} of {totalPages}
                </span>
                <button
                    onClick={handleNext}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 bg-[#0B476A] text-white rounded disabled:opacity-50"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default Page;
