"use client";
import Image from "next/image";
import React from "react";
// import { Carousel } from "../ui/apple-cards-carousel";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function ServicesCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    (<div className="w-full h-full py-20 bg-gradient-to-r from-[#01385e] to-[#168cbd]">
      <h2
        className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl max-[768px]:text-3xl font-bold text-neutral-100 dark:text-neutral-200 font-sans text-center">
        Get To Know Our Featured Services
      </h2>
      <Carousel items={cards} />
    </div>)
  );
}

const DummyContent = () => {
  return (<>
    {[...new Array(3).fill(1)].map((_, index) => {
      return (
        (<div
          key={"dummy-content" + index}
          className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
          <p
            className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
            <span className="font-bold text-neutral-700 dark:text-neutral-200">
              The first rule of Apple club is that you boast about Apple club.
            </span>{" "}
            Keep a journal, quickly jot down a grocery list, and take amazing
            class notes. Want to convert those notes to text? No problem.
            Langotiya jeetu ka mara hua yaar is ready to capture every
            thought.
          </p>
          <Image
            src="https://assets.aceternity.com/macbook.png"
            alt="Macbook mockup from Aceternity UI"
            height="500"
            width="500"
            className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain" />
        </div>)
      );
    })}
  </>);
};

const data = [
  {
    title: "Ocean Freight",
    desc:"Transpeed Cargo Pvt Ltd has a well-established global agency network supporting the FCL / LCL Forwarding service of Global Logistics....",
    src: "/images/sea-freight-forwarding.webp",
    content: <DummyContent />,
    link: "/services/ocean-freight"
  },
  {
    title: "Air Freight",
    desc:"From small express shipments to large scale projects, DDU/DAP or Express, our air cargo division is well equipped with the latest technology....",
    src: "/images/air-freight-forwarding.webp",
    content: <DummyContent />,
    link: "services/air-freight"
  },
  {
    title: "Air Chartering",
    desc:"Transpeed Cargo Pvt. Ltd. offers exceptional Air Chartering Solutions tailored to meet urgent and specialized cargo needs.... ",
    src: "/images/air-chartering.webp",
    content: <DummyContent />,
    link: "services/air-chartering"
  },
  {
    title: "Project Cargo",
    desc:"At Transpeed Cargo Private Limited, we specialize in delivering tailored Project Cargo solutions to handle complex, oversized, and heavy-lift....",
    src: "/images/project-cargo.webp",
    content: <DummyContent />,
    link: "/services/project-cargo"
  },
   {
    title: "CFS Inbound/Outbound Solutions",
    desc:"Transpeed Cargo Pvt. Ltd. ensures seamless CFS solutions for efficient cargo handling, storage, and transport, optimizing your supply chain....",
    src: "/images/cfs-inbond-outbond.webp",
    content: <DummyContent />,
    link: "/services/cfs-inbound-outbond"
  },
  {
    title: "Custom Clearance",
    desc:"We have a well dedicated team of professionals to take care of your complete Customs clearance procedures....",
    src: "/images/custom-clearance.webp",
    content: <DummyContent />,
    link: "/services/custom-clearance"
  },
  {
    title: "Carnet De Passages Shipment",
    desc:"A Carnet de Passages (CPD) is an internationally recognized customs document that allows vehicles to be temporarily imported into a foreign country....",
    src: "/images/road-transportation.webp",
    content: <DummyContent />,
    link: "/services/carnet-de-passages-shipment"
  },

  {
    title: "Warehousing",
    desc:"Transpeed Cargo offers secure, efficient warehousing solutions with inventory management, real-time tracking, and seamless distribution services....",
    src: "/images/wherehousing.webp",
    content: <DummyContent />,
    link: ""
  },
  {
    title: "Rail Transportation",
    desc:"Transpeed Cargo offers efficient, reliable rail transportation, ensuring timely deliveries with cost-effective logistics solutions across India....",
    src: "/images/rail-transportation.webp",
    content: <DummyContent />,
    link: ""
  },
 
];
