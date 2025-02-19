import Loader from '@/components/sections/Loader'
import React from 'react'

export default function Loading() {
  return (
    <div className='flex justify-center items-center h-screen bg-black'>
        <Loader />
    </div>
  )
}
