'use client'
import React, { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Footer1 } from '@/components/sections/Footer'
import Navbar from '@/components/sections/Navbar'
import { ProgressiveBlur } from '@/components/ui/progressive-blur';
import People from '@/lib/data'
import Image from 'next/image'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { useRouter, useSearchParams } from 'next/navigation'

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
    const router = useRouter();
    const searchParams = useSearchParams();
    const athleteId = searchParams.get('id');
    const [selectedStunt, setSelectedStunt] = useState<typeof People[number] | null>(null);
    const { scrollY } = useScroll();
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    useEffect(() => {
        if (athleteId) {
            const selected = People.find(person => person.ID === parseInt(athleteId));
            setSelectedStunt(selected || null);
        }
    }, [athleteId]);

    const handleCardClick = (stunt: typeof People[number]) => {
        router.push(`?id=${stunt.ID}`, { scroll: false });
        setSelectedStunt(stunt);
    };

    const closeModal = () => {
        setSelectedStunt(null);
        router.push('?id=', { scroll: false });
    };

    return (
        <div className="min-h-screen relative text-black">
            <div className='bg-black/60'>
                <Navbar />
            </div>

            {/* Hero Section with Fixed Image */}
            <div className="h-screen relative  bg-black">
                <motion.div
                    className="fixed inset-0 z-0"
                    style={{ opacity }}
                >
                    <Image
                        src="/athletesBG.jpg"
                        alt="Athletes Background"
                        fill
                        className="object-cover"
                    />
                </motion.div>
                <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
                    <motion.h1
                        className="text-5xl md:text-7xl font-bold tracking-tighter text-white"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        Athletes Showcase
                    </motion.h1>
                    <motion.p
                        className="mt-4 text-lg md:text-xl text-gray-200 max-w-2xl"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Meet the talented athletes who make it all possible.
                    </motion.p>
                </div>
            </div>

            {/* Content Section */}
            <div className="relative z-10  pt-10">
                <div className="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
                {/* Stunts Grid */}
                <motion.div
                    className="container mx-auto px-4 pb-20 pt-20"
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                >
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
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
                                    height={500}
                                    width={500}
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
            </div>

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

            <Footer1 />
        </div>
    )
}
