"use client"

import { useState, useEffect, useMemo } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MoveRight, PhoneCall } from "lucide-react"
import { motion } from "framer-motion"
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

  const handleShopClick = () => {
    const productSection = document.getElementById("product-section")
    if (productSection) {
      productSection.scrollIntoView({ behavior: "smooth" })
    }
  }

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
      <div
        className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 `}
      >
        <video
          src={"/merchloop.mp4"}
          autoPlay
          muted
          loop
          playsInline
        />
      </div>

      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
        <div className="flex gap-4 flex-col justify-center items-center">
          <h1 className="text-4xl md:text-6xl max-w- 2 xl font-bold text-center text-cyan-50">
            Stay Tuned For Our first Drop
          </h1>
          <AnimatedNumberCountdown
            endDate={new Date("2025-12-31")}
            className="my-4 text-white"
          />

          <Button
            onClick={() => window.location.href = '/'}
            className="bg-orange-500 text-white w-3/12   hover:text-cyan-50"
          >
            Back to Home
          </Button>

        </div>
      </div>

    </div>
  )
}

