import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kiarash Delavar | Software & Robotics Engineer",
  description: "Portfolio of Kiarash Delavar. Building autonomous logic, scalable full-stack applications, and intelligent robotic systems.",
  keywords: ["Software Engineer", "Robotics", "Full-Stack", "Next.js", "ROS2", "Java", "Netherlands"],
  openGraph: {
    title: "Kiarash Delavar | Software & Robotics",
    description: "Building autonomous logic and scalable systems.",
    url: "https://kiarashdelavar.com",
    siteName: "Kiarash Delavar Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
 <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
