import './Testimonials.css';

const testimonials = [
  {
    id: 1,
    name: 'Budi Santoso',
    role: 'Mahasiswa',
    image: '👨‍🎓',
    rating: 5,
    text: 'Warmindo favorit saya di Purwokerto! Mie gorengnya enak banget dan harganya ramah di kantong mahasiswa. Paling suka datang pas lagi begadang.',
  },
  {
    id: 2,
    name: 'Siti Nurhaliza',
    role: 'Pegawai Swasta',
    image: '👩‍💼',
    rating: 5,
    text: 'Pelayanannya cepat dan rasanya konsisten enak. Nasi goreng seafoodnya jadi favorit keluarga. Recommended banget!',
  },
  {
    id: 3,
    name: 'Ahmad Fauzi',
    role: 'Wiraswasta',
    image: '👨‍💻',
    rating: 5,
    text: 'Tempat nongkrong yang asik sambil makan mie atau nasi goreng. Tempatnya nyaman dan buka sampai larut malam. Top!',
  },
];

function Testimonials() {
  return (
    <section className="testimonials">
      <div className="container">
        {/* Header */}
        <div className="testimonials-header">
          <div className="testimonials-badge">
            <span>Testimoni</span>
          </div>
          <h2 className="testimonials-title">
            Apa Kata <span className="testimonials-title-accent">Pelanggan</span>
          </h2>
          <p className="testimonials-subtitle">
            Ribuan pelanggan puas telah merasakan kelezatan hidangan kami
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              {/* Quote Icon */}
              <div className="testimonial-quote">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
                </svg>
              </div>

              {/* Avatar */}
              <div className="testimonial-avatar">
                {testimonial.image}
              </div>

              {/* Rating */}
              <div className="testimonial-rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="testimonial-star" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="testimonial-text">"{testimonial.text}"</p>

              {/* Author Info */}
              <div className="testimonial-author">
                <h4 className="testimonial-author-name">{testimonial.name}</h4>
                <p className="testimonial-author-role">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="testimonials-stats">
          <div className="testimonials-stat">
            <p className="testimonials-stat-number">1000+</p>
            <p className="testimonials-stat-label">Pelanggan</p>
          </div>
          <div className="testimonials-stat">
            <p className="testimonials-stat-number">4.8</p>
            <p className="testimonials-stat-label">Rating</p>
          </div>
          <div className="testimonials-stat">
            <p className="testimonials-stat-number">5+</p>
            <p className="testimonials-stat-label">Tahun</p>
          </div>
          <div className="testimonials-stat">
            <p className="testimonials-stat-number">20+</p>
            <p className="testimonials-stat-label">Menu</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
