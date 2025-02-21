"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import { Badge } from '../ui/badge'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 20
    }
  }
}

export default function ContactUS() {
  return (
    <div id="contact" className="w-full py-20 lg:py-40 text-white bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          className="flex flex-col gap-8 max-w-2xl mx-auto"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <div className='space-y-4'>
            <div className='flex gap-4 flex-col mx-auto items-center justify-center'>
              <Badge className='bg-orange-500 hover:bg-orange-900'>
                Contact Us
              </Badge>
            </div>

            <motion.h2
              className="text-3xl md:text-6xl font-bold text-center"
              variants={item}
            >
              Get in Touch
            </motion.h2>
          </div>

          <motion.form
            className="flex flex-col gap-6"
            variants={item}
          >
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm font-medium">Name</label>
              <Input
                type="text"
                id="name"
                className="bg-transparent border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:border-orange-500 hover:border-orange-500 transition-colors"
                placeholder="Your name"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-medium">Email</label>
              <Input
                type="email"
                id="email"
                className="bg-transparent border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:border-orange-500 hover:border-orange-500 transition-colors"
                placeholder="Your email"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-medium">Message</label>
              <Textarea
                id="message"
                className="bg-transparent border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:border-orange-500 hover:border-orange-500 transition-colors min-h-[150px]"
                placeholder="Your message"
              />
            </div>

            <button
              type="submit"
              className="bg-orange-500 text-white px-6 py-3 rounded-xl font-medium hover:bg-orange-600 transition-colors mt-4"
            >
              Send Message
            </button>
          </motion.form>
        </motion.div>
      </div>
    </div>
  )
}
