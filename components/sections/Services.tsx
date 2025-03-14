"use client"
import React, { useState } from 'react'
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { Badge } from "@/components/ui/badge";
import { ProgressiveBlur } from '@/components/motion-primitives/progressive-blur';
import { motion } from 'framer-motion';
import { CheckIcon, XIcon } from 'lucide-react';
import { Dialog, DialogContent, DialogTitle } from '../ui/dialog';



const data = [
    {
        title: "Personal Training & Coaching",
        Description: "Our certified personal trainers provide customized parkour and freerunning coaching for all levels, from beginners to advanced athletes.",
        badge: "Training",
        image: "/services/pr.JPG",
        items: [
            "One-on-one private sessions for personalized skill development",
            "Group classes and workshops for a fun and engaging learning experience",
            "Strength and conditioning programs designed for injury prevention",
            "Specialized coaching for stunt training to prepare athletes for performance",
        ]
    },
    {
        title: "Professional Cast for Media Productions",
        Description: "We provide highly skilled parkour and freerunning athletes to elevate your media projects, bringing dynamic movement and authenticity.",
        badge: "Media",
        image: "/services/cast-min.jpg",
        items: [
            "Music videos – Bringing dynamic movement and acrobatics to create visually stunning scenes",
            "Commercials & advertisements – Enhancing brand storytelling with thrilling urban action",
            "Content creation & social media campaigns – Engaging audiences with creative movement",
            "Live performances & entertainment shows – Delivering high-energy action",
        ]
    },
    {
        title: "Stunt Performers & Action Doubles",
        Description: "Our elite stunt team specializes in executing high-risk falls, complex movements, and action sequences to ensure cinematic realism.",
        badge: "Stunts",
        image: "/services/stunts-min.jpg",
        items: [
            "Professional stunt doubles who can replicate your main character's movements",
            "High-risk falls, roof jumps, and impact stunts performed by experienced athletes",
            "Parkour chase sequences & fight choreography tailored to film and TV production",
            "Expert stunt coordination to ensure every movement is executed with precision",
        ]
    },
    {
        title: "Live Parkour & Acrobatic Performances",
        Description: "Experience the thrill of high-energy parkour shows with our professional athletes delivering jaw-dropping performances for audiences.",
        badge: "Live Shows",
        image: "/services/live-min.jpg",
        items: [
            "Corporate events & brand activations – Engaging audiences with spectacular movement",
            "Festivals & public shows – Captivating crowds with adrenaline-fueled performances",
            "Private events & parties – Bringing excitement and action to exclusive gatherings",
            "Sports & entertainment showcases – Demonstrating elite parkour skills",
        ]
    },
]
export default function Services() {
    const [selectedService, setSelectedService] = useState<typeof data[number] | null>(null);

    const handleCardClick = (service: typeof data[number]) => {
        setSelectedService(service);
    };

    const closeModal = () => {
        setSelectedService(null);
    };

    return (
        <div className="w-full px-6 lg:px-0 py-20 lg:py-40">
            <div className="container mx-auto">
                <div className="flex flex-col gap-10">
                    <div className="flex gap-4 flex-col items-center justify-center">
                        <Badge className='bg-orange-500 cursor-pointer z-30 hover:bg-white text-white hover:text-orange-500'>Platform</Badge>
                        <div className="flex gap-2 flex-col items-center justify-center">
                            <h2 className="text-3xl md:text-5xl text-white tracking-tighter max-w-xl font-regular text-left">
                                Our Services
                            </h2>
                            <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-muted text-center">
                                {" At Parkour Marrakech Community (PMC), we offer a range of professional services tailored for individuals, brands, and media productions."}
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {data.map((service, index) => (
                            <div
                                key={index}
                                className={`relative overflow-hidden rounded-xl border border-gray-500/40 ${
                                    index === 0 || index === 3 ? 
                                    'h-[400px] lg:col-span-2' : 
                                    'h-[400px]'
                                } p-6 flex justify-between flex-col cursor-pointer`}
                                onClick={() => handleCardClick(service)}
                            >
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className='absolute inset-0 object-cover size-full'
                                />
                                <ProgressiveBlur
                                    className='pointer-events-none absolute bottom-0 left-0 h-[75%] bg-gradient-to-t from-black/70 to-transparent w-full'
                                    blurIntensity={0.5}
                                    animate={'visible'}
                                    variants={{
                                        hidden: { opacity: 0 },
                                        visible: { opacity: 1 },
                                    }}
                                    transition={{ duration: 0.2, ease: 'easeOut' }}
                                />
                                <motion.div
                                    className='absolute bottom-0 left-0'
                                    animate={'visible'}
                                    variants={{
                                        hidden: { opacity: 0 },
                                        visible: { opacity: 1 },
                                    }}
                                    transition={{ duration: 0.2, ease: 'easeOut' }}
                                >
                                    <div className='flex flex-col items-start gap-0 px-5 py-4'>
                                        <p className='text-base font-medium text-white'>
                                            {service.title}
                                        </p>
                                        <span className='text-base text-zinc-300'>
                                            {service.Description}
                                        </span>
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <Dialog open={!!selectedService} onOpenChange={closeModal}>
                <DialogContent className="max-w-[1200px] w-[90vw] bg-transparent border-none">
                    <VisuallyHidden>
                        <DialogTitle>{selectedService?.title}</DialogTitle>
                    </VisuallyHidden>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-50"
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
                            className="fixed inset-0 flex items-center justify-center p-4"
                        >
                            <motion.div className="max-w-[1200px] w-[90vw] bg-white/5 backdrop-blur-xl rounded-xl p-8 relative flex flex-col md:flex-row gap-8">
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={closeModal}
                                    className="absolute top-4 right-4 p-2 text-white hover:bg-white/10 rounded-full"
                                >
                                    <VisuallyHidden>Close modal</VisuallyHidden>
                                    <XIcon className="w-6 h-6" />
                                </motion.button>

                                <motion.img
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.1 }}
                                    src={selectedService?.image}
                                    alt={selectedService?.title}
                                    className="w-full md:w-1/2 h-auto aspect-square object-cover rounded-lg"
                                />

                                <motion.div
                                    className="w-full md:w-1/2"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2 }}
                                >
                                    <motion.h2
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3 }}
                                        className="text-2xl md:text-3xl font-bold text-white mb-4"
                                    >
                                        {selectedService?.title}
                                    </motion.h2>
                                    <motion.p
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.4 }}
                                        className="text-base md:text-lg text-zinc-300 mb-6"
                                    >
                                        {selectedService?.Description}
                                    </motion.p>
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.5 }}
                                        className="grid grid-cols-1 gap-4"
                                    >
                                        {selectedService?.items.map((item, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.6 + i * 0.1 }}
                                                className="flex items-start gap-2"
                                            >
                                                <CheckIcon className="w-5 h-5 text-white mt-1 flex-shrink-0" />
                                                <p className="text-sm md:text-base text-zinc-300">{item}</p>
                                            </motion.div>
                                        ))}
                                    </motion.div>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </DialogContent>
            </Dialog>
        </div>
    );
}