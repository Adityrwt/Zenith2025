"use client"
import Image from "next/image"
import { DownloadButton } from "@/components/download-button"
import { useEffect, useRef } from "react"
import * as THREE from 'three'

// Neon Text Component
// Neon Text Component
interface NeonTextProps {
  children: React.ReactNode;
  className?: string;
}

const NeonText = ({ children, className = "" }: NeonTextProps) => {
  return (
    <h2 className={`font-press-start text-3xl relative ${className}`}>
      <span className="absolute blur-md opacity-70 text-pink-600">{children}</span>
      <span className="relative text-zenith-purple">{children}</span>
    </h2>
  )
}

// Retro-Futuristic Card
interface RetroCardProps {
  title: string;
  children: React.ReactNode;
}

const RetroCard = ({ title, children }: RetroCardProps) => {
  return (
    <div className="backdrop-blur-sm bg-black/20 border border-purple-500/30 rounded-lg p-6 shadow-lg hover:shadow-purple-500/20 transition-all duration-300 relative overflow-hidden">
      <div className="absolute -top-10 -right-10 w-24 h-24 bg-gradient-to-br from-purple-500/20 to-pink-500/20 blur-xl rounded-full"></div>
      <h3 className="text-xl font-bold mb-4 text-zinc">{title}</h3>
      <div className="text-gray-300 relative z-10">{children}</div>
      <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-zenith-purple to-zenith-blue w-full opacity-50"></div>
    </div>
  )
}

// Retro Pattern Background
const RetroPattern = () => {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
      <div className="absolute inset-0 grid grid-cols-[repeat(20,1fr)] grid-rows-[repeat(20,1fr)]">
        {Array(20).fill(undefined).map((_, i) => (
          <div key={`row-${i}`} className="grid grid-cols-[repeat(20,1fr)]">
            {Array(20).fill(undefined).map((_, j) => (
              <div 
                key={`${i}-${j}`} 
                className="border border-purple-500/30"
                style={{
                  opacity: Math.random() * 0.5 + 0.1
                }}
              />
            ))}
          </div>
        ))}
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-96 h-96 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 blur-3xl"></div>
      </div>
    </div>
  )
}

// Animated Circuit Lines
const CircuitLines = () => {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
      <svg width="100%" height="100%" className="absolute">
        <line x1="10%" y1="0" x2="10%" y2="100%" stroke="#8a2be2" strokeWidth="1" strokeDasharray="5,15" className="animate-pulse" />
        <line x1="30%" y1="0" x2="30%" y2="100%" stroke="#e83e8c" strokeWidth="1" strokeDasharray="10,20" className="animate-pulse" style={{animationDelay: '0.5s'}} />
        <line x1="70%" y1="0" x2="70%" y2="100%" stroke="#8a2be2" strokeWidth="1" strokeDasharray="7,13" className="animate-pulse" style={{animationDelay: '1s'}} />
        <line x1="90%" y1="0" x2="90%" y2="100%" stroke="#e83e8c" strokeWidth="1" strokeDasharray="4,12" className="animate-pulse" style={{animationDelay: '1.5s'}} />
        
        <line x1="0" y1="15%" x2="100%" y2="15%" stroke="#8a2be2" strokeWidth="1" strokeDasharray="8,12" className="animate-pulse" style={{animationDelay: '0.3s'}} />
        <line x1="0" y1="40%" x2="100%" y2="40%" stroke="#e83e8c" strokeWidth="1" strokeDasharray="6,14" className="animate-pulse" style={{animationDelay: '0.8s'}} />
        <line x1="0" y1="65%" x2="100%" y2="65%" stroke="#8a2be2" strokeWidth="1" strokeDasharray="9,11" className="animate-pulse" style={{animationDelay: '1.3s'}} />
        <line x1="0" y1="85%" x2="100%" y2="85%" stroke="#e83e8c" strokeWidth="1" strokeDasharray="5,15" className="animate-pulse" style={{animationDelay: '1.8s'}} />
      </svg>
    </div>
  )
}

// Retro Scanner Effect
const RetroScanner = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent h-20 animate-scanner"></div>
    </div>
  )
}

