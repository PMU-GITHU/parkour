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
            id='about-us'
            className='w-full bg-black text-white flex flex-col lg:flex-row h-auto lg:h-screen p-4 lg:p-8'
            ref={ref}
        >
            <motion.div
                className='w-full lg:w-1/2 flex flex-col items-start justify-center py-10 lg:py-20 px-4 lg:px-20 gap-8'
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <TextEffect
                    preset='fade-in-blur'
                    speedReveal={1.1}
                    speedSegment={0.3}
                    className='uppercase text-2xl font-bold md:text-3xl lg:text-8xl'
                    trigger={inView}
                >
                    About us
                </TextEffect>
                <TextEffect
                    preset='fade-in-blur'
                    speedReveal={1.1}
                    speedSegment={0.3}
                    className='text-base md:text-lg lg:text-xl tracking-tighter font-normal max-w-full'
                    trigger={inView}
                >
                    {"Meet the athletes of Marrakech's thriving parkour and freerunning community. These talented individuals are at the forefront of the city's urban movement scene, combining agility, strength, and creativity to navigate the vibrant streets of Marrakech. From gravity-defying flips to seamless transitions over obstacles, they embody the spirit of exploration and innovation. Each athlete brings their unique style and expertise, contributing to a dynamic and ever-evolving community that continues to push the limits of what's possible. Together, they are redefining the landscape of urban sports in Marrakech."}
                </TextEffect>
            </motion.div>
            <motion.div
                className='w-full lg:w-1/2 flex items-center justify-center p-4 lg:p-20'
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
                <div className='aspect-square  w-full overflow-hidden rounded-xl'>
                    <img 
                        src="DSC07128.JPG" 
                        alt="Parkour athletes in Marrakech"
                        className='w-full h-full object-cover'
                    />
                </div>
            </motion.div>
        </div>
    )
}
