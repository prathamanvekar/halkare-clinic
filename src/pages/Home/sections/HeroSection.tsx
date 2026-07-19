import { useState, useEffect, useRef } from "react";
import heroimg from "@/assets/hero.jpg";
export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      style={{
        backgroundImage: `url(${heroimg})`,
        backgroundSize: "cover",
        backgroundPosition: "50% 50%",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        color: "rgb(74, 74, 74)",
        fontFamily: "Lato",
        animation: "none 0s ease 0s 1 normal none running",
        position: "relative",
      }}
      className="w-full"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500&family=Lato:wght@300;400&family=Poppins:wght@400;600&display=swap');
        @keyframes slide {
          100% { transform: translateX(1.3em); }
        }
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 18px;
          border-radius: 999px;
          border: 1px solid rgba(240, 186, 5, 0.4);
          background: rgba(0, 6, 34, 0.55);
        }
        .hero-scroll-cue {
          position: absolute;
          left: 50%;
          bottom: 22px;
          transform: translateX(-50%);
          z-index: 2;
          opacity: 0.75;
          animation: hero-scroll-bounce 2s ease-in-out infinite;
        }
        @keyframes hero-scroll-bounce {
          0%, 100% { transform: translate(-50%, 0); opacity: 0.4; }
          50% { transform: translate(-50%, 8px); opacity: 0.9; }
        }
      `}</style>

      <div
        style={{
          background:
            "linear-gradient(180deg, rgba(0,6,34,0.5) 0%, rgba(0,6,34,0.72) 55%, rgba(0,6,34,0.86) 100%)",
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          transition: "background 0.3s, border-radius 0.3s, opacity 0.3s",
          zIndex: 1,
        }}
      />

      <div
        className="relative z-10 w-full"
        style={{
          paddingTop: "clamp(110px, 9vw, 170px)",
          paddingBottom: "clamp(110px, 9vw, 170px)",
          minHeight: "78vh",
        }}
      >
        <div className="page-container">
          <div
            className={`flex flex-col items-center justify-center w-full transition-all duration-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <h1
              style={{
                margin: "0 0 24px 0",
              }}
            >
              <span
                className="hero-badge"
                style={{
                  color: "rgb(240, 186, 5)",
                  fontFamily: "Oswald",
                  fontSize: "16px",
                  fontWeight: "400",
                  letterSpacing: "0.5px",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="rgb(240, 186, 5)"
                  stroke="none"
                >
                  <path d="M12 2l2.9 6.26L21.5 9l-5 4.87L17.8 21 12 17.77 6.2 21l1.3-7.13-5-4.87 6.6-.74L12 2z" />
                </svg>
                30 years of experience and counting...
              </span>
            </h1>

            <h2
              style={{
                color: "rgb(255, 255, 255)",
                fontFamily: "Oswald, sans-serif",
                fontSize: "clamp(2rem, 4.5vw, 72px)",
                fontWeight: "400",
                lineHeight: "1.35em",
                letterSpacing: "1px",
                border: "0px none rgb(255, 255, 255)",
                textTransform: "uppercase",
                textAlign: "center",
                textShadow: "0 4px 24px rgba(0, 0, 0, 0.35)",
                animation: "none 0s ease 0s 1 normal none running",
                marginBottom: "12px",
              }}
            >
              Ethics. Empathy. Experience.
              <br />
              Economy. Efficiency
            </h2>

            <h1
              style={{
                color: "rgb(255, 255, 255)",
                fontFamily: "Oswald",
                fontSize: "clamp(1.5rem, 3vw, 44px)",
                fontWeight: "400",
                lineHeight: "1.2",
                border: "0px none rgb(255, 255, 255)",
                textAlign: "center",
                animation: "none 0s ease 0s 1 normal none running",
                marginBottom: "28px",
              }}
            >
              Dental clinic with a lot of character
            </h1>

            <a
              href="#about"
              style={{
                color: "rgb(4, 21, 88)",
                fontFamily: "Lato",
                fontSize: "15px",
                fontWeight: "600",
                lineHeight: "15px",
                backgroundColor: "rgb(255, 184, 4)",
                borderRadius: "6px",
                border: "0px none rgb(4, 21, 88)",
                padding: "14px 28px",
                textAlign: "center",
                display: "inline-block",
                textDecoration: "none",
                cursor: "pointer",
                boxShadow: "0 4px 14px rgba(255, 184, 4, 0.35)",
                transition: "all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)",
                transform: "translateZ(0)",
                backfaceVisibility: "hidden",
                willChange: "transform",
              }}
              className="hero-cta-btn transform-gpu backface-hidden hover:translate-y-[-2px] hover:scale-105 active:scale-95"
            >
              <span style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
                Read More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </span>
            </a>
          </div>
        </div>

        <div className="hero-scroll-cue" aria-hidden="true">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="rgba(255, 255, 255, 0.85)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </div>
    </section>
  );
}
