import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { TextEffect } from '../ui/text-effect'
import Noise from '../ui/noise'


const navitems = [
    {
        name: 'Home',
        link: '/'
    },
    {
        name: 'About us',
        link: '/about'
    },
    {
        name: 'coaches',
        link: '/coaches'
    },
    {
        name: 'Athletes',
        link: '/athletes'
    },
    {
        name: "Stunts",
        link: "/stunts"
    },
    {
        name: 'Store',
        link: '/store'
    },
    {
        name: 'Locations',
        link: '/locations'
    }
]

export default function Navbar() {
    const [crossed, setCrossedState] = useState(false)

    return (
        <>
            <motion.div
                className='fixed text-2xl font-bold  text-white z-20 top-0 left-0 flex justify-around w-full p-4'
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <motion.h1
                    id='home'

                    className='text-4xl cursor-none uppercase font-bold text-white'
                    initial={{ opacity: 0, rotateX: 90, y: 10 }}
                    animate={{ opacity: 1, rotateX: 0, y: 0 }}
                    transition={{ duration: 0.2, delay: 0.5 }}
                >
                    Parkour <span className='text-orange-500'> MA</span>
                </motion.h1>

                <motion.button
                    id='navbar-button'
                    aria-expanded={crossed}
                    onClick={() => setCrossedState((e) => !e)}
                    className={
                        'flex aspect-square cursor-none z-50 h-fit select-none flex-col items-center justify-center rounded-full'
                    }
                    initial={{ opacity: 0, rotateX: 90, y: 10 }}
                    animate={{ opacity: 1, rotateX: 0, y: 0 }}
                    transition={{ duration: 0.2, delay: 0.7 }}
                >
                    <motion.div
                        style={{
                            width: '40px',
                            borderTop: '2px solid white',
                            transformOrigin: 'center'
                        }}
                        initial={{ translateY: '-3px' }}
                        animate={
                            crossed ? { rotate: '45deg', translateY: '1px' } : { translateY: '-3px', rotate: '0deg' }
                        }
                        transition={{ bounce: 0, duration: 0.1 }}
                    />
                    <motion.div
                        transition={{ bounce: 0, duration: 0.1 }}
                        style={{
                            width: '40px',
                            borderTop: '2px solid white',
                            transformOrigin: 'center'
                        }}
                        initial={{ translateY: '3px' }}
                        animate={
                            crossed
                                ? { rotate: '-45deg', translateY: '-1px' }
                                : { translateY: '3px', rotate: '0deg', scaleX: 1 }
                        }
                    />
                </motion.button>
            </motion.div>

            <AnimatePresence>
                {crossed && (
                    <motion.div
                        className="fixed inset-0 flex-col bg-black z-10 flex items-center justify-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <Noise
                            patternSize={250}
                            patternScaleX={1}
                            patternScaleY={1}
                            patternRefreshInterval={2}
                            patternAlpha={15}
                        />
                        {
                            navitems.map((item) => (
                                <motion.a
                                    id={`navitem-${item.name.toLowerCase().replace(' ', '-')}`}
                                    key={item.name}
                                    href={item.link}
                                    className="text-white cursor-none text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold uppercase hover:text-orange-500 duration-500 ease-in-out px-4 py-2 sm:px-6 sm:py-3"
                                >
                                    <TextEffect preset='fade-in-blur' speedReveal={1.1} speedSegment={0.3} >
                                        {item.name}
                                    </TextEffect>
                                </motion.a>
                            ))
                        }
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
