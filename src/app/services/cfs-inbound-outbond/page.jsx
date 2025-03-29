import React from 'react'
import { Ship, PackageCheck, Package, FileCheck, Warehouse as WarehouseFill, Truck, PackagePlus, FileText, ShieldCheck, Plane, MapPin, Cpu, Users, Settings } from 'lucide-react';
import Cfs from '@/components/cfs-inbound-outbond/Cfs';
import WhyChoose from '@/components/cfs-inbound-outbond/WhyChoose';

function ServiceCard({ icon: Icon, title, items }) {
    return (
        <div className="bg-white rounded-2xl shadow-xl p-8 transform hover:-translate-y-1 transition-transform duration-300">
            <div className="flex items-center mb-6">
                <Icon className="w-10 h-10 text-indigo-600" />
                <h3 className="text-2xl font-bold ml-4 text-gray-800">{title}</h3>
            </div>
            <ul className="space-y-3">
                {items.map((item, index) => (
                    <li key={index} className="flex items-start">
                        <PackageCheck className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                        <span className="ml-3 text-gray-600">{item}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

function FeatureCard({ icon: Icon, title, description }) {
    return (
        <div className="bg-gradient-to-br from-indigo-50 to-white p-6 rounded-xl shadow-md">
            <Icon className="w-12 h-12 text-indigo-600 mb-4" />
            <h4 className="text-xl font-semibold mb-2 text-gray-800">{title}</h4>
            <p className="text-gray-600">{description}</p>
        </div>
    );
}
export default function Page() {
    return (
        <>
            <div className="relative h-[600px] flex items-center justify-center bg-cover bg-center " style={{ backgroundImage: "url('/images/cfs-inbond-hero.webp')" }}>

                <div className="absolute inset-0 bg-gradient-to-r from-sky-900/80 to-sky-500/10"></div>

                {/* Hero Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 px-7 md:px-40">
                    <div className="space-y-8 relative z-10 max-w-8xl p-6 text-white text-center md:text-left">
                        <h3 className="text-yellow-400 text-2xl -mb-5">Transpeed Cargo Pvt. Ltd. </h3>
                        <h1 className="text-4xl font-bold md:text-6xl">CFS Inbound/Outbound Solutions                        </h1>
                        <p className="mt-4 text-lg">
                            Transpeed Cargo Pvt. Ltd. ensures seamless CFS solutions for efficient cargo handling, storage, and transport, optimizing your supply chain.
                        </p>
                        <div className='flex justify-center md:justify-start'>
                        <button className="bg-yellow-500 hover:bg-yellow-600 text-white mt-5 px-6 py-3 rounded-md flex items-center space-x-2 transition-colors">
                            <Package className="h-5 w-5" />
                            <span>GET A QUOTATION</span>
                        </button>
                        </div>
                    </div>
                </div>

            </div>

            <WhyChoose />
            <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
                <div className="max-w-8xl mx-auto px-4 py-16">
                    <Cfs />

                    {/* CTA Section */}
                    <section className="bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-sky-500 to-sky-900 dark:bg-grid-white/[0.05] rounded-3xl p-12 text-center">
                        <h2 className="text-3xl font-bold text-white mb-6">
                            Ready to Optimize Your Supply Chain?
                        </h2>
                        <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
                            Partner with Transpeed Cargo for faster, safer, and more cost-effective
                            inbound and outbound logistics solutions.
                        </p>
                        <button className="bg-yellow-500 text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-indigo-50 transition-colors">
                            Contact Our CFS Team
                        </button>
                    </section>
                </div>
            </div>
        </>
    )
}