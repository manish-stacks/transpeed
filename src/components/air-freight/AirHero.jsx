"use client";

import { Package } from "lucide-react";

export default function AirHero() {
    return (
        <div className="relative h-screen flex items-center justify-center bg-cover bg-center " style={{ backgroundImage: "url('/images/air-freight-hero1.webp')" }}>
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-sky-900/80 to-sky-500/10"></div>

            {/* Hero Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 px-7 md:px-40">
                <div className="space-y-8 relative z-10 max-w-8xl p-6 text-white text-center md:text-left">
                    <h1 className="text-4xl font-bold md:text-6xl">Air Freight Services</h1>
                    <p className="mt-4 text-lg">
                        Transpeed Cargo offers reliable and efficient air freight services to ensure fast and secure transportation of goods across the globe. With a strong network of airline partners and advanced logistics solutions, we provide seamless delivery tailored to meet your business needs.
                    </p>
                    <div className='flex justify-center md:justify-start'>
                        <button className="bg-yellow-500 hover:bg-yellow-600 text-white mt-5 px-6 py-3 rounded-md flex items-center space-x-2 transition-colors">
                            <Package className="h-5 w-5" />
                            <span>GET A QUOTATION</span>
                        </button>
                    </div>
                </div>
            </div>
            <div>

            </div>

        </div>
    );
}
