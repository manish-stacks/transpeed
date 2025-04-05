"use client";

import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function AnimatedTestimonialsSection() {
  const testimonials = [
    {
      quote:
        "It was my first experience importing a large order by sea freight and I am happy I got in touch with this team. All my questions, queries and doubts were very professionally answered and what has been the most impressive feat of all is the fact that I have never had to wait for a call back, any time I have called them my call has been answered and my queries answered. ",
      name: "Sulaksh Kaushik",
      designation: "Client",
      src: "/images/about-air-frieght.webp",
    },
    {
      quote:
        "Transpeed Cargor offers reliable and efficient cargo shipping services tailored to meet diverse logistical needs. The company stands out for its commitment to timely deliveries and excellent customer service, making it a dependable choice for businesses and individuals alike. Their user-friendly tracking system allows clients to monitor their shipments in real-time, adding a layer of transparency and assurance.",
      name: "Rinku Singh",
      designation: "Client",
      src: "/images/sea-frieght.webp",
    },
    {
      quote:
        "Transpeed Cargo provides a reliable and efficient cargo shipping service that caters to various logistical needs. Their operations are characterized by punctuality and professional handling of goods. The company's commitment to maintaining a high standard of customer service is evident through their responsive communication and transparent tracking system.",
      name: "Rahul Saini",
      designation: "Client",
      src: "/images/about-air-chartering.webp",
    },
    {
      quote:
       "One of the best freight forwarding company in India with best service. The staff is very helpful and provided me the best freight from Nhava Sheva to ST. Petersburg ( Russia ). I would personally recommend if you have any shipment to Russia. They will provide you best rates for sure. Both the prices and the customer service were first-rate.",
      name: "Shivam Kohli",
      designation: "Client",
      src: "/images/ship-loading.webp",
    },
    {
      quote:
        "I recently used Transpeed Cargo Movers for an international courier shipment, and I couldn't be happier with their service. From start to finish, the experience was smooth and efficient. Their customer service team was responsive and provided all the information I needed to choose the right shipping option for my needs. The package arrived at its destination ahead of schedule, which was a pleasant surprise.",
      name: "Mohit Kalra",
      designation: "Client",
      src: "/images/air-freight-hero1.webp",
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
