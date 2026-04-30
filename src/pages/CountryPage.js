import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { getCountryByCode, getStationsByCountry } from '../data/stations';
import StationCard from '../components/StationCard';
import { AdBanner } from '../components/AdUnit';
import './CountryPage.css';

export default function CountryPage() {
  const { code } = useParams();
  const country = getCountryByCode(code);
  const [tab, setTab] = useState('all');

  if (!country) {
    return (
      <div className="container" style={{ padding: '80px 24px', textAlign: 'center' }}>
        <h2>Country not found</h2>
        <Link to="/countries" style={{ color: 'var(--accent)' }}>← Back to Countries</Link>
      </div>
    );
  }

  const all = getStationsByCountry(code);
  const tv = all.filter(s => s.type === 'tv');
  const radio = all.filter(s => s.type === 'radio');
  const display = tab === 'all' ? all : tab === 'tv' ? tv : radio;

  return (
    <div>
      <Helmet>
        <title>{country.name} Live TV & Radio - WorldStream</title>
        <meta name="description" content={`Watch live TV channels and radio stations from ${country.name}. Free streaming, no signup.`} />
      </Helmet>

      <div className="country-hero" style={{ background: 'var(--bg-secondary)', borderBottom: '1px solid var(--border)', padding: '48px 0' }}>
        <div className="container">
          <Link to="/countries" className="back-link">← All Countries</Link>
          <div className="country-header">
            <span className="country-hero-flag">{country.flag}</span>
            <div>
              <h1 className="country-hero-name">{country.name}</h1>
              <p className="country-hero-meta">
                {country.continent} · {tv.length} TV channels · {radio.length} radio stations
                {country.cpc === 'high' && ' · ⭐ Featured Market'}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container" style={{ paddingTop: 36, paddingBottom: 60 }}>
        <AdBanner style={{ marginBottom: 32 }} />

        {all.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '80px 20px', color: 'var(--text-muted)' }}>
            <div style={{ fontSize: 48 }}>📡</div>
            <h3 style={{ marginTop: 16, color: 'var(--text-secondary)' }}>Coming Soon</h3>
            <p style={{ marginTop: 8 }}>Stations for {country.name} are being added. Check back soon!</p>
            <Link to="/countries" style={{ color: 'var(--accent)', marginTop: 20, display: 'inline-block' }}>Browse other countries</Link>
          </div>
        ) : (
          <>
            <div className="tab-bar">
              <button className={`tab ${tab === 'all' ? 'active' : ''}`} onClick={() => setTab('all')}>
                🌐 All ({all.length})
              </button>
              {tv.length > 0 && (
                <button className={`tab ${tab === 'tv' ? 'active' : ''}`} onClick={() => setTab('tv')}>
                  📺 TV ({tv.length})
                </button>
              )}
              {radio.length > 0 && (
                <button className={`tab ${tab === 'radio' ? 'active' : ''}`} onClick={() => setTab('radio')}>
                  📻 Radio ({radio.length})
                </button>
              )}
            </div>
            <div className="stations-grid-page">
              {display.map(s => <StationCard key={s.id} station={s} />)}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
