import React, { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { TextEffect } from '../ui/text-effect'
import Noise from '../ui/noise'
import Link from 'next/link'

const navitems = [
    {
        name: 'Home',
        link: '/'
    },
    {
        name: 'About us',
        link: '/#about-us'
    },
    {
        name: 'coaches',
        link: '/#coaches'
    },
    {
        name: 'Athletes',
        link: '/Athletes'
    },
    {
        name: "Stunts",
        link: "/Stunts"
    },
    {
        name: 'Store',
        link: '/Store',
        disabled: true
    },
    {
        name: 'Locations',
        link: '/#locations'
    }
]

export default function Navbar() {
    const [crossed, setCrossedState] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > window.innerHeight) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])
    const handleLinkClick = (e: React.MouseEvent, link: string) => {
        e.preventDefault()
        setCrossedState(false)

        if (link.startsWith('/#')) {
            // Check if we're on the homepage
            if (window.location.pathname === '/') {
                const targetId = link.split('#')[1]
                const targetElement = document.getElementById(targetId)
                if (targetElement) {
                    setTimeout(() => {
                        targetElement.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        })
                    }, 200) // Delay to allow menu to close first
                }
            } else {
                // If not on homepage, redirect to homepage with hash
                window.location.href = `/${link.replace(/^\//, '')}`
            }
        } else {
            window.location.href = link
        }
    }

    return (
        <>
            <motion.div
                className={`fixed text-2xl font-bold text-white z-[60] top-0 left-0 flex justify-around w-full p-4 transition-all duration-300 ${isScrolled && !crossed ? 'backdrop-blur-lg bg-black/50' : 'bg-transparent'
                    }`}
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <Link href="/">
                    <img src="PFM02.svg" alt="" className='w-20 h-20 scale-150 object-cover   ' />
                </Link>
                <motion.div className="flex items-center gap-4">
                    <motion.span
                        className="text-white text-sm uppercase"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.2, delay: 0.7 }}
                    >
                        Menu
                    </motion.span>
                    <motion.button
                        aria-expanded={crossed}
                        onClick={() => setCrossedState((e) => !e)}
                        className={
                            'flex aspect-square z-50 h-fit select-none flex-col items-center justify-center rounded-full'
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
            </motion.div>

            <AnimatePresence>
                {crossed && (
                    <motion.div
                        className="fixed inset-0 flex-col bg-black z-50 flex items-center justify-center"
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

                                    className={`text-white text-4xl [@media(max-height:800px)]:text-5xl sm:text-5xl md:text-6xl   lg:text-7xl xl:text-8xl font-bold uppercase hover:text-orange-500 duration-500 ease-in-out px-4 py-2 sm:px-6 sm:py-3
                                         flex items-end justify-center gap-2
                                        `}
                                    onClick={(e) => handleLinkClick(e, item.link)}
                                >
                                    <TextEffect preset='fade-in-blur' speedReveal={1.1} className={`
                                         ${item.disabled ? 'text-gray-400 italic' : ''}
                                        `} speedSegment={0.3} >
                                        {item.name}
                                    </TextEffect>
                                    {
                                        item.disabled && (
                                            <TextEffect preset='fade-in-blur' speedReveal={1.1} className='text-red-500 text-sm italic'> (Coming Soon)</TextEffect>
                                        )
                                    }
                                </motion.a>
                            ))
                        }
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
