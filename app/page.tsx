"use client";
import AboutUS from "@/components/sections/AboutUS";
import  { Athletes } from "@/components/sections/Athletes";
import Hero from "@/components/sections/Hero";
import { Cursor } from '@/components/ui/cursor';
import { PlusIcon } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

export default function Home() {
  const [isHovering, setIsHovering] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const handlePositionChange = (x: number, y: number) => {
    let isHoveringAny = false;
    let currentHoveredItem = null;

    // Check all nav items from the navbar component
    const navItems = ['home', 'about-us', 'coaches', 'athletes', 'stunts', 'store', 'locations'];
    
    for (const item of navItems) {
      const target = document.getElementById(`navitem-${item}`);
      if (target) {
        const rect = target.getBoundingClientRect();
        const isInside = 
          x >= rect.left && x <= rect.right && 
          y >= rect.top && y <= rect.bottom;
        
        if (isInside) {
          isHoveringAny = true;
          currentHoveredItem = item;
          break;
        }
      }
    }

    // Also check the navbar button
    const navbarButton = document.getElementById('navbar-button');
    if (navbarButton) {
      const rect = navbarButton.getBoundingClientRect();
      const isInside = 
        x >= rect.left && x <= rect.right && 
        y >= rect.top && y <= rect.bottom;
      
      if (isInside) {
        isHoveringAny = true;
        currentHoveredItem = 'navbar-button';
      }
    }

    setIsHovering(isHoveringAny);
    setHoveredItem(currentHoveredItem);
  };
  return (
    <main className="relative">
      <Cursor
        attachToParent
        variants={{
          initial: { scale: 0.3, opacity: 0 },
          animate: { scale: 1, opacity: 1 },
          exit: { scale: 0.3, opacity: 0 },
        }}
        springConfig={{
          bounce: 0.001,
        }}
        transition={{
          ease: 'easeInOut',
          duration: 0.15,
        }}
        onPositionChange={handlePositionChange}
      >
        <motion.div
          animate={{
            width: isHovering ? 80 : 16,
            height: isHovering ? 32 : 16,
          }}
          className={`flex items-center absolute  inset-0 justify-center rounded-[40px] z-50   backdrop-blur-md dark:bg-gray-300/40
              ${isHovering ? 'bg-blue-500' : 'bg-orange-500'}
            `}
        >
          <AnimatePresence>
            {isHovering ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                className='inline-flex w-full items-center justify-center'
              >
                <div className='inline-flex items-center text-sm text-white dark:text-black'>
                  Click <PlusIcon className='ml-1 h-4 w-4' />
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </motion.div>
      </Cursor>

      <Hero />
      <AboutUS />
      <Athletes />

       
    </main>
  );
}
