"use client"

import { useEffect, useRef, useState } from "react"
import mapboxgl from "mapbox-gl"
import "mapbox-gl/dist/mapbox-gl.css"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { DirectionsMenu } from "../directions-menu"
import { LocationsIMages } from "../location-images"

// Sample locations data
const locations = [
  { id: 1, name: "Eiffel Tower", coordinates: [2.2945, 48.8584], image: "https://images.pexels.com/photos/1703312/pexels-photo-1703312.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  { id: 2, name: "Colosseum", coordinates: [12.4924, 41.8902], image: "https://images.pexels.com/photos/1703312/pexels-photo-1703312.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  { id: 3, name: "Sagrada Familia", coordinates: [2.1743, 41.4036], image: "https://images.pexels.com/photos/1703312/pexels-photo-1703312.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  { id: 4, name: "Big Ben", coordinates: [-0.1276, 51.5007], image: "https://images.pexels.com/photos/1703312/pexels-photo-1703312.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
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
    <div
      id="locations"
      className="flex flex-col md:grid md:grid-cols-3 bg-black gap-4 px-4 lg:px-40 p-4 min-h-[600px]">
      {/* Map Container */}
      <div className="md:col-span-2 h-[400px] md:h-auto order-2 md:order-1">
        <Card className="h-full">
          <div ref={mapContainer} className="w-full h-full rounded-lg" />
        </Card>
      </div>

      {/* Locations List */}
      <div className="space-y-5 order-1 w-full md:order-2 px-4 md:px-0">
        <h2 className="text-3xl md:text-4xl lg:text-6xl text-white uppercase font-bold mb-6 md:mb-14">Locations</h2>
        {locations.map((location) => (
          <div key={location.id} className="space-y-2">
            <Button
              variant={"ghost"}
              className="w-full text-white uppercase text-lg md:text-2xl lg:text-4xl justify-start gap-2 hover:bg-transparent hover:text-orange-500"
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
              <div className="pl-1 pb-4 w-full md:pb-8">
                <DirectionsMenu coordinates={location.coordinates as [number, number]} locationName={location.name} />
                <LocationsIMages location={{ ...location, coordinates: location.coordinates as [number, number] }} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
