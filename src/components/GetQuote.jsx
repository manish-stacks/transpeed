"use client";
import React, { useState } from 'react';
import { Upload } from 'lucide-react';

function App() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        company: '',
        shipperAddress: '',
        shipperPinCode: '',
        consigneeAddress: '',
        consigneePinCode: '',
        additionalInfo: '',
        selectedFile: null,
    });

    //   const handleSubmit = (e: React.FormEvent) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log(formData);
    };

    return (
        <div className="min-h-screen bg-white p-4 md:p-8">
            <div className="max-w-6xl mx-auto">
                {/* <h1 className="text-3xl md:text-4xl font-bold text-center text-[#1a4b8f] mb-8">
                Get a quotation
                </h1> */}

                <div className="grid grid-cols-1 md:grid-cols-1 gap-1 mb-8">
                    <div className="bg-yellow-500 text-white p-4 text-center">
                        {/* <h2 className="text-2xl font-bold">LCL</h2>
                         <p className="text-sm">(Less than Container Load)</p> */}
                        <h2 className="text-2xl font-bold">Get a quotation</h2>
                    </div>
                    {/* <div className="bg-[#ffd7c1] p-4 text-center">
                            <h2 className="text-2xl font-bold">FCL</h2>
                            <p className="text-sm">(Full Container Load)</p>
                        </div>
                        <div className="bg-[#ffd7c1] p-4 text-center">
                            <h2 className="text-2xl font-bold">Air Freight</h2>
                        </div> */}
                </div>

                <form onSubmit={handleSubmit} className="space-y-6  bg-slate-100 p-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-gray-700 mb-2">Name</label>
                            <input
                                type="text"
                                placeholder="Ex: Name"
                                required
                                className="w-full p-3 border rounded-md"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 mb-2">Phone Number</label>
                            <div className="flex">
                                <select className="p-3 border rounded-l-md w-20">
                                    <option>+91</option>                        
                                </select>
                                <input
                                    type="tel"
                                    placeholder="9886523521"
                                    required
                                    className="w-full p-3 border border-l-0 rounded-r-md"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-gray-700 mb-2">Email</label>
                            <input
                                type="email"
                                placeholder="Ex: example@gmail.com"
                                required
                                className="w-full p-3 border rounded-md"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 mb-2">Company</label>
                            <input
                                type="text"
                                placeholder="Ex: Transpeed Cargo Pvt. Ltd."
                                required
                                className="w-full p-3 border rounded-md"
                            />
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold text-gray-700 mb-4">
                            Shipper/Consignee Details
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div>
                                <label className="block text-gray-700 mb-2">Ex Work</label>
                                <input
                                    type="text"
                                    placeholder="Ex: Shipper Address"
                                    required
                                    className="w-full p-3 border rounded-md"
                                />
                                <input
                                    type="text"
                                    placeholder="Ex: 400707"
                                    required
                                    className="w-full p-3 border rounded-md mt-4"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 mb-2">DDU/DAP</label>
                                <input
                                    type="text"
                                    placeholder="Ex: Consignee Address"
                                    required
                                    className="w-full p-3 border rounded-md"
                                />
                                <input
                                    type="text"
                                    placeholder="Ex: 400707"
                                    required
                                    className="w-full p-3 border rounded-md mt-4"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 mb-2">Haz/DG Cargo</label>
                                <div className="border rounded-md p-6 text-center bg-gray-50">
                                    <Upload className="mx-auto h-12 w-12 text-gray-400" />
                                    <p className="mt-2 font-medium">Upload here</p>
                                    <p className="text-sm text-gray-500">
                                        File size not more than 20mb
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <label className="block text-gray-700 mb-2">
                            Additional Information
                        </label>
                        <textarea
                            placeholder="Ex: I need 20'' Container to ship my items"
                            required
                            rows={4}
                            className="w-full p-3 border rounded-md"
                        />
                    </div>

                    <div className="bg-gray-50 p-6 rounded-md flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <div className="text-gray-600">
                            <p>Is your shipment too much and needs a whole container?</p>
                            <p>
                                Try <span className="font-medium">FCL</span> to utilise the full
                                container benefits for your shipments
                            </p>
                        </div>
                        <div className="flex space-x-4">
                            <button
                                type="button"
                                className="px-6 py-2 border border-[#1a4b8f] text-[#1a4b8f] rounded-md"
                            >
                                Edit
                            </button>
                            <button
                                type="submit"
                                className="px-6 py-2 bg-yellow-500 text-white rounded-md flex items-center"
                            >
                                GET QUOTE
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default App;