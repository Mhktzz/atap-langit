import { useState } from "react";
import logoBlack from "../../assets/logo-atap-langit-black.png";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-content">
          {/* Logo */}
          <div className="navbar-logo">
            <img src={logoBlack} alt="Warmindo Atap Langit" />
          </div>

          {/* Desktop Menu */}
          <div className="navbar-menu desktop">
            <a href="#home" className="navbar-link">
              Home
            </a>
            <a href="#tentang" className="navbar-link">
              Tentang
            </a>
            <a href="#menu" className="navbar-link">
              Menu
            </a>
            <a href="#lokasi" className="navbar-link">
              Lokasi
            </a>
            <a href="#order" className="navbar-btn">
              Order Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="navbar-toggle" onClick={toggleMenu}>
            {isOpen ? (
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="navbar-mobile">
          <a href="#home" className="navbar-mobile-link" onClick={closeMenu}>
            Home
          </a>
          <a href="#tentang" className="navbar-mobile-link" onClick={closeMenu}>
            Tentang
          </a>
          <a href="#menu" className="navbar-mobile-link" onClick={closeMenu}>
            Menu
          </a>
          <a href="#lokasi" className="navbar-mobile-link" onClick={closeMenu}>
            Lokasi
          </a>
          <a href="#order" className="navbar-mobile-btn" onClick={closeMenu}>
            Order Now
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
