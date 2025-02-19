"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronDown, Minus, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Navbar from "@/components/sections/Navbar"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useId } from "react";
import { Accordion, AccordionContent, AccordionItem } from "@/components/ui/accordion";
import * as AccordionPrimitive from "@radix-ui/react-accordion";

export default function ProductPage() {
    const [selectedSize, setSelectedSize] = useState<string>("M")
    const [activeSection, setActiveSection] = useState<string | null>(null)
    const [selectedImage, setSelectedImage] = useState(0)
    const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 })
    const [isZoomed, setIsZoomed] = useState(false)
    const [quantity, setQuantity] = useState(1)
    const sizes = ["XS", "S", "M", "L", "XL", "XXL"]

    const images = [
        "https://i.pinimg.com/736x/92/06/56/920656e03f09691d871e149b5dad8f7f.jpg",
        "https://i.pinimg.com/736x/94/d3/14/94d31436dfc73fcf93058089f69ffd96.jpg"
    ]

    const increaseQuantity = () => {
        setQuantity(quantity + 1)
    }

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect()
        const x = ((e.clientX - rect.left) / rect.width) * 100
        const y = ((e.clientY - rect.top) / rect.height) * 100
        setZoomPosition({ x, y })
    }
    const id = useId();

    const items = sizes.map((size) => ({
        value: size,
        label: size,
        disabled: size === "XXL"
    }));

    const toggleSection = (section: string) => {
        setActiveSection(activeSection === section ? null : section)
    }

    const handleImageClick = (index: number) => {
        setSelectedImage(index)
    }

    const itemsAccordion = [
        {
            id: "1",
            title: "Warranty Information",
            content:
                "Every purchase is backed by our commitment to quality. Enjoy peace of mind with a 90-day warranty, ensuring your product delivers satisfaction and reliability.",
        },
        {
            id: "2",
            title: "Shipping Details",
            content:
                "Free shipping on orders over $100. Standard delivery takes 3-5 business days. Express shipping available at checkout.",
        },
        {
            id: "3",
            title: "Customer Support",
            content:
                "Need help? Our customer support team is available 24/7. Contact us via email or live chat for immediate assistance.",
        },
    ];

    return (
        <main className="min-h-screen pt-32 pb-16 px-4 md:px-8 bg-black">
            <Navbar />

            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Image Gallery */}
                    <div className="relative">
                        {/* Thumbnails */}
                        <div className="absolute left-0 top-0 space-y-4 hidden md:block">
                            {images.map((img, idx) => (
                                <div
                                    key={idx}
                                    onClick={() => handleImageClick(idx)}
                                    className={cn(
                                        "w-16 h-16 md:w-20 md:h-20 border rounded-lg overflow-hidden cursor-pointer transition-all",
                                        selectedImage === idx ? "border-white" : "border-dark-400 hover:border-orange-500"
                                    )}
                                >
                                    <Image
                                        src={img || "/placeholder.svg"}
                                        alt={`Product view ${idx + 1}`}
                                        width={80}
                                        height={80}
                                        className="object-cover"
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Main Image */}
                        <div
                            className="md:ml-24 bg-dark-800 rounded-lg overflow-hidden cursor-zoom-in relative"
                            onMouseMove={handleMouseMove}
                            onMouseEnter={() => setIsZoomed(true)}
                            onMouseLeave={() => setIsZoomed(false)}
                        >
                            <Image
                                src={images[selectedImage] || "/placeholder.svg"}
                                alt="Product main view"
                                width={800}
                                height={800}
                                className={cn(
                                    "w-full h-auto object-cover transition-transform duration-300",
                                )}
                                priority
                            />
                            <div
                                className={cn(
                                    "absolute w-full h-full top-0 left-0 transition-opacity duration-200",
                                    isZoomed ? "opacity-100" : "opacity-0 pointer-events-none",
                                )}
                                style={{
                                    backgroundImage: `url(${images[selectedImage]})`,
                                    backgroundPosition: `${zoomPosition.x}% ${zoomPosition.y}%`,
                                    backgroundSize: "200%",
                                    backgroundRepeat: "no-repeat",
                                }}
                            />
                        </div>
                    </div>

                    {/* Product Details */}
                    <div className="space-y-8 text-white">
                        <div>
                            <h1 className="text-3xl md:text-4xl font-bold mb-4">SDFM Premium Hoodie</h1>
                            <div className="flex items-baseline gap-4">
                                <span className="text-2xl font-bold">USD $149.99</span>
                                <span className="text-lg text-gray-400 line-through">USD $129.99</span>
                            </div>
                        </div>

                        <p className="text-gray-400 leading-relaxed">
                            The SDFM Premium Hoodie combines urban style with ultimate comfort. Made with premium cotton blend fabric,
                            it features a modern fit, adjustable drawstring hood, and spacious kangaroo pocket. Perfect for casual
                            wear or training sessions, this hoodie offers both style and functionality.
                        </p>

                        <div className="inline-flex items-center" role="group" aria-labelledby="volume-control">
                            <span id="volume-control" className="sr-only">
                                Quantity control
                            </span>
                            <Button
                                className="rounded-full border-0 text-black hover:bg-orange-500 hover:text-white"
                                variant="outline"
                                size="icon"
                                aria-label="Decrease Quantity"
                                onClick={decreaseQuantity}
                            >
                                <Minus size={16} strokeWidth={2} aria-hidden="true" />
                            </Button>
                            <div className="flex items-center px-3 text-sm font-medium tabular-nums" aria-live="polite">
                                <span className="ms-2" aria-label={`Current quantity is ${quantity}`}>
                                    {quantity}
                                </span>
                            </div>
                            <Button
                                className="rounded-full border-0 text-black hover:bg-orange-500 hover:text-white"
                                variant="outline"
                                size="icon"
                                aria-label="Increase Quantity"
                                onClick={increaseQuantity}
                            >
                                <Plus size={16} strokeWidth={2} aria-hidden="true" />
                            </Button>
                        </div>

                        {/* Size Selector */}
                        <div>
                            <h3 className="text-sm font-medium mb-4">Select Size</h3>
                            <RadioGroup className="grid grid-cols-3 md:grid-cols-6 gap-2">
                                {items.map((item) => (
                                    <label
                                        key={`${id}-${item.value}`}
                                        className={cn(
                                            "relative flex border-white/10 hover:border-0 cursor-pointer flex-col items-center justify-center rounded-lg border   px-4 py-3 text-center transition-colors",
                                            "hover:bg-orange-500 hover:text-white",
                                            selectedSize === item.value ? "border-ring bg-orange-500 text-white" : "",
                                            item.disabled ? "opacity-50 cursor-not-allowed" : ""
                                        )}
                                    >
                                        <RadioGroupItem
                                            value={item.value}
                                            id={`${id}-${item.value}`}
                                            className="sr-only"
                                            disabled={item.disabled}
                                            onClick={() => setSelectedSize(item.value)}
                                        />
                                        <span className="text-sm font-medium">{item.label}</span>
                                    </label>
                                ))}
                            </RadioGroup>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col gap-4">
                            <Button size="lg" variant="secondary" className="w-full bg-black text-white border border-white/10 hover:bg-orange-500 hover:text-white">
                                Buy Now - $149.99
                            </Button>
                        </div>

                        {/* Collapsible Sections */}
                        <Accordion type="single" collapsible className="w-full" defaultValue="3">
                            {itemsAccordion.map((item) => (
                                <AccordionItem value={item.id} key={item.id} className="py-2">
                                    <AccordionPrimitive.Header className="flex">
                                        <AccordionPrimitive.Trigger className="flex flex-1 items-center justify-between py-2 text-left text-[15px] font-semibold leading-6 transition-all [&>svg>path:last-child]:origin-center [&>svg>path:last-child]:transition-all [&>svg>path:last-child]:duration-200 [&[data-state=open]>svg>path:last-child]:rotate-90 [&[data-state=open]>svg>path:last-child]:opacity-0 [&[data-state=open]>svg]:rotate-180">
                                            {item.title}
                                            <Plus
                                                size={16}
                                                strokeWidth={2}
                                                className="shrink-0 opacity-60 transition-transform duration-200"
                                                aria-hidden="true"
                                            />
                                        </AccordionPrimitive.Trigger>
                                    </AccordionPrimitive.Header>
                                    <AccordionContent className="pb-2 text-muted-foreground">
                                        {item.content}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>

                    </div>
                </div>
            </div>
        </main>
    )
}
