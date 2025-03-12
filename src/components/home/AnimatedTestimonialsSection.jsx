"use client";

import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function AnimatedTestimonialsSection() {
  const testimonials = [
    {
      quote:
        "It was my first experience importing a large order by sea freight and I am happy I got in touch with this team. All my questions, queries and doubts were very professionally answered and what has been the most impressive feat of all is the fact that I have never had to wait for a call back, any time I have called them my call has been answered and my queries answered. ",
      name: "Sulaksh Kaushik",
      designation: "Client",
      src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "It was my first experience importing a large order by sea freight and I am happy I got in touch with this team. All my questions, queries and doubts were very professionally answered and what has been the most impressive feat of all is the fact that I have never had to wait for a call back, any time I have called them my call has been answered and my queries answered. ",
      name: "Sulaksh Kaushik",
      designation: "Client",
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "It was my first experience importing a large order by sea freight and I am happy I got in touch with this team. All my questions, queries and doubts were very professionally answered and what has been the most impressive feat of all is the fact that I have never had to wait for a call back, any time I have called them my call has been answered and my queries answered. ",
      name: "Sulaksh Kaushik",
      designation: "Client",
      src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
       "It was my first experience importing a large order by sea freight and I am happy I got in touch with this team. All my questions, queries and doubts were very professionally answered and what has been the most impressive feat of all is the fact that I have never had to wait for a call back, any time I have called them my call has been answered and my queries answered. ",
      name: "Sulaksh Kaushik",
      designation: "Client",
      src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "It was my first experience importing a large order by sea freight and I am happy I got in touch with this team. All my questions, queries and doubts were very professionally answered and what has been the most impressive feat of all is the fact that I have never had to wait for a call back, any time I have called them my call has been answered and my queries answered. ",
      name: "Sulaksh Kaushik",
      designation: "Client",
      src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return (
  <>
      <div className='title'>
        <h2 class="max-w-7xl pl-4 mx-auto text-xl md:text-5xl max-[768px]:text-3xl font-bold font-sans text-center mt-14">What Our Client Say</h2>
      </div>
     <AnimatedTestimonials testimonials={testimonials} />
  </>

);  
}
