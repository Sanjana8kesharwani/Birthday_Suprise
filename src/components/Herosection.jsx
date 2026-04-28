import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import FireworksCanvas from "../components/Fireworkscanvas";
import FloatingParticles from "../components/Floatingparticles";

export default function HeroSection() {
  const scrollDown = () => {
    const el = document.getElementById("memories");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  // TYPING EFFECT
  const fullText =
    "Wishing you a day filled with love, laughter,\nhappiness and all your favorite things! 🎉❤️";

  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let i = 0;

    const interval = setInterval(() => {
      setDisplayText(fullText.slice(0, i + 1));
      i++;

      if (i === fullText.length) clearInterval(interval);
    }, 40);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #05030f 0%, #0a0520 50%, #05030f 100%)",
      }}
    >
      {/* Background radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 40%, rgba(185,79,255,0.15) 0%, transparent 70%)",
        }}
      />

      {/* Fireworks */}
      <div className="absolute inset-0">
        <FireworksCanvas />
      </div>

      {/* Floating particles */}
      <FloatingParticles count={25} />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4">
        {/* Main title */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.175, 0.885, 0.32, 1.275] }}
          className="mb-4"
        >
          <h1 className="font-display leading-tight select-none" style={{
            fontSize: "clamp(3.5rem, 10vw, 7rem)",
            background: "linear-gradient(135deg, #ff2d78 0%, #ff6b9d 40%, #ff2d78 60%, #b94fff 100%)",
            backgroundSize: "200% auto",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            filter: "drop-shadow(0 0 30px rgba(255,45,120,0.8))",
            animation: "shimmer 3s linear infinite",
          }}>
            Happy
          </h1>

          <h1 className="font-display leading-tight select-none" style={{
            fontSize: "clamp(3.5rem, 10vw, 7rem)",
            background: "linear-gradient(135deg, #ff2d78 0%, #ff6b9d 40%, #ff2d78 60%, #b94fff 100%)",
            backgroundSize: "200% auto",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            filter: "drop-shadow(0 0 30px rgba(255,45,120,0.8))",
            animation: "shimmer 3s linear infinite",
          }}>
            Birthday!
          </h1>

          <h2
            className="font-cursive mt-4"
            style={{
              fontSize: "clamp(5rem, 5vw, 3rem)",
              color: "#ff6b9d",
              textShadow: "0 0 20px rgba(255,107,157,0.6)",
            }}
          >
            Aditi 💖
          </h2>
        </motion.div>

        {/* Floating heart */}
        <motion.span
          animate={{ y: [0, -10, 0], rotate: [0, 10, -10, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[12%] right-[20%] text-4xl"
          style={{ filter: "drop-shadow(0 0 15px rgba(255,45,120,0.8))" }}
        >
          🤍
        </motion.span>

        {/* 🔥 TYPING SUBTITLE */}
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="text-gray-300 font-body text-lg md:text-xl max-w-lg mb-8 leading-relaxed whitespace-pre-line"
        >
          {displayText}
        </motion.p>

        {/* CTA Button */}
        <motion.button
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.7 }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 40px rgba(255,45,120,0.8)",
          }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollDown}
          className="font-body font-bold text-lg px-10 py-4 rounded-full text-white relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #ff2d78, #b94fff)",
            boxShadow: "0 0 25px rgba(255,45,120,0.5)",
          }}
        >
          <span className="relative z-10">Start the Celebration 🎊</span>
        </motion.button>

        {/* Scroll indicator */}
        <motion.button
          onClick={scrollDown}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="mt-10 text-gray-400 hover:text-white"
        >
          ↓
        </motion.button>
      </div>
    </section>
  );
}