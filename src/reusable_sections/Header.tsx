import { useState } from "react";
import logo from "@/assets/logo.jpg";

const menuItems = [
  { id: "home", label: "Home", href: "#header" },
  { id: "about", label: "About", href: "#about" },
  { id: "doctors", label: "Doctors", href: "#doctors" },
  { id: "gallery", label: "Gallery", href: "#gallery" },
  { id: "contact", label: "Contact", href: "#contact" },
];

function NavMenuContent({
  searchOpen,
  setSearchOpen,
  mobileOpen,
  setMobileOpen,
}: {
  searchOpen: boolean;
  setSearchOpen: (open: boolean) => void;
  mobileOpen: boolean;
  setMobileOpen: (open: boolean) => void;
}) {
  return (
    <>
      <div
        className="hidden lg:flex"
        style={{ alignItems: "center", height: "88px" }}
      >
        {menuItems.map((item) => (
          <a key={item.id} href={item.href || "#"} className="nav-link-item">
            {item.label}
          </a>
        ))}
        <button
          className="search-toggle-btn"
          aria-label="Toggle Website Search"
          onClick={() => setSearchOpen(!searchOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </button>
      </div>

      <div className="lg:hidden flex items-center">
        <button
          className="flex items-center justify-center"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "rgb(74, 74, 74)",
            padding: "8px",
          }}
          aria-label="Open menu"
          onClick={() => setMobileOpen(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div
          className="fixed inset-0"
          style={{ zIndex: 200, backgroundColor: "rgba(0,0,0,0.45)" }}
          onClick={() => setMobileOpen(false)}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              width: "280px",
              height: "100%",
              backgroundColor: "#ffffff",
              padding: "20px",
              fontFamily: "Lato, sans-serif",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <img
                src={logo}
                alt="Dr. Halkare Dental Clinic"
                className="w-auto h-auto"
                style={{ maxWidth: "80px" }}
              />
              <button
                aria-label="Close menu"
                onClick={() => setMobileOpen(false)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "20px",
                }}
              >
                &times;
              </button>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginTop: "24px",
                gap: "4px",
              }}
            >
              {menuItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href || "#"}
                  onClick={() => setMobileOpen(false)}
                  style={{
                    fontSize: "10px",
                    fontWeight: 600,
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                    fontFamily: "Lato, sans-serif",
                    color: "rgb(74, 74, 74)",
                    textDecoration: "none",
                    padding: "12px 0",
                    borderBottom: "1px solid rgb(241, 241, 241)",
                    display: "block",
                  }}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default function Header() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      id="header"
      style={{
        backgroundColor: "rgb(255, 255, 255)",
        backgroundPosition: "0% 0%",
        backgroundRepeat: "repeat",
        color: "rgb(74, 74, 74)",
        fontFamily: "Lato",
        animation: "none 0s ease 0s 1 normal none running",
        position: "relative",
        zIndex: 100,
        width: "100%",
        borderBottom: "1px solid rgb(241, 241, 241)",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;600;700&display=swap');
        @keyframes blink {
          0% { opacity: 1; }
          50% { opacity: 0; }
          100% { opacity: 1; }
        }
        .nav-link-item {
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 2px;
          text-transform: uppercase;
          font-family: 'Lato', sans-serif;
          color: rgb(74, 74, 74);
          text-decoration: none;
          padding: 0 14px;
          line-height: 88px;
          display: inline-flex;
          align-items: center;
          height: 88px;
          transition: color 0.2s ease;
          cursor: pointer;
          white-space: nowrap;
        }
        .nav-link-item:hover {
          color: #13AFF0;
        }
        .logo-img {
          transition: opacity 0.3s ease-in-out;
        }
        .logo-img:hover {
          opacity: 0.6;
        }
        .search-toggle-btn {
          border-left: 1px solid rgb(241, 241, 241);
          border-right: 1px solid rgb(241, 241, 241);
          padding: 0 6px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          height: 88px;
          width: 46px;
          cursor: pointer;
          color: rgb(74, 74, 74);
          background: none;
          border-top: none;
          border-bottom: none;
          transition: color 0.2s ease;
        }
        .search-toggle-btn:hover {
          color: #13AFF0;
        }
        .social-icon-link {
          color: #ffffff;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transition: opacity 0.2s ease;
          text-decoration: none;
        }
        .social-icon-link:hover {
          opacity: 0.7;
        }
      `}</style>

      <div
        className="w-full"
        style={{
          backgroundColor: "#1C244B",
          height: "44px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          className="page-container"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            height: "100%",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ffffff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.56 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 5.61 5.61l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span
                style={{
                  color: "#ffffff",
                  fontFamily: "Lato, sans-serif",
                  fontSize: "13px",
                  fontWeight: 400,
                }}
              >
                (+91) 9284987903, 020-24489225
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ffffff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <span
                style={{
                  color: "#ffffff",
                  fontFamily: "Lato, sans-serif",
                  fontSize: "13px",
                  fontWeight: 400,
                }}
              >
                drhalkaredentalclinic@gmail.com
              </span>
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <a
              href="https://www.instagram.com/drhalkaredentalclinic/"
              className="social-icon-link"
              aria-label="Instagram (opens in a new tab)"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ffffff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <nav
        id="site-navigation"
        style={{
          backgroundPosition: "0% 0%",
          backgroundRepeat: "repeat",
          color: "rgb(74, 74, 74)",
          fontFamily: "Lato",
          animation: "none 0s ease 0s 1 normal none running",
          backgroundColor: "#ffffff",
          height: "88px",
        }}
      >
        <div
          className="page-container"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "88px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: "88px",
            }}
          >
            <a
              href="https://drhalkaredentalclinic.com/"
              style={{
                textDecoration: "none",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img
                src={logo}
                alt="Dr. Halkare Dental Clinic"
                className="logo-img"
                style={{
                  width: "99px",
                  height: "60px",
                  verticalAlign: "middle",
                }}
              />
            </a>
            <span
              style={{
                color: "rgb(146, 146, 146)",
                fontSize: "12px",
                lineHeight: "20px",
                letterSpacing: "2px",
                textTransform: "uppercase",
                fontFamily: "Lato, sans-serif",
                fontWeight: 400,
                margin: 0,
              }}
            >
              Since 1996
            </span>
          </div>

          <NavMenuContent
            searchOpen={searchOpen}
            setSearchOpen={setSearchOpen}
            mobileOpen={mobileOpen}
            setMobileOpen={setMobileOpen}
          />
        </div>
      </nav>
    </header>
  );
}
