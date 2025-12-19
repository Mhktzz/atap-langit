import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Menu from "./components/Menu/Menu";
import Promo from "./components/Promo/Promo";
import Testimonials from "./components/Testimonials/Testimonials";
import Location from "./components/Location/Location";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Promo />
      <Testimonials />
      <Location />
      <Footer />
    </div>
  );
}

export default App;
