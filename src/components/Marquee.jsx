import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const images = [
  "/partnerlogo/logo-1.jpg",
  "/partnerlogo/logo-2.jpg",
  "/partnerlogo/logo-3.jpg",
  "/partnerlogo/logo-4.jpg",
  "/partnerlogo/logo-4.jpg",
  "/partnerlogo/logo-5.jpg",
  "/partnerlogo/logo-6.jpg",
  "/partnerlogo/logo-7.jpg",
  "/partnerlogo/logo-8.jpg",
  "/partnerlogo/logo-9.jpg",
  "/partnerlogo/logo-10.jpg",
  "/partnerlogo/logo-11.jpg",
  "/partnerlogo/logo-12.jpg",
  "/partnerlogo/logo-13.jpg",
  "/partnerlogo/logo-14.jpg",
  "/partnerlogo/logo-15.jpg",
  "/partnerlogo/logo-16.jpg",
  "/partnerlogo/logo-17.jpg",
  "/partnerlogo/logo-18.jpg",
  "/partnerlogo/logo-19.jpg",
  "/partnerlogo/logo-20.jpg",
  "/partnerlogo/logo-21.jpg",
  "/partnerlogo/logo-22.jpg",
  "/partnerlogo/logo-23.jpg",
  "/partnerlogo/logo-24.webp",
  "/partnerlogo/logo-25.jpg",
  "/partnerlogo/logo-26.jpg",
  "/partnerlogo/logo-27.jpg",
  "/partnerlogo/logo-28.jpg",
  "/partnerlogo/logo-29.jpg",
  "/partnerlogo/logo-30.jpg",
  "/partnerlogo/logo-31.jpg",
  "/partnerlogo/logo-32.jpg",
  "/partnerlogo/logo-33.jpg",
  "/partnerlogo/logo-34.jpg",
  "/partnerlogo/logo-35.jpg",
  "/partnerlogo/logo-36.jpg",
  "/partnerlogo/logo-37.jpg",
  "/partnerlogo/logo-38.jpg",
  "/partnerlogo/logo-39.jpg",
  "/partnerlogo/logo-40.jpg",
  // "/partnerlogo/logo-1.jpg", // Repeat for smooth looping
  // "/partnerlogo/logo-2.jpg",
  // "/partnerlogo/logo-3.jpg",
  // "/partnerlogo/logo-4.jpg",
];

export default function ImageMarqueeCarousel() {
  const marqueeRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let requestId;
    const speed = 1.5;

    const animate = () => {
      if (marqueeRef.current && !isPaused) {
        marqueeRef.current.scrollLeft += speed;
        if (marqueeRef.current.scrollLeft >= marqueeRef.current.scrollWidth / 2) {
          marqueeRef.current.scrollLeft = 0;
        }
      }
      requestId = requestAnimationFrame(animate);
    };

    requestId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestId);
  }, [isPaused]);

  return (
    <div className="relative w-full overflow-hidden bg-[#fff] py-10">
      <div
        ref={marqueeRef}
        className="flex whitespace-nowrap w-full overflow-hidden cursor-pointer"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="flex space-x-10 min-w-max">
          {images.map((src, index) => (
            <Image key={index} src={src} alt={`partner-${index}`} width={200} height={75} className="object-contain rounded-md border p-3" />
          ))}
        </div>
      </div>
    </div>
  );
}
