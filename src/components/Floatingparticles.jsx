import { useEffect, useRef } from 'react'

export default function FloatingParticles({ count = 30 }) {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const particles = []

    // 💖 ONLY HEARTS 
    const shapes = ['💖', '💗', '💕', '💘']

    for (let i = 0; i < count; i++) {
      const el = document.createElement('span')

      const shape = shapes[Math.floor(Math.random() * shapes.length)]
      el.textContent = shape

      el.style.cssText = `
        position: absolute;
        left: ${Math.random() * 100}%;
        bottom: -20px;
        font-size: ${Math.random() * 18 + 12}px;
        color: #ff2d78;
        opacity: 0.8;
        animation: floatHeart ${Math.random() * 6 + 6}s linear infinite;
        animation-delay: ${Math.random() * -10}s;
        pointer-events: none;
        z-index: 10; 
        filter: drop-shadow(0 0 8px #ff2d78);
      `

      container.appendChild(el)
      particles.push(el)
    }

    return () => particles.forEach((el) => el.remove())
  }, [count])

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none"
    />
  )
}