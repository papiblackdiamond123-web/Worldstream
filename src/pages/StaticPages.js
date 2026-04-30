import React from 'react';
import { Helmet } from 'react-helmet-async';
import { AdBanner } from '../components/AdUnit';
import './StaticPages.css';

export function AboutPage() {
  return (
    <div className="static-page">
      <Helmet>
        <title>About WorldStream - Free Live TV & Radio From Every Country</title>
        <meta name="description" content="WorldStream is a free platform to watch live TV and listen to radio stations from countries around the world." />
      </Helmet>
      <div className="container static-container">
        <h1 className="static-title">About WorldStream</h1>
        <AdBanner style={{ marginBottom: 32 }} />
        <div className="static-content">
          <h2>Our Mission</h2>
          <p>WorldStream was built with one goal: give everyone free, instant access to live TV channels and radio stations from every corner of the planet — no subscriptions, no signup, no barriers.</p>

          <h2>What We Offer</h2>
          <p>We aggregate public free-to-air broadcasts from major international broadcasters including BBC, CNN, NHK, Al Jazeera, France 24, DW, ABC Australia, NPR, CBC Canada and many more.</p>
          <p>Our curated list focuses on two types of markets:</p>
          <ul>
            <li><strong>High-CPC Countries</strong>: USA, UK, Canada, Australia, Germany, Switzerland, Norway, Sweden, Denmark, Japan — markets with premium ad rates and high-value audiences.</li>
            <li><strong>High-Population Countries</strong>: India, China, Brazil, Indonesia, Nigeria, Bangladesh, Philippines — reaching the world's largest audiences.</li>
          </ul>

          <h2>Free & Legal</h2>
          <p>All streams on WorldStream are official public broadcasts from recognized national broadcasters. We link to publicly accessible streams only — no piracy, no geo-blocking workarounds.</p>

          <h2>How To Use</h2>
          <p>Simply browse by country or category, click any channel, and watch or listen instantly in your browser. Works on phone, tablet, and desktop.</p>
        </div>
      </div>
    </div>
  );
}

export function ContactPage() {
  return (
    <div className="static-page">
      <Helmet>
        <title>Contact WorldStream</title>
        <meta name="description" content="Contact the WorldStream team. Report broken streams, suggest new channels, or get in touch for business inquiries." />
      </Helmet>
      <div className="container static-container">
        <h1 className="static-title">Contact Us</h1>
        <AdBanner style={{ marginBottom: 32 }} />
        <div className="static-content">
          <h2>Get in Touch</h2>
          <p>Have a broken stream to report? A channel to suggest? A business inquiry? We'd love to hear from you.</p>

          <div className="contact-cards">
            <div className="contact-card">
              <div className="contact-icon">📺</div>
              <h3>Broken Stream?</h3>
              <p>Streams change URLs often. Email us the channel name and we'll fix it ASAP.</p>
              <a href="mailto:streams@worldstream.tv">streams@worldstream.tv</a>
            </div>
            <div className="contact-card">
              <div className="contact-icon">➕</div>
              <h3>Suggest a Channel</h3>
              <p>Know a great public broadcaster we're missing? Let us know the station and stream URL.</p>
              <a href="mailto:suggest@worldstream.tv">suggest@worldstream.tv</a>
            </div>
            <div className="contact-card">
              <div className="contact-icon">💼</div>
              <h3>Business & Advertising</h3>
              <p>Interested in advertising on WorldStream or partnership opportunities?</p>
              <a href="mailto:business@worldstream.tv">business@worldstream.tv</a>
            </div>
          </div>

          <h2>Response Time</h2>
          <p>We typically respond within 24-48 hours. For urgent broken stream reports, we aim to fix within a few hours during business hours.</p>
        </div>
      </div>
    </div>
  );
}

export function PrivacyPage() {
  return (
    <div className="static-page">
      <Helmet>
        <title>Privacy Policy - WorldStream</title>
        <meta name="description" content="WorldStream Privacy Policy. Learn how we handle your data and protect your privacy." />
      </Helmet>
      <div className="container static-container">
        <h1 className="static-title">Privacy Policy</h1>
        <p className="static-date">Last updated: January 2025</p>
        <AdBanner style={{ margin: '24px 0' }} />
        <div className="static-content">
          <h2>1. Information We Collect</h2>
          <p>WorldStream is designed with privacy in mind. We do not require registration or personal accounts. We collect standard web analytics data (pages visited, browser type, approximate location by country) through Google Analytics to understand how people use our site.</p>

          <h2>2. Cookies</h2>
          <p>We use cookies for site functionality and, with your consent, for advertising through Google AdSense. AdSense may use cookies to serve personalized ads based on your interests. You can opt out of personalized ads via <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" style={{color:'var(--accent)'}}>Google Ad Settings</a>.</p>

          <h2>3. Third-Party Advertising</h2>
          <p>We use Google AdSense to display ads. Google and its partners may use cookies to serve ads based on prior visits to our website or other websites. For more information, see Google's <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" style={{color:'var(--accent)'}}>Privacy Policy</a>.</p>

          <h2>4. Embedded Content</h2>
          <p>TV channels are embedded via YouTube iframes or official stream URLs. These third-party services have their own privacy policies. When you watch embedded YouTube content, YouTube's privacy policy applies.</p>

          <h2>5. Data Retention</h2>
          <p>We retain anonymized analytics data for 26 months. We do not sell personal data to any third party.</p>

          <h2>6. Your Rights</h2>
          <p>Depending on your location, you may have rights to access, correct, or delete data we hold. Contact us at privacy@worldstream.tv to exercise these rights.</p>

          <h2>7. Contact</h2>
          <p>Privacy questions? Email us at <a href="mailto:privacy@worldstream.tv" style={{color:'var(--accent)'}}>privacy@worldstream.tv</a>.</p>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
