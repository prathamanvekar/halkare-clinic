import { useState, useEffect, useRef } from "react";
import bg from "@/assets/aboutus7.jpg";
export default function StatisticsSection() {
  const ref = useRef<HTMLDivElement>(null);
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

  const stats = [
    { number: "28+", label: "Years of Experience" },
    { number: "20,000+", label: "Consultation" },
    { number: "10+", label: "Doctors Associated" },
    { number: "5,000+", label: "Surgeries" },
  ];

  return (
    <section
      style={{
        backgroundColor: "rgb(3, 20, 63)",
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "50% 50%",
        backgroundRepeat: "no-repeat",
        position: "relative",
        width: "100%",
        transition: "background 0.3s",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');
      `}</style>

      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(3, 20, 63, 0.88)",
          zIndex: 0,
        }}
      />

      <div
        className="page-container"
        style={{
          position: "relative",
          zIndex: 1,
          paddingTop: "60px",
          paddingBottom: "60px",
        }}
      >
        <div
          ref={ref}
          className={`flex flex-col items-center transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <h2
            style={{
              color: "rgb(255, 255, 255)",
              fontFamily: "Poppins, sans-serif",
              fontSize: "clamp(28px, 3vw, 48px)",
              fontWeight: "600",
              lineHeight: "1.2",
              textAlign: "center",
              border: "0px none rgb(255, 255, 255)",
              margin: "0 0 16px 0",
              animation: "none 0s ease 0s 1 normal none running",
            }}
          >
            Insightful statistics for your reference
          </h2>

          <h3
            style={{
              color: "rgb(255, 255, 255)",
              fontFamily: "Poppins, sans-serif",
              fontSize: "16px",
              fontWeight: "400",
              lineHeight: "22.4px",
              textAlign: "center",
              border: "0px none rgb(255, 255, 255)",
              margin: "0 0 36px 0",
              animation: "none 0s ease 0s 1 normal none running",
            }}
          >
            Explore our journey through exceptional service and quality
            experience.
          </h3>

          <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-10">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center text-center"
                style={{ padding: "8px 12px" }}
              >
                <div
                  style={{
                    width: "70%",
                    height: "1px",
                    backgroundColor: "rgba(255, 255, 255, 0.55)",
                    marginBottom: "18px",
                  }}
                />
                <span
                  style={{
                    color: "#FFFFFF",
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "clamp(32px, 3vw, 48px)",
                    fontWeight: "700",
                    lineHeight: "1.2",
                    display: "block",
                    textAlign: "center",
                    marginBottom: "8px",
                  }}
                >
                  {stat.number}
                </span>
                <span
                  style={{
                    color: "#FFFFFF",
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "16px",
                    fontWeight: "600",
                    lineHeight: "1.4",
                    display: "block",
                    textAlign: "center",
                  }}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
