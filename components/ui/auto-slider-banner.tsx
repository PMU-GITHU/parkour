"use client"

import { useState, useEffect, useMemo } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MoveRight, PhoneCall } from "lucide-react"
import { motion } from "framer-motion"

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
    () => ["durable", "lightweight", "high-performance", "versatile", "breathable"],
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
        <div className="flex gap-4 flex-col">
          <h1 className="text-5xl md:text-7xl max-w-2xl tracking-tighter text-center font-regular">
            <span className="text-cyan-50">
              {"Parkour Gear That's"}
            </span>
            <span className="relative text-orange-300 flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1">
              &nbsp;
              {titles.map((title, index) => (
                <motion.span
                  key={index}
                  className="absolute font-semibold"
                  initial={{ opacity: 0, y: "-100" }}
                  transition={{ type: "spring", stiffness: 50 }}
                  animate={
                    titleNumber === index
                      ? {
                        y: 0,
                        opacity: 1,
                      }
                      : {
                        y: titleNumber > index ? -150 : 150,
                        opacity: 0,
                      }
                  }
                >
                  {title}
                </motion.span>
              ))}
            </span>
          </h1>

          <p className="text-sm md:text-base leading-relaxed tracking-tight text-muted max-w-xl text-center">
            High-performance parkour gear for boundary-pushing athletes.
          </p>
        </div>
        <div className="flex flex-row gap-3 w-full items-center justify-center mt-8">
          <Button onClick={handleShopClick} className="w-1/6 border-0 hover:bg-orange-500 hover:text-white" variant="outline">
            Shop Now
          </Button>
        </div>
      </div>

    </div>
  )
}

