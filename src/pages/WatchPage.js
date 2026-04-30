import React, { useState, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { getAllStations, getCountryByCode, TV_STATIONS, RADIO_STATIONS } from '../data/stations';
import StationCard from '../components/StationCard';
import { AdRectangle, AdBanner } from '../components/AdUnit';
import './WatchPage.css';

export default function WatchPage() {
  const { id } = useParams();
  const allStations = getAllStations();
  const station = allStations.find(s => s.id === id);
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(1);

  if (!station) {
    return (
      <div className="container" style={{ padding: '80px 24px', textAlign: 'center' }}>
        <h2>Station not found</h2>
        <Link to="/" style={{ color: 'var(--accent)' }}>← Back Home</Link>
      </div>
    );
  }

  const country = getCountryByCode(station.country);
  const related = allStations
    .filter(s => s.country === station.country && s.id !== station.id)
    .slice(0, 4);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setPlaying(!playing);
  };

  const handleVolume = (e) => {
    const v = parseFloat(e.target.value);
    setVolume(v);
    if (audioRef.current) audioRef.current.volume = v;
  };

  return (
    <div className="watch-page">
      <Helmet>
        <title>{station.name} Live - WorldStream | {country?.name} {station.type === 'tv' ? 'TV' : 'Radio'}</title>
        <meta name="description" content={`Watch/listen to ${station.name} live from ${country?.name}. ${station.description}. Free streaming on WorldStream.`} />
      </Helmet>

      <div className="container watch-container">
        <div className="watch-main">
          {/* Breadcrumb */}
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span>›</span>
            <Link to={station.type === 'tv' ? '/tv' : '/radio'}>
              {station.type === 'tv' ? '📺 TV' : '📻 Radio'}
            </Link>
            {country && <>
              <span>›</span>
              <Link to={`/country/${country.code}`}>{country.flag} {country.name}</Link>
            </>}
            <span>›</span>
            <span>{station.name}</span>
          </div>

          {/* Player */}
          <div className="player-wrapper">
            {station.type === 'tv' ? (
              <div className="tv-player">
                <div className="tv-player-header">
                  <div className="player-station-info">
                    <span className="player-logo">{station.logo}</span>
                    <div>
                      <div className="player-name">{station.name}</div>
                      <div className="player-country">{country?.flag} {country?.name}</div>
                    </div>
                  </div>
                  <span className="badge badge-live">● LIVE</span>
                </div>
                <div className="iframe-container">
                  <iframe
                    src={station.embedUrl}
                    title={station.name}
                    frameBorder="0"
                    allowFullScreen
                    allow="autoplay; encrypted-media"
                    referrerPolicy="no-referrer"
                  />
                  <div className="iframe-overlay">
                    <div className="iframe-note">
                      📺 If the stream doesn't load, the channel may be geo-restricted.<br />
                      Try opening on YouTube directly.
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="radio-player">
                <div className="radio-visualizer">
                  {[...Array(20)].map((_, i) => (
                    <div
                      key={i}
                      className={`bar ${playing ? 'animated' : ''}`}
                      style={{ animationDelay: `${i * 0.1}s` }}
                    />
                  ))}
                </div>
                <div className="radio-station-info">
                  <div className="radio-logo">{station.logo}</div>
                  <div className="radio-name">{station.name}</div>
                  <div className="radio-country">{country?.flag} {country?.name}</div>
                  <div className="radio-desc">{station.description}</div>
                </div>
                <audio
                  ref={audioRef}
                  src={station.streamUrl}
                  onPlay={() => setPlaying(true)}
                  onPause={() => setPlaying(false)}
                  onError={() => setPlaying(false)}
                />
                <div className="radio-controls">
                  <button className="play-btn" onClick={togglePlay}>
                    {playing ? '⏸ Pause' : '▶ Play Live'}
                  </button>
                  <div className="volume-control">
                    <span>🔊</span>
                    <input
                      type="range"
                      min="0"
                      max="1"
                      step="0.01"
                      value={volume}
                      onChange={handleVolume}
                    />
                  </div>
                </div>
                <div className="stream-note">
                  {playing ? '🔴 Streaming live...' : '🎵 Press play to start listening'}
                </div>
              </div>
            )}
          </div>

          {/* Station Info */}
          <div className="station-info-card">
            <h1 className="station-watch-title">{station.name}</h1>
            <p className="station-watch-desc">{station.description}</p>
            <div className="station-watch-tags">
              <span className={`badge ${station.type === 'tv' ? 'badge-tv' : 'badge-radio'}`}>
                {station.type === 'tv' ? '📺 TV' : '📻 Radio'}
              </span>
              <span className="badge" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid var(--border)', color: 'var(--text-secondary)' }}>
                {station.category}
              </span>
              {country && (
                <span className="badge" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid var(--border)', color: 'var(--text-secondary)' }}>
                  {country.flag} {country.name}
                </span>
              )}
            </div>
          </div>

          <AdBanner style={{ marginTop: 24 }} />

          {/* Related */}
          {related.length > 0 && (
            <div className="related-section">
              <h2 className="section-label">More from {country?.flag} {country?.name}</h2>
              <div className="related-grid">
                {related.map(s => <StationCard key={s.id} station={s} />)}
              </div>
            </div>
          )}
        </div>

        <aside className="watch-sidebar">
          <div className="sidebar-ad">
            <AdRectangle />
          </div>
          <div className="sidebar-section">
            <h3 className="sidebar-title">🔥 Popular TV</h3>
            <div className="sidebar-list">
              {TV_STATIONS.slice(0, 8).filter(s => s.id !== id).slice(0, 6).map(s => (
                <Link to={`/watch/${s.id}`} key={s.id} className="sidebar-item">
                  <span>{s.logo}</span>
                  <div>
                    <div className="sidebar-item-name">{s.name}</div>
                    <div className="sidebar-item-meta">{getCountryByCode(s.country)?.flag} {getCountryByCode(s.country)?.name}</div>
                  </div>
                  <span className="badge badge-live" style={{ fontSize: '9px' }}>LIVE</span>
                </Link>
              ))}
            </div>
          </div>
          <div className="sidebar-section">
            <h3 className="sidebar-title">🎵 Popular Radio</h3>
            <div className="sidebar-list">
              {RADIO_STATIONS.slice(0, 6).filter(s => s.id !== id).slice(0, 5).map(s => (
                <Link to={`/watch/${s.id}`} key={s.id} className="sidebar-item">
                  <span>{s.logo}</span>
                  <div>
                    <div className="sidebar-item-name">{s.name}</div>
                    <div className="sidebar-item-meta">{getCountryByCode(s.country)?.flag} {getCountryByCode(s.country)?.name}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
