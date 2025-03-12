"use client";

import { Plane, Package, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Hero() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Prevent scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen]);

    return (
        <div className="min-h-full relative overflow-hidden">
            {/* Video Background */}
            <video
                autoPlay
                loop
                muted
                className="absolute top-0 left-0 w-full h-[100%]  object-cover z-0">
                <source src="images/transpeed-logistics.mp4" type="video/mp4" />
            </video>
            {/* Overlay */}
            <div className="absolute top-0 left-0 w-full h-[100%] bg-gradient-to-r from-sky-700/50 to-cyan-400/60 z-10" />
            {/* Content */}
            <div className="relative z-20">
              {/* Hero Section */}
                <div className="container mx-auto px-4 pt-28 pb-22">
                    <div className="max-w-3xl">
                        <h1 className="text-7xl md:text-4xl font-bold mb-6 max-[545px]:text-4xl">
                            <span className="text-white">Transportation And </span>
                            {/* <span className="text-blue-300">powered</span> */}
                            <br />
                            <span className="text-blue-200 text-7xl max-[545px]:text-4xl">Logistics Service Provider</span>
                        </h1>
                        <p className="text-xl text-white/90 mb-8">
                            Revolutionizing Supply Chain Management with Intelligent Automation and Predictive Analytics
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <button className="bg-yellow-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md flex items-center space-x-2 transition-colors">
                                <Package className="h-5 w-5" />
                                <span>GET A QUOTATION</span>
                            </button>
                            <button className="border-2 border-white text-white px-6 py-3 rounded-md flex items-center space-x-2 hover:bg-white/10 transition-colors">
                                <Plane className="h-5 w-5" />
                                <span>TRACK SHIPMENT</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Stats */}
                <div className="container mx-auto mt-16 px-4 pb-16">
                    <div className="flex flex-wrap justify-between gap-8">
                        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 flex-1">
                            <div className="text-4xl font-bold text-white mb-2">95%</div>
                            <div className="text-blue-200">satisfied clients worldwide</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 flex-1">
                            <div className="text-4xl font-bold text-white mb-2">10,000+</div>
                            <div className="text-blue-200">monthly shipments</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 flex-1">
                            <div className="text-4xl font-bold text-white mb-2">99%</div>
                            <div className="text-blue-200">Realtime service uptime</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}