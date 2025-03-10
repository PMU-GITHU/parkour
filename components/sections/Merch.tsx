"use client"
import { ItemCard } from "@/components/ui/Item-card"
import { AutoSliderBanner } from "@/components/ui/auto-slider-banner"
import { Products } from "@/lib/MerchData"
import { Button } from "../ui/button"
import AnimatedNumberCountdown from "../ui/animated-number-countdown"

export default function Merch() {


  return (
    <main className="flex min-h-screen flex-col relative items-center justify-between bg-black py-20">
      <div className="absolute flex flex-col justify-center items-center size-full bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_900px_at_50%_200px,transparent,black)] backdrop-blur-md z-20">

        <h1 className="text-4xl md:text-6xl max-w- 2 xl font-bold text-center text-cyan-50">
          Stay Tuned For Our first Drop
        </h1>

        <AnimatedNumberCountdown
          endDate={new Date("2025-12-31")}
          className="my-4 text-white"
        />

      </div>


      {/* Product Section */}
      <section id="product-section" className="w-full py-12 md:py-24 bg-black ">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-3xl font-bold text-center text-gray-100">Latest Collection</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Products.map((hoodie) => (
              <ItemCard key={hoodie.id} {...hoodie} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

