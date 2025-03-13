import Threads from "@/components/bg";
import Iridescence from "@/components/irsisdence";
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
import { Badge } from "@/components/ui/badge";

export default function Home() {

  return (
    <main className="">
      <Hero />
      <div className="size-full relative bg-gradient-to-b from-black/80 via-black/50 to-transparent">
        <div className=" h-40 w-full bg-gradient-to-b from-black to-transparent absolute top-0 z-30" />

        <div className="w-full h-full absolute">

          <Iridescence
            color={[0.1, 0.05, 0]} // Dark base with orange tint
            mouseReact={false}
            amplitude={0.1}
            speed={1.0}
          />
        </div>

        <Partners />
        <AboutUS />
        <Athletes />
        <CoachesPage />
        <Merch />
        <div className="w-full bg-black  flex flex-col items-center justify-center">
          <div className="flex gap-4 flex-col mx-auto items-center justify-center">
            <div>
              <Badge className='bg-orange-500 hover:bg-orange-900'>Locations</Badge>
            </div>
            <div className="flex gap-2 flex-col items-center justify-center">
              <h2 className="text-3xl text-white md:text-5xl tracking-tighter max-w-xl font-regular text-left">
                Come Train With Us
              </h2>
              <p className="text-lg max-w-xl  lg:max-w-lg leading-relaxed tracking-tight text-muted-foreground text-center">
                {
                  `
            
            Marrakech's diverse training spots offer safe, dynamic environments for athletes to push their limits.
            `
                }
              </p>
            </div>
          </div>
          <MapView />
        </div>
        <Cta />
        <Tutoring />
        <ContactUS />
      </div>
      <Footer1 />
    </main>
  );
}
