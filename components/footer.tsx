import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-pink-100/90 via-blue-50/80 to-blue-100/90 backdrop-blur-md border-t border-pink-200/30">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-sm">
          <div>
            <h3 className="font-press-start text-base mb-3 bg-gradient-to-r from-pink-300 via-pink-400 to-blue-400 bg-clip-text text-transparent">Contact</h3>
            <p className="text-gray-600 text-sm">MAIT, EDC Cell</p>
            <p className="text-gray-600 text-sm">Delhi, India</p>
            <p className="text-gray-600 text-sm hover:text-pink-400 transition-colors">edc@mait.ac.in</p>
          </div>
          
          <div>
            <h3 className="font-press-start text-base mb-3 bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent">Links</h3>
            <ul className="space-y-1">
              {["About", "Events", "Register"].map((item) => (
                <li key={item}>
                  <Link 
                    href={`/${item.toLowerCase()}`} 
                    className="text-sm text-gray-600 hover:text-blue-400 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1">
            <h3 className="font-press-start text-base mb-3 bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent">Social</h3>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a 
                  key={i}
                  href="#" 
                  className="text-gray-600 hover:text-pink-400 transition-colors"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-pink-200/30 text-center">
          <p className="text-xs text-gray-600">© {new Date().getFullYear()} Zenith E-Summit</p>
        </div>
      </div>
    </footer>
  )
}

