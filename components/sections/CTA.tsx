"use client"
import { ArrowUpRightFromSquareIcon, MoveRight, PhoneCall } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const Cta = () => (
    <div className="w-full py-20 bg-black lg:py-40">
        <div
            style={{ backgroundImage: "url('onset.webp')", backgroundSize: 'cover', backgroundPosition: 'top left', backgroundRepeat: 'no-repeat' }}
            className="container relative rounded-md mx-auto">
            <div className="flex flex-col text-center z-20 w-full rounded-md p-4 lg:p-14 gap-8 items-center bg-black/20 backdrop-blur-md">
                <div>
                    <Badge className="bg-white/20 text-white backdrop-blur-sm border-white/20">Take the Leap</Badge>
                </div>
                <div className="flex flex-col gap-2">
                    <h3 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular text-white">
                        Redefining Movement
                    </h3>
                    <p className="text-lg leading-relaxed tracking-tight text-white/80 max-w-xl">
                        {"As Marrakech's premier parkour collective, we bring together 63+ elite athletes to create breathtaking performances. From cinematic stunts to live events, we transform spaces and push boundaries, delivering unforgettable experiences tailored to your vision."}
                    </p>
                </div>
                <div className="flex flex-row gap-4">
                    <Button
                    onClick={() => window.location.href = '/Stunts'}
                    className="gap-4 bg-white/10 backdrop-blur-sm   text-white border-white/20" variant="outline">
                        Explore Our Work <ArrowUpRightFromSquareIcon className="w-4 h-4" />
                    </Button>
                </div>
            </div>
        </div>
    </div>
);