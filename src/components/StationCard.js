import React from 'react';
import { Link } from 'react-router-dom';
import { getCountryByCode } from '../data/stations';
import './StationCard.css';

export default function StationCard({ station }) {
  const country = getCountryByCode(station.country);

  return (
    <Link to={`/watch/${station.id}`} className="station-card">
      <div className="station-card-header">
        <div className="station-icon">{station.logo}</div>
        <div className="station-badges">
          <span className="badge badge-live">● LIVE</span>
          <span className={`badge ${station.type === 'tv' ? 'badge-tv' : 'badge-radio'}`}>
            {station.type === 'tv' ? '📺 TV' : '📻 Radio'}
          </span>
        </div>
      </div>
      <div className="station-card-body">
        <h3 className="station-name">{station.name}</h3>
        <p className="station-desc">{station.description}</p>
        <div className="station-meta">
          {country && (
            <span className="station-country">
              {country.flag} {country.name}
            </span>
          )}
          <span className="station-category">{station.category}</span>
        </div>
      </div>
      <div className="station-card-footer">
        <div className="watch-btn">
          {station.type === 'tv' ? '▶ Watch Now' : '🎵 Listen Now'}
        </div>
      </div>
    </Link>
  );
}
