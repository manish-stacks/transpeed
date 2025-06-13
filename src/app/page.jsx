"use client"
import React from 'react'
import CounterHome from '@/components/home/CounterHome';
import Hero from '@/components/home/Hero';
import OtherServices from '@/components/home/OtherServices';
import { ServicesCarouselDemo } from '@/components/home/ServicesCarouselDemo';
import { WhyChooseHome } from '@/components/home/WhyChooseHome';
import { AnimatedTestimonialsSection } from '@/components/home/AnimatedTestimonialsSection';
import BlogSection from '@/components/home/BlogSectionArea';
import CoreAdvantage from '@/components/home/CoreAdvantage';
import StrategicFoundations from '@/components/home/StrategicFoundation';
import ContactForm from '@/components/ContactUs';
import GoogleMap from '@/components/GoogleMap';
import ImageMarqueeCarousel from '@/components/Marquee';



export default function Page() {
  return (
    <>
      <Hero />
      <ServicesCarouselDemo />
      <WhyChooseHome />
      <OtherServices />
      <ImageMarqueeCarousel />
      <CoreAdvantage />
      <CounterHome />
      <StrategicFoundations />
      <AnimatedTestimonialsSection />
      <ContactForm />
      <BlogSection />
      <GoogleMap />
      
    </>
  )
}