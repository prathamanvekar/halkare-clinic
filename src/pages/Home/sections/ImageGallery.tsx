import { useState } from "react";
import aboutus1 from "@/assets/aboutus1.jpg";
import aboutus2 from "@/assets/aboutus2.jpg";
import aboutus3 from "@/assets/aboutus3.jpg";
import aboutus4 from "@/assets/aboutus4.jpg";
import aboutus5 from "@/assets/aboutus5.jpg";
import aboutus6 from "@/assets/aboutus6.jpg";
import aboutus7 from "@/assets/aboutus7.jpg";
import ndImage from "@/assets/nd.jpg";
import staff1Image from "@/assets/staff3.jpeg";
import teamImage from "@/assets/team.jpg";

export default function ImageGallery() {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  const images = [
    { src: aboutus1, alt: "About us photo 1" },
    { src: aboutus2, alt: "About us photo 2" },
    { src: aboutus3, alt: "About us photo 3" },
    { src: aboutus4, alt: "About us photo 4" },
    { src: aboutus5, alt: "About us photo 5" },
    { src: aboutus6, alt: "About us photo 6" },
    { src: aboutus7, alt: "About us photo 7" },
    { src: ndImage, alt: "Clinic team photo" },
    { src: staff1Image, alt: "Clinic staff photo" },
    { src: teamImage, alt: "Clinic team photo 2" },
  ];

  return (
    <section
      id="gallery"
      style={{
        backgroundPosition: "0% 0%",
        backgroundRepeat: "repeat",
        color: "rgb(74, 74, 74)",
        fontFamily: "Lato",
        animation: "none 0s ease 0s 1 normal none running",
        position: "relative",
        backgroundColor: "#FFFFFF",
      }}
      className="py-10 md:py-15"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;600&family=Lato:wght@300;400;700&display=swap');
        .gallery-item {
          overflow: hidden;
          position: relative;
        }
        .gallery-tile {
          border: 3px solid #ffffff;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
          transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s ease;
          transform: translateZ(0);
          backface-visibility: hidden;
          will-change: transform;
        }
        .gallery-item:hover .gallery-tile {
          transform: scale(1.08) translateZ(0);
          box-shadow: 0 12px 28px rgba(0, 0, 0, 0.25);
        }
      `}</style>

      <div className="text-center mb-8 md:mb-10">
        <h2
          style={{
            color: "rgb(22, 37, 78)",
            fontFamily: "Oswald, sans-serif",
            fontSize: "45px",
            fontWeight: "500",
            lineHeight: "45px",
            letterSpacing: "1px",
            border: "0px none rgb(22, 37, 78)",
            textAlign: "center",
            animation: "none 0s ease 0s 1 normal none running",
            margin: "0 0 10px 0",
          }}
        >
          Image Gallery
        </h2>
        <h2
          style={{
            color: "rgb(92, 87, 99)",
            fontFamily: "Oswald, sans-serif",
            fontSize: "14px",
            fontWeight: "400",
            lineHeight: "14px",
            border: "0px none rgb(92, 87, 99)",
            textAlign: "center",
            animation: "none 0s ease 0s 1 normal none running",
            margin: "0",
          }}
        >
          Click on the below images to enlarge
        </h2>
      </div>

      <div className="w-full">
        <div className="grid grid-cols-2 md:grid-cols-5" style={{ gap: 0 }}>
          {images.map((img) => (
            <a
              key={img.src}
              href={img.src}
              onClick={(e) => {
                e.preventDefault();
                setLightboxSrc(img.src);
              }}
              style={{
                color: "rgb(51, 51, 51)",
                fontFamily: "Lato",
                fontSize: "15px",
                fontWeight: "400",
                lineHeight: "27px",
                border: "0px none rgb(51, 51, 51)",
                textAlign: "center",
                animation: "none 0s ease 0s 1 normal none running",
                display: "block",
                overflow: "hidden",
                cursor: "pointer",
              }}
              className="gallery-item block overflow-hidden cursor-pointer"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-auto block gallery-tile"
                style={{ aspectRatio: "1/1", objectFit: "cover" }}
              />
            </a>
          ))}
        </div>
      </div>

      {lightboxSrc && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ backgroundColor: "rgba(0,0,0,0.85)" }}
          onClick={() => setLightboxSrc(null)}
        >
          <div
            className="relative max-w-3xl w-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute -top-10 right-0 text-white text-3xl font-bold leading-none hover:opacity-70 transition-opacity"
              onClick={() => setLightboxSrc(null)}
              aria-label="Close lightbox"
            >
              &times;
            </button>
            <img
              src={lightboxSrc}
              alt="Enlarged gallery image"
              className="w-full h-auto rounded"
              style={{ maxHeight: "80vh", objectFit: "contain" }}
            />
          </div>
        </div>
      )}
    </section>
  );
}
