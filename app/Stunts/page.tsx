'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { Footer1 } from '@/components/sections/Footer'
import Navbar from '@/components/sections/Navbar'

const stunts = [
    {
        title: "Wall Flip",
        videoUrl: "https://www.youtube.com/embed/example1",
        description: "Master the art of flipping off walls"
    },
    {
        title: "Precision Jump",
        videoUrl: "https://www.youtube.com/embed/example2",
        description: "Land precisely on narrow surfaces"
    },
    {
        title: "Kong Vault",
        videoUrl: "https://www.youtube.com/embed/example3",
        description: "Efficiently vault over obstacles"
    },
    {
        title: "Cat Leap",
        videoUrl: "https://www.youtube.com/embed/example4",
        description: "Grab and pull yourself onto ledges"
    },
    {
        title: "Rolling",
        videoUrl: "https://www.youtube.com/embed/example5",
        description: "Safely absorb impact from jumps"
    },
    {
        title: "Tic Tac",
        videoUrl: "https://www.youtube.com/embed/example6",
        description: "Use walls to change direction mid-air"
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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {stunts.map((stunt, index) => (
                        <motion.div
                            key={index}
                            className="bg-[#1a1a1a] rounded-xl overflow-hidden border border-white/10"
                            variants={item}
                        >
                            <div className="aspect-video">
                                <iframe
                                    className="w-full h-full"
                                    src={stunt.videoUrl}
                                    title={stunt.title}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2">{stunt.title}</h3>
                                <p className="text-gray-300">{stunt.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            <Footer1 />
        </div>
    )
}
