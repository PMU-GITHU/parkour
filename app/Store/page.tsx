"use client"
import Navbar from '@/components/sections/Navbar'
import { AutoSliderBanner } from '@/components/ui/auto-slider-banner'
import { ItemCard } from '@/components/ui/Item-card'
import { Products } from '@/lib/MerchData'
import React from 'react'

export default function Store() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between bg-black">
            <Navbar />
            {/* Full-screen Auto-sliding Banner */}
            <AutoSliderBanner />

            {/* Product Section */}
            <section id="product-section" className="w-full py-12 md:py-24 space-y-20 bg-black ">
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
            </section>
        </main>
    )
}
