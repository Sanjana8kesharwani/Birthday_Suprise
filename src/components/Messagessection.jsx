import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'

const reasons = [
  { icon: '💯', text: 'You understand me like no one else' },
  { icon: '😂', text: "You're my partner in all the craziness" },
  { icon: '😊', text: 'You always know how to make me smile' },
  { icon: '✨', text: "You're beautiful inside and out" },
  { icon: '🌍💙', text: 'You deserve the world and more' },
]

export default function MessagesSection() {
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
        font-size: ${Math.random() * 16 + 10}px;
        color: #ff2d78;
        opacity: 0.6;
        animation: floatHeart ${Math.random() * 7 + 6}s linear infinite;
        animation-delay: ${Math.random() * -10}s;
        pointer-events: none;
        z-index: 5;
        filter: drop-shadow(0 0 6px #ff2d78);
      `

      container.appendChild(el)
      particles.push(el)
    }

    return () => particles.forEach((el) => el.remove())
  }, [])

  return (
    <section
      id="messages"
      className="relative py-24 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #05030f 0%, #0a0218 50%, #05030f 100%)' }}
    >
      {/* 💖 HEARTS LAYER (ADDED) */}
      <div
        ref={heartsRef}
        className="absolute inset-0 pointer-events-none overflow-hidden"
      />

      {/* Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 30% 50%, rgba(255,45,120,0.07) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 70% 50%, rgba(185,79,255,0.07) 0%, transparent 60%)',
        }}
      />

      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Special Message Card */}
          <motion.div
            initial={{ x: -60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative rounded-3xl p-8 overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(255,45,120,0.08) 0%, rgba(185,79,255,0.08) 100%)',
              border: '1px solid rgba(255,45,120,0.25)',
              boxShadow: '0 0 40px rgba(255,45,120,0.1)',
            }}
          >
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute left-6 top-1/2 -translate-y-1/2 text-7xl opacity-80"
              style={{ filter: 'drop-shadow(0 0 15px rgba(255,107,43,0.6))' }}
            >
              🎂
            </motion.div>

            <div className="absolute top-4 left-24 text-pink-500/20 text-5xl font-bold select-none">♥</div>
            <div className="absolute bottom-4 left-16 text-purple-500/20 text-3xl font-bold select-none">♥</div>

            <div className="ml-24">
              <h3
                className="font-cursive text-2xl mb-4"
                style={{ color: '#ff2d78', textShadow: '0 0 15px rgba(255,45,120,0.5)' }}
              >
                A Special Message For You 💌
              </h3>
              <p className="font-body text-gray-300 leading-relaxed text-sm mb-4">
                You are not just my friend, you are my person.
                <br />
                Thank you for being there in every up and down,
                <br />
                for the endless talks, the crazy memories,
                <br />
                and for making life so much better.
                <br />
                <br />
                I hope this year brings you endless happiness,
                <br />
                success and all the love you deserve. ✨
              </p>
              <p
                className="font-cursive text-lg"
                style={{ color: '#ff2d78' }}
              >
                Happy Birthday, my favorite human! 💗
              </p>
            </div>
          </motion.div>

          {/* Reasons Card */}
          <motion.div
            initial={{ x: 60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative rounded-3xl p-8 overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(185,79,255,0.08) 0%, rgba(255,45,120,0.08) 100%)',
              border: '1px solid rgba(185,79,255,0.25)',
              boxShadow: '0 0 40px rgba(185,79,255,0.1)',
            }}
          >
            <motion.div
              animate={{ y: [0, -8, 0], rotate: [0, -5, 5, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute right-6 top-1/2 -translate-y-1/2 text-7xl opacity-80"
              style={{ filter: 'drop-shadow(0 0 15px rgba(185,79,255,0.6))' }}
            >
              🎁
            </motion.div>

            <div className="absolute top-4 right-24 text-pink-500/20 text-4xl select-none">♥</div>

            <div className="mr-20">
              <h3
                className="font-cursive text-2xl mb-6"
                style={{ color: '#b94fff', textShadow: '0 0 15px rgba(185,79,255,0.5)' }}
              >
                Reasons You're The Best 😎
              </h3>

              <div className="space-y-4">
                {reasons.map((r, i) => (
                  <motion.div
                    key={i}
                    initial={{ x: 20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + 0.3 }}
                    className="flex items-center gap-3"
                  >
                    <div
                      className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: 'rgba(255,45,120,0.25)', border: '1px solid rgba(255,45,120,0.5)' }}
                    >
                      <span className="text-xs" style={{ color: '#ff2d78' }}>♥</span>
                    </div>
                    <span className="font-body text-gray-200 text-sm">
                      {r.text} {r.icon}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}