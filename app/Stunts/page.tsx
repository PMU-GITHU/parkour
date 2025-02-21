'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Footer1 } from '@/components/sections/Footer'
import Navbar from '@/components/sections/Navbar'
import { ProgressiveBlur } from '@/components/ui/progressive-blur';
import People from '@/lib/data'
import Image from 'next/image'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
 
const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
}

const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            type: 'spring',
            stiffness: 100,
            damping: 20
        }
    }
}

export default function StuntsPage() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [selectedStunt, setSelectedStunt] = useState<typeof People[number] | null>(null);

    const handleCardClick = (stunt: typeof People[number]) => {
        setSelectedStunt(stunt);
    };

    const closeModal = () => {
        setSelectedStunt(null);
    };

    return (
        <div className="min-h-screen bg-black text-white">
            <Navbar />
            {/* Hero Section */}
            <div className="h-[60vh] flex flex-col items-center justify-center text-center px-4">
                <motion.h1
                    className="text-5xl md:text-7xl font-bold tracking-tighter"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    Stunt Showcase
                </motion.h1>
                <motion.p
                    className="mt-4 text-lg md:text-xl text-gray-300 max-w-2xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    Explore our collection of parkour stunts and techniques. Learn from the best and take your skills to the next level.
                </motion.p>
            </div>

            {/* Stunts Grid */}
            <motion.div
                className="container mx-auto px-4 pb-20"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
            >
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {People.map((stunt, index) => (
                        <motion.div
                            key={index}
                            className='relative cursor-pointer aspect-square overflow-hidden rounded-xl'
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            onClick={() => handleCardClick(stunt)}
                            variants={item}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                        >
                            <Image
                                height={900}
                                width={900}
                                src={stunt.Picture || "/athletes/placeholder.png"}
                                alt={stunt.Name}
                                className='absolute inset-0 w-full h-full object-cover'
                            />
                            <ProgressiveBlur
                                className='pointer-events-none absolute bottom-0 left-0 h-[75%] w-full'
                                blurIntensity={0.5}
                                animate={hoveredIndex === index ? 'visible' : 'hidden'}
                                variants={{
                                    hidden: { opacity: 0 },
                                    visible: { opacity: 1 },
                                }}
                                transition={{ duration: 0.2, ease: 'easeOut' }}
                            />
                            <motion.div
                                className='absolute bottom-0 left-0'
                                animate={hoveredIndex === index ? 'visible' : 'hidden'}
                                variants={{
                                    hidden: { opacity: 0 },
                                    visible: { opacity: 1 },
                                }}
                                transition={{ duration: 0.2, ease: 'easeOut' }}
                            >
                                <div className='flex flex-col items-start gap-0 px-5 py-4'>
                                    <p className='text-xl capitalize font-medium text-white'>{stunt.Name}</p>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Stunt Details Modal */}
            <Dialog open={!!selectedStunt} onOpenChange={closeModal}>
                <DialogContent className="sm:max-w-[425px] bg-black text-white border border-gray-800">
                    <DialogHeader>
                        <DialogTitle className="text-2xl">{selectedStunt?.Name}</DialogTitle>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        {selectedStunt?.Picture && (
                            <div className="relative aspect-square w-full">
                                <Image
                                    src={selectedStunt.Picture}
                                    alt={selectedStunt.Name}
                                    fill
                                    className="rounded-lg object-cover"
                                />
                            </div>
                        )}
                        <div className="space-y-2">
                            <p className="text-gray-300">{selectedStunt?.Description}</p>
                            <div className="grid grid-cols-2 gap-2">
                                <div>
                                    <p className="text-sm text-gray-400">Age</p>
                                    <p className="font-medium">{selectedStunt?.Age}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400">Type</p>
                                    <p className="font-medium capitalize">{selectedStunt?.Type}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>

            <Footer1 />
        </div>
    )
}
