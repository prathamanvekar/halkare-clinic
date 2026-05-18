import { useState, useEffect, useRef } from "react";
import visitingCardPdf from "@/assets/Dr.-Halkare-Dental-Clinic.pdf";

export default function TaglineBanner() {
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
        backgroundImage:
          "linear-gradient(290deg, rgb(185, 76, 152) 0%, rgb(64, 154, 195) 100%)",
        backgroundPosition: "0% 0%",
        backgroundRepeat: "repeat",
        color: "rgb(74, 74, 74)",
        fontFamily: "Lato",
        paddingBottom: "30px",
        position: "relative",
      }}
      className="w-full pt-7.5 md:pt-12.5"
    >
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap');`}</style>
      <div className="page-container">
        <div
          ref={ref}
          className={`flex flex-col items-center transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          <p
            style={{
              color: "rgb(255, 255, 255)",
              fontFamily: "Lato",
              fontSize: "23px",
              fontWeight: "400",
              lineHeight: "41.4px",
              letterSpacing: "1px",
              border: "0px none rgb(255, 255, 255)",
              textAlign: "center",
            }}
            className="max-w-212.5 w-full px-4"
          >
            Whether you need regular dental check-ups, advanced treatments, or
            cosmetic procedures, our facility provides a wide range of services
            to meet all your dental needs under one roof.
          </p>

          <div className="mt-5 md:mt-6 flex justify-center">
            <a
              href={visitingCardPdf}
              download="Dr.-Halkare-Dental-Clinic.pdf"
              style={{
                color: "rgb(245, 240, 240)",
                fontFamily: "Lato",
                fontSize: "15px",
                fontWeight: "400",
                lineHeight: "15px",
                backgroundColor: "rgb(134, 40, 250)",
                borderRadius: "3px",
                border: "0px none rgb(245, 240, 240)",
                padding: "12px 24px",
                textAlign: "center",
                display: "inline-flex",
                alignItems: "center",
                gap: "7px",
                transition: "transform 0.3s",
                textDecoration: "none",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.transform =
                  "scale(1.05)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.transform =
                  "scale(1)";
              }}
            >
              <span
                dangerouslySetInnerHTML={{
                  __html: `<svg aria-hidden="true" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg" width="15" height="15" style="fill: rgb(245, 240, 240); flex-shrink: 0;"><path d="M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm76.45 211.36l-96.42 95.7c-6.65 6.61-17.39 6.61-24.04 0l-96.42-95.7C73.42 337.29 80.54 320 94.82 320H160v-80c0-8.84 7.16-16 16-16h32c8.84 0 16 7.16 16 16v80h65.18c14.28 0 21.4 17.29 11.27 27.36zM377 105L279.1 7c-4.5-4.5-10.6-7-17-7H256v128h128v-6.1c0-6.3-2.5-12.4-7-16.9z"></path></svg>`,
                }}
                style={{ display: "inline-flex", alignItems: "center" }}
              />
              Visiting Card
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
