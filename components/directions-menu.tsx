import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Navigation } from "lucide-react"

interface DirectionsMenuProps {
    coordinates: [number, number]
    locationName: string
}

export function DirectionsMenu({ coordinates: [lng, lat], locationName }: DirectionsMenuProps) {
    const encodedName = encodeURIComponent(locationName)

    const mapLinks = {
        google: `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}&destination_place_id=${encodedName}`,
        apple: `maps://maps.apple.com/?daddr=${lat},${lng}&dirflg=d`,
        osm: `https://www.openstreetmap.org/directions?engine=fossgis_osrm_car&route=;${lat},${lng}`,
        waze: `https://www.waze.com/ul?ll=${lat},${lng}&navigate=yes&zoom=17`,
    }

    const openDirections = (url: string) => {
        window.open(url, "_blank")
    }

    return (

        <Button
        onClick={() => openDirections(mapLinks.google)}
        variant="ghost" size="sm" className="gap-x-2 group text-white text-xl flex justify-center items-center 
                    hover:text-orange-500
                hover:bg-transparent">
            <motion.div
                initial={{ width: 0, height: 0 }}
                whileHover={{ width: 10, height: 10 }}
                animate={lng && lat ? { width: 155, height: 2 } : { width: 0, height: 0 }}
                transition={{ duration: 0.2 }}
                className="bg-orange-500 rounded-full"
            />
            Get Directions

            <Navigation className="h-4 w-4  text-orange-500 group-hover:opacity-100 opacity-0 transition-all ease-in-out duration-300" />

        </Button>

    )
}

