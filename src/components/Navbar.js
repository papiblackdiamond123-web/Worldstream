import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const isActive = (path) => location.pathname === path;

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-inner">
        <Link to="/" className="navbar-logo">
          <span className="logo-icon">📡</span>
          <span className="logo-text">World<span>Stream</span></span>
        </Link>

        <div className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          <Link to="/" className={isActive('/') ? 'active' : ''}>Home</Link>
          <Link to="/tv" className={isActive('/tv') ? 'active' : ''}>📺 Live TV</Link>
          <Link to="/radio" className={isActive('/radio') ? 'active' : ''}>📻 Radio</Link>
          <Link to="/countries" className={isActive('/countries') ? 'active' : ''}>🌍 Countries</Link>
          <Link to="/about" className={isActive('/about') ? 'active' : ''}>About</Link>
        </div>

        <div className="navbar-right">
          <div className="live-pill">
            <span className="live-dot"></span>
            LIVE
          </div>
          <button
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    </nav>
  );
}
