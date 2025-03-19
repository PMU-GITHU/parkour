"use client"

import { useState, useEffect, useMemo } from "react" 
import { Button } from "@/components/ui/button" 
import AnimatedNumberCountdown from "./animated-number-countdown"

const images = [
  "/merchloop.mp4",
]

export function AutoSliderBanner() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000) // Change image every 5 seconds

    return () => clearInterval(interval)
  }, [])

 

  const [titleNumber, setTitleNumber] = useState(0);

  const titles = useMemo(
    () => ["durable", "lightweight", "versatile", "breathable"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full transition-opacity duration-1000">
        <video
          src={"/merchloop.mp4"}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />
      </div>

      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center px-4">
        <div className="flex gap-2 sm:gap-4 flex-col justify-center items-center w-full max-w-4xl">
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center text-cyan-50">
            Stay Tuned For Our First Drop
          </h1>
          <AnimatedNumberCountdown
            endDate={new Date("2025-12-31")}
            className="my-2 sm:my-4 text-white text-sm sm:text-base"
          />

          <Button
            onClick={() => window.location.href = '/'}
            className="bg-orange-500 text-white w-full sm:w-1/2 md:w-1/3 lg:w-1/4 hover:text-cyan-50 text-sm sm:text-base"
          >
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  )
}

