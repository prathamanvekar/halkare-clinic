import { useState, useEffect, useRef } from "react";
import team from "@/assets/nd.jpg";
export default function AffordableServicesBanner() {
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
        backgroundColor: "rgb(14, 8, 121)",
        backgroundPosition: "0% 0%",
        backgroundRepeat: "repeat",
        color: "rgb(74, 74, 74)",
        fontFamily: "Lato",
        paddingTop: "80px",
        paddingBottom: "80px",
        position: "relative",
        overflow: "visible",
        width: "100%",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;600&family=Lato:wght@400;700&display=swap');
      `}</style>

      <div
        style={{
          backgroundColor: "rgb(225, 223, 213)",
          opacity: 0.3,
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 0,
        }}
      />

      <div
        style={{
          position: "absolute",
          top: -1,
          left: -1,
          width: "calc(100% + 2px)",
          lineHeight: 0,
          direction: "ltr",
          overflow: "hidden",
          zIndex: 1,
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
          style={{
            display: "block",
            left: "50%",
            position: "relative",
            transform: "translateX(-50%)",
            width: "calc(100% + 1.3px)",
            height: "40px",
          }}
        >
          <path
            d="M1000,4.3V0H0v4.3C0.9,23.1,126.7,99.2,500,100S1000,22.7,1000,4.3z"
            style={{
              fill: "rgb(255, 255, 255)",
              transform: "rotateY(0deg)",
              transformOrigin: "center center",
            }}
          />
        </svg>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: -1,
          left: -1,
          width: "calc(100% + 2px)",
          lineHeight: 0,
          direction: "ltr",
          overflow: "hidden",
          zIndex: 1,
          transform: "rotate(180deg)",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
          style={{
            display: "block",
            left: "50%",
            position: "relative",
            transform: "translateX(-50%)",
            width: "calc(100% + 1.3px)",
            height: "40px",
          }}
        >
          <path
            d="M1000,4.3V0H0v4.3C0.9,23.1,126.7,99.2,500,100S1000,22.7,1000,4.3z"
            style={{
              fill: "rgb(255, 255, 255)",
              transform: "rotateY(0deg)",
              transformOrigin: "center center",
            }}
          />
        </svg>
      </div>

      <div
        className="page-container"
        style={{ position: "relative", zIndex: 1 }}
      >
        <div
          className="flex flex-col md:flex-row items-center justify-between"
          style={{ gap: "24px" }}
        >
          <div
            className={`flex-1 flex items-center justify-center transition-all duration-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "100ms" }}
          >
            <h2
              style={{
                color: "rgb(255, 255, 255)",
                fontFamily: "Oswald, sans-serif",
                fontSize: "45px",
                fontWeight: "300",
                lineHeight: "62px",
                border: "0px none rgb(255, 255, 255)",
                textAlign: "center",
                margin: 0,
                padding: "0 20px",
              }}
            >
              Team of experienced Dentists offering affordable services!
            </h2>
          </div>

          <div
            className={`shrink-0 flex items-start justify-center transition-all duration-700 mt-6 mb-0 md:mt-[-80px] md:mb-[-80px] ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{
              transitionDelay: "200ms",
              zIndex: 3,
              position: "relative",
            }}
          >
            <img
              src={team}
              alt="Team of experienced dentists at Dr. Halkare Dental Clinic"
              className="h-auto"
              style={{
                width: "360px",
                maxWidth: "100%",
                display: "block",
                borderRadius: "22px",
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.25)",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
