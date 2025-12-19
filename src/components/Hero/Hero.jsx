import './Hero.css';

function Hero() {
  return (
    <section id="home" className="hero">
      {/* Decorative Shapes */}
      <div className="hero-shape hero-shape-1"></div>
      <div className="hero-shape hero-shape-2"></div>

      <div className="container hero-container">
        <div className="hero-grid">
          {/* Left Content */}
          <div className="hero-content">
            <div className="hero-badge">
              <svg className="hero-badge-icon" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
              <span>Favorit Warga Purwokerto</span>
            </div>

            <h1 className="hero-title">
              Siap Menggugah Selera
              <span className="hero-title-accent">Malam Anda</span>
            </h1>

            <p className="hero-description">
              Nikmati kelezatan mie instan dan hidangan hangat lainnya dengan cita rasa istimewa. 
              Cocok untuk menemani malam Anda di bawah atap langit.
            </p>

            <div className="hero-buttons">
              <a href="#menu" className="hero-btn-primary">Lihat Menu</a>
              <a href="#lokasi" className="hero-btn-secondary">Lokasi Kami</a>
            </div>

            {/* Info Cards */}
            <div className="hero-info-grid">
              <div className="hero-info-card">
                <div className="hero-info-icon hero-info-icon-yellow">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </div>
                <div>
                  <p className="hero-info-label">Jam Buka</p>
                  <p className="hero-info-value">17:00 - 02:00</p>
                </div>
              </div>

              <div className="hero-info-card">
                <div className="hero-info-icon hero-info-icon-blue">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div>
                  <p className="hero-info-label">Lokasi</p>
                  <p className="hero-info-value">Purwokerto</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="hero-image-wrapper">
            <div className="hero-image">
              <img
                src="https://images.unsplash.com/photo-1680675494363-75bbf9838a09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRvbmVzaWFuJTIwbWllJTIwZ29yZW5nJTIwbm9vZGxlc3xlbnwxfHx8fDE3NjU4Nzg0MTF8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Mie Goreng"
              />
            </div>

            {/* Floating Badge */}
            <div className="hero-floating-badge">
              <div className="hero-floating-icon">
                <span>🔥</span>
              </div>
              <div>
                <p className="hero-floating-number">1000+</p>
                <p className="hero-floating-text">Pelanggan Puas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
