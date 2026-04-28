import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const navLinks = ['Home', 'Memories', 'Messages', 'Surprises']

export default function Navbar({ onPlayMusic, isPlaying }) {
  const [scrolled, setScrolled] = useState(false)
  const [activeLink, setActiveLink] = useState('Home')

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (link) => {
    setActiveLink(link)
    const el = document.getElementById(link.toLowerCase())
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#05030f]/90 backdrop-blur-xl border-b border-pink-900/30'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          className="flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
        >
          <span className="text-red-400 text-xl animate-pulse">💗</span>
          <span
            className="font-cursive text-lg font-bold"
            style={{ color: '#ff2d78' }}
          >
            For My Bestie
          </span>
        </motion.div>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <motion.button
              key={link}
              onClick={() => scrollToSection(link)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`font-body font-semibold text-sm transition-all duration-300 relative ${
                activeLink === link
                  ? 'text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {link}
              {activeLink === link && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full"
                  style={{ background: '#ff2d78' }}
                />
              )}
            </motion.button>
          ))}
        </div>

        {/* Play Music Button */}
        <motion.button
          onClick={onPlayMusic}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold font-body border transition-all duration-300"
          style={{
            borderColor: 'rgba(255,45,120,0.5)',
            background: 'rgba(255,45,120,0.1)',
            color: '#ff2d78',
            boxShadow: isPlaying ? '0 0 20px rgba(255,45,120,0.4)' : 'none',
          }}
        >
          <span className="text-base">{isPlaying ? '⏸️' : '🎵'}</span>
          {isPlaying ? 'Pause' : 'Play Music'}
        </motion.button>
      </div>
    </motion.nav>
  )
}