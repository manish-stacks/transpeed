"use client"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { BackgroundBeams } from "@/components/ui/background-beams"
import { SparklesCore } from "@/components/ui/sparkles"
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal"
import {
    Truck,
    Plane,
    ShoppingBag,
    Stethoscope,
    Building,
    Factory,
    Dumbbell,
    Smartphone,
    FlaskRoundIcon as Flask,
    Mountain,
    Phone,
    ChevronRight,
    ArrowDown,
    Package,
    ArrowRight,
    CheckCircle2,
} from "lucide-react"
import { Cover } from "@/components/ui/cover"
import { useRef } from "react"
import { TextReveal } from "@/components/ui/text-reveal"
import { CardHoverEffect } from "@/components/ui/card-hover-effect"
import { Card3D } from "@/components/ui/3d-card"
import WhyChoose from "@/components/Insdustry/WhyChoose"
import Link from "next/link"

export default function Home() {
    const industries = [
        {
            id: "automotive",
            title: "Automotive",
            icon: <Truck className="w-12 h-12 text-blue-600" />,
            image: '/images/automotive.jpg',
            description:
                "The automotive industry demands precision and speed in logistics. We provide just-in-time (JIT) delivery, ensuring timely transport of automotive parts, components, and finished vehicles.",
            solutions: [
                "Expedited shipping for critical automotive parts",
                "End-to-end supply chain management for OEMs & suppliers",
                "Secure transport for luxury and high-value vehicles",
                "Warehousing & distribution for spare parts and accessories",
            ],
            bgColor: "bg-blue-50",
        },
        {
            id: "aviation",
            title: "Aviation",
            icon: <Plane className="w-12 h-12 text-indigo-600" />,
            image: '/images/air-freight-hero1.webp',
            description:
                "Aviation logistics require highly secure, time-sensitive, and specialized handling. We support airlines, MRO companies, and aircraft manufacturers with rapid and reliable logistics solutions.",
            solutions: [
                "Express shipping for aircraft spare parts and engines",
                "AOG (Aircraft on Ground) priority logistics",
                "Compliance with aviation regulatory requirements",
                "Global air freight network for fast delivery",
            ],
            bgColor: "bg-indigo-50",
        },
        {
            id: "fashion",
            title: "Fashion & Retail",
            icon: <ShoppingBag className="w-12 h-12 text-pink-600" />,
            image: '/images/Fashion & Retail.jpg',
            description:
                "The fashion and retail industries demand speed, flexibility, and seasonal logistics management. Our expertise ensures seamless global sourcing, distribution, and last-mile delivery.",
            solutions: [
                "Time-sensitive deliveries for fashion collections & promotions",
                "Omni-channel fulfillment for e-commerce & retail stores",
                "Temperature-controlled shipping for delicate fabrics & luxury goods",
                "Customs clearance & import/export compliance",
            ],
            bgColor: "bg-pink-50",
        },
        {
            id: "healthcare",
            title: "Healthcare & Pharma",
            icon: <Stethoscope className="w-12 h-12 text-emerald-600" />,
            image: '/images/Healthcare & Pharma.jpg',
            description:
                "Healthcare and pharmaceutical logistics require strict regulatory compliance, temperature control, and high security. We provide GMP-compliant logistics solutions for medical supplies and pharmaceuticals.",
            solutions: [
                "Temperature-controlled storage and transportation (Cold Chain)",
                "Regulatory-compliant shipping for pharmaceuticals & medical devices",
                "Urgent air freight solutions for life-saving medicines",
                "End-to-end traceability for pharmaceutical supply chains",
            ],
            bgColor: "bg-emerald-50",
        },
        {
            id: "hospitality",
            title: "Hotel & Hospitality",
            icon: <Building className="w-12 h-12 text-amber-600" />,
            image: '/images/Hospitality-Industry.jpg',
            description:
                "Hotel logistics involve procurement, warehousing, and timely delivery of furnishings, food supplies, and equipment. We streamline supply chain operations for hotels, resorts, and restaurants.",
            solutions: [
                "Global sourcing & supply chain management for hotel projects",
                "Inventory management for linens, furniture, and decor",
                "Food & beverage logistics with cold chain solutions",
                "Custom clearance for imported hospitality goods",
            ],
            bgColor: "bg-amber-50",
        },
        {
            id: "industrial",
            title: "Industrial & Manufacturing",
            icon: <Factory className="w-12 h-12 text-gray-600" />,
            image: '/images/Industrial & Manufacturing.jpg',
            description:
                "Industrial logistics require heavy-duty transport, warehousing, and supply chain optimization. We support manufacturers by ensuring smooth material flow and on-time delivery.",
            solutions: [
                "Heavy equipment & machinery transportation",
                "Multi-modal logistics for industrial supply chains",
                "Just-in-time (JIT) delivery for production plants",
                "Project cargo handling for large-scale industrial operations",
            ],
            bgColor: "bg-gray-50",
        },
        {
            id: "sports",
            title: "Sports & Entertainment",
            icon: <Dumbbell className="w-12 h-12 text-red-600" />,
            image: '/images/Sports & Entertainment.webp',
            description:
                "From event logistics to sports equipment transportation, we handle time-sensitive and specialized logistics for sports teams, tournaments, and entertainment productions.",
            solutions: [
                "Express shipping for sports gear & event materials",
                "Logistics for international sports events & concerts",
                "Secure & specialized handling for high-value equipment",
                "Time-definite solutions for tournament logistics",
            ],
            bgColor: "bg-red-50",
        },
        {
            id: "technology",
            title: "Electronics & Technology",
            icon: <Smartphone className="w-12 h-12 text-purple-600" />,
            image: '/images/Electronics & Technology.jpeg',
            description:
                "The technology industry requires secure, time-sensitive, and high-value shipments. We specialize in the transportation of consumer electronics, semiconductors, and IT hardware.",
            solutions: [
                "Secure and shock-proof handling of fragile electronics",
                "Expedited delivery for high-tech goods & components",
                "Supply chain solutions for global electronics distribution",
                "Temperature & humidity-controlled shipping for sensitive equipment",
            ],
            bgColor: "bg-purple-50",
        },
        {
            id: "chemical",
            title: "Chemical Industry",
            icon: <Flask className="w-12 h-12 text-teal-600" />,
            image: '/images/Chemical Industry.jpg',
            description:
                "Handling chemicals requires compliance with hazardous material regulations (HAZMAT), specialized packaging, and secure transport. Our logistics solutions ensure the safe movement of chemicals.",
            solutions: [
                "Transportation of hazardous & non-hazardous chemicals",
                "Compliance with international safety regulations",
                "Bulk liquid transport & ISO tank solutions",
                "Warehousing solutions with proper safety measures",
            ],
            bgColor: "bg-teal-50",
        },
        {
            id: "mining",
            title: "Metal & Mining",
            icon: <Mountain className="w-12 h-12 text-stone-600" />,
            image: '/images/Metal & Mining.jpg',
            description:
                "The mining and metal industries demand robust logistics for heavy cargo, raw materials, and finished metals. We specialize in transporting ores, minerals, steel, and other metal products worldwide.",
            solutions: [
                "Heavy cargo transportation for raw minerals & metals",
                "Breakbulk & project cargo logistics",
                "Multi-modal transport solutions (rail, sea, and road)",
                "Supply chain optimization for mining operations",
            ],
            bgColor: "bg-stone-50",
        },
    ]

    const content = [
        {
            title: "Industry Expertise",
            description:
                "Customized logistics solutions for every sector, tailored to meet the unique requirements of your industry.",
            content: (
                <div className="h-full w-full bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl shadow-lg flex items-center justify-center p-8">
                    <Image
                        src="/placeholder.svg?height=400&width=400"
                        width={400}
                        height={400}
                        alt="Industry Expertise"
                        className="rounded-lg"
                    />
                </div>
            ),
        },
        {
            title: "Global Network",
            description:
                "Reliable international logistics partners across the globe, ensuring seamless transportation across borders.",
            content: (
                <div className="h-full w-full bg-gradient-to-br from-indigo-100 to-indigo-200 rounded-xl shadow-lg flex items-center justify-center p-8">
                    <Image
                        src="/placeholder.svg?height=400&width=400"
                        width={400}
                        height={400}
                        alt="Global Network"
                        className="rounded-lg"
                    />
                </div>
            ),
        },
        {
            title: "Technology-Driven",
            description:
                "Real-time tracking & supply chain optimization powered by cutting-edge technology for complete visibility.",
            content: (
                <div className="h-full w-full bg-gradient-to-br from-cyan-100 to-cyan-200 rounded-xl shadow-lg flex items-center justify-center p-8">
                    <Image
                        src="/placeholder.svg?height=400&width=400"
                        width={400}
                        height={400}
                        alt="Technology-Driven"
                        className="rounded-lg"
                    />
                </div>
            ),
        },
        {
            title: "End-to-End Solutions",
            description:
                "Comprehensive logistics services from procurement to last-mile delivery, all managed under one roof.",
            content: (
                <div className="h-full w-full bg-gradient-to-br from-teal-100 to-teal-200 rounded-xl shadow-lg flex items-center justify-center p-8">
                    <Image
                        src="/placeholder.svg?height=400&width=400"
                        width={400}
                        height={400}
                        alt="End-to-End Solutions"
                        className="rounded-lg"
                    />
                </div>
            ),
        },
    ]

    const sectionRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    })

    const backgroundOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
    const backgroundScale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8])

    return (
        <main className="min-h-screen bg-white text-gray-800 overflow-hidden">
            {/* Hero Section */}
            <section className="w-full
        h-[100dvh]
            relative  overflow-hidden block z-10 bg-[url('/images/about-us-hero-bg.webp')]  bg-cover bg-no-repeat bg-fixed
            bg-center  before:content-[''] before:absolute before:inset-0 before:block 
            before:opacity-75
            before:z-[-5]">
                <div className=" text-white py-0">
                    <div className="container mx-auto flex flex-col md:flex-row items-center justify-center my-5 md:my-24 relative">
                        <div className="space-y-5 flex flex-col w-full lg:w-2/3 md:items-start items-center p-8 ">
                            <div>
                                <h1 className="text-3xl md:text-5xl text-start text-yellow-500 tracking-loose">
                                    Transpeed Cargo
                                </h1>
                            </div>
                            <div>
                                <h2 className="md:text-6xl text-5xl mb-2 font-extrabold">
                                    Industry Solutions
                                </h2>
                            </div>
                            <div>
                                <p className="text-2xl md:tex-3xl md:text-center  text-gray-50">
                                    Transpeed Cargo Pvt Ltd offers secure, efficient, and cost-effective freight solutions by air, sea, and land. We ensure reliable logistics tailored to your needs.
                                </p>
                            </div>
                            <div className='pt-10'>

                                <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-md flex md:items-center space-x-2 transition-colors">
                                    <Package className="h-5 w-5" />
                                    <span>GET A QUOTATION</span>
                                </button>
                            </div>

                        </div>

                        <div className="p-8 mt-12 mb-6 md:mb-0 md:mt-0 ml-0 md:ml-12 lg:w-2/3">
                            <div className="">
                                <div>
                                    <img
                                        className="mb-10"
                                        src="/images/transpeed-about-us-hero.webp"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-10 left-0 right-0 flex justify-center">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 0.8 }}
                        className="animate-bounce"
                    >
                        <ArrowDown className="w-6 h-6 text-gray-600" />
                    </motion.div>
                </div>
            </section>


            {/* Industry Overview */}
            {/* <section className="py-20 relative bg-gray-50">
                <div className="container mx-auto px-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="text-4xl md:text-5xl font-bold text-center mb-16"
                    >
                        Industry <Cover className={'text-white'}>Solutions</Cover>
                    </motion.h2>

                    <div className="max-w-7xl grid grid-cols- mx-auto">
                        {industries.map((industry, index) => (
                            <motion.div
                                key={industry.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className={`mb-16 rounded-2xl overflow-hidden shadow-lg ${industry.bgColor}`}
                            >
                                <div className="p-8 md:p-12">
                                    <div className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} gap-8`}>
                                        <div className="md:w-2/4 flex justify-center items-start">
                                            <img
                                                src={industry.image}
                                                alt={industry.title}
                                                className="w-full h-full md:h-[400px] object-cover rounded-lg shadow-md"
                                            />
                                        </div>
                                        <div className="md:w-3/4">
                                            <h3 className="text-3xl font-bold mb-4 text-gray-800">{industry.title}</h3>
                                            <p className="text-gray-700 mb-6 text-lg">{industry.description}</p>
                                            <h4 className="text-xl font-semibold mb-4 text-gray-800">Our Solutions:</h4>
                                            <div className="grid md:grid-cols-2 gap-4">
                                                {industry.solutions.map((solution, idx) => (
                                                    <div
                                                        key={idx}
                                                        className="flex items-start gap-2 bg-white p-4 rounded-lg shadow-sm border border-gray-100"
                                                    >
                                                        <span className="text-emerald-500 mt-1 font-bold">✓</span>
                                                        <span className="text-gray-700">{solution}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </section> */}
            <section ref={sectionRef} className="py-5 md:py-20 relative overflow-hidden">
                <motion.div
                    className="absolute inset-0 bg-gradient-to-b from-blue-50 to-teal-50"
                    style={{ opacity: backgroundOpacity, scale: backgroundScale }}
                />

                <div className="absolute inset-0 opacity-10">
                    <SparklesCore
                        id="industrySparkles"
                        background="transparent"
                        minSize={0.4}
                        maxSize={1}
                        particleDensity={20}
                        className="w-full h-full"
                        particleColor="#3B82F6"
                    />
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-20">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="inline-block mb-4 px-6 py-2 bg-blue-100 rounded-full text-blue-600 font-semibold"
                        >
                            Specialized Solutions
                        </motion.div>

                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Industry <Cover className={'text-white'}>Solutions</Cover>
                        </h2>

                        <TextReveal className="max-w-2xl mx-auto text-gray-600 text-lg">
                            Tailored logistics expertise for every sector, ensuring your specific needs are met with precision and
                            care.
                        </TextReveal>
                    </div>

                    <div className="max-w-7xl mx-auto">
                        {industries.map((industry, index) => (
                            <motion.div
                                key={industry.id}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8 }}
                                className="mb-5 last:mb-0"
                            >
                                <CardHoverEffect containerClassName="w-full">
                                    <div className={`rounded-2xl overflow-hidden shadow-xl border border-gray-100 bg-white`}>
                                        <div className="p-2 md:p-0">
                                            <div className={`flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                                                <div className="md:w-2/5 relative overflow-hidden">
                                                    <Card3D className="h-full">
                                                        <div className="relative h-64 md:h-full w-full overflow-hidden">
                                                            <Image
                                                                src={industry.image || "/placeholder.svg"}
                                                                alt={industry.title}
                                                                fill
                                                                className="object-cover transition-transform duration-700 hover:scale-110"
                                                            />
                                                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                                                            <div className="absolute bottom-0 left-0 p-6 text-white">
                                                                <div className="p-3 bg-white/10 backdrop-blur-md rounded-full inline-block mb-3">
                                                                    {industry.icon}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Card3D>
                                                </div>

                                                <div className="md:w-3/5 p-6 md:p-12">
                                                    <motion.div
                                                        initial={{ opacity: 0, y: 20 }}
                                                        whileInView={{ opacity: 1, y: 0 }}
                                                        viewport={{ once: true }}
                                                        transition={{ duration: 0.6, delay: 0.2 }}
                                                    >
                                                        <h3 className="text-3xl font-bold mb-4 text-gray-900 flex items-center">
                                                            {industry.title}
                                                            <motion.div
                                                                className="ml-3 h-1 bg-blue-500"
                                                                initial={{ width: 0 }}
                                                                whileInView={{ width: 40 }}
                                                                viewport={{ once: true }}
                                                                transition={{ duration: 0.8, delay: 0.4 }}
                                                            />
                                                        </h3>

                                                        <p className="text-gray-900 mb-8  leading-relaxed">{industry.description}</p>

                                                        <div className="mb-6">
                                                            <div className="flex items-center mb-4">
                                                                <div className="h-8 w-1 bg-blue-500 mr-3" />
                                                                <h4 className="text-xl font-semibold text-gray-800">Our Solutions</h4>
                                                            </div>

                                                            <div className="grid md:grid-cols-2 gap-4">
                                                                {industry.solutions.map((solution, idx) => (
                                                                    <motion.div
                                                                        key={idx}
                                                                        initial={{ opacity: 0, x: -10 }}
                                                                        whileInView={{ opacity: 1, x: 0 }}
                                                                        viewport={{ once: true }}
                                                                        transition={{ duration: 0.4, delay: 0.1 * idx }}
                                                                        className="flex items-start gap-3 p-4 rounded-lg bg-gradient-to-br from-white to-gray-50 shadow-sm border border-gray-300    hover:shadow-md transition-all duration-300 group"
                                                                    >
                                                                        <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0 group-hover:text-blue-500 transition-colors" />
                                                                        <span className="text-gray-900">{solution}</span>
                                                                    </motion.div>
                                                                ))}
                                                            </div>
                                                        </div>


                                                    </motion.div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </CardHoverEffect>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <WhyChoose />

            {/* Contact Section */}
            <section className="py-20 bg-gradient-to-b from-blue-50 to-teal-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-4xl font-bold mb-6 text-gray-800">Your cargo, our responsibility!</h2>
                            <p className="text-xl text-gray-700 mb-10">
                                Let Transpeed Cargo handle your industry-specific logistics needs with efficiency, security, and
                                reliability.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                <Link href={'contact-us'} className="bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                                    <Phone className="mr-2 h-5 w-5" /> Contact Us Today
                                </Link>
                             
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

         
        </main>
    )
}

