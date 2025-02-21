import Image from "next/image"
import { DownloadButton } from "@/components/download-button"

export default function About() {
  return (
    <div className="pt-20 min-h-screen bg-black">
      <div className="container mx-auto px-4 py-12">
        {/* Event Info */}
        <section className="mb-20">
          <h1 className="font-press-start text-4xl md:text-5xl text-center mb-12 bg-gradient-to-r from-zenith-red to-zenith-blue bg-clip-text text-transparent">
            About Zenith
          </h1>

          <div className="max-w-4xl mx-auto text-gray-300 space-y-6">
            <p>
              Zenith E-Summit 2025 is MAIT's flagship entrepreneurship event, bringing together innovators,
              entrepreneurs, and industry leaders for two days of inspiration, learning, and networking.
            </p>
            <p>
              With our theme of "Retro Futurism," we're exploring how past visions of the future can inspire today's
              innovations and tomorrow's breakthroughs.
            </p>

            {/* Download Brochure Container */}
            <div className="mt-12 p-6 border border-zenith-purple/30 rounded-lg bg-black/50 backdrop-blur-sm">
              <div className="flex flex-col items-center space-y-4">
                <h3 className="font-press-start text-2xl text-zenith-purple">Event Brochure</h3>
                <p className="text-gray-400 text-center">
                  Download our detailed event brochure to learn more about speakers, workshops, and schedule.
                </p>
                <DownloadButton />
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section>
          <h2 className="font-press-start text-3xl text-center mb-12 text-zenith-purple">Event Timeline</h2>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
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
                },
                {
                  time: "4:00 PM",
                  date: "Mar 28, 2025",
                  title: "Closing Ceremony",
                  description: "Awards presentation and networking session",
                },
              ].map((event, index) => (
                <div key={index} className="relative pl-8 border-l border-zenith-red">
                  <div className="absolute w-4 h-4 bg-zenith-red rounded-full -left-2 mt-1" />
                  <div className="mb-1 text-zenith-blue font-press-start">
                    {event.time} - {event.date}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                  <p className="text-gray-400">{event.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

