import { ArrowRightIcon } from "lucide-react"
import Image from "next/image"
import WhyChoose from "./WhyChoose"

export default function CarnetDePassages() {
    return (
        <div className="min-h-screen bg-[#D3EDFF] mt-20">


            {/* Key Benefits Section */}
            <section className="py-20">
                <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto mb-16 max-w-3xl text-center">
                        <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            Key Benefits of <span className="text-[#2F9DDE] underline"><i>Carnet de Passages</i></span> Shipment
                        </h2>
                        <p className="text-lg text-gray-900">
                            Experience hassle-free temporary vehicle imports with our comprehensive services
                        </p>
                    </div>

                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        {benefits.map((benefit, index) => (
                            <div
                                key={index}
                                className="group relative overflow-hidden rounded-xl bg-white p-6 shadow-lg transition-all hover:shadow-xl"
                            >
                                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-yellow-100 text-yellow-500">
                                    {benefit.icon}
                                </div>
                                <h3 className="mb-3 text-xl font-bold text-slate-900">{benefit.title}</h3>
                                <p className="text-gray-900">{benefit.description}</p>
                                <div className="absolute bottom-0 left-0 h-1 w-0 bg-yellow-500 transition-all duration-300 group-hover:w-full"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <WhyChoose />
            {/* Expertise Section */}
            <section className="bg-gray-50 py-20">
                <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto mb-16 max-w-3xl text-center">
                        <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            Transpeed <i>Cargo&apos;s Expertise</i> in Carnet de Passages <span className="text-[#2C95D4]">Shipments</span>
                        </h2>
                        <p className="text-lg text-gray-900">
                            We specialize in handling Carnet de Passages shipments for a wide range of industries and purposes
                        </p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2">
                        {expertiseAreas.map((area, index) => (
                            <div
                                key={index}
                                className="group overflow-hidden rounded-xl bg-white shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl"
                            >
                                <div className="relative h-56 overflow-hidden">
                                    <Image
                                        src={area.image || "/placeholder.svg"}
                                        alt={area.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                                    <div className="absolute bottom-0 left-0 p-6">
                                        <div className="mb-2 inline-flex items-center rounded-full bg-yellow-500 px-3 py-1 text-sm font-medium text-slate-900">
                                            {area.emoji}
                                            <span className="ml-2">{area.title}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <ul className="mb-4 space-y-3">
                                        {area.points.map((point, idx) => (
                                            <li key={idx} className="flex items-start">
                                                <span className="mr-2 mt-1 text-yellow-500">●</span>
                                                <span>{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <button className="inline-flex items-center text-yellow-500 hover:text-yellow-600">
                                        <span className="font-medium">Learn more</span>
                                        <ArrowRightIcon className="ml-2 h-4 w-4" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-sky-500 to-sky-900 py-20 text-white">
                <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-3xl text-center">
                        <h2 className="mb-6 text-3xl font-bold sm:text-4xl">Seamless Vehicle Shipment Starts Here</h2>
                        <p className="mb-8 text-lg text-blue-100">
                            Trust Transpeed Cargo Pvt. Ltd. to handle your Carnet de Passages shipment with
                            precision and care. Contact us today to discuss your requirements and let our experts
                            simplify your international vehicle movement
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <button className="rounded-lg bg-yellow-500 px-8 py-3 font-semibold text-gray-900 transition-all hover:bg-yellow-400">
                                Request a Quote
                            </button>
                            <button className="rounded-lg border border-white/30 bg-white/10 px-8 py-3 font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20">
                                Contact Us
                            </button>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

// Data
const benefits = [
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
            </svg>
        ),
        title: "Duty-Free Import",
        description: "Avoid paying import duties and taxes for temporary vehicle imports across international borders.",
    },
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        ),
        title: "Streamlined Clearance",
        description: "Fast-track vehicle clearance at customs with a recognized international document.",
    },
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
            </svg>
        ),
        title: "Secure & Compliant",
        description: "Fully compliant with international customs regulations, ensuring minimal delays and complications.",
    },
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                />
            </svg>
        ),
        title: "Multimodal Transport",
        description:
            "We handle CPD shipments by air, sea, and land, providing flexible transport options tailored to your needs.",
    },
]

const expertiseAreas = [
    {
        emoji: "🚗",
        title: "Trade Shows & Exhibitions",
        image: "/images/trade-fair.png",
        points: [
            "Facilitating smooth entry of display vehicles for international auto shows and exhibitions.",
            "Ensuring timely delivery and seamless re-export after the event.",
        ],
    },
    {
        emoji: "🏎",
        title: "Motor Sports & Rallies",
        image: "/images/motor.jpeg",
        points: [
            "Transporting race cars and motorcycles across multiple countries for competitive events.",
            "Managing customs documentation and securing temporary import approvals.",
        ],
    },
    {
        emoji: "🚜",
        title: "Commercial & Industrial Vehicles",
        image: "/images/tata_daewoo_commercial_vehicle_banner.jpg",
        points: [
            "Temporary import of construction, agricultural, and industrial vehicles for project-based work.",
            "Ensuring adherence to local customs regulations for smooth cross-border movement.",
        ],
    },
    {
        emoji: "🚐",
        title: "Personal Vehicle Transfers",
        image: "/images/Ownership-transfer-in-Delhi.webp",
        points: [
            "Helping individuals temporarily move personal vehicles for travel or relocation.",
            "Providing end-to-end handling from pickup to re-export.",
        ],
    },
]

const testimonials = [
    {
        quote:
            "Transpeed Cargo made shipping our exhibition vehicles to international auto shows completely hassle-free. Their expertise in Carnet de Passages documentation saved us time and money.",
        name: "Sarah Johnson",
        company: "Global Auto Exhibitions Ltd.",
    },
    {
        quote:
            "As a rally team competing across multiple countries, we needed a reliable partner for vehicle transport. Transpeed Cargo's service has been flawless for three seasons running.",
        name: "Michael Rodriguez",
        company: "Velocity Racing Team",
    },
    {
        quote:
            "When we needed to temporarily relocate construction equipment for an international project, Transpeed handled all the customs documentation perfectly. Highly recommended!",
        name: "David Chen",
        company: "BuildWell Construction",
    },
]

