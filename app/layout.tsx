import type { Metadata } from "next";
import { Mona_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";


const monaSans = Mona_Sans({
  variable: "--font-mona-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Parkour Maroc",
  description: "Official website of Parkour Maroc - A community for all parkour enthusiasts. Join us to learn, train, and connect with fellow tracers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${monaSans.className} overflow-x-hidden  antialiased`}
      >

        <Toaster />
        {children}
      </body>
     
    </html>
  );
}