// Add this import at the top
import { motion, useScroll, useTransform } from "framer-motion"

// Add type definition for vanta effect
interface VantaEffect {
  destroy: () => void;
}

const About = () => {
  const vantaRef = useRef<HTMLDivElement>(null);
  const vantaEffect = useRef<VantaEffect | null>(null);
  
  // Add scroll animation logic
  const { scrollY } = useScroll()
  const textY = useTransform(scrollY, [0, 300], [0, 500])
  const textOpacity = useTransform(scrollY, [0, 200], [1, 0])

  useEffect(() => {
    const loadVanta = async () => {
      const FOG = (await import('vanta/dist/vanta.fog.min')).default;
      if (!vantaEffect.current && vantaRef.current) {
        vantaEffect.current = FOG({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          highlightColor: 0x7992ed,
          midtoneColor: 0xe14ecd,
          lowlightColor: 0xc4c0dc,
          speed: 2
        });
      }
    };
    
    loadVanta()
    
    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy()
      }
    }
  }, [])

  return (
    <div ref={vantaRef} className="relative">
      {/* Pattern Backgrounds */}
      <RetroPattern />
      <CircuitLines />
      <RetroScanner />
      
      <div className="pt-20 min-h-screen">
        <div className="container mx-auto px-4 py-12">
          {/* Event Info */}
          <section className="mb-20 relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-zenith-purple opacity-20 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute bottom-10 left-10 w-40 h-40 bg-zenith-blue opacity-10 rounded-full blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
            
            <motion.h1 
              style={{ y: textY, opacity: textOpacity }}
              className="font-retro-futurism text-7xl md:text-9xl text-center mb-12 bg-gradient-to-r from-stone-900 to-brown-600 bg-clip-text text-transparent relative"
            >
              <motion.span 
                style={{ y: textY, opacity: textOpacity }}
                className="absolute inset-0 text-7xl md:text-9xl text-center blur-sm text-purple-500/20 animate-pulse"
              >
                ZENITH
              </motion.span>
              ZENITH
            </motion.h1>

            <div className="grid md:grid-cols-2 gap-16">
              <div className="text-xl md:text-2xl mb-8 text-stone-700 col-span-2">
                <div className="text-center max-w-4xl mx-auto">
                  <p className="mb-4 relative">
                    Zenith E-Summit 2025 is MAIT's flagship entrepreneurship event, bringing together innovators,
                    entrepreneurs, and industry leaders for two days of inspiration, learning, and networking.
                  </p>
                  <p className="mb-8">
                    With our theme of "Retro Futurism," we're exploring how past visions of the future can inspire today's
                    innovations and tomorrow's breakthroughs.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Feature Cards */}
          <section className="mb-20">
            <NeonText className="text-center mb-12">EVENT FEATURES</NeonText>
            
            <div className="grid md:grid-cols-3 gap-6">
              <RetroCard title="Innovation Showcase">
                <p>Experience cutting-edge technologies and ideas from startups and established companies alike in our innovation zone.</p>
              </RetroCard>
              
              <RetroCard title="Networking Opportunities">
                <p>Connect with like-minded entrepreneurs, investors, and industry experts through our structured networking sessions.</p>
              </RetroCard>
              
              <RetroCard title="Retro-Future Exhibition">
                <p>Explore how past visions of the future have influenced current technology trends in our curated exhibition space.</p>
              </RetroCard>
            </div>
          </section>

          {/* Timeline with Retro Visual Element */}
          <section className="relative py-16">
            <div className="absolute -top-20 -left-20 w-40 h-40 bg-zenith-red opacity-10 rounded-full blur-xl"></div>
            
            <NeonText className="text-center mb-16">EVENT TIMELINE</NeonText>

            <div className="max-w-3xl mx-auto relative">
              <div className="absolute left-1/2 h-full w-px bg-gradient-to-b from-zenith-purple via-zenith-blue to-transparent"></div>
              <div className="space-y-16">
                {[
                  {
                    time: "10:00 AM",
                    date: "Mar 27, 2025",
                    title: "Opening Ceremony",
                    description: "Kickoff with keynote speakers and inaugural address",
                  },
                  {
                    time: "2:00 PM",
                    date: "Mar 27, 2025",
                    title: "Workshop Sessions",
                    description: "Interactive workshops on emerging technologies",
                  },
                  {
                    time: "10:00 AM",
                    date: "Mar 28, 2025",
                    title: "Panel Discussions",
                    description: "Industry experts share their insights",
                  },{
                    time: "10:00 AM",
                    date: "Mar 28, 2025",
                    title: "Panel Discussions",
                    description: "Industry experts share their insights",
                  },
                  
                  {
                    time: "4:00 PM",
                    date: "Mar 28, 2025",
                    title: "Closing Ceremony",
                    description: "Awards presentation and networking session",
                  },
                ].map((event, index) => (
                  <div key={index} 
                    className={`relative flex items-center gap-8 group ${
                      index % 2 === 0 ? 'flex-row-reverse' : ''
                    }`}
                  >
                    <div className="w-1/2 flex flex-col items-center">
                      <div className="absolute left-1/2 w-4 h-4 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full transform -translate-x-1/2 group-hover:scale-150 transition-all duration-300">
                        <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full animate-ping opacity-75"></div>
                      </div>
                      <div className="w-full p-8 backdrop-blur-sm rounded-[3rem] border border-white/20 transform transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] relative overflow-hidden"
                           style={{
                             background: index % 2 === 0 
                               ? 'linear-gradient(135deg, rgba(253, 230, 138, 0.1) 0%, rgba(252, 211, 77, 0.1) 100%)'
                               : 'linear-gradient(135deg, rgba(252, 211, 77, 0.1) 0%, rgba(251, 191, 36, 0.1) 100%)'
                           }}>
                        <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-yellow-100/5 blur-3xl"></div>
                        <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-yellow-100/5 blur-3xl"></div>
                        <div className="relative z-10">
                          <div className="font-press-start text-sm text-white/80 mb-2">
                            {event.time} - {event.date}
                          </div>
                          <h2 className="text-xl font-bold mb-2 bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent">
                            {event.title}
                          </h2>
                          <p className="text-white/70 font-medium">
                            {event.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          
          {/* Retro-Futuristic Quote */}
          <section className="mt-24 mb-12">
            <blockquote className="text-center max-w-3xl mx-auto relative py-10">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 to-pink-900/10 rounded-lg"></div>
              <p className="text-2xl italic text-white mb-4 relative z-10">
                "The future influences the present just as much as the past."
              </p>
              <footer className="text-zenith-blue">— Friedrich Nietzsche</footer>
            </blockquote>
          </section>
        </div>
      </div>
      
      {/* Decorative Vector Elements */}
      <div className="fixed top-20 right-10 pointer-events-none opacity-20">
        <svg width="100" height="100" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" fill="none" stroke="#e14ecd" strokeWidth="1" />
          <path d="M50 10 L50 90 M10 50 L90 50" stroke="#7992ed" strokeWidth="1" />
          <circle cx="50" cy="50" r="5" fill="#c4c0dc" />
          <circle cx="50" cy="30" r="3" fill="#e14ecd" />
          <circle cx="50" cy="70" r="3" fill="#e14ecd" />
          <circle cx="30" cy="50" r="3" fill="#7992ed" />
          <circle cx="70" cy="50" r="3" fill="#7992ed" />
        </svg>
      </div>
      <div className="fixed bottom-20 left-10 pointer-events-none opacity-10">
        <svg width="150" height="80" viewBox="0 0 150 80">
          <path d="M10 40 Q75 10 140 40" stroke="#e14ecd" strokeWidth="2" fill="none" />
          <path d="M10 40 Q75 70 140 40" stroke="#7992ed" strokeWidth="2" fill="none" />
          <circle cx="10" cy="40" r="5" fill="#c4c0dc" />
          <circle cx="140" cy="40" r="5" fill="#c4c0dc" />
          <circle cx="75" cy="10" r="3" fill="#e14ecd" />
          <circle cx="75" cy="70" r="3" fill="#7992ed" />
        </svg>
      </div>
    </div>
  )
}

export default About;