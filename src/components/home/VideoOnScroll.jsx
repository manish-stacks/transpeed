"use client";
import React, { useEffect, useRef, useState } from "react";

export default function VideoOnScroll() {
  const videoRef = useRef(null);
  const scrollSectionRef = useRef(null);
  const playbackConst = 200; // Adjust scrolling speed
  const [isInView, setIsInView] = useState(false);
  const [videoEnded, setVideoEnded] = useState(false);

  useEffect(() => {
    // Intersection Observer to check when the component is in view
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.5 } // 50% of the component must be visible
    );

    if (scrollSectionRef.current) {
      observer.observe(scrollSectionRef.current);
    }

    return () => {
      if (scrollSectionRef.current) {
        observer.unobserve(scrollSectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    function scrollPlay() {
      if (videoRef.current && isInView) {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const frameNumber = Math.min(
          Math.max(scrollTop / playbackConst, 0),
          videoRef.current.duration ? videoRef.current.duration - 0.1 : 0
        );

        if (isFinite(frameNumber)) {
          videoRef.current.currentTime = frameNumber;
        }

        if (frameNumber >= videoRef.current.duration - 0.1) {
          setVideoEnded(true);
        }
      }
    }

    function handleMetadataLoaded() {
      if (videoRef.current) {
        const { duration } = videoRef.current;
        console.log("Video duration:", duration);

        if (scrollSectionRef.current) {
          scrollSectionRef.current.style.height =
            Math.round(duration * playbackConst) + "px"; // Set scrollable height
        }
      }
    }

    if (isInView) {
      window.addEventListener("scroll", scrollPlay);
    }

    const video = videoRef.current;
    if (video) {
      video.addEventListener("loadedmetadata", handleMetadataLoaded);
    }

    return () => {
      window.removeEventListener("scroll", scrollPlay);
      if (video) {
        video.removeEventListener("loadedmetadata", handleMetadataLoaded);
      }
    };
  }, [isInView]);

  return (
    <div ref={scrollSectionRef} className="relative w-full">
      <div
        className={`w-full h-[100vh] flex justify-center items-center bg-black ${
          videoEnded ? "static" : "sticky top-0"
        }`}
      >
        <video
          ref={videoRef}
          id="v0"
          preload="auto"
          playsInline
          muted
          className="w-full h-auto max-h-[100vh] object-cover"
        >
          <source
            type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
            src="/images/logistic-process.mp4"
          />
        </video>
      </div>
    </div>
  );
}
