import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">📡 WorldStream</div>
            <p className="footer-tagline">
              Live TV and radio from every nation, free to watch and listen anytime.
            </p>
            <div className="footer-social">
              <a href="#" aria-label="Twitter">𝕏</a>
              <a href="#" aria-label="Facebook">f</a>
              <a href="#" aria-label="YouTube">▶</a>
            </div>
          </div>
          <div className="footer-col">
            <h4>Content</h4>
            <Link to="/tv">📺 Live TV</Link>
            <Link to="/radio">📻 Radio</Link>
            <Link to="/countries">🌍 Countries</Link>
          </div>
          <div className="footer-col">
            <h4>Regions</h4>
            <Link to="/countries?continent=North+America">🌎 North America</Link>
            <Link to="/countries?continent=Europe">🌍 Europe</Link>
            <Link to="/countries?continent=Asia">🌏 Asia</Link>
            <Link to="/countries?continent=Africa">🌍 Africa</Link>
            <Link to="/countries?continent=Oceania">🌊 Oceania</Link>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/privacy">Terms of Service</Link>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} WorldStream. All rights reserved.</p>
          <p>Stream legal, free-to-air content from public broadcasters worldwide.</p>
        </div>
      </div>
    </footer>
  );
}
