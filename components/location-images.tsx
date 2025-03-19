import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Eye, Navigation } from "lucide-react"
import Image from "next/image"
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"

interface DirectionsMenuProps {
    location: {
        id: number
        name: string
        coordinates: [number, number]
        image?: string
    }
}

export function LocationsIMages({ location }: DirectionsMenuProps) {

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button
                    variant="ghost" 
                    size="sm" 
                    className="gap-x-2 group text-white text-base sm:text-xl flex justify-center items-center 
                    hover:text-orange-500 hover:bg-transparent"
                >
                    <motion.div
                        initial={{ width: 0, height: 0 }}
                        whileHover={{ width: 10, height: 10 }}
                        animate={location.coordinates ? { width: 135, height: 2 } : { width: 0, height: 0 }}
                        transition={{ duration: 0.3 , ease: "easeInOut"}}
                        className="bg-orange-500 rounded-full"
                    />
                    View Image 
                </Button>
            </DialogTrigger>
            <DialogContent className="w-[90vw] h-[50vh] sm:w-[80vw] sm:h-[70vh] md:w-[80vw] md:h-[80vh] max-w-none max-h-none p-0 bg-black border-0">
                <VisuallyHidden>
                    <DialogTitle>Image of {location.name}</DialogTitle>
                </VisuallyHidden>
                <div className="w-full h-full relative">
                    <Image
                        src={location.image || "/placeholder.svg"}
                        alt={location.name}
                        fill
                        sizes="(max-width: 768px) 90vw, 80vw"
                        style={{
                            objectFit: 'cover'
                        }}
                        className="rounded-lg"
                    />
                </div>
            </DialogContent>
        </Dialog>

    )
}

