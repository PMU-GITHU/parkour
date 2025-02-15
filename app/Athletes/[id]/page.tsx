import { Button } from '@/components/ui/button'
import { Instagram } from 'lucide-react'
import React from 'react'

export default function page() {
    return (
        <div className='h-screen w-screen bg-[#0e1011] relative text-white'>
            <div className='fixed rounded-xl  w-[50%] top-2 left-1 overflow-hidden h-[98%] bg-white'>
                <img
                    className='w-full h-full object-cover  '
                    src="/athletes\DSC06810.JPG" alt="" />
                <svg width="212" height="101" viewBox="6 0 335 70" className='absolute -z-0 -bottom-1 -right-1 hidden lg:flex' xmlns="http://www.w3.org/2000/svg">
                    <path d="M65.5 82C65.5 58.804 84.304 40 107.5 40H338.5V124H65.5V82V82Z" fill="#0a0a0a" />
                    <path d="M0.668832 124.956C25.6775 123.331 54.7763 117.711 63.1222 94.0799C64.1256 91.2387 64.822 88.2173 65.0866 85.0311C67 62 66 123.994 66 123.994L0 125L0.668832 124.956Z" fill="#0a0a0a" />
                    <path d="M300.176 40C319.991 40 336.395 25.0862 336.796 5.2752V5.2752C337.254 -17.3233 336.796 40 336.796 40H288H300.176Z" fill="#0a0a0a" />
                </svg>
                <div className='absolute text-white bottom-2 right-3   text-lg z-40  justify-center items-center pr-2 gap-x-2 pt-2 hidden lg:flex'>
                    Anas Ait Zouinet
                </div>
            </div>
            <div className='absolute rounded-xl overflow-y-auto flex flex-col gap-y-2 items-start justify-start  w-[49%] h-[98%] right-1 top-2    '>
                <div className=' rounded-xl h-1/4 w-full flex gap-x-2'>
                    <div className='bg-[#2b2d2e]  flex-col space-y-2 font-semibold flex rounded-xl w-2/3 h-full py-8 px-10'>
                        <div className='flex justify-start items-center gap-x-2'>
                            <img src="/athletes\DSC06810.JPG" alt="" className='h-20 w-20 object-cover rounded-full' />
                            <div>
                                <h1 className='text-2xl font-bold'>
                                    Anas Ait Zouinet
                                </h1>
                                <span className='text-lg text-gray-300'>
                                    Athlete
                                </span>
                            </div>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.
                        </p>
                    </div>
                    <div className='flex flex-col items-center justify-center gap-y-2  rounded-xl w-1/3 h-full'>
                        <Button className='h-1/3 w-full flex-row-reverse bg-[#2b2d2e] items-center rounded-xl flex justify-around hover:bg-white hover:text-black  text-xl'>
                            <Instagram size={24} />
                            Instagram
                        </Button>

                        <Button className='h-1/3 w-full flex-row-reverse bg-[#2b2d2e] items-center rounded-xl flex justify-around hover:bg-white hover:text-black  text-xl'>
                            <Instagram size={24} />
                             Facebook
                        </Button>
                        <Button className='h-1/3 w-full flex-row-reverse bg-[#2b2d2e] items-center rounded-xl flex justify-around hover:bg-white hover:text-black  text-xl'>
                            <Instagram size={24} />
                            Contact Me
                        </Button>
                    </div>
                </div>
                <div className='bg-[#2b2d2e] rounded-xl h-1/3 w-full'>
                    about
                </div>
                <div className='bg-[#2b2d2e] w-full h-1/2 rounded-xl'>
                    videos
                </div>
            </div>
        </div>
    )
}
