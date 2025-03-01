import { Button } from "@/components/ui/button";
import Link from "next/link";
import { assert } from "node:console";
import { Athletes } from "./Athletes";
import People, { stunts } from "@/lib/data";
import { Instagram, Youtube } from "lucide-react";

interface Feature {
    image: string;
    title: string;
    description: string;
    imdbLink?: string;
    youtubeLink?: string;
    instagramLink?: string;
}

interface StuntsAthletesProps {
    heading?: string;
    description?: string;
    buttons?: {
        primary: {
            text: string;
            url: string;
        };

    };
    features?: Feature[];
}


const StuntsAthletes = ({
    heading = "Our Stunts Athletes",
    description = "We have a proven track record of success in the industry, working with some of the best athletes in the world.",
    buttons = {
        primary: {
            text: "Contact Us",
            url: "/#contact",
        },
    },
    features = stunts.map((stunt) => ({
        image: stunt.Picture || "/AthletesPic/placeholder.png",
        title: stunt.Name || "No name available",
        description: stunt.Description || "No description available",
        imdbLink: stunt.imdbLink || "",
        youtubeLink: stunt.youtube || "",
        instagramLink: stunt.instagram || "",
    })),

}: StuntsAthletesProps) => {
    return (
        <section
            className="py-32 w-full   bg-black text-white">
            <div className="container  mx-auto max-w-6xl">
                <div className="relative grid gap-16 md:grid-cols-2">
                    <div className="top-40 h-fit md:sticky">
                        <h2 className="mb-6 mt-4 text-4xl font-semibold md:text-5xl">
                            {heading}
                        </h2>
                        <p className="font-medium text-muted-foreground md:text-xl">
                            {description}
                        </p>
                        <div className="mt-8 flex flex-col gap-4 lg:flex-row">
                            <Button className="gap-2 w-3/4 text-black" variant={"outline"} size="lg" asChild>
                            <Link href={buttons.primary.url}>{buttons.primary.text}</Link>
                            </Button>

                        </div>
                    </div>
                    <div className="flex flex-col gap-12 md:gap-20">
                        {features.map((feature, index) => (
                            <div key={index} className="rounded-xl flex flex-col  w-full border border-gray-300/40">
                                <img
                                    src={feature.image}
                                    alt={feature.title}
                                    className="aspect-square w-full rounded-b-none rounded-t-xl   object-cover"
                                />
                                <div className="p-6">
                                    <div className="mb-1 text-2xl font-semibold">
                                        <h3>
                                            {feature.title}
                                        </h3>
                                        <div className="flex gap-2 py-2">
                                            {feature.imdbLink && (
                                                <Link href={feature.imdbLink} target="_blank" rel="noopener noreferrer">
                                                    <img src="/icons/IMDB.svg" className="w-10 h-10" />
                                                </Link>
                                            )}
                                            {feature.youtubeLink && (
                                                <Link href={feature.youtubeLink} target="_blank" rel="noopener noreferrer">
                                                    <img src="/icons/Youtube.svg" className="w-10 h-10  " />
                                                </Link>
                                            )}
                                            {feature.instagramLink && (
                                                <Link href={feature.instagramLink} target="_blank" rel="noopener noreferrer">
                                                    <img src="/icons/Instagram.svg" className="w-8 h-8" />
                                                </Link>
                                            )}
                                        </div>
                                    </div>
                                    <p className="text-muted-foreground">{feature.description}</p>
                                </div>


                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export { StuntsAthletes };
