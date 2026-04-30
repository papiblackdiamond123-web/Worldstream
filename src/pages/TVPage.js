import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { TV_STATIONS, CATEGORIES, CONTINENTS, COUNTRIES } from '../data/stations';
import StationCard from '../components/StationCard';
import { AdBanner, AdLeaderboard } from '../components/AdUnit';
import './ListPage.css';

export default function TVPage() {
  const [category, setCategory] = useState('all');
  const [continent, setContinent] = useState('all');
  const [search, setSearch] = useState('');

  const filtered = TV_STATIONS.filter(s => {
    const matchCat = category === 'all' || s.category === category;
    const country = COUNTRIES.find(c => c.code === s.country);
    const matchCont = continent === 'all' || (country && country.continent === continent);
    const matchSearch = !search || s.name.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchCont && matchSearch;
  });

  return (
    <div className="list-page">
      <Helmet>
        <title>Live TV Channels - WorldStream | Watch International TV Free</title>
        <meta name="description" content="Watch 30+ live international TV channels for free. CNN, BBC, NHK, DW, France 24, Al Jazeera and more. No signup required." />
      </Helmet>

      <div className="page-hero">
        <div className="container">
          <h1 className="page-title">📺 Live TV Channels</h1>
          <p className="page-sub">Watch free-to-air TV from around the world, live right now</p>
          <AdLeaderboard style={{ marginTop: 24 }} />
        </div>
      </div>

      <div className="container page-body">
        <div className="filters-bar">
          <input
            className="filter-search"
            type="text"
            placeholder="🔍 Search channels..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <div className="filter-group">
            <label>Category</label>
            <div className="filter-pills">
              {CATEGORIES.filter(c => c.id !== 'music' && c.id !== 'talk').map(c => (
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
          {filtered.length} channel{filtered.length !== 1 ? 's' : ''} found
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
            <div>📺</div>
            <h3>No channels found</h3>
            <p>Try adjusting your filters</p>
          </div>
        )}
      </div>
    </div>
  );
}
