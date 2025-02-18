'use client'
import * as React from 'react'
import { Button } from '@/components/ui/button'
import People, { Person } from '@/lib/data'
import { Instagram, Facebook, Mail } from 'lucide-react'
import { motion } from 'framer-motion'
import { Skeleton } from '@/components/ui/skeleton'

export default function AthleteDetail({ params }: { params: Promise<{ id: string }> }) {
    const resolvedParams = React.use(params)
    const athlete = People.find((person) => person.ID === parseInt(resolvedParams.id))
    const [isLoading, setIsLoading] = React.useState(true)

    React.useEffect(() => {
        if (athlete) {
            setIsLoading(false)
        }
    }, [athlete])

    if (!athlete) {
        return <div className='min-h-screen bg-[#0e1011] text-white p-4 lg:p-0 flex items-center justify-center'>
            <h1 className='text-2xl'>Athlete not found</h1>
        </div>
    }

    return (
        <div className='min-h-screen bg-[#0e1011] text-white p-4 lg:p-0'>
            {/* Image Section */}
            <motion.div 
                className='lg:fixed lg:w-[50%] lg:left-1 lg:top-2 lg:h-[98%] w-full h-[300px] md:h-[400px] mb-4 lg:mb-0 rounded-xl overflow-hidden bg-white relative'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                {isLoading ? (
                    <Skeleton className="w-full h-full" />
                ) : (
                    <img
                        className='w-full h-full object-cover'
                        src={athlete.Picture || "/athletes/placeholder.png"}
                        alt="Athlete"
                    />
                )}
            </motion.div>

            {/* Content Section */}
            <motion.div 
                className='lg:absolute lg:w-[49%] lg:right-1 lg:top-2 lg:h-[98%] w-full space-y-4 rounded-xl overflow-y-auto'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                {/* Profile Section */}
                <div className='flex flex-col md:flex-row gap-4'>
                    <motion.div 
                        className='bg-[#2b2d2e] flex flex-col space-y-6 rounded-xl p-8 w-full md:w-[65%] lg:w-2/3'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 , ease: "easeInOut" , type: "spring" }}
                    >
                        <div className='flex items-center gap-6'>
                            {isLoading ? (
                                <Skeleton className="h-24 w-24 rounded-full md:h-32 md:w-32" />
                            ) : (
                                <img
                                    src={athlete.Picture || "/athletes/placeholder.png"}
                                    alt="Profile"
                                    className='h-24 w-24 aspect-square md:h-32 md:w-32 object-cover rounded-full'
                                />
                            )}
                            <div className='flex flex-col gap-2'>
                                {isLoading ? (
                                    <>
                                        <Skeleton className="h-8 w-48" />
                                        <Skeleton className="h-6 w-32" />
                                        <Skeleton className="h-6 w-32" />
                                    </>
                                ) : (
                                    <>
                                        <h1 className='text-2xl md:text-3xl font-bold'>
                                            {athlete.Name}
                                        </h1>
                                        <span className='text-lg md:text-xl text-gray-300'>
                                            {athlete.Age}
                                        </span>
                                        <span className='text-lg md:text-xl text-gray-300'>
                                            {athlete.Type}
                                        </span>
                                    </>
                                )}
                            </div>
                        </div>
                    </motion.div>

                    {/* Social Media Buttons */}
                    <motion.div 
                        className='flex flex-col gap-4 w-full md:w-[35%] lg:w-1/3'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        {isLoading ? (
                            <>
                                <Skeleton className="h-14 w-full md:h-16" />
                                <Skeleton className="h-14 w-full md:h-16" />
                                <Skeleton className="h-14 w-full md:h-16" />
                            </>
                        ) : (
                            <>
                                <Button className='h-14 md:h-16 w-full flex items-center justify-center gap-2 bg-[#2b2d2e] rounded-xl hover:bg-white hover:text-black text-base md:text-lg'>
                                    <Instagram size={20} />
                                    Instagram
                                </Button>
                                <Button className='h-14 md:h-16 w-full flex items-center justify-center gap-2 bg-[#2b2d2e] rounded-xl hover:bg-white hover:text-black text-base md:text-lg'>
                                    <Facebook size={20} />
                                    Facebook
                                </Button>
                                <Button className='h-14 md:h-16 w-full flex items-center justify-center gap-2 bg-[#2b2d2e] rounded-xl hover:bg-white hover:text-black text-base md:text-lg'>
                                    <Mail size={20} />
                                    Contact Me
                                </Button>
                            </>
                        )}
                    </motion.div>
                </div>

                {/* About Section */}
                <motion.div 
                    className='bg-[#2b2d2e] p-6 md:p-8 lg:p-14 space-y-4 rounded-xl'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    {isLoading ? (
                        <>
                            <Skeleton className="h-8 w-32" />
                            <Skeleton className="h-24 w-full" />
                        </>
                    ) : (
                        <>
                            <h1 className='text-xl md:text-2xl font-bold'>
                                About Me
                            </h1>
                            <p className='text-base md:text-lg'>
                                {athlete.Description}
                            </p>
                        </>
                    )}
                </motion.div>

                {/* Videos Section */}
                <motion.div 
                    className='bg-[#2b2d2e] w-full h-64 md:h-[350px] lg:h-[400px] rounded-xl flex items-center justify-center'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                >
                    {isLoading ? (
                        <Skeleton className="w-full h-full" />
                    ) : (
                        <span>Videos</span>
                    )}
                </motion.div>
            </motion.div>
        </div>
    )
}
