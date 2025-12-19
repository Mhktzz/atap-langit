import MenuCard from '../MenuCard/MenuCard';
import './Menu.css';

const menuItems = [
  {
    id: 1,
    name: 'Mie Goreng Special',
    description: 'Mie goreng dengan topping telur, sayuran segar, dan bumbu rahasia yang bikin nagih',
    price: 'Rp 12.000',
    image: 'https://images.unsplash.com/photo-1680675494363-75bbf9838a09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRvbmVzaWFuJTIwbWllJTIwZ29yZW5nJTIwbm9vZGxlc3xlbnwxfHx8fDE3NjU4Nzg0MTF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Mie',
    isPopular: true,
  },
  {
    id: 2,
    name: 'Mie Rebus Jumbo',
    description: 'Mie rebus dengan kuah gurih, telur, bakso, dan sayuran lengkap dalam porsi jumbo',
    price: 'Rp 13.000',
    image: 'https://images.unsplash.com/photo-1701480253822-1842236c9a97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMG5vb2RsZSUyMHNvdXAlMjBib3dsfGVufDF8fHx8MTc2NTg3ODQxMnww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Mie',
    isPopular: true,
  },
  {
    id: 3,
    name: 'Nasi Goreng Spesial',
    description: 'Nasi goreng dengan topping ayam, telur ceplok, dan kerupuk yang renyah',
    price: 'Rp 15.000',
    image: 'https://images.unsplash.com/photo-1544378730-8b5104b18790?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRvbmVzaWFuJTIwZnJpZWQlMjByaWNlJTIwdG9wJTIwdmlld3xlbnwxfHx8fDE3NjU4Nzg0MTF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Nasi',
    isPopular: true,
  },
  {
    id: 4,
    name: 'Nasi Goreng Seafood',
    description: 'Nasi goreng dengan campuran seafood segar dan bumbu istimewa',
    price: 'Rp 18.000',
    image: 'https://images.unsplash.com/photo-1544378730-8b5104b18790?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRvbmVzaWFuJTIwZnJpZWQlMjByaWNlJTIwdG9wJTIwdmlld3xlbnwxfHx8fDE3NjU4Nzg0MTF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Nasi',
    isPopular: false,
  },
  {
    id: 5,
    name: 'Mie Goreng Jawa',
    description: 'Mie goreng dengan bumbu khas Jawa yang gurih dan sedikit manis',
    price: 'Rp 12.000',
    image: 'https://images.unsplash.com/photo-1680675494363-75bbf9838a09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRvbmVzaWFuJTIwbWllJTIwZ29yZW5nJTIwbm9vZGxlc3xlbnwxfHx8fDE3NjU4Nzg0MTF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Mie',
    isPopular: false,
  },
  {
    id: 6,
    name: 'Nasi Goreng Kampung',
    description: 'Nasi goreng dengan bumbu tradisional dan ikan asin yang menggugah selera',
    price: 'Rp 14.000',
    image: 'https://images.unsplash.com/photo-1544378730-8b5104b18790?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRvbmVzaWFuJTIwZnJpZWQlMjByaWNlJTIwdG9wJTIwdmlld3xlbnwxfHx8fDE3NjU4Nzg0MTF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Nasi',
    isPopular: false,
  },
];

const drinks = [
  {
    id: 7,
    name: 'Teh Manis Hangat',
    description: 'Teh manis hangat yang sempurna menemani makan Anda',
    price: 'Rp 3.000',
    image: 'https://images.unsplash.com/photo-1591299089616-c9604047b1a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3QlMjB0ZWElMjBnbGFzc3xlbnwxfHx8fDE3NjU4Nzg0MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Minuman',
    isPopular: false,
  },
  {
    id: 8,
    name: 'Es Teh Manis',
    description: 'Teh manis dingin yang menyegarkan',
    price: 'Rp 3.000',
    image: 'https://images.unsplash.com/photo-1591299089616-c9604047b1a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3QlMjB0ZWElMjBnbGFzc3xlbnwxfHx8fDE3NjU4Nzg0MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Minuman',
    isPopular: false,
  },
  {
    id: 9,
    name: 'Jeruk Peras',
    description: 'Jeruk peras segar langsung dari buah asli',
    price: 'Rp 5.000',
    image: 'https://images.unsplash.com/photo-1591299089616-c9604047b1a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3QlMjB0ZWElMjBnbGFzc3xlbnwxfHx8fDE3NjU4Nzg0MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Minuman',
    isPopular: false,
  },
];

function Menu() {
  return (
    <section id="menu" className="menu">
      <div className="container">
        {/* Header */}
        <div className="menu-header">
          <div className="menu-badge">
            <span>Menu Favorit</span>
          </div>
          <h2 className="menu-title">
            Temukan Menu <span className="menu-title-accent">Populer Kami</span>
          </h2>
          <p className="menu-subtitle">
            Berikut adalah beberapa menu favorit kami yang paling banyak dipesan. 
            Semua disajikan fresh dan hangat!
          </p>
        </div>

        {/* Menu Grid */}
        <div className="menu-grid">
          {menuItems.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>

        {/* Drinks Section */}
        <div className="menu-drinks">
          <h3 className="menu-drinks-title">
            Minuman <span className="menu-drinks-accent">Segar</span>
          </h3>
          <div className="menu-grid">
            {drinks.map((item) => (
              <MenuCard key={item.id} item={item} />
            ))}
          </div>
        </div>

        {/* Bottom Note */}
        <div className="menu-note">
          <div className="menu-note-card">
            <p className="menu-note-text">
              💡 Harga sewaktu-waktu dapat berubah
            </p>
            <p className="menu-note-subtext">
              Hubungi kami untuk info menu lengkap dan promo terbaru
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Menu;
