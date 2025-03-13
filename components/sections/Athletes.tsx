"use client"
import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { TextEffect } from '../ui/text-effect'
import { useInView } from 'react-intersection-observer'
import {
    Carousel,
    CarouselApi,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from '@/lib/utils'
import combinedArray from '@/lib/data'
import { Button } from '../ui/button'
import Link from 'next/link'
import Image from 'next/image'
import People from '@/lib/data'
import { useRouter } from 'next/navigation'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'

export function Athletes() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1
    });
    const [api, setApi] = useState<CarouselApi>();
    const router = useRouter();
    const [selectedStunt, setSelectedStunt] = useState<typeof People[number] | null>(null);

    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const handleCardClick = (stunt: typeof People[number]) => {
        router.push(`?id=${stunt.ID}`, { scroll: false });
        setSelectedStunt(stunt);
    };

    const closeModal = () => {
        setSelectedStunt(null);
        router.push('?id=', { scroll: false });
    };

    return (
        <div
            className='w-full bg- black text-white text-4xl font-bold items-start gap-y-5 justify-center flex flex-col h-screen relative p-4 md:p-8'
            ref={ref}
        >
            <motion.div
                id='athletes'
                className='flex items-center  justify-between w-full mx-auto px-4 md:px-20'>
                <TextEffect
                    preset='fade-in-blur'
                    speedReveal={1.1}
                    speedSegment={0.3}
                    className='uppercase text-4xl md:text-6xl lg:text-8xl text-start'
                    trigger={inView}
                >
                    Athletes
                </TextEffect>
                <Button
                    className='bg-black hover:bg-white border-xl hover:text-black text-xl text-start'
                    asChild
                >
                    <Link href="/Athletes">View All</Link>
                </Button>
            </motion.div>

            <motion.div className='flex flex-col items-center overflow-hidden justify-center px-4 md:px-20 w-full max-w-screen relative'>
                {/* Gradient overlays */}
                <div className="absolute inset-y-0 left-0 xl:left-5 w-1/3 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 xl:right-5 w-1/3 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

                <Carousel
                    setApi={setApi}
                    className="h-full w-[90vw] flex flex-col items-center justify-center"
                    opts={{
                        align: "center",
                        containScroll: "keepSnaps",
                        slidesToScroll: 1,
                        inViewThreshold: 0.5,
                        loop: true,
                    }}
                >
                    {/* Buttons positioned absolutely on top of gradients */}
                    <div className="absolute top-1/2 -translate-y-1/2 left-14 lg:left-16 xl:left-4 z-20">
                        <CarouselPrevious className='bg-black hover:text-black hover:bg-white w-12 h-12' />
                    </div>
                    <div className="absolute top-1/2 -translate-y-1/2 right-14 lg:right-16 xl:right-4 z-20">
                        <CarouselNext className='bg-black hover:text-black hover:bg-white w-12 h-12' />
                    </div>

                    <CarouselContent className="h-full w-full">
                        {combinedArray.map((image, index) => (
                            <CarouselItem
                                className="h-[200px] basis-[50vw] cursor-pointer sm:h-[250px] sm:basis-[30vw] md:h-[300px] md:basis-[25vw] lg:basis-[20vw]"
                                key={index}
                                id='athletes'
                                onMouseEnter={() => {
                                    setHoveredIndex(index);
                                }}
                                onClick={() => handleCardClick(image)}


                                onMouseLeave={() => setHoveredIndex(null)}
                            >

                                <motion.div
                                    className="w-full h-full flex items-center justify-center relative"
                                >
                                    <Image
                                        src={image.Picture || "/AthletesPic/placeholder.png"}
                                        alt="Athlete"
                                        className={cn(
                                            "rounded-xl w-full h-full object-cover",
                                            hoveredIndex === index ? "brightness-50" : "brightness-100"
                                        )}
                                        height={300}
                                        width={300}
                                    />
                                    <AnimatePresence>
                                        <motion.div
                                            className="absolute inset-0 flex items-center justify-center"
                                            initial={{ opacity: 0, y: -50 }}
                                            animate={hoveredIndex === index ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
                                            exit={{ opacity: 0, y: -50 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <h2 className="text-2xl md:text-3xl font-bold text-white text-center">
                                                {image.Name}
                                            </h2>
                                        </motion.div>
                                    </AnimatePresence>
                                </motion.div>

                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>

                <Dialog open={!!selectedStunt} onOpenChange={closeModal}>
                <DialogContent className="max-w-[1200px] w-[90vw] bg-white/5  backdrop-blur-md border-none">
                    <div className="grid grid-cols-[500px_1fr] gap-12 p-8">
                        {selectedStunt?.Picture && (
                            <div className="relative aspect-square">
                                <Image
                                    src={selectedStunt.Picture}
                                    alt={selectedStunt.Name}
                                    fill
                                    className="rounded-lg object-cover"
                                />
                            </div>
                        )}
                        <div className="flex flex-col">
                            <DialogHeader>
                                <DialogTitle className="text-4xl font-bold mb-6 text-white">
                                    {selectedStunt?.Name}
                                </DialogTitle>
                            </DialogHeader>
                            <div className="space-y-6">
                                <p className="text-gray-200 text-xl leading-relaxed">
                                    {selectedStunt?.Description}
                                </p>
                                <div className="grid grid-cols-2 gap-6">
                                    <div>
                                        <p className="text-lg text-gray-400">Age</p>
                                        <p className="font-medium text-white text-xl">{selectedStunt?.Age}</p>
                                    </div>
                                    <div>
                                        <p className="text-lg text-gray-400">Type</p>
                                        <p className="font-medium text-white text-xl capitalize">{selectedStunt?.Type}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
            </motion.div>
        </div>
    )
}
