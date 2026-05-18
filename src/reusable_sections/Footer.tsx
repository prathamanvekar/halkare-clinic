export default function Footer() {
  return (
    <footer
      id="footer"
      style={{
        backgroundPosition: '0% 0%',
        backgroundRepeat: 'repeat',
        color: 'rgb(74, 74, 74)',
        fontFamily: 'Lato',
        animation: 'none 0s ease 0s 1 normal none running',
        position: 'relative',
      }}
    >
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap');`}</style>
      <div
        id="footer-bottom"
        style={{
          backgroundColor: 'rgb(11, 0, 79)',
          padding: '15px 0px',
          fontSize: '12px',
          lineHeight: '1',
          color: 'rgb(255, 255, 255)',
        }}
      >
        <div className="page-container">
          <div style={{ textAlign: 'center' }}>
            <a
              style={{
                color: 'rgb(255, 255, 255)',
                fontFamily: 'Lato',
                fontSize: '13px',
                fontWeight: '400',
                lineHeight: '13px',
                letterSpacing: '1px',
                border: '0px none rgb(255, 255, 255)',
                textAlign: 'center',
                animation: 'none 0s ease 0s 1 normal none running',
                textDecoration: 'none',
                transition: 'color 0.3s ease',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = 'rgb(228, 240, 245)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgb(255, 255, 255)')}
            >
              &copy; Copyright - Dr. Halkare Dental Clinic
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
