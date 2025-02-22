"use client"

import { motion } from "framer-motion"
import Image from "next/image"

interface Sponsor {
  name: string
  logo: string
  description: string
  tier: "platinum" | "gold" | "silver"
  website?: string
}

const sponsors: Sponsor[] = [
  // Platinum Sponsors (Major partners)
  {
    name: "UNSTOP",
    logo: "/sponsors/unstop-logo.svg",
    description: "Leading student engagement and opportunities platform",
    tier: "platinum",
    website: "https://unstop.com"
  },
  {
    name: "Interview Buddy",
    logo: "/sponsors/interview-buddy.png",
    description: "Professional interview preparation platform",
    tier: "platinum",
    website: "https://interviewbuddy.in"
  },

  // Gold Sponsors (Secondary major partners)
  {
    name: "MentorX",
    logo: "/sponsors/mentorx.png",
    description: "Mentorship and career guidance platform",
    tier: "gold",
    website: "https://mentorx.com"
  },
  {
    name: "HoverRobotix",
    logo: "/sponsors/hovorrobotix.png",
    description: "Innovative robotics solutions",
    tier: "gold",
    website: "https://hoverrobotix.com"
  },
  {
    name: "Stockedge",
    logo: "/sponsors/stockedge.webp",
    description: "Stock market learning and analysis platform",
    tier: "gold",
    website: "https://stockedge.com"
  },
  {
    name: "Belgium Waffle",
    logo: "/sponsors/belgium-waffle.png",
    description: "Premium waffle and dessert chain",
    tier: "gold",
    website: "https://belgiumwaffle.in"
  },

  // Silver Sponsors (Supporting partners)
  {
    name: "Stockgro",
    logo: "/sponsors/stockgroBlack.webp",
    description: "Stock market simulation platform",
    tier: "silver",
    website: "https://stockgro.club"
  },
  {
    name: "Mudgar",
    logo: "/sponsors/mudgar.svg",
    description: "Financial services and consulting",
    tier: "silver",
    website: "https://mudgar.com"
  },
  {
    name: "Igmae",
    logo: "/sponsors/igmae.jpg",
    description: "Gaming and entertainment platform",
    tier: "silver",
    website: "https://igmae.in"
  },
  {
    name: "DU Express",
    logo: "/sponsors/du-express.webp",
    description: "Student media and news platform",
    tier: "silver",
    website: "https://duexpress.in"
  },
  {
    name: "Give my Certificate",
    logo: "/sponsors/give-my-certificate.png",
    description: "Digital certificate generation platform",
    tier: "silver",
    website: "https://givemycertificate.com"
  },
  {
    name: "Headshot Energy Drinks",
    logo: "/sponsors/headshot-enerdy-drinks.avif",
    description: "Premium energy drinks brand",
    tier: "silver",
    website: "https://headshot.com"
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
}

export default function SponsorsPage() {
  return (
    <div className="min-h-screen pt-20 relative">
      {/* Background Image */}
      <div className="fixed inset-0 -z-10">
        <Image
          src="/sponsorbg.png"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
            OUR SPONSORS
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Meet the innovative companies powering Zenith E-Summit 2025
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap justify-center gap-8 items-center"
        >
          {sponsors.map((sponsor, index) => (
            <motion.div
              key={sponsor.name}
              variants={itemVariants}
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="w-32 h-32 rounded-full bg-white/5 backdrop-blur-md border border-white/20 overflow-hidden flex items-center justify-center p-4 hover:border-white/40 transition-all duration-300"
            >
              <a
                href={sponsor.website}
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-full h-full"
              >
                <Image
                  src={sponsor.logo}
                  alt={sponsor.name}
                  fill
                  className="object-contain p-2"
                />
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}



