import { useState } from 'react';
import { Link, NavLink, Route, Routes, useNavigate } from 'react-router-dom';
import { Leaf, ShoppingBag, Sprout, Menu, X, ArrowRight } from 'lucide-react';
import { useSelector } from 'react-redux';
import AboutUs from './components/AboutUs.jsx';
import ProductList from './components/ProductList.jsx';
import CartItem from './components/CartItem.jsx';

function Navbar() {
  const [open, setOpen] = useState(false);
  const cartCount = useSelector((state) =>
    state.cart.items.reduce((total, item) => total + item.quantity, 0)
  );

  const closeMenu = () => setOpen(false);

  return (
    <header className="site-header">
      <div className="nav-inner">
        <Link to="/" className="brand" onClick={closeMenu} aria-label="Paradise Nursery home">
          <span className="brand-mark"><Leaf size={22} /></span>
          <span>Paradise <b>Nursery</b></span>
        </Link>
        <button className="mobile-menu" onClick={() => setOpen(!open)} aria-label="Toggle navigation">
          {open ? <X /> : <Menu />}
        </button>
        <nav className={open ? 'topmenu topmenu-open' : 'topmenu'} aria-label="Main navigation">
          <NavLink to="/" end onClick={closeMenu}>Home</NavLink>
          <NavLink to="/plants" onClick={closeMenu}>Plants</NavLink>
          <NavLink to="/about" onClick={closeMenu}>About Us</NavLink>
          <NavLink to="/cart" className="cart-nav" onClick={closeMenu}>
            <ShoppingBag size={19} /> Cart <span className="cart-count">{cartCount}</span>
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

function Home() {
  const navigate = useNavigate();
  return (
    <main>
      <section className="hero">
        <div className="hero-overlay" />
        <div className="hero-content">
          <span className="eyebrow"><Sprout size={16} /> GROW A LITTLE HAPPINESS</span>
          <h1>Make room for<br /><em>something green.</em></h1>
          <p>Thoughtfully chosen houseplants to bring calm, character, and a breath of fresh air into your home.</p>
          <div className="hero-actions">
            <button className="btn btn-light" onClick={() => navigate('/plants')}>Get Started <ArrowRight size={18} /></button>
            <Link className="hero-text-link" to="/about">Our story</Link>
          </div>
          <div className="hero-note"><span className="note-dot" /> A happier home starts with a plant.</div>
        </div>
        <div className="hero-side-label">NATURE, BROUGHT HOME — EST. 2024</div>
      </section>
      <section className="home-intro content-wrap">
        <div>
          <span className="eyebrow dark-eyebrow">A LITTLE MORE LIFE</span>
          <h2>Your everyday<br /><em>indoor oasis.</em></h2>
        </div>
        <p>From easy-care favourites to leafy statement pieces, find a plant that fits your space and your pace. Every new leaf is a fresh start.</p>
        <Link to="/plants" className="round-link" aria-label="Browse plants"><ArrowRight /></Link>
      </section>
      <section className="home-feature-grid">
        <article className="feature-card feature-image-one">
          <span>01 / BREATHE EASIER</span><h3>Greener air.<br />Calmer days.</h3>
        </article>
        <article className="feature-card feature-image-two">
          <span>02 / EASY DOES IT</span><h3>Good plants.<br />No green thumb needed.</h3>
        </article>
      </section>
    </main>
  );
}

export default function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plants" element={<ProductList />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/cart" element={<CartItem />} />
        <Route path="*" element={<main className="not-found"><h1>Page not found</h1><Link className="btn btn-primary" to="/">Return home</Link></main>} />
      </Routes>
      <footer className="site-footer">
        <Link to="/" className="footer-brand"><Leaf size={18} /> Paradise Nursery</Link>
        <span>Bring a little nature home.</span>
        <span>© {new Date().getFullYear()} Paradise Nursery</span>
      </footer>
    </div>
  );
}