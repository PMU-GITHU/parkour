"use client"
import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import { TextEffect } from '../ui/text-effect'
import { useInView } from 'react-intersection-observer'

export default function AboutUS() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    return (
        <div
            className='w-full bg-black text-white text-4xl font-bold flex flex-col lg:flex-row h-auto lg:h-screen p-4 lg:p-8'
            ref={ref}
        >
            <motion.div
                className='w-full lg:w-1/2 flex items-start justify-start py-10 lg:py-40 px-4 lg:px-20'
            >
                <TextEffect 
                    preset='fade-in-blur' 
                    speedReveal={1.1} 
                    speedSegment={0.3} 
                    className='uppercase text-4xl md:text-6xl lg:text-9xl'
                    trigger={inView}
                >
                    About us
                </TextEffect>
            </motion.div>
            <motion.div
                className='w-full lg:w-1/2 flex items-center justify-center py-10 lg:py-40 px-4 lg:px-20'
            >
                <TextEffect 
                    preset='fade-in-blur' 
                    speedReveal={1.1} 
                    speedSegment={0.3}
                    className='text-lg md:text-2xl lg:text-4xl capitalize tracking-tighter font-normal max-w-full'
                    trigger={inView}
                >
                    {"Meet the athletes of Marrakech's thriving parkour and freerunning community. These talented individuals are at the forefront of the city's urban movement scene, combining agility, strength, and creativity to navigate the vibrant streets of Marrakech. From gravity-defying flips to seamless transitions over obstacles, they embody the spirit of exploration and innovation. Each athlete brings their unique style and expertise, contributing to a dynamic and ever-evolving community that continues to push the limits of what's possible. Together, they are redefining the landscape of urban sports in Marrakech."}
                </TextEffect>
            </motion.div>
        </div>
    )
}
