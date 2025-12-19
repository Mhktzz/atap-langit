import './Promo.css';

function Promo() {
  return (
    <section className="promo">
      {/* Decorative shapes */}
      <div className="promo-decoration promo-decoration-1"></div>
      <div className="promo-decoration promo-decoration-2"></div>

      <div className="container promo-container">
        <div className="promo-grid">
          {/* Left Content */}
          <div className="promo-content">
            <div className="promo-badge">
              <svg className="promo-badge-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
                <line x1="7" y1="7" x2="7.01" y2="7"></line>
              </svg>
              <span>Promo Spesial</span>
            </div>
            <h2 className="promo-title">
              Paket Hemat<br />
              Untuk Anda
            </h2>
            <p className="promo-description">
              Nikmati berbagai paket hemat mulai dari Rp 25.000 untuk 2 porsi! 
              Cocok untuk makan berdua atau sendiri dengan minuman.
            </p>

            <div className="promo-list">
              <div className="promo-item">
                <div className="promo-item-icon">
                  <span>🍜</span>
                </div>
                <div>
                  <h4 className="promo-item-title">Paket Duo Mie</h4>
                  <p className="promo-item-text">2 Mie Goreng + 2 Minuman = Rp 25.000</p>
                </div>
              </div>

              <div className="promo-item">
                <div className="promo-item-icon">
                  <span>🍚</span>
                </div>
                <div>
                  <h4 className="promo-item-title">Paket Nasi Lengkap</h4>
                  <p className="promo-item-text">Nasi Goreng + Mie Rebus + 2 Minuman = Rp 30.000</p>
                </div>
              </div>

              <div className="promo-item">
                <div className="promo-item-icon">
                  <span>🌙</span>
                </div>
                <div>
                  <h4 className="promo-item-title">Paket Begadang</h4>
                  <p className="promo-item-text">Mie Special + Nasi Goreng + 2 Minuman = Rp 28.000</p>
                </div>
              </div>
            </div>

            <a href="#order" className="promo-btn">
              <span>Pesan Sekarang</span>
              <span>→</span>
            </a>
          </div>

          {/* Right Content */}
          <div className="promo-cards">
            <div className="promo-card-wrapper">
              <div className="promo-card-main">
                <div className="promo-card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </div>
                <h3 className="promo-card-title">Promo Malam</h3>
                <p className="promo-card-text">
                  Dapatkan diskon 10% untuk pembelian mulai pukul 22:00 - 01:00
                </p>
                <div className="promo-card-discount">
                  <p className="promo-card-discount-label">Diskon hingga</p>
                  <p className="promo-card-discount-value">10%</p>
                  <p className="promo-card-discount-info">Setiap hari</p>
                </div>
              </div>

              <div className="promo-card-benefits">
                <h4 className="promo-card-benefits-title">Benefit Lainnya</h4>
                <ul className="promo-card-benefits-list">
                  <li className="promo-card-benefit-item">
                    <span className="promo-card-benefit-icon">✓</span>
                    <span>Free extra topping untuk member</span>
                  </li>
                  <li className="promo-card-benefit-item">
                    <span className="promo-card-benefit-icon">✓</span>
                    <span>Beli 5 gratis 1</span>
                  </li>
                  <li className="promo-card-benefit-item">
                    <span className="promo-card-benefit-icon">✓</span>
                    <span>Cashback 5% setiap transaksi</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Promo;
