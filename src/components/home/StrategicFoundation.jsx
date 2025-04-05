"use-client";
import { useState } from "react";
import { motion } from "framer-motion";

const sections = [
    {
        title: "Mission",
        description: "Transpeed Cargo's mission is to provide reliable, efficient, and secure logistics solutions, ensuring seamless global transportation with a commitment to customer satisfaction, innovation, and sustainable business practices.",
        image: "/images/mission.png",
    },
    {
        title: "Vision",
        description: "Transpeed Cargo envisions becoming a global leader in logistics, delivering seamless, efficient, and innovative cargo solutions. We strive for excellence, sustainability, and customer satisfaction, ensuring reliable and cost-effective.",
        image: "/images/vision.png",
    },
    {
        title: "Culture",
        description: "Transpeed Cargo fosters a culture of reliability, innovation, and customer-first service. With a commitment to excellence, teamwork, and efficiency, it ensures seamless global logistics solutions tailored to clients' evolving needs.",
        image: "/images/culture.png",
    },
    {
        title: "Values",
        description: "Transpeed Cargo values integrity, reliability, and customer commitment. We prioritize efficiency, transparency, and innovation, ensuring seamless logistics solutions. Our dedication to excellence drives us to deliver trust.",
        image: "/images/value.png",
    },
    {
        title: "Social Responsibility",
        description: "Transpeed Cargo upholds Corporate Social Responsibility by promoting sustainable logistics, reducing carbon footprints, supporting local communities, ensuring ethical supply chains, and socially responsible future.",
        image: "/images/social-responsibility.png",
    },
];

export default function StrategicFoundations() {
    const [activeSection, setActiveSection] = useState("Mission");

    return (
        <>
            <div className="bg-[#d3edff] w-full lg:px-52 md:px-10 max-[768px]:px-1 py-20 max-[425px]:hidden">
                <div>
                    <h2 className='max-w-7xl pl-4 mx-auto text-xl md:text-5xl max-[768px]:text-3xl font-bold font-sans text-center mb-10'>Our Strategic
                    Foundations</h2>
                </div>
                <div className="flex h-auto bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-sky-500 to-sky-900 text-white p-10 rounded-3xl ">
                    <div className="w-1/4 flex flex-col justify-center items-start p-4 space-y-4">
                        {sections.map((section) => (
                            <button
                                key={section.title}
                                onClick={() => setActiveSection(section.title)}
                                className={`p-4 text-left rounded-md w-full bg-gray-100/10 transition-all duration-300 ${activeSection === section.title ? "font-bold" : "opacity-60"
                                    }`}
                            >
                                {section.title}
                            </button>
                        ))}
                    </div>

                    <div className="relative w-3/4 overflow-hidden">
                        {sections.map((section) => (
                            <motion.div
                                key={section.title}
                                initial={{ x: "100%" }}
                                animate={{ x: activeSection === section.title ? "0%" : "100%" }}
                                transition={{ type: "tween", duration: 0.5 }}
                                className="absolute top-0 left-0 w-full h-auto flex flex-col justify-center items-center p-6 bg-gray-100/10 rounded-2xl shadow-3xl py-14 ">
                                <h2 className="text-3xl font-bold mb-4 text-yellow-500">{section.title}</h2>
                                <p className="text-lg mb-6 text-center max-w-2xl">
                                    {section.description}
                                </p>
                                <img
                                    src={section.image}
                                    alt={section.title}
                                    className="rounded-lg"
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
