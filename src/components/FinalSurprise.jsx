import { useEffect, useState } from "react";

export default function FinalSurprise() {
  const [show, setShow] = useState(false);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 50;

      if (scrolled && !triggered) {
        setTriggered(true);
        setTimeout(() => {
          setShow(true);
        }, 2000);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [triggered]);

  useEffect(() => {
    if (!show) return;

    const container = document.getElementById("confetti-root");
    if (!container) return;

    const pieces = [];

    for (let i = 0; i < 60; i++) {
      const el = document.createElement("span");

      el.textContent = "🎉";

      el.style.cssText = `
        position: fixed;
        top: -20px;
        left: ${Math.random() * 100}%;
        font-size: ${Math.random() * 14 + 10}px;
        animation: confettiFall ${Math.random() * 3 + 3}s linear forwards;
        pointer-events: none;
        z-index: 9999;
      `;

      container.appendChild(el);
      pieces.push(el);
    }

    setTimeout(() => {
      pieces.forEach((el) => el.remove());
    }, 5000);
  }, [show]);

  const handleClose = () => {
    setShow(false);

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!show) return null;

  return (
    <>
      <div id="confetti-root" />

      <div className="fixed inset-0 z-[9998] flex items-center justify-center bg-black/80 backdrop-blur">
        <div className="text-center px-6 py-10 rounded-2xl bg-gradient-to-br from-pink-600/20 to-purple-600/20 border border-pink-500/30">
          
          <h2 className="text-3xl text-pink-400 mb-4">
            🎁 A Final Surprise 🎁
          </h2>

          <p className="text-gray-300 mb-4">
            You are not just my best friend…  
            you are my comfort, my happiness, my safe place 💖
          </p>

          <p className="text-pink-400 text-lg font-semibold">
            I’ll always be there for you ❤️
          </p>

          <button
            onClick={handleClose}
            className="mt-6 px-6 py-2 bg-pink-500 rounded-full hover:bg-pink-400 transition"
          >
            Close 💖
          </button>
        </div>
      </div>
    </>
  );
}