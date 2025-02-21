import type { Metadata } from "next"
import { Press_Start_2P, Space_Grotesk } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import { Suspense } from "react"
import { LoadingScreen } from "@/components/loading-screen"
import { validateEnv } from '@/lib/env'
import type React from "react"
import { AnimatePresence } from "framer-motion"

const pressStart = Press_Start_2P({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-press-start",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
})

// Validate environment variables during app initialization
validateEnv()

export const metadata: Metadata = {
  title: "Zenith E-Summit 2025 | MAIT",
  description: "Explore the cosmos with us at Zenith E-Summit 2025, MAIT's premier entrepreneurship summit.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-black min-h-screen">
        {children}
      </body>
    </html>
  )
}