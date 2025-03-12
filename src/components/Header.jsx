"use client";
import { Plane, Package, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
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
        <section className="bg-blue-950">

            <nav className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 w-[220px]">
                        <img src="images/transpeedogo.webp"></img>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center space-x-8">
                        <Link href="#" className="text-white hover:text-blue-200">Home</Link>
                        <Link href="#" className="text-white hover:text-blue-200">About Us</Link>
                        <Link href="#" className="text-white hover:text-blue-200">Services</Link>
                        <Link href="#" className="text-white hover:text-blue-200">Global Privilege</Link>
                        <Link href="#" className="text-white hover:text-blue-200">Careers</Link>
                        <Link href="#" className="text-white hover:text-blue-200">Contact Us</Link>
                    </div>

                    {/* Desktop Buttons */}
                    <div className="hidden lg:flex items-center space-x-4">
                        <button className="bg-white text-blue-900 px-4 py-2 rounded-md hover:bg-blue-50">
                            Get A Quote
                        </button>
                        {/* <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                            E-DO
                        </button> */}
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
                    className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                        }`}
                    onClick={() => setIsMenuOpen(false)}
                />

                {/* Mobile Menu Panel */}
                <div
                    className={`fixed top-0 right-0 w-[350px] h-full bg-gradient-to-b from-blue-900 to-blue-800 z-30 transform transition-transform duration-300 ease-in-out lg:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                        }`}
                >
                    <div className="h-full overflow-y-auto pt-20 pb-6">
                        <div className="flex flex-col space-y-4 px-4">
                            <Link href="#" className="text-white hover:text-blue-200 py-2 border-b border-white/10">Home</Link>
                            <Link href="#" className="text-white hover:text-blue-200 py-2 border-b border-white/10">About Us</Link>
                            <Link href="#" className="text-white hover:text-blue-200 py-2 border-b border-white/10">Services</Link>
                            {/* <Link href="#" className="text-white hover:text-blue-200 py-2 border-b border-white/10">Global Privilege</Link> */}
                            <Link href="#" className="text-white hover:text-blue-200 py-2 border-b border-white/10">Blog</Link>
                            <Link href="#" className="text-white hover:text-blue-200 py-2 border-b border-white/10">Contact Us</Link>
                        </div>
                        <div className="mt-8 px-4 flex flex-col space-y-4">
                            <button className="bg-white text-blue-900 px-4 py-3 rounded-md hover:bg-blue-50 w-full transition-colors">
                                GP LOGIN
                            </button>
                            <button className="bg-blue-500 text-white px-4 py-3 rounded-md hover:bg-blue-600 w-full transition-colors">
                                E-DO
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </section>
    );
}