"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

const events = [
  {
    id: 1,
    title: "Bulls Eye Bazaar",
    description: "Online trading event",
    date: "Mar 27, 2025",
    time: "10:00 AM - 1:00 PM",
    venue: "Main Auditorium",
    modelType: "Bull" as const,
    details:
      "Get ready to pitch your startup idea to a panel of experienced investors and industry experts. Winners will receive mentorship and potential funding opportunities.",
    prize: "₹1,00,000",
  },
  {
    id: 2,
    title: "Case Heist",
    description: "Case Study Competition",
    date: "Mar 27-28, 2025",
    time: "2:00 PM - 2:00 PM",
    venue: "Innovation Lab",
    modelType: "hiest" as const,
    details:
      "Build innovative solutions for real-world problems in this 24-hour coding marathon. Work in teams and showcase your technical skills.",
    prize: "₹75,000",
  },
  {
    id: 3,
    title: "Pitch craft",
    description: "Pitching Competition",
    date: "Mar 28, 2025",
    time: "9:00 AM - 12:00 PM",
    venue: "Conference Hall",
    modelType: "craft" as const,
    details:
      "Analyze and present solutions for real business cases. Learn from industry experts and develop your strategic thinking.",
    prize: "₹50,000",
  },
  {
    id: 4,
    title: "Escape the Maitrix",
    description: "Treasure Hunt",
    date: "Mar 28, 2025",
    time: "9:00 AM - 12:00 PM",
    venue: "Conference Hall",
    modelType: "matrix" as const,
    details:
      "Analyze and present solutions for real business cases. Learn from industry experts and develop your strategic thinking.",
    prize: "₹50,000",
  },
  {
    id: 5,
    title: "Expree Galerie",
    description: "Art Gallery",
    date: "Mar 28, 2025",
    time: "9:00 AM - 12:00 PM",
    venue: "Conference Hall",
    modelType: "drone" as const,
    details:
      "Analyze and present solutions for real business cases. Learn from industry experts and develop your strategic thinking.",
    prize: "₹50,000",
  },
  {
    id: 6,
    title: "Evolvex",
    description: "Event by NSS",
    date: "Mar 27, 2025",
    time: "10:00 AM - 1:00 PM",
    venue: "Main Auditorium",
    modelType: "evolution" as const,
    details:
      "Get ready to pitch your startup idea to a panel of experienced investors and industry experts. Winners will receive mentorship and potential funding opportunities.",
    prize: "₹1,00,000",
  },
]

export default function Events() {
  const [selectedEvent, setSelectedEvent] = useState<typeof events[0] | null>(null)

  return (
    <div className="min-h-screen pt-20 relative">
      {/* Background Image */}
      <div className="fixed inset-0 -z-10">
        <Image
          src="/eventbg.jpg"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <motion.h1
          className="font-extrabold text-6xl text-center mb-12 bg-gradient-to-r from-zenith-red to-zenith-blue bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          EVENTS
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {events.map((event) => (
            <motion.div
              key={event.id}
              className="group relative overflow-hidden rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 w-[300px] h-[400px]"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src="/tobeannounced.png"
                alt={event.title}
                fill
                className="object-cover rounded-lg"
                priority
              />
            </motion.div>
          ))}
        </div>

        
      </div>
    </div>
  )
}

