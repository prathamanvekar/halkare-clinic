import staffbg from "@/assets/staff2.jpg";
import visitingCardPdf from "@/assets/Dr.-Halkare-Dental-Clinic.pdf";

export default function ContactUsSection() {
  return (
    <section
      id="contact"
      style={{
        backgroundColor: "rgb(3, 20, 63)",
        backgroundImage: `url(${staffbg})`,
        backgroundSize: "cover",
        backgroundPosition: "50% 50%",
        backgroundRepeat: "no-repeat",
        color: "rgb(74, 74, 74)",
        fontFamily: "Lato",
        paddingTop: "60px",
        paddingBottom: "30px",
        position: "relative",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;600&family=Lato:wght@300;400;500;700;800&display=swap');
        .visiting-card-btn:hover {
          transform: scale(1.05);
          opacity: 0.92;
        }
        .visiting-card-btn {
          transition: transform 0.3s, opacity 0.3s;
        }
      `}</style>

      <div
        style={{
          backgroundColor: "rgb(1, 18, 77)",
          opacity: 0.93,
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
      />

      <div
        className="page-container"
        style={{ position: "relative", zIndex: 1 }}
      >
        <div className="text-center mb-4">
          <h2
            style={{
              color: "rgb(255, 255, 255)",
              fontFamily: "Oswald, sans-serif",
              fontSize: "50px",
              fontWeight: "500",
              lineHeight: "50px",
              letterSpacing: "1px",
              border: "0px none rgb(255, 255, 255)",
              textAlign: "center",
              margin: "0 0 12px 0",
            }}
          >
            Contact us
          </h2>
          <div
            style={{
              width: "40px",
              height: "2px",
              backgroundColor: "#ffffff",
              margin: "0 auto 40px auto",
            }}
          />
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start gap-10 md:gap-4">
          <div className="flex flex-col items-center w-full md:w-1/4">
            <div
              className="flex items-center justify-center mb-5"
              style={{
                width: "70px",
                height: "70px",
                borderRadius: "50%",
                backgroundColor: "rgb(255, 255, 255)",
                flexShrink: 0,
              }}
            >
              <span
                dangerouslySetInnerHTML={{
                  __html: `<svg aria-hidden="true" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#4a4a4a"><path d="M560.02 32c-1.96 0-3.98.37-5.96 1.16L384.01 96H384L212 35.28A64.252 64.252 0 0 0 191.76 32c-6.69 0-13.37 1.05-19.81 3.14L20.12 87.95A32.006 32.006 0 0 0 0 117.66v346.32C0 473.17 7.53 480 15.99 480c1.96 0 3.97-.37 5.96-1.16L192 416l172 60.71a63.98 63.98 0 0 0 40.05.15l151.83-52.81A31.996 31.996 0 0 0 576 394.34V48.02c0-9.19-7.53-16.02-15.98-16.02zM224 90.42l128 45.19v285.97l-128-45.19V90.42zM48 418.05V129.07l128-44.53v286.2l-.64.23L48 418.05zm480-35.13l-128 44.53V141.26l.64-.24L528 93.95v288.97z"></path></svg>`,
                }}
              />
            </div>
            <h3
              style={{
                color: "rgb(255, 255, 255)",
                fontFamily: "Oswald, sans-serif",
                fontSize: "25px",
                fontWeight: "500",
                lineHeight: "35px",
                letterSpacing: "1px",
                border: "0px none rgb(255, 255, 255)",
                textTransform: "uppercase",
                textAlign: "center",
                margin: "0 0 10px 0",
              }}
            >
              Address
            </h3>
            <p
              style={{
                color: "rgb(255, 255, 255)",
                fontFamily: "Lato",
                fontSize: "16px",
                fontWeight: "500",
                lineHeight: "28.8px",
                border: "0px none rgb(255, 255, 255)",
                textAlign: "center",
                margin: 0,
              }}
            >
              1521, Sadashiv Peth, Leela Sadan,
              <br />
              Opp. Satwik Thali, Pune - 411030.
            </p>
          </div>

          <div className="flex flex-col items-center w-full md:w-1/4">
            <div
              className="flex items-center justify-center mb-5"
              style={{
                width: "70px",
                height: "70px",
                borderRadius: "50%",
                backgroundColor: "rgb(255, 255, 255)",
                flexShrink: 0,
              }}
            >
              <span
                dangerouslySetInnerHTML={{
                  __html: `<svg aria-hidden="true" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#4a4a4a"><path d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"></path></svg>`,
                }}
              />
            </div>
            <h3
              style={{
                color: "rgb(255, 255, 255)",
                fontFamily: "Oswald, sans-serif",
                fontSize: "25px",
                fontWeight: "500",
                lineHeight: "35px",
                letterSpacing: "1px",
                border: "0px none rgb(255, 255, 255)",
                textTransform: "uppercase",
                textAlign: "center",
                margin: "0 0 10px 0",
              }}
            >
              Phone
            </h3>
            <p
              style={{
                color: "rgb(255, 255, 255)",
                fontFamily: "Lato",
                fontSize: "19px",
                fontWeight: "800",
                lineHeight: "34.2px",
                letterSpacing: "1.8px",
                border: "0px none rgb(255, 255, 255)",
                textAlign: "center",
                margin: 0,
              }}
            >
              020-24489225
            </p>
            <p
              style={{
                color: "rgb(255, 255, 255)",
                fontFamily: "Lato",
                fontSize: "19px",
                fontWeight: "800",
                lineHeight: "34.2px",
                letterSpacing: "1.8px",
                border: "0px none rgb(255, 255, 255)",
                textAlign: "center",
                margin: 0,
              }}
            >
              [+91] 9284987903
            </p>
          </div>

          <div className="flex flex-col items-center w-full md:w-1/4">
            <div
              className="flex items-center justify-center mb-5"
              style={{
                width: "70px",
                height: "70px",
                borderRadius: "50%",
                backgroundColor: "rgb(255, 255, 255)",
                flexShrink: 0,
              }}
            >
              <span
                dangerouslySetInnerHTML={{
                  __html: `<svg aria-hidden="true" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#4a4a4a"><path d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"></path></svg>`,
                }}
              />
            </div>
            <h3
              style={{
                color: "rgb(255, 255, 255)",
                fontFamily: "Oswald, sans-serif",
                fontSize: "25px",
                fontWeight: "500",
                lineHeight: "35px",
                letterSpacing: "1px",
                border: "0px none rgb(255, 255, 255)",
                textTransform: "uppercase",
                textAlign: "center",
                margin: "0 0 10px 0",
              }}
            >
              Email Address
            </h3>
            <p
              style={{
                color: "rgb(255, 255, 255)",
                fontFamily: "Lato",
                fontSize: "15px",
                fontWeight: "400",
                lineHeight: "27px",
                letterSpacing: "0.3px",
                border: "0px none rgb(255, 255, 255)",
                textAlign: "center",
                margin: 0,
              }}
            >
              peeyushhalkare@gmail.com
              <br />
              cc : drhalkaredentalclinic@gmail.com
            </p>
          </div>

          <div className="flex flex-col items-center w-full md:w-1/4">
            <div
              className="flex items-center justify-center mb-5"
              style={{
                width: "70px",
                height: "70px",
                borderRadius: "50%",
                backgroundColor: "rgb(255, 255, 255)",
                flexShrink: 0,
              }}
            >
              <span
                dangerouslySetInnerHTML={{
                  __html: `<svg aria-hidden="true" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#4a4a4a"><path d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"></path></svg>`,
                }}
              />
            </div>
            <h3
              style={{
                color: "rgb(255, 255, 255)",
                fontFamily: "Oswald, sans-serif",
                fontSize: "25px",
                fontWeight: "500",
                lineHeight: "35px",
                letterSpacing: "1px",
                border: "0px none rgb(255, 255, 255)",
                textTransform: "uppercase",
                textAlign: "center",
                margin: "0 0 10px 0",
              }}
            >
              CLINIC TIMING
            </h3>
            <p
              style={{
                color: "rgb(255, 255, 255)",
                fontFamily: "Lato",
                fontSize: "16px",
                fontWeight: "500",
                lineHeight: "28.8px",
                border: "0px none rgb(255, 255, 255)",
                textAlign: "center",
                margin: 0,
              }}
            >
              MON to SAT : 9 AM - 1 PM
              <br />
              4:30 PM - 8:30 PM
              <br />
              Sunday Closed
            </p>
          </div>
        </div>

        <div className="flex justify-center mt-10">
          <a
            href={visitingCardPdf}
            download="Dr.-Halkare-Dental-Clinic.pdf"
            className="visiting-card-btn inline-flex items-center gap-2 cursor-pointer"
            style={{
              color: "rgb(8, 8, 8)",
              fontFamily: "Lato",
              fontSize: "15px",
              fontWeight: "400",
              lineHeight: "15px",
              backgroundColor: "rgb(214, 163, 14)",
              borderRadius: "3px",
              border: "0px none rgb(8, 8, 8)",
              padding: "12px 24px",
              textAlign: "center",
              textDecoration: "none",
            }}
          >
            <span
              dangerouslySetInnerHTML={{
                __html: `<svg aria-hidden="true" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="rgb(8,8,8)"><path d="M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm76.45 211.36l-96.42 95.7c-6.65 6.61-17.39 6.61-24.04 0l-96.42-95.7C73.42 337.29 80.54 320 94.82 320H160v-80c0-8.84 7.16-16 16-16h32c8.84 0 16 7.16 16 16v80h65.18c14.28 0 21.4 17.29 11.27 27.36zM377 105L279.1 7c-4.5-4.5-10.6-7-17-7H256v128h128v-6.1c0-6.3-2.5-12.4-7-16.9z"></path></svg>`,
              }}
            />
            Visiting Card
          </a>
        </div>
      </div>
    </section>
  );
}
