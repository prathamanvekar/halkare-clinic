import { useState, useEffect, useRef } from "react";
import colorlogo from "@/assets/colorlogo.jpg";

export default function WhyChooseUs() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVisible(true);
      },
      { threshold: 0.05 },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const items = [
    {
      svg: `<svg aria-hidden="true" viewBox="0 0 496 512" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-110.3 0-200-89.7-200-200S137.7 56 248 56s200 89.7 200 200-89.7 200-200 200zm-80-216c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm4 72.6c-20.8 25-51.5 39.4-84 39.4s-63.2-14.3-84-39.4c-8.5-10.2-23.7-11.5-33.8-3.1-10.2 8.5-11.5 23.6-3.1 33.8 30 36 74.1 56.6 120.9 56.6s90.9-20.6 120.9-56.6c8.5-10.2 7.1-25.3-3.1-33.8-10.1-8.4-25.3-7.1-33.8 3.1z"></path></svg>`,
      text: "28 years of experience and counting..",
    },
    {
      svg: `<svg aria-hidden="true" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M496.101 385.669l14.227 28.663c3.929 7.915.697 17.516-7.218 21.445l-65.465 32.886c-16.049 7.967-35.556 1.194-43.189-15.055L331.679 320H192c-15.925 0-29.426-11.71-31.679-27.475C126.433 55.308 128.38 70.044 128 64c0-36.358 30.318-65.635 67.052-63.929 33.271 1.545 60.048 28.905 60.925 62.201.868 32.933-23.152 60.423-54.608 65.039l4.67 32.69H336c8.837 0 16 7.163 16 16v32c0 8.837-7.163 16-16 16H215.182l4.572 32H352a32 32 0 0 1 28.962 18.392L438.477 396.8l36.178-18.349c7.915-3.929 17.517-.697 21.446 7.218zM311.358 352h-24.506c-7.788 54.204-54.528 96-110.852 96-61.757 0-112-50.243-112-112 0-41.505 22.694-77.809 56.324-97.156-3.712-25.965-6.844-47.86-9.488-66.333C45.956 198.464 0 261.963 0 336c0 97.047 78.953 176 176 176 71.87 0 133.806-43.308 161.11-105.192L311.358 352z"></path></svg>`,
      text: "Wheel Chair Access",
    },
    {
      svg: `<svg aria-hidden="true" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"></path></svg>`,
      text: "Zero waiting time for appointment patients (of course we fine you for uninformed missed appointments)Unique Offerings.",
    },
    {
      svg: `<svg aria-hidden="true" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M232 224h56v56a8 8 0 0 0 8 8h48a8 8 0 0 0 8-8v-56h56a8 8 0 0 0 8-8v-48a8 8 0 0 0-8-8h-56v-56a8 8 0 0 0-8-8h-48a8 8 0 0 0-8 8v56h-56a8 8 0 0 0-8 8v48a8 8 0 0 0 8 8zM576 48a48.14 48.14 0 0 0-48-48H112a48.14 48.14 0 0 0-48 48v336h512zm-64 272H128V64h384zm112 96H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33-17.47-32.77-32H16a16 16 0 0 0-16 16v16a64.19 64.19 0 0 0 64 64h512a64.19 64.19 0 0 0 64-64v-16a16 16 0 0 0-16-16z"></path></svg>`,
      text: "We embrace and are updated to latest cutting-edge technology like 3D printing/guided implants/AI assisted digital smile design and veneers digital full mouth rehabilitation/ scan instead of impressions, aligners (invisible braces), single appointment root canal treatments (RCT), digital protocol etc.",
    },
    {
      svg: `<svg aria-hidden="true" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M336 64h-80c0-35.3-28.7-64-64-64s-64 28.7-64 64H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM192 40c13.3 0 24 10.7 24 24s-10.7 24-24 24-24-10.7-24-24 10.7-24 24-24zm96 304c0 4.4-3.6 8-8 8h-56v56c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8v-56h-56c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h56v-56c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v56h56c4.4 0 8 3.6 8 8v48zm0-192c0 4.4-3.6 8-8 8H104c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h176c4.4 0 8 3.6 8 8v16z"></path></svg>`,
      text: "We give clear diagnosis and crystal-clear treatment plans with no hidden charges, no mincing of words- clear intentions.",
    },
    {
      svg: `<svg aria-hidden="true" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z"></path></svg>`,
      text: "We give you unhurried time- that you not only deserve but us your right",
    },
    {
      svg: `<svg aria-hidden="true" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74L515.6 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.4-16.93z"></path></svg>`,
      text: "Golden E5 philosophy. where the entire team of doctors, consultants and auxiliary staff shares a uniform E5 practice philosophy.",
    },
    {
      svg: `<svg aria-hidden="true" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M496.101 385.669l14.227 28.663c3.929 7.915.697 17.516-7.218 21.445l-65.465 32.886c-16.049 7.967-35.556 1.194-43.189-15.055L331.679 320H192c-15.925 0-29.426-11.71-31.679-27.475C126.433 55.308 128.38 70.044 128 64c0-36.358 30.318-65.635 67.052-63.929 33.271 1.545 60.048 28.905 60.925 62.201.868 32.933-23.152 60.423-54.608 65.039l4.67 32.69H336c8.837 0 16 7.163 16 16v32c0 8.837-7.163 16-16 16H215.182l4.572 32H352a32 32 0 0 1 28.962 18.392L438.477 396.8l36.178-18.349c7.915-3.929 17.517-.697 21.446 7.218zM311.358 352h-24.506c-7.788 54.204-54.528 96-110.852 96-61.757 0-112-50.243-112-112 0-41.505 22.694-77.809 56.324-97.156-3.712-25.965-6.844-47.86-9.488-66.333C45.956 198.464 0 261.963 0 336c0 97.047 78.953 176 176 176 71.87 0 133.806-43.308 161.11-105.192L311.358 352z"></path></svg>`,
      text: "We love senior citizen : We don't give any discounts but we give them lots of time, care & love at a very slow and Empathetic pace.",
    },
    {
      svg: `<svg aria-hidden="true" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74L515.6 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.4-16.93z"></path></svg>`,
      text: `Home visit for Seniors and bed ridden - As an expression of our gratitude to all our existing patients we do visit them at home at \u2013 \u201czero fees\u2019.`,
    },
    {
      svg: `<svg aria-hidden="true" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M336 64h-80c0-35.3-28.7-64-64-64s-64 28.7-64 64H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM192 40c13.3 0 24 10.7 24 24s-10.7 24-24 24-24-10.7-24-24 10.7-24 24-24zm96 304c0 4.4-3.6 8-8 8h-56v56c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8v-56h-56c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h56v-56c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v56h56c4.4 0 8 3.6 8 8v48zm0-192c0 4.4-3.6 8-8 8H104c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h176c4.4 0 8 3.6 8 8v16z"></path></svg>`,
      text: "We are blessed to treat numerous four generations from the same family tree ( grand-grand parents, grandparents, son/daughter and grandchildren.)",
    },
    {
      svg: `<svg aria-hidden="true" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M336 64h-80c0-35.3-28.7-64-64-64s-64 28.7-64 64H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM192 40c13.3 0 24 10.7 24 24s-10.7 24-24 24-24-10.7-24-24 10.7-24 24-24zm96 304c0 4.4-3.6 8-8 8h-56v56c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8v-56h-56c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h56v-56c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v56h56c4.4 0 8 3.6 8 8v48zm0-192c0 4.4-3.6 8-8 8H104c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h176c4.4 0 8 3.6 8 8v16z"></path></svg>`,
      text: "Give back to the society : Our associate doctors do charity for selected & deserving few patients ( at our discretion).",
    },
    {
      svg: `<svg aria-hidden="true" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M336 64h-80c0-35.3-28.7-64-64-64s-64 28.7-64 64H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM192 40c13.3 0 24 10.7 24 24s-10.7 24-24 24-24-10.7-24-24 10.7-24 24-24zm96 304c0 4.4-3.6 8-8 8h-56v56c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8v-56h-56c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h56v-56c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v56h56c4.4 0 8 3.6 8 8v48zm0-192c0 4.4-3.6 8-8 8H104c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h176c4.4 0 8 3.6 8 8v16z"></path></svg>`,
      text: "We have equally dedicated and loyal auxiliary staff. Senior most staff are 20+ years with us & others are 12+ years with us.",
    },
    {
      svg: `<svg aria-hidden="true" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M320 0a160 160 0 1 1 0 320A160 160 0 1 1 320 0zM192 320h128l0 24 16 0 16 0 0-24h128c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H192c-35.3 0-64-28.7-64-64V384c0-35.3 28.7-64 64-64zm-64 64v64c0 17.7 14.3 32 32 32H480c17.7 0 32-14.3 32-32V384c0-17.7-14.3-32-32-32H352v16c0 8.8-7.2 16-16 16H304c-8.8 0-16-7.2-16-16V352H192c-17.7 0-32 14.3-32 32z"/></svg>`,
      text: "Ample Parking space - Though in the heart of the city we have ample pay and park facilities at just 100 meters .",
    },
    {
      svg: `<svg aria-hidden="true" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74L515.6 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.4-16.93z"></path></svg>`,
      text: "Easy access from nearest metro station \u2013 Deccan metro station & Garware college station.",
    },
  ];

  return (
    <section
      style={{
        backgroundColor: "rgb(224, 225, 231)",
        backgroundImage: `url(${colorlogo})`,
        backgroundSize: "cover",
        backgroundPosition: "50% 50%",
        backgroundRepeat: "no-repeat",
        color: "rgb(74, 74, 74)",
        fontFamily: "Lato",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Poppins:wght@400;500;600&family=Lato:wght@400;700&display=swap');

        @keyframes slide {
          100% { transform: translateX(1.3em); }
        }

        .why-choose-watermark-since {
          position: absolute;
          top: 10px;
          right: -20px;
          font-size: clamp(80px, 10vw, 160px);
          font-family: 'Poppins', sans-serif;
          font-weight: 700;
          color: rgba(28, 36, 75, 0.10);
          white-space: nowrap;
          pointer-events: none;
          user-select: none;
          line-height: 1;
          z-index: 1;
        }

        .why-choose-watermark-tagline {
          position: absolute;
          bottom: 10px;
          left: 0;
          right: 0;
          font-size: clamp(36px, 5vw, 72px);
          font-family: 'Poppins', sans-serif;
          font-style: italic;
          font-weight: 600;
          color: rgba(28, 36, 75, 0.10);
          white-space: nowrap;
          pointer-events: none;
          user-select: none;
          line-height: 1;
          z-index: 1;
          padding-left: 24px;
        }

        .why-item-icon svg {
          width: 32px;
          height: 32px;
          fill: #1C6EBF;
          flex-shrink: 0;
        }
      `}</style>

      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(255, 255, 255, 0.78)",
          zIndex: 0,
        }}
      />

      <div className="why-choose-watermark-since">Since 1996</div>
      <div className="why-choose-watermark-tagline">
        Ethic &middot; Empathy &middot; Efficiency
      </div>

      <div
        className="page-container"
        style={{
          paddingLeft: "24px",
          paddingRight: "24px",
          paddingTop: "80px",
          paddingBottom: "80px",
          position: "relative",
          zIndex: 2,
        }}
      >
        <div ref={ref}>
          <h3
            style={{
              color: "rgb(22, 37, 78)",
              fontFamily: '"Playfair Display", sans-serif',
              fontSize: "44px",
              fontWeight: "700",
              lineHeight: "1.2",
              border: "0px none rgb(22, 37, 78)",
              textAlign: "left",
              marginBottom: "40px",
              marginTop: "0px",
            }}
          >
            Why Choose us
          </h3>

          <div className="flex flex-col" style={{ gap: "28px" }}>
            {items.map((item, idx) => (
              <div
                key={idx}
                className={`flex flex-row items-start transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                style={{ gap: "18px", transitionDelay: `${idx * 60}ms` }}
              >
                <span
                  className="why-item-icon"
                  style={{
                    marginTop: "1px",
                    flexShrink: 0,
                    width: "32px",
                    height: "32px",
                    display: "inline-flex",
                    alignItems: "flex-start",
                    justifyContent: "center",
                    color: "#1C6EBF",
                  }}
                  dangerouslySetInnerHTML={{ __html: item.svg }}
                />
                <h3
                  style={{
                    color: "rgb(28, 36, 75)",
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "18px",
                    fontWeight: "500",
                    lineHeight: "34px",
                    border: "0px none rgb(28, 36, 75)",
                    textAlign: "left",
                    margin: "0px",
                  }}
                >
                  {item.text}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
