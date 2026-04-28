import { useEffect, useRef } from 'react'

export default function FireworksCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animationId
    let particles = []

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    class Particle {
      constructor(x, y, color) {
        this.x = x
        this.y = y
        this.color = color
        const angle = Math.random() * Math.PI * 2
        const speed = Math.random() * 4 + 1
        this.vx = Math.cos(angle) * speed
        this.vy = Math.sin(angle) * speed
        this.life = 1
        this.decay = Math.random() * 0.02 + 0.01
        this.size = Math.random() * 3 + 1
        this.gravity = 0.05
        this.trail = []
      }

      update() {
        this.trail.push({ x: this.x, y: this.y })
        if (this.trail.length > 8) this.trail.shift()
        this.x += this.vx
        this.y += this.vy
        this.vy += this.gravity
        this.vx *= 0.98
        this.vy *= 0.98
        this.life -= this.decay
      }

      draw() {
        // Draw trail
        for (let i = 0; i < this.trail.length; i++) {
          const alpha = (i / this.trail.length) * this.life * 0.5
          ctx.beginPath()
          ctx.arc(this.trail[i].x, this.trail[i].y, this.size * (i / this.trail.length) * 0.5, 0, Math.PI * 2)
          ctx.fillStyle = this.color.replace(')', `, ${alpha})`).replace('rgb', 'rgba')
          ctx.fill()
        }

        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fillStyle = this.color.replace(')', `, ${this.life})`).replace('rgb', 'rgba')
        ctx.fill()

        // Glow
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size * 2, 0, Math.PI * 2)
        const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size * 2)
        gradient.addColorStop(0, this.color.replace(')', `, ${this.life * 0.5})`).replace('rgb', 'rgba'))
        gradient.addColorStop(1, 'rgba(0,0,0,0)')
        ctx.fillStyle = gradient
        ctx.fill()
      }
    }

    const colors = [
      'rgb(255, 45, 120)',
      'rgb(185, 79, 255)',
      'rgb(255, 107, 43)',
      'rgb(0, 212, 255)',
      'rgb(255, 200, 50)',
      'rgb(255, 100, 180)',
    ]

    const explode = (x, y) => {
      const color = colors[Math.floor(Math.random() * colors.length)]
      const count = Math.floor(Math.random() * 60) + 60
      for (let i = 0; i < count; i++) {
        particles.push(new Particle(x, y, color))
      }
    }

    // Auto launch fireworks
    const launchRandom = () => {
      const x = Math.random() * canvas.width
      const y = Math.random() * canvas.height * 0.6 + 20
      explode(x, y)
    }

    let interval = setInterval(launchRandom, 1200)

    // Click to explode
    canvas.addEventListener('click', (e) => {
      const rect = canvas.getBoundingClientRect()
      explode(e.clientX - rect.left, e.clientY - rect.top)
    })

    const animate = () => {
      ctx.fillStyle = 'rgba(5, 3, 15, 0.15)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      particles = particles.filter((p) => p.life > 0)
      particles.forEach((p) => {
        p.update()
        p.draw()
      })

      animationId = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      cancelAnimationFrame(animationId)
      clearInterval(interval)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ pointerEvents: 'auto', zIndex: 1 }}
    />
  )
}