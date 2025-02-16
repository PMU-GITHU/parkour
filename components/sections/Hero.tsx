"use client";
import { TextEffect } from '@/components/ui/text-effect';
import React from 'react'
import Navbar from './Navbar';

export default function Hero() {
    return (
        <div className='h-screen w-full relative  '>
            <Navbar />
            <img src="/athletes/AAZ.jpg"
                loading='eager'
                alt="" className='size-full object-cover' />
            <div className="absolute inset-0 from-black via-transparent bg-gradient-to-t to-transparent"></div>
            <div className='absolute w-full inset-0 flex flex-col justify-end pb-20 md:pb-40 px-4 md:px-8 lg:px-24 xl:px-[24rem] items-start text-white text-2xl md:text-4xl font-bold'>
                <TextEffect
                    per='char'
                    delay={0.5}
                    className='text-4xl md:text-5xl lg:text-6xl xl:text-7xl uppercase tracking-widest'
                    variants={{
                        container: {
                            hidden: {
                                opacity: 0,
                            },
                            visible: {
                                opacity: 1,
                                transition: {
                                    staggerChildren: 0.05,
                                },
                            },
                        },
                        item: {
                            hidden: {
                                opacity: 0,
                                rotateX: 90,
                                y: 10,
                            },
                            visible: {
                                opacity: 1,
                                rotateX: 0,
                                y: 0,
                                transition: {
                                    duration: 0.2,
                                },
                            },
                        },
                    }}
                >
                    The new era of Parkour
                </TextEffect>
                <TextEffect
                    per='char'
                    className='uppercase tracking-widest text-xl md:text-2xl lg:text-3xl'
                    delay={1.5}
                >
                    Marrakesh 2025
                </TextEffect>
                <TextEffect
                    per='char'
                    delay={2.5}
                    className='pt-6 md:pt-12 text-xs md:text-sm'
                    preset='blur'
                >
                    A new way to see the world
                </TextEffect>
            </div>
        </div>
    )
}
