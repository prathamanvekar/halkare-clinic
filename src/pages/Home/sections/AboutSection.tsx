import { useEffect, useState } from "react";
import aboutus1 from "@/assets/aboutus1.jpg";
import aboutus2 from "@/assets/aboutus2.jpg";
import aboutus3 from "@/assets/aboutus3.jpg";
import aboutus4 from "@/assets/aboutus4.jpg";
import aboutus5 from "@/assets/aboutus5.jpg";
import aboutus6 from "@/assets/aboutus6.jpg";
import aboutus7 from "@/assets/aboutus7.jpg";
import aboutus8 from "@/assets/aboutus8.jpg";
export default function AboutSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { src: aboutus1, alt: "About us slide 1" },
    { src: aboutus2, alt: "About us slide 2" },
    { src: aboutus3, alt: "About us slide 3" },
    { src: aboutus4, alt: "About us slide 4" },
    { src: aboutus5, alt: "About us slide 5" },
    { src: aboutus6, alt: "About us slide 6" },
    { src: aboutus7, alt: "About us slide 7" },
    { src: aboutus8, alt: "About us slide 8" },
  ];

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => window.clearInterval(intervalId);
  }, [slides.length]);

  return (
    <section
      id="about"
      style={{
        backgroundColor: "rgb(255, 255, 255)",
        backgroundPosition: "0% 0%",
        backgroundRepeat: "repeat",
        color: "rgb(74, 74, 74)",
        fontFamily: "Lato",
        paddingLeft: "20px",
        paddingRight: "20px",
        animation: "none 0s ease 0s 1 normal none running",
        position: "relative",
        overflow: "hidden",
      }}
      className="pt-15 md:pt-25 pb-16 md:pb-20"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Poppins:wght@400;500;600&family=Playfair+Display:wght@700&family=Oswald:wght@300;400&display=swap');
        .about-slide-frame {
          border-radius: 12px;
          overflow: hidden;
          height: clamp(280px, 40vw, 420px);
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f5f5f5;
        }
        .about-slide-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
        }
      `}</style>
      <div className="page-container">
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-start">
          <div className="w-full md:w-[55%] flex flex-col">
            <h2
              style={{
                color: "rgb(22, 37, 78)",
                fontFamily: '"Playfair Display", serif',
                fontSize: "40px",
                fontWeight: "700",
                lineHeight: "1.2",
                margin: "0 0 18px 0",
              }}
            >
              Dr. Halkare Dental Clinic
            </h2>
            <p
              style={{
                color: "rgb(64, 65, 65)",
                fontFamily: "Poppins, sans-serif",
                fontSize: "16px",
                fontWeight: "400",
                lineHeight: "32px",
                border: "0px none rgb(64, 65, 65)",
                animation: "none 0s ease 0s 1 normal none running",
              }}
            >
              We offer a range of treatment options for individuals for a happy
              and healthy smile. Dr. Halkare Dental Clinic is well established,
              equipped with modern facilities and provides economical treatment.
              One-place solution for all dental problems and a complete family
              dental clinic, located at Sadashiv Peth Rd., Pune.
            </p>
            <p
              style={{
                color: "rgb(64, 65, 65)",
                fontFamily: "Poppins, sans-serif",
                fontSize: "16px",
                fontWeight: "400",
                lineHeight: "32px",
                border: "0px none rgb(64, 65, 65)",
                animation: "none 0s ease 0s 1 normal none running",
                marginTop: "24px",
              }}
            >
              We embrace and are updated to latest cutting-edge technology like
              3D printing/guided implants/AI assisted digital smile design and
              veneers digital full mouth rehabilitation/ scan instead of
              impressions, aligners (invisible braces), single appointment root
              canal treatments (RCT), digital protocol etc.
            </p>
            <p
              style={{
                color: "rgb(64, 65, 65)",
                fontFamily: "Poppins, sans-serif",
                fontSize: "16px",
                fontWeight: "400",
                lineHeight: "32px",
                border: "0px none rgb(64, 65, 65)",
                animation: "none 0s ease 0s 1 normal none running",
                marginTop: "24px",
              }}
            >
              We have equally dedicated and loyal auxiliary staff. Senior most
              staff are 20+ years with us & others are 12+ years with us.
            </p>
            <div style={{ marginTop: "24px" }}>
              <a
                href="#"
                style={{
                  color: "rgb(4, 21, 88)",
                  fontFamily: "Lato",
                  fontSize: "15px",
                  fontWeight: "400",
                  lineHeight: "15px",
                  backgroundColor: "rgb(248, 205, 9)",
                  borderRadius: "8px",
                  border: "0px none rgb(4, 21, 88)",
                  padding: "12px 24px",
                  textAlign: "center",
                  animation: "none 0s ease 0s 1 normal none running",
                  display: "inline-block",
                  textDecoration: "none",
                  transition: "background 0.3s, transform 0.3s",
                  cursor: "pointer",
                }}
                className="hover:opacity-90"
              >
                View More
              </a>
            </div>
          </div>
          <div className="w-full md:w-[45%] flex flex-col items-center">
            <div
              className="relative w-full overflow-hidden about-slide-frame"
              style={{ maxWidth: "585px" }}
            >
              <img
                src={slides[currentSlide].src}
                alt={slides[currentSlide].alt}
                className="about-slide-image"
              />
              <button
                aria-label="Previous slide"
                onClick={handlePrev}
                style={{
                  color: "rgba(237, 237, 237, 0.9)",
                  cursor: "pointer",
                  display: "inline-flex",
                  fontSize: "25px",
                  position: "absolute",
                  top: "50%",
                  transform: "translateY(-50%)",
                  zIndex: 1,
                  left: "8px",
                  background: "none",
                  border: "none",
                  padding: 0,
                  alignItems: "center",
                  justifyContent: "center",
                  width: "25px",
                  height: "25px",
                }}
              >
                <span
                  dangerouslySetInnerHTML={{
                    __html: `<svg aria-hidden="true" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"><path d="M646 125C629 125 613 133 604 142L308 442C296 454 292 471 292 487 292 504 296 521 308 533L604 854C617 867 629 875 646 875 663 875 679 871 692 858 704 846 713 829 713 812 713 796 708 779 692 767L438 487 692 225C700 217 708 204 708 187 708 171 704 154 692 142 675 129 663 125 646 125Z"></path></svg>`,
                  }}
                />
              </button>
              <button
                aria-label="Next slide"
                onClick={handleNext}
                style={{
                  color: "rgba(237, 237, 237, 0.9)",
                  cursor: "pointer",
                  display: "inline-flex",
                  fontSize: "25px",
                  position: "absolute",
                  top: "50%",
                  transform: "translateY(-50%)",
                  zIndex: 1,
                  right: "8px",
                  background: "none",
                  border: "none",
                  padding: 0,
                  alignItems: "center",
                  justifyContent: "center",
                  width: "25px",
                  height: "25px",
                }}
              >
                <span
                  dangerouslySetInnerHTML={{
                    __html: `<svg aria-hidden="true" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"><path d="M696 533C708 521 713 504 713 487 713 471 708 454 696 446L400 146C388 133 375 125 354 125 338 125 325 129 313 142 300 154 292 171 292 187 292 204 296 221 308 233L563 492 304 771C292 783 288 800 288 817 288 833 296 850 308 863 321 871 338 875 354 875 371 875 388 867 400 854L696 533Z"></path></svg>`,
                  }}
                />
              </button>
            </div>
            <div
              className="flex flex-row items-center justify-center"
              style={{ marginTop: "14px", gap: "12px" }}
            >
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    backgroundColor:
                      index === currentSlide ? "#000000" : "#cccccc",
                    border: "none",
                    padding: 0,
                    cursor: "pointer",
                    transition: "background-color 0.3s",
                    flexShrink: 0,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
