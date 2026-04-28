import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'

const steps = [
  {
    icon: '🎉',
    title: '1. Make a Wish',
    desc: 'Close your eyes and make a wish ✨',
  },
  {
    icon: '🎂',
    title: '2. Blow the Candles',
    desc: 'Blow the candles and make it come true 🕯️',
  },
  {
    icon: '💗',
    title: '3. Enjoy the Day',
    desc: 'Enjoy your special day to the fullest! ❤️',
  },
  {
    icon: '📸',
    title: '4. Make Memories',
    desc: 'Capture every moment and cherish always 🤩',
  },
  {
    icon: '🎁',
    title: '5. Open Surprises',
    desc: 'There are some special surprises for you! 🎊',
  },
]

export default function CelebrateSection() {
  const heartsRef = useRef(null)

  // 💖 FLOATING HEARTS (NO ERROR)
  useEffect(() => {
    const container = heartsRef.current
    if (!container) return

    const particles = []

    for (let i = 0; i < 20; i++) {
      const el = document.createElement("span")

      el.textContent = "💖"

      el.style.cssText = `
        position: absolute;
        left: ${Math.random() * 100}%;
        bottom: -20px;
        font-size: ${Math.random() * 18 + 12}px;
        color: #ff2d78;
        opacity: 0.7;
        animation: floatHeart ${Math.random() * 6 + 6}s linear infinite;
        animation-delay: ${Math.random() * -10}s;
        pointer-events: none;
        z-index: 5;
        filter: drop-shadow(0 0 10px #ff2d78);
      `

      container.appendChild(el)
      particles.push(el)
    }

    return () => particles.forEach((el) => el.remove())
  }, [])

  return (
    <section
      id="surprises"
      className="relative py-24 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #05030f 0%, #0a0520 100%)' }}
    >
      {/* 💖 HEARTS LAYER (ADDED) */}
      <div
        ref={heartsRef}
        className="absolute inset-0 pointer-events-none overflow-hidden"
      />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 50% 60% at 50% 30%, rgba(185,79,255,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-6xl mx-auto px-4">
        {/* Title */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4">
            <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(255,45,120,0.5))' }} />
            <span style={{ color: '#b94fff' }}>✦</span>
            <h2
              className="font-cursive text-4xl md:text-5xl whitespace-nowrap"
              style={{ color: '#ff2d78', textShadow: '0 0 20px rgba(255,45,120,0.6)' }}
            >
              Let's Celebrate! 🎊
            </h2>
            <span style={{ color: '#b94fff' }}>✦</span>
            <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, rgba(255,45,120,0.5), transparent)' }} />
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          <div
            className="absolute top-10 left-0 right-0 h-px hidden md:block"
            style={{ background: 'linear-gradient(90deg, transparent, rgba(255,45,120,0.6), rgba(185,79,255,0.6), transparent)' }}
          />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.6 }}
                className="flex flex-col items-center text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.15, rotate: [0, -5, 5, 0] }}
                  transition={{ duration: 0.4 }}
                  className="relative w-20 h-20 rounded-full flex items-center justify-center text-3xl mb-4 cursor-pointer"
                  style={{
                    background: 'rgba(255,45,120,0.12)',
                    border: '2px solid rgba(255,45,120,0.5)',
                    boxShadow: '0 0 20px rgba(255,45,120,0.2)',
                  }}
                >
                  {step.icon}

                  <motion.div
                    className="absolute inset-0 rounded-full"
                    animate={{ scale: [1, 1.4], opacity: [0.5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                    style={{ border: '2px solid rgba(255,45,120,0.5)' }}
                  />
                </motion.div>

                <h3 className="font-body font-bold text-white text-sm mb-2">{step.title}</h3>
                <p className="font-body text-gray-400 text-xs leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center mt-16 font-body text-gray-500 text-sm"
        >
          Made with{' '}
          <motion.span
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 0.8, repeat: Infinity }}
            className="inline-block"
            style={{ color: '#ff2d78' }}
          >
            💗
          </motion.span>
          {' '}for an amazing person
        </motion.p>
      </div>
    </section>
  )
}