"use client"

import { useEffect, useRef, useState } from "react"
import mapboxgl from "mapbox-gl"
import "mapbox-gl/dist/mapbox-gl.css"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin } from "lucide-react"

// Sample locations data
const locations = [
  { id: 1, name: "Eiffel Tower", coordinates: [2.2945, 48.8584] },
  { id: 2, name: "Colosseum", coordinates: [12.4924, 41.8902] },
  { id: 3, name: "Sagrada Familia", coordinates: [2.1743, 41.4036] },
  { id: 4, name: "Big Ben", coordinates: [-0.1276, 51.5007] },
]

export function MapView() {
  const mapContainer = useRef<HTMLDivElement>(null)
  const map = useRef<mapboxgl.Map | null>(null)
  const marker = useRef<mapboxgl.Marker | null>(null)
  const [activeLocation, setActiveLocation] = useState<number | null>(null)

  useEffect(() => {
    if (!mapContainer.current) return

    mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN!

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [2.2945, 48.8584], // Default to first location
      zoom: 4,
    })

    // Create initial marker
    marker.current = new mapboxgl.Marker().setLngLat([2.2945, 48.8584]).addTo(map.current)

    return () => {
      map.current?.remove()
    }
  }, [])

  const handleLocationClick = (location: (typeof locations)[0]) => {
    if (!map.current || !marker.current) return

    setActiveLocation(location.id)

    // Move marker to new location
    marker.current.setLngLat(location.coordinates as [number, number])

    // Fly to location
    map.current.flyTo({
      center: location.coordinates as [number, number],
      zoom: 14,
      duration: 2000,
    })
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 h-[600px]">
      {/* Map Container */}
      <div className="md:col-span-2">
        <Card className="h-full">
          <div ref={mapContainer} className="w-full h-full rounded-lg" />
        </Card>
      </div>

      {/* Locations List */}
      <div className="space-y-2">
        <h2 className="text-xl font-bold mb-4">Locations</h2>
        {locations.map((location) => (
          <Button
            key={location.id}
            variant={activeLocation === location.id ? "default" : "outline"}
            className="w-full justify-start gap-2"
            onClick={() => handleLocationClick(location)}
          >
            <MapPin className="h-4 w-4" />
            {location.name}
          </Button>
        ))}
      </div>
    </div>
  )
}

