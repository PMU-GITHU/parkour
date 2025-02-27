"use client"

import React, { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

interface HoverExpandProps {
  images: string[]
  initialSelectedIndex?: number
  thumbnailHeight?: number
  modalImageSize?: number
  maxThumbnails?: number
}

export default function HoverExpand({
  images,
  initialSelectedIndex = 0,
  thumbnailHeight = 300,
  modalImageSize = 600,
  maxThumbnails = 11,
}: HoverExpandProps) {
  const [selectedIndex, setSelectedIndex] = useState<number>(initialSelectedIndex)
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsModalOpen(false)
      }
    }

    if (isModalOpen) {
      document.body.classList.add("overflow-hidden")
      document.addEventListener("keydown", handleKeyDown)
    } else {
      document.body.classList.remove("overflow-hidden")
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      document.body.classList.remove("overflow-hidden")
    }
  }, [isModalOpen])

  return (
    <div className="relative w-full">
      <div className="mx-auto flex flex-col sm:flex-row w-full sm:w-fit gap-1 rounded-md pb-20 pt-10 md:gap-2">
        {images.slice(0, maxThumbnails).map((imageUrl, i) => (
          <div
            key={`image-container-${i}`}
            className={`group relative w-full sm:w-auto h-[10rem] sm:h-[20rem] md:h-[25rem] overflow-hidden rounded-2xl transition-all duration-300 ${
              selectedIndex === i 
                ? "sm:w-[20rem] md:w-[25rem] lg:w-[30rem]" 
                : "sm:w-8 md:w-10 lg:w-12 xl:w-20"
            }`}
            onMouseEnter={() => setSelectedIndex(i)}
            onMouseLeave={() => setSelectedIndex(i)}
            onClick={() => {
              setSelectedIndex(i)
              setIsModalOpen(true)
            }}
          >
            <motion.div
              layoutId={`image-${i}`}
              className="absolute inset-0 size-full"
            >
              <img
                src={imageUrl}
                alt={`Image ${i + 1}`}
                className="size-full object-cover transition-transform duration-300"
              />
            </motion.div>
          </div>
        ))}
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 grid place-content-center bg-white/40 backdrop-blur-sm dark:bg-black/40"
            onClick={() => setIsModalOpen(false)}
          >
            <div
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
              className="cursor-pointer overflow-hidden rounded-2xl bg-black max-w-[90vw] max-h-[90vh]"
            >
              <motion.div
                layoutId={`image-${selectedIndex}`}
                className="relative w-[90vw] h-[50vh] sm:w-[80vw] sm:h-[60vh] md:w-[70vw] md:h-[70vh] lg:w-[60vw] lg:h-[80vh]"
              >
                <img
                  src={images[selectedIndex]}
                  alt={`Image ${selectedIndex + 1}`}
                  className="absolute left-1/2 top-1/2 size-full -translate-x-1/2 -translate-y-1/2 object-cover"
                />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
