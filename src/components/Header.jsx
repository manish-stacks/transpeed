"use client";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";


const services = [
    { name: 'Ocean Freight', link: '/services/ocean-freight' },
    { name: 'Air Freight', link: '/services/air-freight' },
    { name: 'Air chartering', link: '/services/air-chartering' },
    { name: 'Project Cargo', link: '/services/project-cargo' },
    { name: 'CFS Inbound/Outbound', link: '/services/cfs-inbound-outbond' },
    { name: 'Custom Clearance', link: '/services/custom-clearance' },
    { name: 'Carnet De Passages Shipment', link: '/services/carnet-de-passages-shipment' },
]

const utility = [
    { name: 'Inco Terms', link: '/utility/inco-terms' },
    { name: 'Container Specification', link: '/utility/container-specification' },
    { name: 'Aircarft Specification', link: '/utility/aircarft-specification' },
    { name: 'World Seaport', link: '/utility/world-seaport' },
    { name: 'World Airport', link: '/utility/world-airport' },
]

const paymentmethods = [
    { name: 'HKD', link: 'https://rzp.io/rzp/xGLZ3jW' },
    { name: 'AED', link: 'https://rzp.io/rzp/GpsGOmt' },
    { name: 'SGD', link: 'https://rzp.io/rzp/73BoaV7k' },
    { name: 'USD', link: 'https://rzp.io/rzp/SZb6tF0a' },
    { name: 'EURO', link: 'https://rzp.io/rzp/WQHyemV3' },
    { name: 'INR', link: 'https://rzp.io/rzp/S8yW03of' },
    { name: 'AUD', link: 'https://rzp.io/rzp/wLf7JdZG' },
]

