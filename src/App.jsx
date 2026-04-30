import { useRef, useState } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/Herosection";
import MemoriesSection from "./components/Memoriessection";
import MessagesSection from "./components/Messagessection";
import CelebrateSection from "./components/Celebratesection";
import FinalSurprise from "./components/FinalSurprise";

export default function App() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [started, setStarted] = useState(false);

  // CURSOR STATE
  const [cursor, setCursor] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setCursor({
      x: e.clientX,
      y: e.clientY,
    });
  };

  const startExperience = async () => {
    setStarted(true);

    if (!audioRef.current) return;

    try {
      await audioRef.current.play();
      setIsPlaying(true);
    } catch (e) {
      console.log("Autoplay blocked", e);
    }
  };

  const handleMusic = async () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      try {
        await audioRef.current.play();
        setIsPlaying(true);
      } catch (e) {
        console.log("Play failed", e);
      }
    }
  };

  return (
    <div onMouseMove={handleMouseMove}>
      <audio ref={audioRef} src="/song.mp3" loop />

      {!started && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-white">
          <div className="absolute inset-0 bg-gradient-to-br from-pink-900/30 to-purple-900/30 blur-3xl" />

          <div className="relative z-10 text-center">
            <h1 className="text-4xl mb-4 text-pink-500 neon-text-pink">
              🎉 A Special Surprise 🎉
            </h1>

            <p className="text-gray-200 mb-6 text-base leading-relaxed font-medium tracking-wide italic">
              <span className="text-pink-400 font-semibold text-xl">
                Happy Birthday, Aditi ❤️
              </span>{" "}
              <br />
              <br />
              You’re not just my best friend, you’re my jaan, my safe place, and
              truly like a sister to me. Life feels lighter and happier because
              you’re in it. <br />
              <br />
              I may not always say it, but you mean more to me than words can
              ever express. I’m so grateful to have you by my side. <br />
              <br />
              I pray you get all the happiness, love, and success you deserve.
              May you always stay smiling, strong, and shining just the way you
              are. <br />
              <br />
              <span className="text-pink-300 font-semibold">
                Love you forever, Meri jaan 💕
              </span>
            </p>

            <button
              onClick={startExperience}
              className="px-8 py-4 rounded-full text-lg font-semibold bg-pink-600 hover:bg-pink-500 transition transform hover:scale-105"
            >
              💖 Tap to Start 💖
            </button>
          </div>
        </div>
      )}

      <Navbar onPlayMusic={handleMusic} isPlaying={isPlaying} />
      <HeroSection />
      <MemoriesSection />
      <MessagesSection />
      <CelebrateSection />
      <FinalSurprise />

      {/* 🔥 CURSOR GLOW */}
      <div
        style={{
          position: "fixed",
          top: cursor.y,
          left: cursor.x,
          width: "20px",
          height: "20px",
          borderRadius: "50%",
          background: "rgba(255,45,120,0.6)",
          pointerEvents: "none",
          transform: "translate(-50%, -50%)",
          boxShadow:
            "0 0 20px rgba(255,45,120,0.8), 0 0 40px rgba(255,45,120,0.6)",
          zIndex: 9999,
          transition: "all 0.08s linear",
        }}
      />
    </div>
  );
}
