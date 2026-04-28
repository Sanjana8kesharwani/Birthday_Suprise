import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

// images
import img1 from "../assets/img1.jpeg";
import img2 from "../assets/img2.jpeg";
import img3 from "../assets/img3.jpeg";
import img4 from "../assets/img4.jpeg";
import img5 from "../assets/img5.jpeg";
import img6 from "../assets/img6.jpeg";
import img7 from "../assets/img7.jpeg";
import img8 from "../assets/img8.jpeg";
import img9 from "../assets/img9.jpeg";

const memories = [
  { id: 1, image: img1, caption: "Birthday moment ❤️" },
  { id: 2, image: img2, caption: "Best day 😂" },
  { id: 3, image: img3, caption: " Queen vibes 👑" },
  { id: 4, image: img4, caption: "Golden memory ✨" },
  { id: 5, image: img5, caption: "Cute image💖" },
  { id: 6, image: img6, caption: "Fun time 🤪" },
  { id: 7, image: img7, caption: "Special day 🎉" },
  { id: 8, image: img8, caption: "BFF forever 🫶" },
  { id: 9, image: img9, caption: "Unforgettable ❤️" },
];

export default function MemoriesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);
  const heartsRef = useRef(null);

  const visible = 3;

  const paginate = (newDir) => {
    setDirection(newDir);
    setCurrentIndex(
      (prev) => (prev + newDir + memories.length) % memories.length
    );
  };

  // AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      paginate(1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // 💖 FLOATING HEARTS (NO REACT ERROR)
  useEffect(() => {
    const container = heartsRef.current;
    if (!container) return;

    const particles = [];

    for (let i = 0; i < 25; i++) {
      const el = document.createElement("span");

      el.textContent = "💖";

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
      `;

      container.appendChild(el);
      particles.push(el);
    }

    return () => particles.forEach((el) => el.remove());
  }, []);

  const visibleMemories = Array.from({ length: visible + 2 }, (_, i) => {
    return memories[(currentIndex + i - 1 + memories.length) % memories.length];
  });

  return (
    <>
      {/* FULLSCREEN MODAL */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt=""
            className="max-w-[90%] max-h-[90%] rounded-xl"
          />
        </div>
      )}

      <section
        id="memories"
        className="relative py-24 overflow-hidden"
        style={{
          background:
            "linear-gradient(180deg, #05030f 0%, #0d0225 50%, #05030f 100%)",
        }}
      >
        {/* 💖 HEART CONTAINER */}
        <div
          ref={heartsRef}
          className="absolute inset-0 pointer-events-none overflow-hidden"
        />

        {/* Glow bg */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 50% 40% at 50% 50%, rgba(185,79,255,0.08) 0%, transparent 70%)",
          }}
        />

        <div className="max-w-7xl mx-auto px-4">
          {/* Title */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h2
              className="text-4xl md:text-5xl"
              style={{
                color: "#ff2d78",
                textShadow: "0 0 20px rgba(255,45,120,0.6)",
              }}
            >
              ✦ Our Beautiful Memories ✦
            </h2>
          </motion.div>

          {/* Carousel */}
          <div className="relative flex items-center justify-center gap-4">
            <button
              onClick={() => paginate(-1)}
              className="z-10 w-12 h-12 rounded-full text-xl"
              style={{
                background: "rgba(255,45,120,0.2)",
                color: "#ff2d78",
              }}
            >
              ‹
            </button>

            <div className="flex gap-4 overflow-hidden" style={{ maxWidth: "900px" }}>
              {visibleMemories.map((mem, i) => {
                const isCenter =
                  i === Math.floor(visibleMemories.length / 2);

                return (
                  <motion.div
                    key={mem.id + "-" + i}
                    initial={{ x: direction * 100, opacity: 0 }}
                    animate={{
                      x: 0,
                      scale: isCenter ? 1.1 : 0.9,
                      opacity: isCenter ? 1 : 0.5,
                    }}
                    transition={{ duration: 0.4 }}
                    className="relative rounded-2xl overflow-hidden flex-shrink-0 group cursor-pointer"
                    style={{
                      width: "180px",
                      height: "240px",
                      border: isCenter
                        ? "2px solid rgba(255,45,120,0.8)"
                        : "1px solid rgba(255,255,255,0.1)",
                    }}
                    onClick={() => setSelectedImage(mem.image)}
                  >
                    <div className="absolute inset-0">
                      <img
                        src={mem.image}
                        alt=""
                        className="w-full h-full object-cover blur-xl scale-125 opacity-30"
                      />
                    </div>

                    <div className="relative w-full h-full flex items-center justify-center bg-black">
                      <img
                        src={mem.image}
                        alt=""
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>

                    <div className="absolute bottom-0 w-full bg-black/50 text-xs p-2 text-center opacity-0 group-hover:opacity-100 transition">
                      {mem.caption}
                    </div>

                    {isCenter && (
                      <div className="absolute top-2 right-2 text-xs bg-pink-500 px-2 py-1 rounded">
                        ✨
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>

            <button
              onClick={() => paginate(1)}
              className="z-10 w-12 h-12 rounded-full text-xl"
              style={{
                background: "rgba(255,45,120,0.2)",
                color: "#ff2d78",
              }}
            >
              ›
            </button>
          </div>
        </div>
      </section>
    </>
  );
}