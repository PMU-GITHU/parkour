import type { Metadata } from "next";
import { Mona_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { Analytics } from "@vercel/analytics/react"
import { GoogleAnalytics } from "@next/third-parties/google";

const monaSans = Mona_Sans({
  variable: "--font-mona-sans",
  subsets: ["latin"],
});

 
export const metadata: Metadata = {
  title: "Parkour Maroc - Parkour Morocco Community",
  description: "Official website of Parkour Maroc - A community for all parkour enthusiasts. Join us to learn, train, and connect with fellow tracers.",
  keywords: ["parkour", "freerunning", "community", "movement", "fitness", "parkour maroc","parkour morocco", "Morocco", "Maroc" ,"Sport Morocco", "tracing", "urban sports", "extreme sports", "acrobatics", "parkour training", "parkour community", "parkour events", "parkour workshops", "parkour athletes", "parkour videos", "parkour tutorials", "parkour spots", "parkour gym", "parkour culture", "parkour lifestyle", "parkour challenges", "parkour competitions", "parkour Morocco community", "parkour Maroc events"],
  openGraph: {
    title: "Parkour Maroc",
    description: "Official website of Parkour Maroc - A community for all parkour enthusiasts. Join us to learn, train, and connect with fellow tracers.",
    url: "https://parkourmaroc.com",
    siteName: "Parkour Maroc",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Parkour Maroc",
    description: "Official website of Parkour Maroc - A community for all parkour enthusiasts. Join us to learn, train, and connect with fellow tracers.",
    images: ["/og-image.png"],
  },
  metadataBase: new URL("https://parkourmaroc.com"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.ico",
 
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleAnalytics gaId={process.env.GA_ID as string} />
     
      <meta name="apple-mobile-web-app-title" content="Parkour Maroc" />
      <body
        className={`${monaSans.className} overflow-x-hidden  antialiased`}
      >
        <Toaster />
        {children}
        <Analytics />
      </body>

    </html>
  );
}
