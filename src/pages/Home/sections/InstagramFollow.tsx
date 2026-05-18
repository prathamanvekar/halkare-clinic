import { useState, useEffect, useRef } from "react";
import clinicphoto from "@/assets/hero.jpg";

export default function InstagramFollowSection() {
  const ref = useRef(null);
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
      style={{
        backgroundPosition: "0% 0%",
        backgroundRepeat: "repeat",
        color: "rgb(74, 74, 74)",
        fontFamily: "Lato",
        paddingLeft: "20px",
        paddingRight: "20px",
        animation: "none 0s ease 0s 1 normal none running",
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#FFFFFF",
      }}
      className="w-full"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&family=Poppins:wght@400;600&display=swap');
        @keyframes slide {
          100% { transform: translateX(1.3em); }
        }
        .follow-btn:hover {
          opacity: 0.88;
          transform: scale(1.03);
        }
        .follow-btn {
          transition: opacity 0.3s, transform 0.3s;
        }
      `}</style>

      <div
        className="page-container"
        style={{
          paddingTop: "clamp(50px, 6.25vw, 120px)",
          paddingBottom: "clamp(50px, 6.25vw, 120px)",
        }}
      >
        <div
          ref={ref}
          className={`flex flex-col md:flex-row items-center gap-12 md:gap-24 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          <div
            className="flex flex-col items-start w-full md:w-1/2"
            style={{ gap: "0px" }}
          >
            <h1
              style={{
                color: "rgb(22, 37, 78)",
                fontFamily: "Lato, sans-serif",
                fontSize: "clamp(32px, 3vw, 58px)",
                fontWeight: "700",
                lineHeight: "1.2",
                border: "0px none rgb(22, 37, 78)",
                textAlign: "left",
                animation: "none 0s ease 0s 1 normal none running",
                marginBottom: "28px",
                marginTop: "0px",
              }}
            >
              Follow Us On Instagram
            </h1>

            <div
              style={{
                backgroundColor: "rgb(100, 31, 194)",
                display: "inline-block",
                marginBottom: "32px",
              }}
            >
              <h2
                style={{
                  color: "rgb(255, 3, 0)",
                  fontFamily: "Lato, sans-serif",
                  fontSize: "clamp(24px, 2.3vw, 45px)",
                  fontWeight: "900",
                  lineHeight: "1.2",
                  border: "0px none rgb(255, 3, 0)",
                  textTransform: "lowercase",
                  textAlign: "left",
                  animation: "none 0s ease 0s 1 normal none running",
                  margin: "0px",
                  padding: "4px 8px",
                }}
              >
                #drhalkaredentalclinic
              </h2>
            </div>

            <a
              href="https://www.instagram.com/drhalkaredentalclinic/"
              target="_blank"
              rel="noopener noreferrer"
              className="follow-btn inline-flex items-center gap-2 cursor-pointer"
              style={{
                color: "rgb(255, 255, 255)",
                fontFamily: "Lato",
                fontSize: "15px",
                fontWeight: "400",
                lineHeight: "15px",
                backgroundColor: "rgb(100, 31, 194)",
                borderRadius: "3px",
                border: "0px none rgb(255, 255, 255)",
                padding: "12px 24px",
                textAlign: "center",
                animation: "none 0s ease 0s 1 normal none running",
                textDecoration: "none",
                letterSpacing: "0.05em",
              }}
            >
              <span
                style={{ textTransform: "uppercase", letterSpacing: "0.08em" }}
              >
                FOLLOW US
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="15"
                height="15"
                fill="currentColor"
                style={{ flexShrink: 0 }}
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
          </div>

          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <img
              src={clinicphoto}
              alt="Dr. Halkare Dental Clinic exterior"
              className="w-full h-auto"
              style={{
                maxWidth: "585px",
                display: "block",
                borderRadius: "18px",
                boxShadow: "0 16px 32px rgba(0, 0, 0, 0.15)",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
