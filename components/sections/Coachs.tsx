"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { TextEffect } from '../ui/text-effect'
import { useInView } from 'react-intersection-observer'
import { cn } from '@/lib/utils'
import { Badge } from "@/components/ui/badge";
import People, { Person } from '@/lib/data'
export function CoachesPage() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    return (
        <div
            id='coaches'

            className='w-full bg- black text-white text-4xl font-bold items-start justify-center flex flex-col min-h-screen relative p-4 md:p-8'
            ref={ref}
        >

            <motion.div
                className='flex items-center justify-center mx-auto px-4 md:px-40'>
                <TextEffect
                    preset='fade-in-blur'
                    speedReveal={1.1}
                    speedSegment={0.3}
                    className='uppercase text-4xl md:text-6xl lg:text-9xl'
                    trigger={inView}
                >
                    Coaches
                </TextEffect>
            </motion.div> 

                <div className="w-full flex-1">
                    {People.filter((e) => e.Type === "Coach").map((coach, index) => (
                        <CoacheComponent coach={coach} key={coach.ID} position={index === 1 ? "left" : "right"} />
                    ))}
                </div>
 
        </div>
    )
}

const CoacheComponent = ({ coach, position }: {
    coach: Person,
    position: 'left' | 'right'
}) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2
    });

    return (
        <motion.div
            className="w-full py-6 lg:py-12 z-40"
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <div className="container mx-auto">
                <div className={cn('flex flex-col lg:flex-row items-center justify-center gap-4', position === 'right' && 'lg:flex-row-reverse')}>
                    <motion.div
                        className="bg-muted rounded-md overflow-hidden lg:w-1/3 aspect-square order-first lg:order-none"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                    >
                        <img
                            src={coach.Picture || "/athletes/placeholder.png"}
                            alt={coach.Name}
                            className='object-cover object-center w-full h-full'
                        />
                    </motion.div>
                    <div className="flex gap-2 flex-col justify-center">
                        <div>
                            <Badge className='bg-orange-900'>Coach</Badge>
                        </div>
                        <div className="flex gap-1 flex-col w-full">
                            <h2 className="text-xl w-full md:text-4xl tracking-tighter lg:max-w-xl font-regular text-left">
                                {coach.Name}
                            </h2>
                            {coach.Description && (
                                <div className="flex flex-col gap-1">
                                    <p className={cn(
                                        "text-lg max-w-xl lg:max-w-xl leading-relaxed tracking-tight text-muted-foreground text-left transition-all"
                                    )}>
                                        {coach.Description || "No description"}
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
} 
