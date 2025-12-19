import './Location.css';

function Location() {
  return (
    <section id="lokasi" className="location">
      <div className="container">
        {/* Header */}
        <div className="location-header">
          <div className="location-badge">
            <span>Hubungi Kami</span>
          </div>
          <h2 className="location-title">
            Lokasi & <span className="location-title-accent">Kontak</span>
          </h2>
          <p className="location-subtitle">
            Kunjungi kami atau hubungi untuk informasi lebih lanjut
          </p>
        </div>

        <div className="location-grid">
          {/* Contact Info */}
          <div className="location-contacts">
            <div className="location-contact-card">
              <div className="location-contact-icon location-contact-icon-red">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <div>
                <h3 className="location-contact-title">Alamat</h3>
                <p className="location-contact-text">
                  Jl. [Nama Jalan], Purwokerto<br />
                  Jawa Tengah, Indonesia 53100
                </p>
                <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="location-contact-link">
                  <span>Buka di Maps</span>
                  <span>→</span>
                </a>
              </div>
            </div>

            <div className="location-contact-card">
              <div className="location-contact-icon location-contact-icon-yellow">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <div>
                <h3 className="location-contact-title">Jam Operasional</h3>
                <div className="location-contact-hours">
                  <div className="location-contact-hours-item">
                    <span>Senin - Minggu</span>
                    <span className="location-contact-hours-time">17:00 - 02:00</span>
                  </div>
                  <p className="location-contact-hours-note">Buka setiap hari tanpa libur</p>
                </div>
              </div>
            </div>

            <div className="location-contact-card">
              <div className="location-contact-icon location-contact-icon-green">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <div>
                <h3 className="location-contact-title">Telepon / WhatsApp</h3>
                <p className="location-contact-text location-contact-phone">+62 XXX-XXXX-XXXX</p>
                <a href="https://wa.me/62" target="_blank" rel="noopener noreferrer" className="location-contact-link location-contact-link-green">
                  <span>Chat via WhatsApp</span>
                  <span>→</span>
                </a>
              </div>
            </div>

            {/* Social Media */}
            <div className="location-contact-card">
              <h3 className="location-contact-title">Ikuti Kami</h3>
              <div className="location-social">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="location-social-link location-social-instagram">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="location-social-link location-social-facebook">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a href="mailto:info@warmindoataplangit.com" className="location-social-link location-social-mail">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </a>
              </div>
              <p className="location-social-handle">@warmindo.ataplangit</p>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="location-map">
            <div className="location-map-placeholder">
              <div className="location-map-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <h3 className="location-map-title">Peta Lokasi</h3>
              <p className="location-map-text">
                Peta interaktif akan ditambahkan<br />
                setelah alamat lengkap tersedia
              </p>
              <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="location-map-btn">
                Buka di Google Maps
              </a>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="location-cta">
          <h3 className="location-cta-title">
            Siap Menikmati Hidangan Kami?
          </h3>
          <p className="location-cta-text">
            Datang langsung atau pesan via WhatsApp untuk takeaway atau delivery
          </p>
          <div className="location-cta-buttons">
            <a href="#menu" className="location-cta-btn location-cta-btn-primary">
              Lihat Menu
            </a>
            <a href="https://wa.me/62" target="_blank" rel="noopener noreferrer" className="location-cta-btn location-cta-btn-secondary">
              Order via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Location;
