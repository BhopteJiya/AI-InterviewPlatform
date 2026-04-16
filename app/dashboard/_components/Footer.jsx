import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 mt-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">

        {/* Left */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h2 className="text-lg font-semibold text-white">
            AI Interview Platform
          </h2>
          <p className="text-sm text-gray-400">
            Practice smarter. Get better.
          </p>
        </div>

        {/* Center Links */}
        <div className="flex gap-6 text-sm">
          <a href="#" className="hover:text-white transition">About</a>
          <a href="#" className="hover:text-white transition">Contact</a>
          <a href="#" className="hover:text-white transition">Privacy</a>
        </div>

        {/* Right */}
        <div className="text-sm text-gray-400 mt-4 md:mt-0">
          © {new Date().getFullYear()} All rights reserved
        </div>

      </div>
    </footer>
  )
}

export default Footer