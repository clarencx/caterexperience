import React, { useState } from 'react';
import './LandingPage.css';
import logo from '../assets/logo.png';

const LandingPage = () => {
  const [eventNumber, setEventNumber] = useState('');

  const handleViewEvent = () => {
    if (eventNumber.trim()) {
      // Handle event viewing logic here
      console.log('Viewing event:', eventNumber);
    }
  };

  return (
    <div className="landing-page">
      {/* Header Navigation */}
      <header className="header">
        <div className="nav-container">
          <div className="logo">
            <img src={logo} alt="Ollinati Catering" className="logo-img" />
            <span className="logo-text">Ollinati Catering</span>
          </div>
          <nav className="nav-menu">
            <a href="#home" className="nav-link active">Home</a>
            <a href="#menu" className="nav-link">Menu</a>
            <a href="#packages" className="nav-link">Packages</a>
            <button className="login-btn">Login</button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">View your Event Details</h1>
          <div className="event-search">
            <input
              type="text"
              placeholder="Enter Event Number"
              value={eventNumber}
              onChange={(e) => setEventNumber(e.target.value)}
              className="event-input"
            />
            <button onClick={handleViewEvent} className="view-btn">View</button>
          </div>
        </div>
      </section>

      {/* Venue Showcase */}
      <section className="venue-section">
        <div className="venue-container">
          <div className="venue-card">
            <h2 className="venue-title">Free Four Hours Venue if you Book</h2>
            <div className="venue-gallery">
              <div className="venue-item">
                <div className="venue-image pavilion-img"></div>
                <p className="venue-label">Pavilion</p>
              </div>
              <div className="venue-item">
                <div className="venue-image banquet-img"></div>
                <p className="venue-label">Banquet Room</p>
              </div>
              <div className="venue-item">
                <div className="venue-image poolside-img"></div>
                <p className="venue-label">Poolside Area</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="menu-section">
        <div className="menu-container">
          <div className="menu-content">
            <h2 className="menu-title">Catering with a Variety of Menu Choices</h2>
            <p className="menu-description">
              Ollinati Catering offers several menu choices where you can 
              choose your own menu for your event. Choose between a 
              variety of food for the categories of chicken, pork, beef, fish/
              pasta, vegetables, and dessert.
            </p>
            <button className="menu-btn">View Menu Offers &gt;&gt;</button>
          </div>
          <div className="menu-icon">
            <div className="cloche-icon"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;