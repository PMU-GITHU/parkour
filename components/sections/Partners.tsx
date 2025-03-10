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
            url : "https://google.com"
        },
        {
            id: 2,
            image: "/partners/partner2.png",
            url : "https://google.com"
        },
    ]
     
    return (
        <div className="w-full bg-black text-white py-20 lg:py-40">
            <div className="container bg-black mx-auto">
                <div className="grid grid-cols-3 gap-10 items-center">
                    <h3 className="text-5xl tracking-tighter lg:max-w-xl font-regular text-left">
                        Partners & Sponsors
                    </h3>
                    <div className="relative w-full  flex">
                          
                                {partnersList.map((_, index) => (
                                    <div
                                        onMouseEnter={() => {
                                            setHoveredIndex(index);
                                        }}
                                        onMouseLeave={() => setHoveredIndex(null)}
                                        onClick={() => window.open(_.url, "_blank")}
                                        className="w-[20rem] h-[20rem]  cursor-pointer"
                                        key={index}
                                    >
                                        <img src={_.image} alt=" " className="object-cover size-full" />
                                    </div>
                                ))}
                           
                    </div>
                </div>
            </div>
        </div>
    );
};