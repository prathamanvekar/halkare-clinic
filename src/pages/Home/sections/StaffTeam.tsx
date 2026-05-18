import { useState, useEffect, useRef } from "react";
import staff from "@/assets/staff1.jpg";

export default function StaffTeamSection() {
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
        paddingTop: "80px",
        paddingBottom: "80px",
        position: "relative",
        backgroundColor: "rgb(245, 244, 240)",
      }}
    >
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300;400&family=Lato:wght@400;700&family=Poppins:wght@400;600&display=swap');`}</style>

      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          lineHeight: 0,
          direction: "ltr",
          overflow: "hidden",
          zIndex: 2,
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
          style={{
            display: "block",
            width: "calc(100% + 1.3px)",
            position: "relative",
            left: "50%",
            transform: "translateX(-50%)",
            height: "40px",
          }}
        >
          <path
            d="M1000,4.3V0H0v4.3C0.9,23.1,126.7,99.2,500,100S1000,22.7,1000,4.3z"
            style={{ fill: "rgb(255, 255, 255)" }}
          />
        </svg>
      </div>

      <div
        style={{
          backgroundColor: "rgb(225, 223, 213)",
          backgroundPosition: "0% 0%",
          backgroundRepeat: "repeat",
          color: "rgb(74, 74, 74)",
          fontFamily: "Lato",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          opacity: 0.3,
          zIndex: 0,
        }}
      />

      <div
        className="page-container"
        style={{ position: "relative", zIndex: 1 }}
      >
        <div
          ref={ref}
          className={`flex flex-col md:flex-row items-center gap-12 md:gap-16 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="w-full md:w-1/2 flex justify-center md:justify-start">
            <img
              src={staff}
              alt="Staff team at Dr. Halkare Dental Clinic"
              className="w-full h-auto"
              style={{
                maxWidth: "525px",
                borderRadius: "18px",
                boxShadow: "0 16px 32px rgba(0, 0, 0, 0.15)",
              }}
            />
          </div>

          <div className="w-full md:w-1/2 flex flex-col items-center text-center">
            <h2
              style={{
                color: "rgb(22, 37, 78)",
                fontFamily: "Oswald, sans-serif",
                fontSize: "51px",
                fontWeight: "300",
                lineHeight: "66.3px",
                letterSpacing: "1px",
                border: "0px none rgb(22, 37, 78)",
                textAlign: "center",
                marginBottom: "30px",
              }}
            >
              We have a beautiful team of staff to help us !
            </h2>

            <p
              style={{
                fontFamily: "Lato, Poppins, sans-serif",
                fontSize: "16px",
                fontWeight: "400",
                lineHeight: "1.6",
                color: "rgb(74, 74, 74)",
                textAlign: "center",
                maxWidth: "500px",
                margin: "0",
              }}
            >
              Our caring support team ensures every visit is smooth,
              comfortable, and well coordinated from the moment you arrive.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
