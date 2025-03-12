"use client";

import React from "react";
import { StickyScroll } from "../ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "Automotive",
    description:
      "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
    content: (
      <div
        className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
         <Image
          src="/images/core-ocean.jpg"
          width={600}
          height={500}
          className="h-full w-full object-cover rounded-3xl"
          alt="linear board demo" />
      </div>
    ),
  },
  {
    title: "Energy",
    description:
      "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/images/road-service.webp"
          width={300}
          height={300}
          className="h-full w-full object-cover rounded-3xl"
          alt="linear board demo" />
      </div>
    ),
  },
  {
    title: "Healthcare",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
        <div
        className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
         <Image
          src="/images/core-ocean.jpg"
          width={600}
          height={500}
          className="h-full w-full object-cover rounded-3xl"
          alt="linear board demo" />
      </div>
    ),
  },
  {
    title: "Retail",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/images/road-service.webp"
          width={300}
          height={300}
          className="h-full w-full object-cover rounded-3xl"
          alt="linear board demo" />
      </div>
    ),
  },
];
export function IndustriesExperties() {
  return (
    <>
    <div className="bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-sky-500 to-sky-900 p-10 mx-8 mt-20 rounded-3xl">
      <StickyScroll content={content} />
    </div>
    </>
  );
}
