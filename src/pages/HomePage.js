import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { TV_STATIONS, RADIO_STATIONS, COUNTRIES } from '../data/stations';
import StationCard from '../components/StationCard';
import { AdBanner, AdLeaderboard } from '../components/AdUnit';
import './HomePage.css';

export default function HomePage() {
  const [search, setSearch] = useState('');

  const featuredTV = TV_STATIONS.slice(0, 8);
  const featuredRadio = RADIO_STATIONS.slice(0, 8);
  const topCountries = COUNTRIES.filter(c => c.cpc === 'high').slice(0, 12);

  const filteredStations = search.length > 1
    ? [...TV_STATIONS, ...RADIO_STATIONS].filter(s =>
        s.name.toLowerCase().includes(search.toLowerCase()) ||
        s.description.toLowerCase().includes(search.toLowerCase())
      )
    : [];

  return (
    <div className="home">
      <Helmet>
        <title>WorldStream - Watch Live TV & Radio From Every Country | Free Streaming</title>
        <meta name="description" content="Watch and listen to 100+ live TV channels and radio stations from USA, UK, India, Australia, Germany, France, Japan and more. Free, no signup." />
      </Helmet>

      {/* Hero */}
      <section className="hero">
        <div className="hero-bg">
          <div className="hero-orb hero-orb-1"></div>
          <div className="hero-orb hero-orb-2"></div>
          <div className="hero-grid"></div>
        </div>
        <div className="container hero-content">
          <div className="hero-badge">
            <span className="badge badge-live">● LIVE</span>
            <span>Broadcasting from 30+ countries</span>
          </div>
          <h1 className="hero-title">
            Watch the World<br />
            <span>Live TV & Radio</span><br />
            From Every Nation
          </h1>
          <p className="hero-subtitle">
            100+ free live TV channels and radio stations. News, music, sports and more —
            from USA, UK, India, Australia, Germany and beyond.
          </p>
          <div className="hero-search">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              placeholder="Search stations, channels, countries..."
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>
          {filteredStations.length > 0 && (
            <div className="search-results">
              {filteredStations.slice(0, 6).map(s => (
                <Link to={`/watch/${s.id}`} key={s.id} className="search-result-item">
                  {s.logo} <strong>{s.name}</strong>
                  <span>{s.type === 'tv' ? '📺 TV' : '📻 Radio'}</span>
                </Link>
              ))}
            </div>
          )}
          <div className="hero-ctas">
            <Link to="/tv" className="btn-primary">📺 Watch Live TV</Link>
            <Link to="/radio" className="btn-secondary">📻 Listen to Radio</Link>
          </div>
          <div className="hero-stats">
            <div className="stat"><span>{TV_STATIONS.length}+</span><label>TV Channels</label></div>
            <div className="stat-divider"></div>
            <div className="stat"><span>{RADIO_STATIONS.length}+</span><label>Radio Stations</label></div>
            <div className="stat-divider"></div>
            <div className="stat"><span>{COUNTRIES.length}+</span><label>Countries</label></div>
            <div className="stat-divider"></div>
            <div className="stat"><span>Free</span><label>No Signup</label></div>
          </div>
        </div>
      </section>

      {/* Ad Banner */}
      <div className="container" style={{ margin: '32px auto' }}>
        <AdLeaderboard />
      </div>

      {/* Featured TV */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <div>
              <h2 className="section-title">📺 Live TV Channels</h2>
              <p className="section-sub">Trending worldwide right now</p>
            </div>
            <Link to="/tv" className="see-all">See all channels →</Link>
          </div>
          <div className="stations-grid">
            {featuredTV.map(s => <StationCard key={s.id} station={s} />)}
          </div>
        </div>
      </section>

      {/* Ad Banner mid */}
      <div className="container" style={{ margin: '0 auto 40px' }}>
        <AdBanner />
      </div>

      {/* Featured Radio */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <div>
              <h2 className="section-title">📻 Radio Stations</h2>
              <p className="section-sub">Music, news & talk from around the world</p>
            </div>
            <Link to="/radio" className="see-all">See all stations →</Link>
          </div>
          <div className="stations-grid">
            {featuredRadio.map(s => <StationCard key={s.id} station={s} />)}
          </div>
        </div>
      </section>

      {/* Countries Section */}
      <section className="section countries-section">
        <div className="container">
          <div className="section-header">
            <div>
              <h2 className="section-title">🌍 Browse by Country</h2>
              <p className="section-sub">Pick a country and discover local channels</p>
            </div>
            <Link to="/countries" className="see-all">All countries →</Link>
          </div>
          <div className="countries-grid">
            {topCountries.map(c => (
              <Link to={`/country/${c.code}`} key={c.code} className="country-card">
                <span className="country-flag">{c.flag}</span>
                <span className="country-name">{c.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why WorldStream */}
      <section className="section features-section">
        <div className="container">
          <h2 className="section-title center">Why WorldStream?</h2>
          <div className="features-grid">
            {[
              { icon: '⚡', title: 'Instant Streaming', desc: 'No buffering, no downloads. Click and watch instantly.' },
              { icon: '🌍', title: '30+ Countries', desc: 'From high-CPC markets to the world\'s most populated nations.' },
              { icon: '💸', title: 'Completely Free', desc: 'No subscriptions, no signup. Open to all.' },
              { icon: '📱', title: 'Any Device', desc: 'Phone, tablet, laptop or desktop — it just works.' },
              { icon: '🔒', title: 'Safe & Legal', desc: 'Only free-to-air public broadcaster streams.' },
              { icon: '🎙️', title: 'TV + Radio', desc: 'Full-featured TV and radio in one platform.' },
            ].map((f, i) => (
              <div className="feature-card" key={i}>
                <div className="feature-icon">{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Ad */}
      <div className="container" style={{ margin: '0 auto 20px' }}>
        <AdLeaderboard />
      </div>
    </div>
  );
}
