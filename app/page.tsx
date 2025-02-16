"use client";
import AboutUS from "@/components/sections/AboutUS";
import { Athletes } from "@/components/sections/Athletes";
import { CoachesPage } from "@/components/sections/Coachs";
import Hero from "@/components/sections/Hero";
import { MapView } from "@/components/sections/map-view";
 

export default function Home() {
  
  return (
    <main className="">

      <Hero />
      <AboutUS />
      <Athletes />
      <CoachesPage />
      <MapView />
    </main>
  );
}
