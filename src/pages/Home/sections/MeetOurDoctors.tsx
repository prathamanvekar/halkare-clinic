import { useState, useEffect, useRef } from "react";
import bg from "@/assets/aboutus8.jpg";
import doctor1 from "@/assets/Peeyush Halkare.jpg";
import doctor2 from "@/assets/Pradnya Halkare.jpg";
import doctor3 from "@/assets/Janardan.jpg";
import doctor4 from "@/assets/Rajaganesh Gautam.jpg";
import doctor5 from "@/assets/Bilal Shaikh.jpg";
import doctor6 from "@/assets/Fardin.jpg";
import doctor7 from "@/assets/Anirudha Kajale.jpg";
import doctor8 from "@/assets/Apoorva Saraf.jpg";

const doctors = [
  {
    photo: doctor1,
    name: "Dr. Peeyush Halkare",
    specialty: "Principal Dental Surgeon and Implant Specialist",
  },
  {
    photo: doctor2,
    name: "Dr. Pradnya Halkare",
    specialty: "Principal Dentist",
  },
  {
    photo: doctor3,
    name: "Dr. Janardan",
    specialty:
      "Oral and maxillofacial surgeon, Head of Depatment (Rangoonwala Dental College)",
  },
  {
    photo: doctor4,
    name: "Dr. Rajaganesh Gautam",
    specialty: "Orthodontist, Head of Department (D Y Patil Dental college)",
  },
  {
    photo: doctor5,
    name: "Dr. Bilal Shaikh",
    specialty: "Endodontist (Root canal specialist)",
  },
  {
    photo: doctor6,
    name: "Dr. Fardin",
    specialty: "Paedodontist ( child teeth specialist)",
  },
  {
    photo: doctor7,
    name: "Dr. Anirudha Kajale",
    specialty: "Periodontost & Implantologist ( Gum specialist)",
  },
  {
    photo: doctor8,
    name: "Dr Apoorva Saraf",
    specialty: "Associate Dentist",
  },
];

export default function MeetOurDoctors() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 },
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="doctors"
      ref={sectionRef}
      style={{
        backgroundColor: "rgb(3, 20, 63)",
        backgroundImage: `url(${bg})`,
        backgroundPosition: "0% 0%",
        backgroundRepeat: "repeat",
        color: "rgb(74, 74, 74)",
        fontFamily: "Lato",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        maxWidth: "100%",
        paddingTop: "80px",
        paddingBottom: "80px",
      }}
      className="w-full px-4 md:px-6"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&family=Lato:wght@400;700&display=swap');
        @keyframes slide {
          100% { transform: translateX(1.3em); }
        }
        .doctor-card-img {
          border-radius: 12px;
          object-fit: cover;
          width: 100%;
          aspect-ratio: 248 / 260;
          border: 2px solid rgba(255, 255, 255, 0.35);
          box-shadow: 0 10px 24px rgba(0, 0, 0, 0.25);
        }
      `}</style>

      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(3, 20, 63, 0.45)",
          zIndex: 0,
        }}
      />

      <div
        className="page-container"
        style={{ position: "relative", zIndex: 1 }}
      >
        <div
          className={`flex flex-col items-center text-center mb-10 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <h2
            style={{
              color: "rgb(255, 255, 255)",
              fontFamily: "Poppins, sans-serif",
              fontSize: "48px",
              fontWeight: "600",
              lineHeight: "57.6px",
              border: "0px none rgb(255, 255, 255)",
            }}
            className="mb-2"
          >
            Meet Our Doctors
          </h2>
          <p
            style={{
              color: "rgb(255, 255, 255)",
              fontFamily: "Poppins, sans-serif",
              fontSize: "16px",
              fontWeight: "400",
              lineHeight: "24px",
              border: "0px none rgb(255, 255, 255)",
            }}
          >
            Exceptional talents united for excellence in every Specialty
          </p>
        </div>

        <div className="flex flex-col gap-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-7">
            {doctors.slice(0, 4).map((doctor, index) => (
              <div
                key={doctor.name}
                className={`flex flex-col items-center transition-all duration-700 ${
                  visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                <img
                  src={doctor.photo}
                  alt={doctor.name}
                  className="doctor-card-img w-full h-auto"
                />
                <h3
                  style={{
                    color: "rgb(255, 255, 255)",
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "20px",
                    fontWeight: "600",
                    lineHeight: "28px",
                    border: "0px none rgb(255, 255, 255)",
                    textAlign: "center",
                    marginTop: "12px",
                    marginBottom: "4px",
                  }}
                >
                  {doctor.name}
                </h3>
                <p
                  style={{
                    color: "rgb(255, 255, 255)",
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "15px",
                    fontWeight: "500",
                    lineHeight: "21px",
                    border: "0px none rgb(255, 255, 255)",
                    textAlign: "center",
                  }}
                >
                  {doctor.specialty}
                </p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-7">
            {doctors.slice(4, 8).map((doctor, index) => (
              <div
                key={doctor.name}
                className={`flex flex-col items-center transition-all duration-700 ${
                  visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: `${(index + 4) * 120}ms` }}
              >
                <img
                  src={doctor.photo}
                  alt={doctor.name}
                  className="doctor-card-img w-full h-auto"
                />
                <h3
                  style={{
                    color: "rgb(255, 255, 255)",
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "20px",
                    fontWeight: "600",
                    lineHeight: "28px",
                    border: "0px none rgb(255, 255, 255)",
                    textAlign: "center",
                    marginTop: "12px",
                    marginBottom: "4px",
                  }}
                >
                  {doctor.name}
                </h3>
                <p
                  style={{
                    color: "rgb(255, 255, 255)",
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "15px",
                    fontWeight: "500",
                    lineHeight: "21px",
                    border: "0px none rgb(255, 255, 255)",
                    textAlign: "center",
                  }}
                >
                  {doctor.specialty}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
