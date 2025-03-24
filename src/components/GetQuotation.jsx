import React, { useState } from 'react';
import { ArrowRightIcon, ArrowLeftIcon, HelpCircle } from 'lucide-react';

function App() {
    const [selectedTab, setSelectedTab] = useState('lcl');
    const [dimensions, setDimensions] = useState({
        weight: '',
        width: '',
        length: '',
        height: ''
    });

    const calculateCBM = () => {
        if (dimensions.width && dimensions.length && dimensions.height) {
            return (parseFloat(dimensions.width) * parseFloat(dimensions.length) * parseFloat(dimensions.height)).toFixed(2);
        }
        return 0;
    };

    return (
        <div className="min-h-screen bg-gray-50 p-4 md:p-8">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-3xl md:text-4xl font-bold text-[#1e3a8a] mb-8 text-center">Get a quotation</h1>

                {/* Shipping Type Tabs */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mb-8">
                    <button
                        className={`p-4 text-center ${selectedTab === 'lcl' ? 'bg-yellow-500 text-white' : 'bg-[#121a46] text-[#fff]'}`}
                        onClick={() => setSelectedTab('lcl')}
                    >
                        <div className="text-xl font-bold">LCL</div>
                        <div className="text-sm">(Less than Container Load)</div>
                    </button>
                    <button
                        className={`p-4 text-center ${selectedTab === 'fcl' ? 'bg-yellow-500 text-white' : 'bg-[#121a46] text-[#fff]'}`}
                        onClick={() => setSelectedTab('fcl')}
                    >
                        <div className="text-xl font-bold">FCL</div>
                        <div className="text-sm">(Full Container Load)</div>
                    </button>
                    <button
                        className={`p-4 text-center ${selectedTab === 'air' ? 'bg-yellow-500 text-white' : 'bg-[#121a46] text-[#fff]'}`}
                        onClick={() => setSelectedTab('air')}
                    >
                        <div className="text-xl font-bold">Air Freight</div>
                    </button>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Left Side - 3D Box */}
                    <div className="relative">
                        <div className="flex justify-center relative">
                            <div className="absolute text-center">
                                <div className='pt-10'>
                                <img src="/images/product-weight.webp"
                                    alt="Box Dimensions"
                                    className="w-full max-w-md opacity-100"/>

                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Form */}
                    <div className="space-y-6">
                        {/* Import/Export Tabs */}
                        <div className="grid grid-cols-2 gap-2 bg-gray-100 p-1 rounded">
                            <button className="flex items-center justify-center space-x-2 bg-yellow-500 text-white py-3 rounded">
                                <ArrowLeftIcon size={20} />
                                <span>LCL Import</span>
                            </button>
                            <button className="flex items-center justify-center space-x-2 bg-white text-[#121a46] py-3 rounded">
                                <span>LCL Export</span>
                                <ArrowRightIcon size={20} />
                            </button>
                        </div>

                        {/* Additional Options */}
                        {/* <div className="space-y-2">
                            <div className="bg-gray-200 p-3 rounded flex justify-between items-center">
                                <span>Ex-work</span>
                                <HelpCircle size={20} className="text-gray-600" />
                            </div>
                            <div className="grid grid-cols-2 gap-2">
                                <div className="bg-gray-200 p-3 rounded flex justify-between items-center">
                                <span>Non-Stackable</span>
                                <HelpCircle size={20} className="text-gray-600" />
                                </div>
                                <div className="bg-gray-200 p-3 rounded flex justify-between items-center">
                                <span>Haz/DG Cargo</span>
                                <HelpCircle size={20} className="text-gray-600" />
                                </div>
                            </div>
                            </div> */}

                        {/* Port Selection */}
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-[#1e3a8a] mb-2">Port of Origin</label>
                                <select className="w-full p-3 bg-gray-200 rounded">
                                    <option>Select Origin</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-[#1e3a8a] mb-2">Port of Destination</label>
                                <select className="w-full p-3 bg-gray-200 rounded">
                                    <option>Select Destination</option>
                                </select>
                            </div>
                        </div>

                        {/* Dimensions */}
                        <div className="space-y-4">
                            <div className="flex items-center space-x-2">
                                <label className="w-24 text-[#1e3a8a]">Weight:</label>
                                <input
                                    type="number"
                                    className="flex-1 p-2 border rounded"
                                    value={dimensions.weight}
                                    onChange={(e) => setDimensions({ ...dimensions, weight: e.target.value })}
                                />
                                <select className="w-20 p-2 bg-gray-200 rounded">
                                    <option>Kg</option>
                                </select>
                            </div>
                            {['width', 'length', 'height'].map((dim) => (
                                <div key={dim} className="flex items-center space-x-2">
                                    <label className="w-24 text-[#1e3a8a] capitalize">{dim}:</label>
                                    <input
                                        type="number"
                                        className="flex-1 p-2 border rounded"
                                        value={dimensions[dim]}
                                        onChange={(e) => setDimensions({ ...dimensions, [dim]: e.target.value })}
                                    />
                                    <select className="w-20 p-2 bg-gray-200 rounded">
                                        <option>m</option>
                                    </select>
                                </div>
                            ))}
                        </div>

                        {/* CBM Calculation */}
                        <div className="bg-gray-200 p-4 rounded">
                            <div className="text-sm text-gray-600">Calculation</div>
                            <div className="text-sm">CBM= Width*Length*Height</div>
                            <div className="mt-2">
                                <span className="font-bold">CBM</span>
                                <span className="ml-4">{calculateCBM()} CBM</span>
                            </div>
                        </div>

                        {/* Next Button */}
                        <button className="w-full bg-yellow-500 text-white py-3 rounded flex items-center justify-center space-x-2">
                            <span>NEXT</span>
                            <ArrowRightIcon size={20} />
                        </button>

                        {/* Help Link */}
                        {/* <div className="text-center">
                            <a href="/contact-us" className="text-[#1e3a8a] underline">Need Help? Contact Us</a>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;