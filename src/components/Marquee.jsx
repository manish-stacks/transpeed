import { useEffect, useRef, useState } from "react";

export default function MarqueeText() {
  const marqueeRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let requestId;
    const speed = 1.5; // Adjust speed if needed

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
    <div className="relative w-full overflow-hidden bg-[#0A174E] py-10">

      {/* Marquee Container */}
      <div
        ref={marqueeRef}
        className="flex whitespace-nowrap w-full overflow-hidden cursor-pointer"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="flex space-x-10 min-w-max">
          {[...Array(3)].map((_, index) => (
            <span
              key={index}
              className="text-[5rem] font-bold uppercase tracking-wide text-transparent stroke-text transition-transform duration-500">
              We Are A Leading one-Stop Logistic Service provider helps to Reach Your exact delivery destination on Time Without Delay and Damages.
            </span>
          ))}
        </div>
      </div>

      <style jsx>{`
        .stroke-text {
          -webkit-text-stroke: 0.3px #fff;
        }

      `}</style>
    </div>
  );
}
