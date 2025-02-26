"use client"

// Remove this import
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { GlowButton } from "@/components/ui/glow-button"
import { Modal } from "@/components/ui/modal"
import { Rocket, Users, Lightbulb } from "lucide-react"
import { cn } from "@/lib/utils"
import Spacetravel from "@/components/spacetravel"
// Remove VantaBackground impor

const features = [
  {
    title: "Keynote Speakers",
    description: "Learn from industry leaders and visionaries",
    icon: Rocket,
    details: {
      title: "World-Class Keynote Speakers",
      content: `Experience inspiring talks from industry pioneers and thought leaders who are shaping the future of technology and entrepreneurship. Our carefully curated lineup of speakers will share their insights, experiences, and vision for the future.`,
      animation: "animate-float",
      images: [
        "/speakers/Dr.MunishJindal.jpeg",
        "/speakers/Dr.NancyJ.jpeg",
        "/speakers/JhalakGupta.jpeg",
        "/speakers/Shrey.jpeg",  // Updated to match exact file name
        "/speakers/SanyaDuggal.jpeg"
      ],
      speakers: [
        {
          name: "Dr. Munish Jindal",
          title: "Founder and CEO - HoverRobotix\nFounding President - MENTORx"
        },
        {
          name: "Dr. Nancy Juneja",
          title: "Founder & Director - RevUp\nCo-founder & CEO - MENTORx"
        },
        {
          name: "Jhalak Gupta",
          title: "Co-Founder @Skillarena.in | Helping Job Seekers Find Their Dream Job"
        },
        {
          name: "Shrey Tyagi",
          title: "Founder & CEO - Skillarena"
        },
        {
          name: "Sanya Duggal",
          title: "Partner Go-to-Market & Strategy Manager | Microsoft"
        }
      ]
    },
  },
  {
    title: "Workshops",
    description: "Hands-on sessions to boost your skills",
    icon: Lightbulb,
    details: {
      title: "Interactive Workshops",
      content: `Dive deep into cutting-edge technologies and entrepreneurial skills with our hands-on workshops. From blockchain to AI, and from business modeling to pitch preparation, our workshops are designed to give you practical, applicable knowledge.`,
      animation: "animate-pulse-glow",
    },
  },
  {
    title: "Networking",
    description: "Connect with fellow entrepreneurs and investors",
    icon: Users,
    details: {
      title: "Networking Opportunities",
      content: `Build valuable connections with fellow entrepreneurs, investors, and industry experts. Our carefully crafted networking sessions and social events provide the perfect platform to expand your professional network and find potential collaborators.`,
      animation: "animate-bounce",
    },
  },
]

export default function Home() {
  const [selectedFeature, setSelectedFeature] = useState<(typeof features)[0] | null>(null)

  return (
    <div className="relative min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Animated Arrow */}
        <motion.div 
          className="fixed top-6 right-16 z-50 hidden sm:block"
          animate={{ x: [0, 10, 0], opacity: [0.5, 1, 0.5] }}
          transition={{ 
            duration: 1.5, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <svg 
            width="32" 
            height="24" 
            viewBox="0 0 32 24" 
            fill="none" 
            stroke="black"
            strokeWidth="2.5"
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <polyline points="16 5 27 12 16 19" />
          </svg>
        </motion.div>

        {/* Background Image */}
        <div className="absolute inset-0 pointer-events-none z-0 bg-fixed">
          <Image
            src="/1.jpg"
            alt="Cosmic Scene"
            width={1920}
            height={1080}
            className="w-full h-full object-cover"
            priority
          />
        </div>

        {/* Content continues... */}
        <motion.div
          className="relative z-10 container mx-auto px-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
          </motion.div>

          <motion.h1
            className="font-retro-futurism text-4xl sm:text-6xl md:text-8xl mb-6 animate-text-gradient bg-gradient-to-r from-stone-950 via-stone-900 to-stone-800 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            EXPLORE THE COSMOS
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto bg-gradient-to-r from-stone-950 via-stone-900 to-stone-800 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Join us for the biggest entrepreneurship summit of 2025
          </motion.p>

          
        </motion.div>
        
      </section>

      <section className="py-12 sm:py-20 bg-white backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12">
            {features.map((feature, index) => (
              <motion.button
                key={index}
                onClick={() => setSelectedFeature(feature)}
                className="group relative w-[320px] md:w-[380px] h-[475px] md:h-[565px] mx-auto rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
                
                <Image
                  src={
                    feature.title === "Keynote Speakers"
                      ? "/speakercard.jpeg"
                      : feature.title === "Workshops"
                      ? "/workshopcard.png"
                      : "/networkingcard.png"
                  }
                  alt={feature.title}
                  width={380}
                  height={565}
                  className="w-full h-full object-cover rounded-lg transform transition-transform duration-300 group-hover:scale-105"
                  priority
                />

                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-black/50 backdrop-blur-sm">
                  <h3 className="text-white text-xl font-bold mb-2 drop-shadow-lg">{feature.title}</h3>
                  <p className="text-white text-sm drop-shadow-md">{feature.description}</p>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>
      
      {/* Feature Modal */}
      <Modal
        isOpen={!!selectedFeature}
        onClose={() => setSelectedFeature(null)}
        title={selectedFeature?.details.title || ""}
      >
        <motion.div className="relative bg-amber-50/95 p-6 rounded-lg" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          {selectedFeature?.title === "Keynote Speakers" && selectedFeature.details.images && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              {selectedFeature.details.images.map((image, index) => (
                <div key={index} className="space-y-2">
                  <div className="relative aspect-square shadow-lg rounded-lg overflow-hidden">
                    <Image
                      src={image}
                      alt={`Speaker ${index + 1}`}
                      fill
                      className="rounded-lg object-cover hover:scale-105 transition-transform duration-300"
                      priority 
                    />
                  </div>
                  <div className="text-center">
                    <h4 className="text-lg font-semibold text-gray-800">
                      {selectedFeature?.details?.speakers?.[index]?.name || "Unknown Speaker"}
                    </h4>
                    <p className="text-sm text-gray-600 mt-1">
                      {selectedFeature?.details?.speakers?.[index]?.title || "No title available"}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          <p className="text-gray-700 leading-relaxed">{selectedFeature?.details.content}</p>
          <GlowButton className="mt-6 bg-amber-100 hover:bg-amber-200 text-gray-800" onClick={() => setSelectedFeature(null)}>
            Close
          </GlowButton>
        </motion.div>
      </Modal>
      {/* Add this new section */}
      <section className="relative py-20 min-h-screen">
        {/* Space background */}
        <div className="absolute inset-0">
          <Image
            src="/newspacebg.png"
            alt="Space"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-950/50 via-black/50 to-blue-950/50" />
        </div>

        {/* Animated stars overlay */}
        <div className="absolute inset-0">
          {[...Array(100)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-[2px] h-[2px] bg-white rounded-full"
              initial={{
                opacity: Math.random(),
                x: `${Math.random() * 100}%`,
                y: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0.2, 1, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </div>

        {/* Content container */}
        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl text-center font-bold text-white mb-12">
              Journey Through Space
            </h2>
          </motion.div>

          {/* Video player with glow effect */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-xl" />
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Spacetravel 
                videoSrc="/spacevid.mp4"
                videoTitle={
                  <a 
                    href="https://www.instagram.com/zeekuworld?igsh=YjU0cXR5amFvd2Jh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-400 text-white transition-colors duration-300"
                  >
                    Video credit - @zeekuworld
                  </a>
                }
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature Modal continues... */}
    </div>
  )
}

