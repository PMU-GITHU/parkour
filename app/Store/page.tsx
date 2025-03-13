"use client"
import Navbar from '@/components/sections/Navbar'
import AnimatedNumberCountdown from '@/components/ui/animated-number-countdown'
import { AutoSliderBanner } from '@/components/ui/auto-slider-banner'
import { Button } from '@/components/ui/button'
import { ItemCard } from '@/components/ui/Item-card'
import { Products } from '@/lib/MerchData'
import React from 'react'

export default function Store() {
    return (
        <main className="flex min-h-screen relative flex-col items-center justify-between bg-white">
            
            <div className="absolute flex flex-col justify-center items-center size-full bottom-0 bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(251,146,60,.5)_100%)] left-0 right-0 top-0  backdrop-blur-xl z-20">
                <h1 className="text-4xl md:text-6xl max-w- 2 xl font-bold text-center text-cyan-50">
                    Stay Tuned For Our first Drop
                </h1>
                <AnimatedNumberCountdown
                    endDate={new Date("2025-12-31")}
                    className="my-4 text-white"
                />

                <Button
                    onClick={() => window.location.href = '/'}
                    className="bg-cyan-50 text-black border-cyan-50  hover:text-cyan-50"
                >
                    Back to Home
                </Button>

            </div>
            {/* <Navbar /> */}
            {/* Full-screen Auto-sliding Banner */}
            <AutoSliderBanner />

            {/* Product Section */}
            {/* <section id="product-section" className="w-full py-12 md:py-24 space-y-20 bg-black ">
                <div className="container mx-auto px-4">
                    <h2 className="mb-8 text-3xl font-bold text-center text-gray-100">Latest Collection</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {Products.map((hoodie) => (
                            <ItemCard key={hoodie.id} {...hoodie} />
                        ))}
                    </div>
                </div>
                <div className="container mx-auto px-4">
                    <h2 className="mb-8 text-3xl font-bold text-center text-gray-100">Latest Collection</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {Products.map((hoodie) => (
                            <ItemCard key={hoodie.id} {...hoodie} />
                        ))}
                    </div>
                </div>
                <div className="container mx-auto px-4">
                    <h2 className="mb-8 text-3xl font-bold text-center text-gray-100">Latest Collection</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {Products.map((hoodie) => (
                            <ItemCard key={hoodie.id} {...hoodie} />
                        ))}
                    </div>
                </div>
            </section> */}
        </main>
    )
}
