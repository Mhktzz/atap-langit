import logoColor from "../../assets/logo-atap-langit-white.png";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Section */}
          <div className="footer-brand">
            <img
              src={logoColor}
              alt="Warmindo Atap Langit"
              className="footer-logo"
            />
            <p className="footer-description">
              Warmindo Atap Langit adalah destinasi kuliner favorit di
              Purwokerto yang menyajikan berbagai hidangan mie instan dan
              makanan hangat dengan harga terjangkau dan rasa yang tak
              terlupakan.
            </p>
            <div className="footer-social">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link footer-social-instagram"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link footer-social-facebook"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a
                href="mailto:info@warmindoataplangit.com"
                className="footer-social-link footer-social-mail"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </a>
            </div>
          </div>

          {/* Menu Links */}
          <div className="footer-links">
            <h4 className="footer-links-title">Menu</h4>
            <ul className="footer-links-list">
              <li>
                <a href="#home" className="footer-link">
                  Home
                </a>
              </li>
              <li>
                <a href="#tentang" className="footer-link">
                  Tentang Kami
                </a>
              </li>
              <li>
                <a href="#menu" className="footer-link">
                  Menu
                </a>
              </li>
              <li>
                <a href="#lokasi" className="footer-link">
                  Lokasi
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-contact">
            <h4 className="footer-contact-title">Kontak</h4>
            <ul className="footer-contact-list">
              <li className="footer-contact-item">
                <svg
                  className="footer-contact-icon footer-contact-icon-red"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span>
                  Jl. [Nama Jalan]
                  <br />
                  Purwokerto, Jawa Tengah
                </span>
              </li>
              <li className="footer-contact-item">
                <svg
                  className="footer-contact-icon footer-contact-icon-green"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <span>+62 XXX-XXXX-XXXX</span>
              </li>
              <li className="footer-contact-item">
                <svg
                  className="footer-contact-icon footer-contact-icon-blue"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <span>info@warmindoataplangit.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Opening Hours */}
        <div className="footer-hours">
          <div className="footer-hours-card">
            <h4 className="footer-hours-title">Jam Operasional</h4>
            <div className="footer-hours-info">
              <div className="footer-hours-indicator"></div>
              <p>
                Senin - Minggu:{" "}
                <span className="footer-hours-time">17:00 - 02:00 WIB</span>
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-copyright">
          <p>
            © {new Date().getFullYear()} Warmindo Atap Langit Purwokerto. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
