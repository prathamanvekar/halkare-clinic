import { useState } from "react";

export default function FloatingContact() {
  const [open, setOpen] = useState(false);

  return (
    <div
      style={{ position: "fixed", right: "18px", bottom: "18px", zIndex: 200 }}
    >
      {open && (
        <div
          style={{
            marginBottom: "10px",
            background: "#ffffff",
            borderRadius: "12px",
            boxShadow: "0 12px 28px rgba(0, 0, 0, 0.18)",
            padding: "10px",
            minWidth: "220px",
          }}
        >
          <a
            href="tel:9284987903"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              textDecoration: "none",
              color: "#0b1f4d",
              fontFamily: "Lato, sans-serif",
              fontSize: "14px",
              fontWeight: 600,
              padding: "8px 10px",
              borderRadius: "8px",
            }}
          >
            <span aria-hidden="true">📞</span>
            Call 9284987903
          </a>
          <a
            href="mailto:drhalkaredentalclinic@gmail.com"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              textDecoration: "none",
              color: "#0b1f4d",
              fontFamily: "Lato, sans-serif",
              fontSize: "14px",
              fontWeight: 600,
              padding: "8px 10px",
              borderRadius: "8px",
              marginTop: "4px",
            }}
          >
            <span aria-hidden="true">✉️</span>
            Email Clinic
          </a>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-label="Contact us"
        style={{
          width: "44px",
          height: "44px",
          borderRadius: "12px",
          border: "none",
          background: "#0b1f4d",
          color: "#ffffff",
          boxShadow: "0 10px 24px rgba(0, 0, 0, 0.2)",
          cursor: "pointer",
          fontSize: "18px",
        }}
      >
        {open ? "×" : "✆"}
      </button>
    </div>
  );
}
