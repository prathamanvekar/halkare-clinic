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
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300;400&family=Lato:wght@300;400&family=Poppins:wght@400;600&display=swap');
        @keyframes slide {
          100% { transform: translateX(1.3em); }
        }
      `}</style>

      <div
        style={{
          backgroundColor: "rgb(0, 6, 34)",
          backgroundPosition: "0% 0%",
          backgroundRepeat: "repeat",
          color: "rgb(74, 74, 74)",
          fontFamily: "Lato",
          animation: "none 0s ease 0s 1 normal none running",
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.72,
          transition: "background 0.3s, border-radius 0.3s, opacity 0.3s",
          zIndex: 1,
        }}
      />

      <div
        className="relative z-10 w-full"
        style={{
          paddingTop: "clamp(60px, 7vw, 120px)",
          paddingBottom: "clamp(60px, 7vw, 120px)",
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
                color: "rgb(240, 186, 5)",
                fontFamily: "Oswald",
                fontSize: "28px",
                fontWeight: "400",
                lineHeight: "28px",
                border: "0px none rgb(240, 186, 5)",
                textAlign: "center",
                animation: "none 0s ease 0s 1 normal none running",
                marginBottom: "20px",
              }}
            >
              28 years of experience and counting...
            </h1>

            <h2
              style={{
                color: "rgb(255, 255, 255)",
                fontFamily: "Oswald, sans-serif",
                fontSize: "clamp(2rem, 4.5vw, 72px)",
                fontWeight: "300",
                lineHeight: "1.4em",
                letterSpacing: "1px",
                border: "0px none rgb(255, 255, 255)",
                textTransform: "uppercase",
                textAlign: "center",
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
              href="#"
              style={{
                color: "rgb(4, 21, 88)",
                fontFamily: "Lato",
                fontSize: "15px",
                fontWeight: "400",
                lineHeight: "15px",
                backgroundColor: "rgb(255, 184, 4)",
                borderRadius: "6px",
                border: "0px none rgb(4, 21, 88)",
                padding: "12px 24px",
                textAlign: "center",
                animation: "none 0s ease 0s 1 normal none running",
                display: "inline-block",
                textDecoration: "none",
                transition: "all 0.3s",
                cursor: "pointer",
              }}
              className="hover:opacity-90 hover:scale-105"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
