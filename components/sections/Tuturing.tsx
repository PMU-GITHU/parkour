"use client"
import React from 'react'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
export default function Tutoring() {
    return (
        <div className='flex flex-col items-center py-40 bg-black gap-y-8 text-white justify-center w-full min-h-screen'>
            <h1 className='text-6xl font-bold text-center uppercase'>
                Online Tutoring
            </h1>
            <motion.div
                // initial={{ width: "80vw", height: "80vh" }}
             
                transition={{
                    duration: 0.5,
                    ease: [0.32, 0.72, 0, 1],
                }}
                className={cn(
                    "group relative flex flex-col overflow-hidden aspect-video size-2/3 rounded-xl border border-white/10 shadow-md shadow-white/10",
                
                )}
            >
                <iframe
                    src="https://www.youtube.com/embed/izGwDsrQ1eQ"
                    width="100%"
                    height="100%"
                    className='aspect-video '
                    style={{ border: 'none' }}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    
                />
            </motion.div>
        </div>
    )
}
