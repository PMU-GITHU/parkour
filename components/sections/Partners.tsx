"use client";

import { useEffect, useState } from "react";
import {
    Carousel,
    CarouselApi,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";

export const Partners = () => {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    useEffect(() => {
        if (!api) return;

        const interval = setInterval(() => {
            if (hoveredIndex !== null) return;

            if (api.selectedScrollSnap() === api.scrollSnapList().length - 1) {
                api.scrollTo(0);
                setCurrent(0);
            } else {
                api.scrollNext();
                setCurrent(prev => prev + 1);
            }
        }, 2000);

        return () => clearInterval(interval);
    }, [api, hoveredIndex]);

    const partnersList = [
        {
            id: 1,
            image: "/partners/partner1.png",
            url: "https://www.instagram.com/pmu_association"
        },
        {
            id: 2,
            image: "/partners/partner2.png",
            url: "https://www.instagram.com/itsmeyasu"
        },
    ]

    return (
        <div className="w-full bg- black text-white py-12 md:py-20 lg:py-40">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 items-center">
                    <h3 className="text-3xl sm:text-4xl md:text-5xl z-30 tracking-tighter font-regular text-center md:text-left">
                        Partners & Sponsors
                    </h3>
                    <div className="md:col-span-2 relative w-full flex flex-wrap justify-center gap-4 md:gap-6">
                        {partnersList.map((_, index) => (
                            <div
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                onClick={() => window.open(_.url, "_blank")}
                                className="w-[12rem] h-[12rem] sm:w-[15rem] sm:h-[15rem] md:w-[18rem] md:h-[18rem] lg:w-[20rem] lg:h-[20rem] cursor-pointer"
                                key={index}
                            >
                                <img 
                                    src={_.image} 
                                    alt="Partner logo" 
                                    className="object-cover w-full h-full" 
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};