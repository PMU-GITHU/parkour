import AboutUS from "@/components/sections/AboutUS";
import { Athletes } from "@/components/sections/Athletes";
import { CoachesPage } from "@/components/sections/Coachs";
import ContactUS from "@/components/sections/Contact-US";
import { Cta } from "@/components/sections/CTA";
import { Footer1 } from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import { MapView } from "@/components/sections/map-view";
import Merch from "@/components/sections/Merch";
import { Partners } from "@/components/sections/Partners";
import Tutoring from "@/components/sections/Tuturing";


export default function Home() {

  return (
    <main className="">
      <Hero />
      <Partners />
      <AboutUS />
      <Athletes />
      <CoachesPage />
      <Merch />
      <MapView />
      <Cta />
      <Tutoring />
      <ContactUS />
      <Footer1 />
    </main>
  );
}
