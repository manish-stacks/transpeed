"use client";

import { useEffect, useRef, useState } from "react";
import { Briefcase, FileSignature, MessageSquare, Wallet } from "lucide-react";

const features = [
    {
        id: "01",
        title: "Project logistics",
        description: "Transpeed Cargo Pvt Ltd support their client base in handling major projects shipments without complication.",
        image: "https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=2070",
        icon: Briefcase
    },
    {
        id: "02",
        title: "Digital KYC & E-Signatures",
        description: "We provide warehousing and distribution centers for companies with a need for a high-performance, yet flexible infrastructure.",
        image: "https://images.unsplash.com/photo-1595079676339-1534801ad6cf?q=80&w=2070",
        icon: FileSignature
    },
    {
        id: "03",
        title: "E-com shipping",
        description: "Transpeed Cargo Pvt Ltd is determined to provide a reliable, cost-saving solution for all eCommerce shipping needs.",
        image: "https://images.unsplash.com/photo-1580048915913-4f8f5cb481c4?q=80&w=2069",
        icon: Wallet
    },
    {
        id: "04",
        title: "Nvocc",
        description: "Transpeed Cargo Pvt Ltd NVOCC division ( Non Vessel Operating Container Carrier) is representing various Principals, Box owners from Far East, South East Asia and Intra Asia.",
        image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2069",
        icon: MessageSquare
    },
    {
        id: "05",
        title: "Trade Management",
        description: "Let Transpeed Cargo Pvt Ltd assist you navigate today's dynamic and increasingly complex world of Transpeed Cargo Pvt Ltd commerce.",
        image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2069",
        icon: MessageSquare
    },
    {
        id: "06",
        title: "4th party logistics",
        description: "Being a 4PL service Provider Transpeed Cargo Pvt Ltd is an independent, singularly accountable, non-asset based integrator who will assemble the resources.",
        image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2069",
        icon: MessageSquare
    },
    {
        id: "07",
        title: "Other Services",
        description: "Buy / sell container, OD Cargo, Exhibition cargo, Packaging",
        image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2069",
        icon: MessageSquare
    }
];

export default function MoresSrvices() {
    const [activeFeature, setActiveFeature] = useState(0);
    const featuresRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = parseInt(entry.target.getAttribute("data-index") || "0");
                        setActiveFeature(index);
                    }
                });
            },
            {
                root: null,
                rootMargin: "-45% 0px -45% 0px",
                threshold: [0.1, 0.5, 0.9]
            }
        );

        const featureElements = document.querySelectorAll(".feature-section");
        featureElements.forEach((element) => observer.observe(element));

        return () => observer.disconnect();
    }, []);

    return (
        <>

            <div className="min-h-screen bg-gradient-to-r from-[#01385e] to-[#168cbd] text-white">
                <div className="w-full grid mx-auto px-50">
                    <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold font-sans text-center mb-5">More Servces</h2>
                    <p className="text-lg text-white font-normal mb-6 mx-auto text-center">We are focus on international sea freight and airfreight business and integrating trucking, Customs clearance<br />and warehousing into a large-sized modern logistics enterprise.</p>
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="grid lg:grid-cols-2 gap-8">
                        {/* Left side - Scrollable content */}
                        <div className="relative">
                            {/* Progress Line */}
                            <div className="absolute left-0 top-0 w-px h-full">
                                <div className="sticky top-50 h-full flex items-center">
                                    <div className="h-[100%] w-px bg-white/20 relative">
                                        {/* Vertical line fill */}
                                        <div
                                            className="absolute top-0 left-0 w-full bg-white transition-all duration-700"
                                            style={{
                                                height: `${(activeFeature + 1) / features.length * 100}%`
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div
                                ref={featuresRef}
                                className="space-y-40 pb-40 pl-12"
                            >
                                {features.map((feature, index) => (
                                    <div
                                        key={feature.id}
                                        data-index={index}
                                        className={`feature-section transform transition-all duration-700 ${index === activeFeature
                                            ? 'opacity-100 translate-y-0 scale-105'
                                            : 'opacity-40 scale-95'
                                            }`}
                                    >
                                        <div className="space-y-6">
                                            <div className="flex items-baseline gap-6">
                                                <span
                                                    className={`text-4xl font-bold transition-all duration-700 ${index === activeFeature
                                                        ? 'text-white scale-110'
                                                        : 'text-white/50 scale-100'
                                                        }`}
                                                >
                                                    {feature.id}
                                                </span>
                                                <h2
                                                    className={`text-4xl font-semibold leading-tight transition-all duration-700 ${index === activeFeature
                                                        ? 'text-white'
                                                        : 'text-white/50'
                                                        }`}
                                                >
                                                    {feature.title}
                                                </h2>
                                            </div>
                                            <p className={`text-lg leading-relaxed max-w-lg ml-16 transition-all duration-700 ${index === activeFeature
                                                ? 'text-gray-200'
                                                : 'text-gray-400'
                                                }`}>
                                                {feature.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right side - Sticky image */}
                        <div className="relative">
                            {/* Mobile image */}
                            {/* <div className="block lg:hidden mb-12">
                            <div className="relative h-[300px] w-full rounded-xl overflow-hidden">
                                <img src={features[activeFeature].image} alt={features[activeFeature].title}
                                    className="object-cover w-full h-full transform transition-transform duration-700" />
                                <div className="absolute inset-0 bg-purple-900/10 backdrop-blur-sm"></div>
                            </div>
                        </div> */}

                            {/* Desktop sticky image */}
                            <div className="grid grid-flow-col">
                                <div className="hidden lg:block">
                                    <div className="top-0">
                                        <div className="relative h-[600px] w-full rounded-xl overflow-hidden shadow-2xl">
                                            {features.map((feature, index) => (
                                                <img
                                                    key={feature.id}
                                                    src={feature.image}
                                                    alt={feature.title}
                                                    className={`inset-0 object-cover w-full h-full transition-all duration-700 sticky transform ${index === activeFeature
                                                        ? 'opacity-100 scale-100'
                                                        : 'opacity-0 scale-110'
                                                        }`}
                                                />
                                            ))}
                                            <div className="absolute inset-0 bg-purple-900/10 backdrop-blur-[2px]"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>


    );
}