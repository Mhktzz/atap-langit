import './MenuCard.css';

function MenuCard({ item }) {
  return (
    <div className="menu-card">
      {/* Image Container */}
      <div className="menu-card-image-wrapper">
        <img
          src={item.image}
          alt={item.name}
          className="menu-card-image"
        />
        {item.isPopular && (
          <div className="menu-card-badge">
            <svg className="menu-card-badge-icon" viewBox="0 0 24 24" fill="currentColor">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
            <span>Popular</span>
          </div>
        )}
        <div className="menu-card-category">
          <span>{item.category}</span>
        </div>
      </div>

      {/* Content */}
      <div className="menu-card-content">
        <h3 className="menu-card-title">{item.name}</h3>
        <p className="menu-card-description">{item.description}</p>
        <div className="menu-card-footer">
          <span className="menu-card-price">{item.price}</span>
          <button className="menu-card-btn">Pesan</button>
        </div>
      </div>
    </div>
  );
}

export default MenuCard;
