import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { RADIO_STATIONS, CATEGORIES, CONTINENTS, COUNTRIES } from '../data/stations';
import StationCard from '../components/StationCard';
import { AdBanner, AdLeaderboard } from '../components/AdUnit';
import './ListPage.css';

export default function RadioPage() {
  const [category, setCategory] = useState('all');
  const [continent, setContinent] = useState('all');
  const [search, setSearch] = useState('');

  const filtered = RADIO_STATIONS.filter(s => {
    const matchCat = category === 'all' || s.category === category;
    const country = COUNTRIES.find(c => c.code === s.country);
    const matchCont = continent === 'all' || (country && country.continent === continent);
    const matchSearch = !search || s.name.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchCont && matchSearch;
  });

  return (
    <div className="list-page">
      <Helmet>
        <title>Live Radio Stations - WorldStream | International Radio Online</title>
        <meta name="description" content="Listen to 25+ live international radio stations. BBC, NPR, RFI, CBC, ABC Australia, NHK Radio and more. Free, no signup needed." />
      </Helmet>

      <div className="page-hero">
        <div className="container">
          <h1 className="page-title">📻 Live Radio Stations</h1>
          <p className="page-sub">Music, news and talk radio from across the globe, streaming live</p>
          <AdLeaderboard style={{ marginTop: 24 }} />
        </div>
      </div>

      <div className="container page-body">
        <div className="filters-bar">
          <input
            className="filter-search"
            type="text"
            placeholder="🔍 Search radio stations..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <div className="filter-group">
            <label>Category</label>
            <div className="filter-pills">
              {CATEGORIES.map(c => (
                <button
                  key={c.id}
                  className={`pill ${category === c.id ? 'active' : ''}`}
                  onClick={() => setCategory(c.id)}
                >{c.icon} {c.name}</button>
              ))}
            </div>
          </div>
          <div className="filter-group">
            <label>Region</label>
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

        <div className="results-info">
          {filtered.length} station{filtered.length !== 1 ? 's' : ''} found
        </div>

        <div className="stations-grid-page">
          {filtered.map((s, i) => (
            <React.Fragment key={s.id}>
              <StationCard station={s} />
              {(i + 1) % 12 === 0 && <div className="ad-in-grid"><AdBanner /></div>}
            </React.Fragment>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="empty-state">
            <div>📻</div>
            <h3>No stations found</h3>
            <p>Try adjusting your filters</p>
          </div>
        )}
      </div>
    </div>
  );
}
