'use client'
import React, { useState, useEffect } from 'react'
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion'
import { Footer1 } from '@/components/sections/Footer'
import Navbar from '@/components/sections/Navbar'
import People from '@/lib/data'
import { useSearchParams } from 'next/navigation'
import { Badge } from "@/components/ui/badge"
import HoverExpand from '@/components/ui/hover-expand'
import { StuntsAthletes } from '@/components/sections/StuntsAthletes'

const YoutubeVideos = [
    {
        title: "Parkour Basics: Rolls and Landings",
        embedUrl: "https://www.youtube.com/embed/WXsXWrW1h9c",
        description: "Learn the fundamental techniques of parkour rolls and safe landings"
    },
    {
        title: "Precision Jumps Tutorial",
        embedUrl: "https://www.youtube.com/embed/NlQcok4O59A",
        description: "Improve your accuracy with precision jumps in parkour"
    },
    {
        title: "Wall Running Techniques",
        embedUrl: "https://www.youtube.com/embed/L0bO74dGfJk",
        description: "Master the art of wall running with proper form and technique"
    },
]

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
    hidden: { opacity: 0, y: 20, filter: 'blur(4px)' },
    show: {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        transition: {
            type: 'spring',
            stiffness: 100,
            damping: 20
        }
    }
}

export default function StuntsPage() {
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

    return (
        <div className="min-h-screen relative text-black">
            <div className='bg-black/60'>
                <Navbar />
            </div>

            {/* Hero Section with Fixed Image */}
            <div className="h-screen relative bg-black">
                <motion.div
                    className="fixed inset-0 z-0"
                    style={{ opacity }}
                >
                    <img
                        src="/stunt.jpg"
                        alt="Athletes Background"
                        className="object-cover w-full h-full filter brightness-50"
                    />
                </motion.div>
                <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
                    <motion.h1
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        Stunts Showcase
                    </motion.h1>
                    <motion.p
                        className="mt极4 text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl px-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        From rooftops to the big screen, our stunts athletes are the best in the business.
                    </motion.p>
                </div>
            </div>

            <div className='h-1/3 absolute -z-10 w-full bg-black' />
            <div className='container z-30 mx-auto flex flex-col items-center justify-start gap-6 sm:gap-8 md:gap-10 py极6 sm:py-8 md:py-10 px-4 sm:px-6'>
                <div className='w-full items-center justify-center flex flex-col leading-6 sm:leading-8'>
                    <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold text-white text-center py-6 sm:py-8 md:py-10'>
                        Featured Projects
                    </h1>
                    <h3 className='text-base sm:text-lg text-gray-200 max-w-2xl text-center px-4'>
                        The projects below showcase the incredible talent and dedication of our athletes.
                    </h3>
                </div>

                <div className="h-full mx-auto flex w-full flex-col items-center justify-center rounded-lg sm:rounded-xl md:rounded-2xl">
                    <HoverExpand
                        images={images}
                        initialSelectedIndex={0}
                        thumbnailHeight={300}
                        modalImageSize={600}
                        maxThumbnails={10}
                    />
                </div>
            </div>

            <StuntsAthletes />
            <div id="tutoring" className="w-full py-20 lg:py-40 text-white bg-black">
                <div className="container mx-auto">
                    <div className="flex flex-col gap-10">
                        <div className="flex gap-4 flex-col mx-auto items-center justify-center">

                            <div className="flex gap-4 flex-col mx-auto items-center justify-center">
                                <div>
                                    <Badge className='bg-orange-500 hover:bg-orange-900'>Cast</Badge>
                                </div>
                                <div className="flex gap-2 flex-col items-center justify-center">
                                    <h2 className="text-3xl text-white md:text-5xl tracking-tighter max-w-xl font-regular text-left">
                                        Our Athletes in Action
                                    </h2>
                                    <p className="text-lg max-w-xl  lg:max-w-lg leading-relaxed tracking-tight text-muted-foreground text-center">
                                        we have also contributed to the following projects                                    </p>
                                </div>
                            </div>
                        </div>
                        <motion.div
                            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                            variants={container}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                        >
                            {YoutubeVideos.map((video, index) => (
                                <motion.div
                                    key={index}
                                    className="flex flex-col gap-2"
                                    variants={item}
                                >
                                    <iframe
                                        className='rounded-md aspect-video mb-2'
                                        src={video.embedUrl}
                                        title={video.title}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    />
                                    <h3 className="text-xl tracking-tight">{video.title}</h3>
                                    <p className="text-muted-foreground text-base">
                                        {video.description}
                                    </p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
            <Footer1 />
        </div>
    )
}
const images = [
    "/movies/7.jpg",
    "/movies/1.jpg",
    "/movies/2.jpg",
    "/movies/3.jpg",
    "/movies/4.jpg",
    "/movies/5.jpg",
    "/movies/6.jpg",
    "/movies/8.jpg",
    "/movies/9.jpg",
    "/movies/godzilla.jpg",
]