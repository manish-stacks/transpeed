"use client"
import Hero from '@/components/home/Hero';
import { TabsDemo } from '@/components/home/TabsDemo';
import React from 'react'
// import ScrollyVideo from 'scrolly-video'
// import ScrollyVideo from 'scrolly-video/dist/ScrollyVideo.cjs.jsx';
import ScrollyVideo from 'scrolly-video/dist/ScrollyVideo.esm.jsx';


export default function Page() {
  return (
    <>
      <Hero />
      <TabsDemo />
    </>
  )
}
