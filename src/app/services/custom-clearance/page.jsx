import React from 'react';
import { FileCheck, ShieldCheck, Calculator, BookOpen, Briefcase, CheckCircle2, Building2, FlaskRound as Flask, Cpu, Timer, Package } from 'lucide-react';
import WhyChoose from '@/components/custom-clearance/WhyChoose';

function ServiceCard({ icon: Icon, title, description }) {
    return (
        <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                <Icon className="w-9 h-9 text-yellow-500" />
            </div>
            <h3 className="text-lg font-bold text-[#172554] mb-2">{title}</h3>
            <p className="text-gray-800">{description}</p>
        </div>
    );
}

function CaseStudyCard({ icon: Icon, title, description }) {
    return (
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 border border-gray-200">
            <Icon className="w-8 h-8 text-yellow-500 mb-4" />
            <h3 className="text-lg font-bold text-[#172554] mb-2">{title}</h3>
            <p className="text-gray-900">{description}</p>
        </div>
    );
}

function page() {
    const services = [
        {
            icon: FileCheck,
            title: "Import and Export Documentation",
            description: "Handling all necessary paperwork, including Bills of Lading, Commercial Invoices, and Packing Lists"
        },
        {
            icon: BookOpen,
            title: "HS Code Classification",
            description: "Ensuring accurate product classification to avoid fines and facilitate smooth clearance"
        },
        {
            icon: Calculator,
            title: "Duty and Tax Calculation",
            description: "Managing customs duties, tariffs, and taxes to prevent unexpected costs"
        },
        {
            icon: ShieldCheck,
            title: "Regulatory Compliance",
            description: "Staying updated on international trade policies and customs regulations to guarantee compliance"
        }
    ];

    const caseStudies = [
        {
            icon: Building2,
            title: "Automotive Parts Import",
            description: "Facilitated seamless import of critical automotive parts by managing complex HS code classifications and ensuring swift customs clearance"
        },
        {
            icon: Flask,
            title: "Pharmaceutical Export",
            description: "Assisted a pharmaceutical company in securing necessary permits and regulatory approvals for temperature-sensitive products"
        },
        {
            icon: Cpu,
            title: "Electronics Shipment",
            description: "Managed customs clearance of high-value electronics, ensuring accurate documentation and tax payments"
        }
    ];

    return (


        <>

            <div className="relative h-[600px] flex items-center justify-center bg-cover bg-center " style={{ backgroundImage: "url('/images/custom-clearance-hero.webp')" }}>

                <div className="absolute inset-0 bg-gradient-to-r from-sky-900 to-sky-500/10"></div>

                {/* Hero Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 px-7 md:px-40">
                    <div className="space-y-8 relative z-10 max-w-8xl p-6 text-white text-center md:text-left">
                        <h3 className="text-yellow-400 text-2xl -mb-5">Transpeed Cargo Pvt. Ltd. </h3>
                        <h1 className="text-4xl font-bold md:text-6xl">Custom Clearance Solutions</h1>
                        <p className="mt-4 text-lg">
                            Navigate customs regulations with confidence. Our expert team ensures smooth,
                            compliant, and efficient clearance for your international shipments.
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



            <div className="min-h-screen bg-gray-50">


                {/* Services Section */}
                <section className="py-20 bg-[#D3EDFF]">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl lg:text-5xl font-bold text-[#172554] mb-4">
                                Comprehensive Custom Clearance Services
                            </h2>
                            <p className="text-xl text-gray-800 max-w-3xl mx-auto">
                                Our experienced team manages the entire clearance process, ensuring compliance
                                with the latest regulations while expediting customs clearance.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {services.map((service, index) => (
                                <ServiceCard key={index} {...service} />
                            ))}
                        </div>
                    </div>
                </section>

                <WhyChoose />
                {/* Case Studies Section */}
                <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
                    <div className="max-w-7xl mx-auto px-4">
                        <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-16 text-center">
                            Transpeed Cargo Pvt. Ltd. Use Cases
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {caseStudies.map((study, index) => (
                                <CaseStudyCard key={index} {...study} />
                            ))}
                        </div>
                    </div>
                </section>



                {/* CTA Section */}
                <section className="py-20 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-sky-500 to-sky-900 dark:bg-grid-white/[0.05] text-white">
                    <div className="max-w-4xl mx-auto px-4 text-center">
                        <h2 className="text-3xl lg:text-5xl font-bold mb-6">
                            Ready to Streamline Your Custom Clearance Process?
                        </h2>
                        <p className="text-xl text-blue-100 mb-8">
                            Let Transpeed Cargo Pvt Ltd handle the complexities of custom clearance while you focus
                            on growing your business. Get in touch with us today to streamline your global trade
                            operations.
                        </p>
                        <button className="bg-white text-gray-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-50 transition-colors">
                            Contact Us Today
                        </button>
                    </div>
                </section>
            </div>
        </>


    );
}

export default page;