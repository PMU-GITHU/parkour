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

    return (
        <div className="w-full bg-black text-white py-20 lg:py-40">
            <div className="container bg-black mx-auto">
                <div className="grid grid-cols-5 gap-10 items-center">
                    <h3 className="text-3xl tracking-tighter lg:max-w-xl font-regular text-left">
                        Partners & Sponsors
                    </h3>
                    <div className="relative w-full col-span-4">
                        <div className="bg-gradient-to-r from-black   to-transparent z-10 absolute left-0 top-0 right-0 bottom-0 w-2/12 h-full"></div>
                        <Carousel opts={{
                            loop: true,
                        }} setApi={setApi} className="w-full">
                            <CarouselContent>
                                {Array.from({ length: 25 }).map((_, index) => (
                                    <CarouselItem
                                        onMouseEnter={() => {
                                            setHoveredIndex(index);
                                        }}
                                        onMouseLeave={() => setHoveredIndex(null)}
                                        onClick={() => window.open("https://google.com", "_blank")}
                                        className="basis-1/4 lg:basis-1/6   cursor-pointer"
                                        key={index}
                                    >
                                        <img src="/partner1.png" alt="" className="object-cover size-full" />
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    );
};