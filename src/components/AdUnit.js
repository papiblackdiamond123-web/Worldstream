import React, { useEffect, useRef } from 'react';

// Replace YOUR_PUBLISHER_ID with your actual AdSense publisher ID
// Example: ca-pub-1234567890123456
const PUBLISHER_ID = 'ca-pub-XXXXXXXXXX';

export function AdBanner({ slot = 'YOUR_AD_SLOT_ID', style = {} }) {
  const adRef = useRef(null);
  const pushed = useRef(false);

  useEffect(() => {
    if (!pushed.current && window.adsbygoogle) {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
        pushed.current = true;
      } catch (e) {
        console.log('AdSense error:', e);
      }
    }
  }, []);

  // Show placeholder in development
  if (!window.adsbygoogle) {
    return (
      <div className="ad-unit ad-banner" style={style}>
        <div style={{ marginTop: 20, color: 'var(--text-muted)', fontSize: 13 }}>
          📢 Ad Space — 728×90 Banner
        </div>
      </div>
    );
  }

  return (
    <div style={style}>
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{ display: 'block', ...style }}
        data-ad-client={PUBLISHER_ID}
        data-ad-slot={slot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}

export function AdRectangle({ slot = 'YOUR_AD_SLOT_ID', style = {} }) {
  const adRef = useRef(null);
  const pushed = useRef(false);

  useEffect(() => {
    if (!pushed.current && window.adsbygoogle) {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
        pushed.current = true;
      } catch (e) {
        console.log('AdSense error:', e);
      }
    }
  }, []);

  if (!window.adsbygoogle) {
    return (
      <div className="ad-unit ad-rectangle" style={style}>
        <div style={{ marginTop: 50, color: 'var(--text-muted)', fontSize: 13 }}>
          📢 Ad Space — 300×250
        </div>
      </div>
    );
  }

  return (
    <div style={style}>
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{ display: 'block', width: 300, height: 250, ...style }}
        data-ad-client={PUBLISHER_ID}
        data-ad-slot={slot}
        data-ad-format="rectangle"
      />
    </div>
  );
}

export function AdLeaderboard({ slot = 'YOUR_AD_SLOT_ID', style = {} }) {
  const adRef = useRef(null);
  const pushed = useRef(false);

  useEffect(() => {
    if (!pushed.current && window.adsbygoogle) {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
        pushed.current = true;
      } catch (e) {
        console.log('AdSense error:', e);
      }
    }
  }, []);

  if (!window.adsbygoogle) {
    return (
      <div className="ad-unit ad-leaderboard" style={style}>
        <div style={{ marginTop: 30, color: 'var(--text-muted)', fontSize: 13 }}>
          📢 Advertisement — 970×90
        </div>
      </div>
    );
  }

  return (
    <div style={style}>
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{ display: 'block', ...style }}
        data-ad-client={PUBLISHER_ID}
        data-ad-slot={slot}
        data-ad-format="leaderboard"
      />
    </div>
  );
}
