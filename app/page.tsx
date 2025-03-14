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
import Services from "@/components/sections/Services";
import Tutoring from "@/components/sections/Tuturing";
import Particles from "@/components/sprinkles";
import { Badge } from "@/components/ui/badge";

export default function Home() {

  return (
    <main className="">
      <Hero />
      <div className="size-full relative bg-black">
        <div className=" h-40 w-full bg-gradient-to-b from-black to-transparent absolute top-0 z-30" />

        <div className="w-full h-full absolute ">
          <Particles
            particleColors={['#ffffff', '#ffffff']}
            particleCount={10000}
            particleSpread={40}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover={false}
            alphaParticles={false}
            disableRotation={false}
          />
        </div>

        <Partners />
        <AboutUS />
        <Services />
        <Athletes />
        <CoachesPage />
        <Merch />
        <div className="w-full   flex flex-col items-center z-30 justify-center">
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
