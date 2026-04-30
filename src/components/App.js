import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import TVPage from './pages/TVPage';
import RadioPage from './pages/RadioPage';
import CountryPage from './pages/CountryPage';
import CountriesPage from './pages/CountriesPage';
import WatchPage from './pages/WatchPage';
import { AboutPage, ContactPage, PrivacyPage } from './pages/StaticPages';

export default function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tv" element={<TVPage />} />
          <Route path="/radio" element={<RadioPage />} />
          <Route path="/countries" element={<CountriesPage />} />
          <Route path="/country/:code" element={<CountryPage />} />
          <Route path="/watch/:id" element={<WatchPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
