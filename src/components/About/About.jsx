import './About.css';

function About() {
  return (
    <section id="tentang" className="about">
      {/* Decorative elements */}
      <div className="about-decoration about-decoration-1"></div>
      <div className="about-decoration about-decoration-2"></div>

      <div className="container about-container">
        {/* Header */}
        <div className="about-header">
          <h2 className="about-title">
            Warmindo <span className="about-title-accent">Atap Langit</span>
          </h2>
          <p className="about-subtitle">
            Destinasi kuliner malam favorit di Purwokerto yang menyajikan berbagai hidangan 
            dengan cita rasa istimewa dan harga terjangkau
          </p>
        </div>

        {/* Stats Grid */}
        <div className="about-stats">
          <div className="about-stat-card">
            <div className="about-stat-icon about-stat-icon-red">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path>
              </svg>
            </div>
            <p className="about-stat-number">5+</p>
            <p className="about-stat-label">Tahun Berpengalaman</p>
          </div>

          <div className="about-stat-card">
            <div className="about-stat-icon about-stat-icon-blue">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <p className="about-stat-number">1000+</p>
            <p className="about-stat-label">Pelanggan Setia</p>
          </div>

          <div className="about-stat-card">
            <div className="about-stat-icon about-stat-icon-yellow">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="8" r="7"></circle>
                <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
              </svg>
            </div>
            <p className="about-stat-number">20+</p>
            <p className="about-stat-label">Varian Menu</p>
          </div>

          <div className="about-stat-card">
            <div className="about-stat-icon about-stat-icon-green">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </div>
            <p className="about-stat-number">4.8</p>
            <p className="about-stat-label">Rating Pelanggan</p>
          </div>
        </div>

        {/* Content Grid */}
        <div className="about-content-grid">
          <div className="about-features">
            <h3 className="about-features-title">Kenapa Harus Memilih Kami?</h3>

            <div className="about-feature-list">
              <div className="about-feature-item">
                <div className="about-feature-icon about-feature-icon-red">
                  <span>🍜</span>
                </div>
                <div>
                  <h4 className="about-feature-title">Cita Rasa Istimewa</h4>
                  <p className="about-feature-text">
                    Setiap hidangan dibuat dengan bumbu rahasia yang membuat pelanggan selalu kembali
                  </p>
                </div>
              </div>

              <div className="about-feature-item">
                <div className="about-feature-icon about-feature-icon-yellow">
                  <span>💰</span>
                </div>
                <div>
                  <h4 className="about-feature-title">Harga Terjangkau</h4>
                  <p className="about-feature-text">
                    Nikmati kelezatan dengan harga yang ramah di kantong mahasiswa dan keluarga
                  </p>
                </div>
              </div>

              <div className="about-feature-item">
                <div className="about-feature-icon about-feature-icon-blue">
                  <span>⚡</span>
                </div>
                <div>
                  <h4 className="about-feature-title">Pelayanan Cepat</h4>
                  <p className="about-feature-text">
                    Pesanan Anda akan disiapkan dengan cepat tanpa mengurangi kualitas rasa
                  </p>
                </div>
              </div>

              <div className="about-feature-item">
                <div className="about-feature-icon about-feature-icon-green">
                  <span>🌙</span>
                </div>
                <div>
                  <h4 className="about-feature-title">Buka Hingga Larut</h4>
                  <p className="about-feature-text">
                    Buka hingga dini hari untuk menemani malam Anda dengan hidangan hangat
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="about-images">
            <div className="about-images-col">
              <div className="about-image about-image-tall">
                <img
                  src="https://images.unsplash.com/photo-1680675494363-75bbf9838a09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRvbmVzaWFuJTIwbWllJTIwZ29yZW5nJTIwbm9vZGxlc3xlbnwxfHx8fDE3NjU4Nzg0MTF8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Menu 1"
                />
              </div>
              <div className="about-image about-image-short">
                <img
                  src="https://images.unsplash.com/photo-1591299089616-c9604047b1a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3QlMjB0ZWElMjBnbGFzc3xlbnwxfHx8fDE3NjU4Nzg0MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Menu 2"
                />
              </div>
            </div>
            <div className="about-images-col about-images-col-offset">
              <div className="about-image about-image-short">
                <img
                  src="https://images.unsplash.com/photo-1544378730-8b5104b18790?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRvbmVzaWFuJTIwZnJpZWQlMjByaWNlJTIwdG9wJTIwdmlld3xlbnwxfHx8fDE3NjU4Nzg0MTF8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Menu 3"
                />
              </div>
              <div className="about-image about-image-tall">
                <img
                  src="https://images.unsplash.com/photo-1701480253822-1842236c9a97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMG5vb2RsZSUyMHNvdXAlMjBib3dsfGVufDF8fHx8MTc2NTg3ODQxMnww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Menu 4"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
