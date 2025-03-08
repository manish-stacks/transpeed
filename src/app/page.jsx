"use client"
import Hero from '@/components/home/Hero';
import { ServicesCarouselDemo } from '@/components/home/ServicesCarouselDemo';
import { TabsDemo } from '@/components/home/TabsDemo';
import React from 'react'
// import ScrollyVideo from 'scrolly-video'
// import ScrollyVideo from 'scrolly-video/dist/ScrollyVideo.cjs.jsx';



export default function Page() {
  return (
    <>
      <Hero />
      <TabsDemo />
      <ServicesCarouselDemo />
    </>
  )
}
