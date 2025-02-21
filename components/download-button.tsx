"use client"

export function DownloadButton() {
  return (
    <button 
      onClick={() => window.open('/brochure.pdf', '_blank')}
      className="px-6 py-3 bg-gradient-to-r from-zenith-red to-zenith-purple rounded-md font-press-start text-sm hover:opacity-90 transition-opacity flex items-center space-x-2"
    >
      <span>Download Brochure</span>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
      </svg>
    </button>
  )
}