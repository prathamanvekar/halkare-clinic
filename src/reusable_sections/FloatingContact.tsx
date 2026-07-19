import { useState } from "react";

export default function FloatingContact() {
  const [open, setOpen] = useState(false);

  return (
    <div
      style={{
        position: "fixed",
        right: "24px",
        bottom: "24px",
        zIndex: 9999,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
      }}
    >
      <style>{`
        @keyframes float-pulse {
          0%, 100% { transform: scale(1); box-shadow: 0 10px 24px rgba(0, 0, 0, 0.25); }
          50% { transform: scale(1.05); box-shadow: 0 14px 28px rgba(11, 31, 77, 0.35); }
        }
        .floating-contact-panel {
          transform-origin: bottom right;
          transition: opacity 0.22s cubic-bezier(0.34, 1.56, 0.64, 1),
            transform 0.22s cubic-bezier(0.34, 1.56, 0.64, 1);
          transform: translateZ(0);
          backface-visibility: hidden;
          will-change: transform;
        }
        .floating-contact-panel.closed {
          opacity: 0;
          transform: translateY(8px) scale(0.94) translateZ(0);
          pointer-events: none;
        }
        .floating-contact-panel.open {
          opacity: 1;
          transform: translateY(0) scale(1) translateZ(0);
          pointer-events: auto;
        }
        .floating-contact-link {
          transition: background-color 0.18s ease, transform 0.18s ease;
        }
        .floating-contact-link:hover {
          background-color: rgba(11, 31, 77, 0.08);
          transform: translateX(-3px);
        }
        .floating-contact-btn {
          transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1),
            box-shadow 0.2s ease, background-color 0.2s ease;
          transform: translateZ(0);
          backface-visibility: hidden;
          will-change: transform;
        }
        .floating-contact-btn.closed-btn {
          animation: float-pulse 3.5s infinite ease-in-out;
        }
        .floating-contact-btn:hover {
          animation: none !important;
          transform: scale(1.1) !important;
          box-shadow: 0 14px 30px rgba(0, 0, 0, 0.36) !important;
        }
        .floating-contact-btn:active {
          transform: scale(0.94) !important;
        }
        .floating-contact-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          line-height: 1;
          transition: transform 0.2s ease;
        }
      `}</style>

      <div
        className={`floating-contact-panel ${open ? "open" : "closed"}`}
        style={{
          marginBottom: "12px",
          background: "#ffffff",
          borderRadius: "14px",
          boxShadow: "0 12px 28px rgba(0, 0, 0, 0.2)",
          padding: "12px",
          minWidth: "220px",
          border: "1px solid rgba(11, 31, 77, 0.08)",
        }}
      >
        <a
          href="tel:9284987903"
          className="floating-contact-link"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            textDecoration: "none",
            color: "#0b1f4d",
            fontFamily: "Lato, sans-serif",
            fontSize: "14px",
            fontWeight: 600,
            padding: "10px 12px",
            borderRadius: "8px",
          }}
        >
          <span style={{ fontSize: "18px" }} aria-hidden="true">
            📞
          </span>
          Call 9284987903
        </a>
        <a
          href="mailto:drhalkaredentalclinic@gmail.com"
          className="floating-contact-link"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            textDecoration: "none",
            color: "#0b1f4d",
            fontFamily: "Lato, sans-serif",
            fontSize: "14px",
            fontWeight: 600,
            padding: "10px 12px",
            borderRadius: "8px",
            marginTop: "4px",
          }}
        >
          <span style={{ fontSize: "18px" }} aria-hidden="true">
            ✉️
          </span>
          Email Clinic
        </a>
      </div>

      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-label="Contact us"
        className={`floating-contact-btn ${!open ? "closed-btn" : ""}`}
        style={{
          width: "52px",
          height: "52px",
          borderRadius: "50%",
          border: "none",
          background: "#0b1f4d",
          color: "#ffffff",
          boxShadow: "0 10px 24px rgba(0, 0, 0, 0.25)",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 0,
        }}
      >
        <span className="floating-contact-icon" aria-hidden="true">
          {open ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            "📞"
          )}
        </span>
      </button>
    </div>
  );
}
