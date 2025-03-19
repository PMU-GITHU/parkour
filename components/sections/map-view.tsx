"use client"

import { useEffect, useRef, useState } from "react"
import mapboxgl from "mapbox-gl"
import "mapbox-gl/dist/mapbox-gl.css"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { DirectionsMenu } from "../directions-menu"
import { LocationsIMages } from "../location-images"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Badge } from "../ui/badge"
// Sample locations data
const locations = [
  { id: 1, name: "Oasis Spot", availableToPublic: false, coordinates: [-7.994174, 31.702513], image: "/Locations/oasis.jpg" },
  { id: 2, name: "Al Badii", availableToPublic: true, coordinates: [-8.004596, 31.662735], image: "/Locations/albadi.jpg" },
  { id: 3, name: "Skatepark Menara", availableToPublic: true, coordinates: [-8.014210, 31.614480], image: "/Locations/park.jpg" },
  { id: 5, name: "PMU Playground", availableToPublic: false, coordinates: [-8.057949, 31.613872], image: "/Locations/pmu.jpg" },
  { id: 6, name: "ANBER", availableToPublic: true, coordinates: [-8.066505, 31.634299], image: "/Locations/anbar.jpg" },
  { id: 7, name: "Malizya", availableToPublic: true, coordinates: [-8.009430, 31.665456], image: "/Locations/malizia.jpg" },
  { id: 8, name: "BOUKAR 1", availableToPublic: true, coordinates: [-7.999190, 31.639464], image: "/Locations/boukar.jpg" },
  { id: 9, name: "BOUKAR 2", availableToPublic: true, coordinates: [-7.999153, 31.642749], image: "/Locations/boukar-2.jpg" },
  { id: 10, name: "KOUTOUBIA", availableToPublic: true, coordinates: [-7.992959, 31.623624], image: "/Locations/koutobia.jpg" },
  { id: 11, name: "Arsat ", availableToPublic: true, coordinates: [-8.000554, 31.628086], image: "/Locations/arsat.jpg" },
]

export function MapView() {
  const mapContainer = useRef<HTMLDivElement>(null)
  const map = useRef<mapboxgl.Map | null>(null)
  const markers = useRef<mapboxgl.Marker[]>([])
  const [activeLocation, setActiveLocation] = useState<number | null>(null)

  useEffect(() => {
    if (!mapContainer.current) return

    mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN!

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [-8.066083, 31.634361],
      zoom: 10,
    })

    // Create markers for each location
    markers.current = locations.map(location => {
      const marker = new mapboxgl.Marker()
        .setLngLat(location.coordinates as [number, number])
        .addTo(map.current!);
      return marker;
    });

    return () => {
      map.current?.remove()
      markers.current.forEach(marker => marker.remove())
    }
  }, [])

  const handleLocationClick = (location: (typeof locations)[0]) => {
    if (!map.current) return

    setActiveLocation(location.id)

    // Highlight the selected marker
    markers.current.forEach((marker, index) => {
      const element = marker.getElement()
      if (index + 1 === location.id) {
        element.style.transform = 'scale(1.2)'
      } else {
        element.style.transform = 'scale(1)'
      }
    })

    // Fly to location
    map.current.flyTo({
      center: location.coordinates as [number, number],
      zoom: 14,
      duration: 2000,
    })
  }

  return (


    <div className="w-full flex flex-col items-center z-30 justify-center px-4 sm:px-6 lg:px-8">
      <div className="flex gap-4 flex-col mx-auto items-center justify-center w-full max-w-7xl">
        <div>
          <Badge className='bg-orange-500 hover:bg-orange-900 text-sm sm:text-base'>Locations</Badge>
        </div>
        <div className="flex gap-2 flex-col items-center justify-center text-center w-full">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white tracking-tighter max-w-xl font-regular">
            Come Train With Us
          </h2>
          <p className="text-base sm:text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-muted-foreground">
            {"Marrakech's diverse training spots offer safe, dynamic environments for athletes to push their limits."}
          </p>
        </div>
      </div>
      <div
        id="locations"
        className="flex size-full flex-col md:grid md:grid-cols-3 bg-black gap-4 w-full max-w-7xl p-4 min-h-[600px]">
        {/* Map Container */}
        <div className="md:col-span-2 h-[300px] sm:h-[400px] md:h-auto order-2 md:order-1">
          <Card className="h-full">
            <div ref={mapContainer} className="w-full h-full rounded-lg" />
          </Card>
        </div>

        {/* Locations List */}
        <div className="space-y-3 sm:space-y-5 order-1 w-full md:order-2 px-2 sm:px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-orange-500 uppercase font-bold mb-4 sm:mb-6 md:mb-14">
            Locations
          </h2>
          <ScrollArea className="h-[200px] sm:h-[300px] md:h-[29rem] w-full">

            {locations.map((location) => (
              <div key={location.id} className="space-y-1 sm:space-y-2">
                <Button
                  variant={"ghost"}
                  className="w-full text-white uppercase text-base sm:text-lg md:text-xl lg:text-2xl justify-start gap-2 hover:bg-transparent hover:text-orange-500"
                  onClick={() => handleLocationClick(location)}
                >
                  <motion.div
                    initial={{ width: 0, height: 0 }}
                    whileHover={{ width: 10, height: 10 }}
                    animate={activeLocation === location.id ? { width: 100, height: 2 } : { width: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="bg-orange-500 rounded-full"
                  />
                  {location.name}
                </Button>
                {activeLocation === location.id && (
                  <div className="pl-1 pb-2 sm:pb-4 w-full md:pb-8">
                    {
                      location.availableToPublic ? (
                        <DirectionsMenu coordinates={location.coordinates as [number, number]} locationName={location.name} />
                      ) : (
                        <div className="flex justify-center items-center max-w-lg cursor-not-allowed gap-x-2 text-white text-sm sm:text-base md:text-lg">
                          <motion.div
                            initial={{ width: 0, height: 0 }}
                            whileHover={{ width: 10, height: 10 }}
                            animate={location ? { width: 135, height: 2 } : { width: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="bg-orange-300 rounded-full"
                          />
                          This location is not available to the public
                        </div>
                      )
                    }
                    <LocationsIMages location={{ ...location, coordinates: location.coordinates as [number, number] }} />
                  </div>
                )}
              </div>
            ))}
          </ScrollArea>
        </div>
      </div>
    </div>
  )
}
