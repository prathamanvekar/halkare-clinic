import { useState, useEffect, useRef } from "react";
export default function LocateUsSection() {
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
      ref={ref}
      style={{
        backgroundColor: "#FFFFFF",
        fontFamily: "Lato, sans-serif",
        color: "rgb(74, 74, 74)",
        width: "100%",
        paddingTop: "64px",
        paddingBottom: "0px",
      }}
    >
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&family=Lato:wght@400;700&display=swap');`}</style>

      <div
        className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingBottom: "36px",
        }}
      >
        <h2
          style={{
            color: "rgb(26, 29, 102)",
            fontFamily: "Poppins, sans-serif",
            fontSize: "35px",
            fontWeight: "600",
            lineHeight: "35px",
            textAlign: "center",
            margin: "0 0 14px 0",
            border: "0px none rgb(26, 29, 102)",
          }}
        >
          Locate us
        </h2>
        <div
          style={{
            width: "50px",
            height: "2px",
            backgroundColor: "#CCCCCC",
            borderRadius: "1px",
          }}
        />
      </div>

      <div className="page-container" style={{ paddingBottom: "16px" }}>
        <div
          style={{
            width: "100%",
            height: "520px",
            overflow: "hidden",
            lineHeight: "0",
          }}
        >
          <iframe
            src="https://www.google.com/maps?q=Dr.+Halkare+Dental+Clinic+P,+Peru+Gate,+Sadashiv+Peth,+Pune,+Maharashtra+411030&output=embed"
            width="100%"
            height="520"
            style={{
              border: "0",
              display: "block",
              width: "100%",
              height: "520px",
            }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Dr. Halkare Dental Clinic Location"
          />
        </div>
      </div>
    </section>
  );
}
