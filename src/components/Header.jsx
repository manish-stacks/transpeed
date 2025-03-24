"use client";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMenuOpen]);

    return (
        <section className="bg-blue-950">
            <nav className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 w-[220px]">
                        <img src="/images/transpeedogo.webp" alt="Logo" />
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center space-x-8">
                        <Link href="/" className="text-white hover:text-blue-200">Home</Link>
                        <Link href="/about-us" className="text-white hover:text-blue-200">About Us</Link>
                        <div className="relative group">
                            <button className="text-white hover:text-blue-200 flex items-center space-x-1">
                                <span>Services</span>
                                <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
                            </button>
                            <div className="absolute mt-2 w-64 bg-white shadow-lg rounded-md overflow-hidden z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <Link href="/services/ocean-freight" className="block px-4 py-2 text-slate-900 hover:bg-[#172554] hover:text-slate-100">Ocean Freight</Link>
                                <Link href="/services/air-freight" className="block px-4 py-2 text-slate-900 hover:bg-[#172554] hover:text-slate-100">Air Freight</Link>
                                <Link href="/services/air-chartering" className="block px-4 py-2 text-slate-900 hover:bg-[#172554] hover:text-slate-100">Air Chartering</Link>
                                <Link href="/services/project-cargo" className="block px-4 py-2 text-slate-900 hover:bg-[#172554] hover:text-slate-100">Project Cargo</Link>
                                <Link href="/services/cfs-inbound-outbond" className="block px-4 py-2 text-slate-900 hover:bg-[#172554] hover:text-slate-100">CFS Inbound/Outbound</Link>
                                <Link href="/services/custom-clearance" className="block px-4 py-2 text-slate-900 hover:bg-[#172554] hover:text-slate-100">Custom Clearance</Link>
                                <Link href="/services/carnet-de-passages-shipment" className="block px-4 py-2 text-slate-900 hover:bg-[#172554] hover:text-slate-100">Carnet De Passages Shipment</Link>
                            </div>
                        </div>
                        <Link href="#" className="text-white hover:text-blue-200">Industry Solution</Link>
                        <Link href="#" className="text-white hover:text-blue-200">News & Insight</Link>
                        <Link href="#" className="text-white hover:text-blue-200">Utility</Link>
                        <Link href="#" className="text-white hover:text-blue-200">Pay Online</Link>
                        <Link href="/contact-us" className="text-white hover:text-blue-200">Contact Us</Link>
                    </div>

                    {/* Desktop Buttons */}
                    <div className="hidden lg:flex items-center space-x-4">
                        <a href="/get-quote" className="bg-white text-blue-900 px-4 py-2 rounded-md hover:bg-yellow-500 hover:text-white">
                            Get A Quote
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="lg:hidden text-white p-2 hover:bg-white/10 rounded-md z-50 relative"
                    >
                        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>

                {/* Mobile Menu Overlay */}
                <div
                    className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                    onClick={() => setIsMenuOpen(false)}
                />

                {/* Mobile Menu Panel */}
                <div
                    className={`fixed top-0 right-0 w-[350px] h-full bg-gradient-to-b from-blue-900 to-blue-800 z-30 transform transition-transform duration-300 ease-in-out lg:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
                >
                    <div className="h-full overflow-y-auto pt-20 pb-6">
                        <div className="flex flex-col space-y-4 px-4">
                            <Link href="#" className="text-white hover:text-blue-200 py-2 border-b border-white/10">Home</Link>
                            <Link href="#" className="text-white hover:text-blue-200 py-2 border-b border-white/10">About Us</Link>
                            <button
                                onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                                className="text-white hover:text-blue-200 py-2 border-b border-white/10 flex justify-between w-full"
                            >
                                <span>Services</span>
                                <ChevronDown className={`h-5 w-5 transition-transform ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
                            </button>
                            {isMobileServicesOpen && (
                                <div className="pl-4 space-y-2">
                                    <Link href="/air-freight-forwarding" className="text-white hover:text-blue-200 block">Air Freight</Link>
                                    <Link href="/sea-freight" className="text-white hover:text-blue-200 block">Sea Freight</Link>
                                </div>
                            )}
                            <Link href="#" className="text-white hover:text-blue-200 py-2 border-b border-white/10">Blog</Link>
                            <Link href="#" className="text-white hover:text-blue-200 py-2 border-b border-white/10">Contact Us</Link>
                        </div>
                        <div className="mt-8 px-4 flex flex-col space-y-4">
                            <button className="bg-white text-blue-900 px-4 py-3 rounded-md hover:bg-blue-50 w-full transition-colors">
                                Get A Quote
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </section>
    );
}
