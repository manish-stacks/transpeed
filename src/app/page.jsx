"use client"
import React from 'react'
import CounterHome from '@/components/home/CounterHome';
import Hero from '@/components/home/Hero';
import OtherServices from '@/components/home/OtherServices';
import { ServicesCarouselDemo } from '@/components/home/ServicesCarouselDemo';

import { WhyChooseHome } from '@/components/home/WhyChooseHome';
import { AnimatedTestimonialsSection } from '@/components/home/AnimatedTestimonialsSection';
import VideoOnScroll from '@/components/home/VideoOnScroll';
import { IndustriesExperties } from '@/components/home/IndustriesExperties';
import BlogSectionArea from '@/components/home/BlogSectionArea';



export default function Page() {
  return (
    <>
      <Hero />
      <ServicesCarouselDemo />
      <WhyChooseHome />
      <OtherServices />
      <CounterHome />
      <AnimatedTestimonialsSection />
      <BlogSectionArea />
    </>
  )
}
