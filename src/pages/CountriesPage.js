import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { COUNTRIES, CONTINENTS, TV_STATIONS, RADIO_STATIONS } from '../data/stations';
import { AdBanner } from '../components/AdUnit';
import './CountriesPage.css';

export default function CountriesPage() {
  const [continent, setContinent] = useState('all');
  const [search, setSearch] = useState('');

  const filtered = COUNTRIES.filter(c => {
    const matchCont = continent === 'all' || c.continent === continent;
    const matchSearch = !search || c.name.toLowerCase().includes(search.toLowerCase());
    return matchCont && matchSearch;
  });

  const getCount = (code) => {
    const tv = TV_STATIONS.filter(s => s.country === code).length;
    const radio = RADIO_STATIONS.filter(s => s.country === code).length;
    return { tv, radio };
  };

  return (
    <div>
      <Helmet>
        <title>Countries - WorldStream | Browse TV & Radio by Country</title>
        <meta name="description" content="Browse live TV channels and radio stations by country. USA, UK, India, Australia, Germany, France, Japan, Nigeria, Kenya and more." />
      </Helmet>

      <div className="page-hero">
        <div className="container">
          <h1 className="page-title">🌍 All Countries</h1>
          <p className="page-sub">Browse {COUNTRIES.length} countries and find local TV & radio</p>
        </div>
      </div>

      <div className="container" style={{ paddingTop: 40, paddingBottom: 60 }}>
        <div className="filters-bar" style={{ marginBottom: 28 }}>
          <input
            className="filter-search"
            type="text"
            placeholder="🔍 Search country..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <div className="filter-group">
            <label>Continent</label>
            <div className="filter-pills">
              {CONTINENTS.map(c => (
                <button
                  key={c.id}
                  className={`pill ${continent === c.id ? 'active' : ''}`}
                  onClick={() => setContinent(c.id)}
                >{c.name}</button>
              ))}
            </div>
          </div>
        </div>

        <AdBanner style={{ marginBottom: 32 }} />

        {CONTINENTS.filter(c => c.id !== 'all').map(cont => {
          const countries = filtered.filter(c => c.continent === cont.name);
          if (countries.length === 0) return null;
          if (continent !== 'all' && continent !== cont.name) return null;
          return (
            <div key={cont.id} className="continent-section">
              <h2 className="continent-title">{cont.name}</h2>
              <div className="countries-big-grid">
                {countries.map(c => {
                  const { tv, radio } = getCount(c.code);
                  return (
                    <Link to={`/country/${c.code}`} key={c.code} className="country-big-card">
                      <div className="country-big-flag">{c.flag}</div>
                      <div className="country-big-info">
                        <div className="country-big-name">{c.name}</div>
                        <div className="country-big-stats">
                          {tv > 0 && <span>📺 {tv} TV</span>}
                          {radio > 0 && <span>📻 {radio} Radio</span>}
                          {tv === 0 && radio === 0 && <span style={{color:'var(--text-muted)'}}>Coming soon</span>}
                        </div>
                        {c.cpc === 'high' && <span className="cpc-badge">⭐ Featured</span>}
                      </div>
                      <span className="country-arrow">→</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
