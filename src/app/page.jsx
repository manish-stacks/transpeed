"use client"
import React from 'react'
import CounterHome from '@/components/home/CounterHome';
import Hero from '@/components/home/Hero';
import OtherServices from '@/components/home/OtherServices';
import { ServicesCarouselDemo } from '@/components/home/ServicesCarouselDemo';
import { WhyChooseHome } from '@/components/home/WhyChooseHome';
import { AnimatedTestimonialsSection } from '@/components/home/AnimatedTestimonialsSection';
import BlogSectionArea from '@/components/home/BlogSectionArea';
import CoreAdvantage from '@/components/home/CoreAdvantage';
import StrategicFoundation from '@/components/home/StrategicFoundation';
import ContactUs from '@/components/ContactUs'
import GoogleMap from '@/components/GoogleMap';
import MarqueeText from '@/components/Marquee';



export default function Page() {
  return (
    <>
      <Hero />
      <ServicesCarouselDemo />
      <WhyChooseHome />
      <OtherServices />
      <MarqueeText />
      <CoreAdvantage />
      <CounterHome />
      <StrategicFoundation />
      <AnimatedTestimonialsSection />
      <ContactUs />
      <BlogSectionArea />
      <GoogleMap />
      
    </>
  )
}
