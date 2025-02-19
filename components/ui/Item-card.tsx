"use client"

import Image from "next/image"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { Product } from "@/lib/MerchData"

 

export function ItemCard({ id,name, price, images, discountedPrice }: Product) {
  const [isHovered, setIsHovered] = useState(false)
  const router = useRouter()
  return (
    <div 
    onClick={() => router.push("/Store/" + id)}
    
    className="bg-dark-800 rounded-lg overflow-hidden cursor-pointer">
      <div
        className="relative aspect-square "
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Image
          src={isHovered ? images[1] : images[0]}
          alt={name}
          fill
          className="object-cover transition-opacity duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-100">{name}</h3>
        <div className="text-gray-400 mb-4">
          {
            discountedPrice ? (
              <div className="flex items-center gap-2">
                <span className="line-through text-gray-500">${price}</span>
                <span className="text-orange-500">${discountedPrice}</span>
              </div>
            ) : (
              <p>
              ${price.toFixed(2)}
              </p>
            )
          }
        </div>
        <Button className="w-full border-0 hover:bg-orange-500 hover:text-white" variant="outline">
          Buy Now
        </Button>
      </div>
    </div>
  )
}

