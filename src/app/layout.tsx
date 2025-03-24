import { FaUser } from "react-icons/fa";
import "@uploadthing/react/styles.css";
import {ClerkProvider} from '@clerk/nextjs'  
import "~/styles/globals.css";
import { type Metadata } from "next";
import { Geist } from "next/font/google";
import Carousel from "../_components/carousel"; 
import Topnav from "../_components/topnav";


export const metadata: Metadata = {
  title: "autodepot",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "https://nqoiq4wi68.ufs.sh/f/2f9wccbRFAt91fetiLsIsQmGHiBp0oa9WAXOtrNVzky62K8n" }],
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider>
    <html lang="en" className={`${geist.variable}`}>
      <body style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Topnav />     
        <div style={{ flex: 1 }}>
          {children}
        </div> 
      </body> 
    </html>
    </ClerkProvider>
  );
}