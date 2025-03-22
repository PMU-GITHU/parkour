"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { Badge } from "@/components/ui/badge";

const YoutubeVideos = [
    {
        title: "Parkour warm-ups",
        embedUrl: "https://www.youtube.com/embed/FD1rXJkWxss?si=jezm8ZvbwvZPWlri",
        description: "Learn how to properly warm up before a parkour session"
    },
    {
        title: "Parkour basics",
        embedUrl: "https://www.youtube.com/embed/8KPHD0dy2Aw",
        description: "Master the basic parkour techniques"
    }
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

export default function Tutoring() {
    return (
        <div id="tutoring" className="w-full py-20 lg:py-40 text-white bg-black">
            <div className="container mx-auto">
                <div className="flex flex-col gap-10">
                    <div className="flex gap-4 flex-col mx-auto items-center justify-center">
                        <div>
                            <Badge className='bg-orange-500 hover:bg-orange-900'>Parkour Tutorials</Badge>
                        </div>
                        <div className="flex gap-2 flex-col items-center justify-center">
                            <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular text-left">
                                Master Your Moves
                            </h2>
                            <p className="text-lg max-w-xl  lg:max-w-lg leading-relaxed tracking-tight text-muted-foreground text-center">
                                Learn essential parkour techniques from our experienced athletes
                            </p>
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
    )
}
