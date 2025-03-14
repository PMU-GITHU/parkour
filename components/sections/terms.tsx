"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown, ExternalLink } from "lucide-react"
import { Footer1 } from "./Footer"

export default function TermsAndServices() {
    const [activeSection, setActiveSection] = useState<string | null>("general-mission")

    const toggleSection = (sectionId: string) => {
        if (activeSection === sectionId) {
            setActiveSection(null)
        } else {
            setActiveSection(sectionId)
            // Scroll to the section
            const element = document.getElementById(sectionId)
            if (element) {
                element.scrollIntoView({ behavior: "smooth", block: "start" })
            }
        }
    }

    const sections = [
        {
            id: "general-mission",
            title: "General Mission Statement",
            content: `The PMC Community is dedicated to the development, promotion, and recognition of parkour and 
      freerunning as an art, sport, and lifestyle. We aim to create a thriving environment where athletes of all 
      levels can train safely, express themselves freely, and push their physical and mental limits.
      
      Core Values:
      • Respect & Integrity – We uphold respect for all members, spaces, and the discipline itself. 
      Honesty and ethical conduct are fundamental to our community.
      • Progress & Innovation – We encourage continuous learning, creativity, and the evolution of 
      movement while preserving the essence of parkour.
      • Safety & Responsibility – We prioritize responsible training methods, injury prevention, and a 
      supportive atmosphere for practitioners of all levels.
      • Community & Inclusion – We foster an open and inclusive space where individuals can train, 
      collaborate, and grow together, regardless of age, background, or skill level.`,
        },
        {
            id: "community-rules",
            title: "Community Guidelines",
            content: `To ensure the longevity, growth, and sustainability of our parkour community, the following rules must 
      be upheld by all members:
      
      1. Respect & Conduct
      1.1 Treat fellow athletes, coaches, and newcomers with respect and encouragement.
      1.2 No discrimination, harassment, or bullying—this is an inclusive space for everyone.
      1.3 Respect the training environment, whether public spaces or private facilities.
      
      2. Safety & Responsibility
      2.1 Train responsibly, knowing your limits and progressing gradually to avoid injuries.
      2.2 Always warm up before training and cool down afterward.
      2.3 Use proper spotting techniques and assist others when needed.
      2.4 No reckless behavior that endangers yourself or others.`,
        },
        {
            id: "social-media",
            title: "Social Media Guidelines",
            content: `To maintain a strong and professional online presence, all members must adhere to the following social 
      media and promotion guidelines:
      
      1. Content Guidelines
      1.1 All content shared on social media should align with the values and mission of the PMC Community.
      1.2 Avoid posting reckless, unsafe, or highly dangerous stunts without proper disclaimers or safety 
      explanations.
      1.3 Do not share misleading or exaggerated content that misrepresents parkour or the community.
      1.4 Respect the privacy of fellow members—always ask for consent before posting videos or images of 
      others.`,
        },
        {
            id: "copyright",
            title: "Copyright & Intellectual Property",
            content: `1. Copyrights and Content Ownership
      1.1 All media content, including photos, videos, logos, and written materials created under the Parkour 
      Marrakech Community (PMC) name, are the property of PMC.
      1.2 Any use of PMC-branded content for commercial purposes, promotions, or external projects must 
      receive prior approval from the management team.
      1.3 Athletes who contribute media content retain personal rights to their work but grant PMC 
      permission to use, edit, and distribute it for promotional and community purposes.`,
        },
        {
            id: "merchandise",
            title: "Merchandise & Partnerships",
            content: `1. Official PMC Merchandise
      1.1 The Parkour Marrakech Community (PMC) offers exclusive merchandise available on our official 
      website www.parkourmaroc.com.
      1.2 The merchandise is currently owned and managed by two PMC members, ensuring quality, 
      authenticity, and alignment with the community's vision.
      1.3 All items listed represent the spirit of parkour and freerunning, designed for athletes and enthusiasts 
      who support and represent our movement.`,
        },
        {
            id: "stunts-section",
            title: "Stunts Section Terms",
            content: `Welcome to the "Stunts" section of our website. By submitting your stunt performance to be featured in 
      this section, you agree to the following terms and conditions:
      
      1. Purpose of the "Stunts" Section
      The "Stunts" section is designed to showcase the incredible talents of athletes who have 
      performed stunts in well-known movies and other high-profile projects. We aim to provide 
      exposure to athletes who have significant experience in the field of parkour, freerunning, and 
      stunt performance.`,
        },
        {
            id: "cast-section",
            title: "Cast Section Terms",
            content: `Welcome to the "Cast" section of our website. By submitting your profile to be listed as a cast athlete, or 
      by engaging with our athletes through this section, you agree to the following terms and conditions:
      
      1. Purpose of the "Cast" Section
      The "Cast" section serves as a platform for collaboration between our experienced athletes and 
      sponsors, production companies, and content creators. This section is dedicated to connecting 
      athletes with media projects such as music videos, commercials, advertisements, content 
      creation, and other promotional work.`,
        },
        {
            id: "revenue-sharing",
            title: "Revenue Sharing Model",
            content: `1. Revenue Sources
      1.1 The Parkour Marrakech Community (PMC) generates revenue through two primary sources: 
      the sale of official merchandise and commissions received from athletes in our community who 
      perform in media productions and events.
      1.2 The revenue generated helps support the community's operations, including the 
      maintenance of our platform, event organization, and athlete development.`,
        },
        {
            id: "services",
            title: "Services & Offerings",
            content: `These Terms and Conditions govern the services provided by Parkour Marrakech Community (PMC). By 
      engaging with any of our services, you agree to comply with the following terms.
      
      1. General Terms
      1.1 Eligibility – Our services are open to individuals, brands, and production companies who seek 
      professional parkour, freerunning, stunt performances, or training.
      1.2 Compliance with Safety Regulations – All participants and clients must adhere to the safety rules 
      and guidelines provided by PMC coaches and coordinators.`,
        },
    ]

    return (
        <div className="min-h-screen relative bg-black text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Header */}
                <div className="mb-16 text-center">

                    <h1 className="text-5xl font-bold tracking-tight mb-4 bg-gradient-to-r from-orange-400 to-red-500 inline-block text-transparent bg-clip-text">
                        PMC Terms & Conditions
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Comprehensive guidelines for the Parkour Marrakech Community, ensuring a safe, respectful, and thriving
                        environment for all members.
                    </p>
                    <div className="mt-6 text-sm text-gray-500">Last modified on April 4, 2025</div>
                </div>

                {/* Table of Contents */}
                <div className="mb-12 bg-neutral-950 backdrop-blur-sm rounded-xl p-6 border border-gray-300/5">
                    <h2 className="text-xl font-semibold mb-4">Table of Contents</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                        {sections.map((section) => (
                            <button
                                key={section.id}
                                onClick={() => toggleSection(section.id)}
                                className={`text-left px-4 py-3 rounded-lg transition-all ${activeSection === section.id
                                        ? "bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30"
                                        : "hover:bg-gray-800 border border-transparent"
                                    }`}
                            >
                                <span className="font-medium">{section.title}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Content Sections */}
                <div className="space-y-12">
                    {sections.map((section) => (
                        <div
                            key={section.id}
                            id={section.id}
                            className={`transition-all duration-500 ${activeSection === section.id ? "opacity-100" : "opacity-50 hover:opacity-80"
                                }`}
                        >
                            <div className="flex items-center gap-4 mb-4 cursor-pointer" onClick={() => toggleSection(section.id)}>
                                <div
                                    className={`h-px bg-gradient-to-r from-orange-500 to-red-500 transition-all ${activeSection === section.id ? "w-16" : "w-8"
                                        }`}
                                ></div>
                                <h2 className="text-3xl font-bold">{section.title}</h2>
                                <ChevronDown
                                    className={`h-6 w-6 text-gray-400 transform transition-transform ${activeSection === section.id ? "rotate-180" : ""
                                        }`}
                                />
                            </div>

                            <div
                                className={`transition-all duration-500 overflow-hidden ${activeSection === section.id ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
                                    }`}
                            >
                                <div className="bg-neutral-950 backdrop-blur-sm rounded-xl p-8 border border-gray-300/5">
                                    <div className="prose prose-invert prose-lg max-w-none">
                                        <div className="whitespace-pre-line">{section.content}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Footer */}
            </div>
            <Footer1 />
        </div>
    )
}

