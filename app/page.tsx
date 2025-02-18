import AboutUS from "@/components/sections/AboutUS";
import { Athletes } from "@/components/sections/Athletes";
import { CoachesPage } from "@/components/sections/Coachs";
import { Cta } from "@/components/sections/CTA";
import Hero from "@/components/sections/Hero";
import { MapView } from "@/components/sections/map-view";
import Merch from "@/components/sections/Merch";


export default function Home() {

  return (
    <main className="">
      <Hero />
      <AboutUS />
      <Athletes />
      <CoachesPage />
      <Merch />
      <MapView />
      <Cta />
    </main>
  );
}
