import { useState, useEffect, useRef } from "react";
import bg from "@/assets/aboutus5.jpg";
export default function OurServicesSection() {
  const listRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 },
    );
    if (listRef.current) obs.observe(listRef.current);
    return () => obs.disconnect();
  }, []);

  const leftServices = [
    "Dental implants",
    "Root canal treatment",
    "Smile designing",
    "Teeth whitening",
    "Crowns & bridges",
    "Teeth cleaning",
    "Complete dentures",
  ];

  const rightServices = [
    "Pediatric dentistry",
    "Veneers",
    "Wisdom teeth extraction",
    "Dental Restorations",
    "Aligners",
    "Inlays & Onlays",
    "Orthodontic Treatment",
  ];

  return (
    <section
      style={{
        backgroundColor: "rgb(255, 255, 255)",
        backgroundImage:
          `url(${bg})`,
        backgroundPosition: "0% 0%",
        backgroundRepeat: "repeat",
        color: "rgb(74, 74, 74)",
        fontFamily: "Lato",
        paddingLeft: "20px",
        paddingRight: "20px",
        position: "relative",
      }}
      className="py-15 md:py-32.5"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&family=Lato:wght@400;800&display=swap');
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translate3d(0px, 100%, 0px); }
          100% { opacity: 1; transform: none; }
        }
        .fade-in-up {
          animation: fadeInUp 1.25s ease 0s 1 normal forwards;
        }
        .fade-in-up-hidden {
          opacity: 0;
        }
      `}</style>

      <div
        style={{
          backgroundColor: "rgb(255, 255, 255)",
          backgroundPosition: "0% 0%",
          backgroundRepeat: "repeat",
          opacity: 0.85,
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 0,
        }}
      />

      <div
        className="page-container"
        style={{ position: "relative", zIndex: 1 }}
      >
        <div className="pb-8.75 md:pb-15">
          <h2
            style={{
              color: "rgb(6, 37, 77)",
              fontFamily: "Poppins, sans-serif",
              fontSize: "42px",
              fontWeight: "600",
              lineHeight: "50.4px",
              border: "0px none rgb(6, 37, 77)",
              textAlign: "center",
            }}
          >
            Our Services
          </h2>

          <div className="flex justify-center mt-3 mb-4">
            <div
              style={{
                width: "50px",
                height: "3px",
                backgroundColor: "#C9A227",
                borderRadius: "2px",
              }}
            />
          </div>

          <p
            style={{
              color: "rgb(104, 99, 99)",
              fontFamily: "Poppins, sans-serif",
              fontSize: "20px",
              fontWeight: "400",
              lineHeight: "40px",
              border: "0px none rgb(104, 99, 99)",
              textAlign: "center",
            }}
          >
            One-place solution for all dental problems and a Complete Family
            Dental Clinic
          </p>
        </div>

        <div
          ref={listRef}
          className={visible ? "fade-in-up" : "fade-in-up-hidden"}
        >
          <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-0">
            <div
              className="flex flex-col items-center w-full md:w-1/2"
              style={{ gap: "30px" }}
            >
              {leftServices.map((service) => (
                <p
                  key={service}
                  style={{
                    color: "rgb(49, 60, 111)",
                    fontFamily: "Lato",
                    fontSize: "25px",
                    fontWeight: "800",
                    lineHeight: "22px",
                    border: "0px none rgb(49, 60, 111)",
                    textAlign: "center",
                    margin: 0,
                  }}
                >
                  {service}
                </p>
              ))}
            </div>

            <div
              className="flex flex-col items-center w-full md:w-1/2"
              style={{ gap: "30px" }}
            >
              {rightServices.map((service) => (
                <p
                  key={service}
                  style={{
                    color: "rgb(49, 60, 111)",
                    fontFamily: "Lato",
                    fontSize: "25px",
                    fontWeight: "800",
                    lineHeight: "22px",
                    border: "0px none rgb(49, 60, 111)",
                    textAlign: "center",
                    margin: 0,
                  }}
                >
                  {service}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