export default function Header() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
    const [isMobileUtilityOpen, setIsMobileUtilityOpen] = useState(false);
    const [isMobilePaymentOpen, setIsMobilePaymentOpen] = useState(false);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMenuOpen]);

    return (
        <section className="bg-blue-950 fixed top-0 left-0 w-full z-50">
            <nav className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 w-[220px]">
                        <Link href="/"> <img src="/images/transpeed-logo.webp" alt="Logo" /></Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center space-x-8 min-[1266px]:text-[16px] min-[768px]:text-[12px]">
                        <Link href="/" className="text-white hover:text-blue-200">Home</Link>
                        <Link href="/about-us" className="text-white hover:text-blue-200">About Us</Link>
                        <div className="relative group">
                            <button className="text-white hover:text-blue-200 flex items-center space-x-1">
                                <span>Services</span>
                                <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
                            </button>
                            <div className="invisible group-hover:visible opacity-0 group-hover:opacity-100 absolute top-full -left-4 pt-4 transition-all duration-300">
                                <div className="bg-[#172554] w-[280px] rounded-xl">
                                    <div className="py-2 rounded-md shadow-lg">
                                        {
                                            services.map((service, index) => (
                                                <Link key={index} href={service.link} className="block px-5 py-2 text-white hover:bg-sky-500 hover:text-slate-100">{service.name}</Link>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>

                        </div>

                        <Link href="/industry-solution" className="text-white hover:text-blue-200">Industries</Link>
                        <Link href="#" className="text-white hover:text-blue-200">News & Insights</Link>

                        <div className="relative group">
                            <button className="text-white hover:text-blue-200 flex items-center space-x-1">
                                <span>Utility</span>
                                <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
                            </button>
                            <div className="invisible group-hover:visible opacity-0 group-hover:opacity-100 absolute top-full -left-4 pt-4 transition-all duration-300">
                                <div className="bg-[#172554] w-[280px] rounded-xl">
                                    <div className="py-2">
                                        {
                                            utility.map((utilityItem, index) => (
                                                <Link key={index}
                                                    href={utilityItem.link} className="block px-5 py-2 text-white hover:bg-sky-500 hover:text-slate-100">{utilityItem.name}</Link>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="relative group">
                            <button className="text-white hover:text-blue-200 flex items-center space-x-1">
                                <span>Pay Online</span>
                                <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
                            </button>
                            <div className="invisible group-hover:visible opacity-0 group-hover:opacity-100 absolute top-full -left-4 pt-4 traqnsition-all duration-300">
                                <div className="bg-[#172554] w-[200px] rounded-xl">
                                    <div>
                                        {
                                            paymentmethods.map((payment, index) => (
                                                <Link key={index} href={payment.link} className="block px-4 py-2 text-[#fff] hover:bg-sky-500 hover:text-slate-100">{payment.name}</Link>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>

                        </div>
                        {/* <Link href="#" className="text-white hover:text-blue-200">Pay Online</Link> */}
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
                            <Link href="/" className="text-white hover:text-blue-200 focus:bg-sky-500 focus:text-white px-6 py-2 rounded-sm">Home</Link>
                            <Link href="/about-us" className="text-white hover:text-blue-200 focus:bg-sky-500 focus:text-white px-6 py-2 rounded-sm">About Us</Link>
                            <div className="focus:bg-sky-500 focus:text-white px-6 py-2 rounded-sm">
                                <button onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)} className="text-white hover:text-blue-200 flex items-center space-x-1">
                                    <span>Services</span>
                                    <ChevronDown className={`h-4 w-4 transition-transform group-hover:rotate-180 duration-300`} />
                                </button>
                                <div className={`bg-white rounded-lg mt-2 space-y-2 transition-all duration-300 ${isMobileServicesOpen ? 'block' : 'hidden'}`}>
                                    {
                                        services.map((service, index) => (
                                            <Link
                                                key={index}
                                                href={service.link}
                                                className="block px-4 py-2 text-slate-900 focus:bg-sky-500 focus:text-white hover:text-slate-100">
                                                {service.name}
                                            </Link>
                                        ))
                                    }
                                </div>

                            </div>
                            <Link href="/industry-solution" className="text-white hover:text-blue-200 focus:bg-sky-500 focus:text-white px-6 py-2 rounded-sm">Industries</Link>
                            <Link href="#" className="text-white hover:text-blue-200 focus:bg-sky-500 focus:text-white px-6 py-2 rounded-sm">News</Link>

                            <div className="focus:bg-sky-500 focus:text-white px-6 py-2 rounded-sm">
                                <button onClick={() => setIsMobileUtilityOpen(!isMobileUtilityOpen)} className="text-white hover:text-blue-200 flex items-center space-x-1">
                                    <span>Utility</span>
                                    <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
                                </button>

                                <div className={`${isMobileUtilityOpen ? 'block' : 'hidden'} bg-white rounded-lg mt-2 space-y-2 transition-all duration-300`}>
                                    {
                                        utility.map((utilityItem, index) => (
                                            <Link
                                                key={index}
                                                href={utilityItem.link}
                                                className="block px-4 py-2 text-slate-900 focus:bg-sky-500 focus:text-white hover:text-slate-100">
                                                {utilityItem.name}
                                            </Link>
                                        ))
                                    }
                                </div>

                            </div>
                            <div className="focus:bg-sky-500 focus:text-white px-6 py-2 rounded-sm">
                                <button onClick={() => setIsMobilePaymentOpen(!isMobilePaymentOpen)} className="text-white hover:text-blue-200 flex items-center space-x-1">
                                    <span>Pay Online</span>
                                    <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
                                </button>
                                <div className={`${isMobilePaymentOpen ? 'block' : 'hidden'} bg-white rounded-lg mt-2 space-y-2 transition-all duration-300`}>
                                    {
                                        paymentmethods.map((payment, index) => (
                                            <Link
                                                key={index}
                                                href={payment.link}
                                                target="_blank"
                                                className="block px-4 py-2 text-slate-900 focus:bg-sky-500 focus:text-white hover:text-slate-100">
                                                {payment.name}</Link>
                                        ))
                                    }
                                </div>

                            </div>
                            {/* <Link href="#" className="text-white hover:text-blue-200">Pay Online</Link> */}
                            <Link href="/contact-us" className="text-white hover:text-blue-200 focus:bg-sky-500 focus:text-white px-6 py-2 rounded-sm">Contact Us</Link>
                        </div>

                        <div className="mt-8 px-4 flex flex-col space-y-4">
                            <a href="/get-quote" className="bg-white text-blue-900 text-center px-4 py-2 rounded-md hover:bg-yellow-500 hover:text-white">
                                Get A Quote
                            </a>
                        </div>

                    </div>

                </div>

            </nav>
        </section>
    );
}
