import React from 'react';
import './HomePage.css';

function HomePage({ onNavigate }) {
  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-content">
          <h1>NYC Pedestrian & Subway Traffic Analysis</h1>
          <p>An interactive data visualization project exploring pedestrian patterns 
            and subway infrastructure across New York City</p>
          <div className="hero-buttons">
            <button 
              onClick={() => onNavigate('overview')} 
              className="btn btn-secondary"
            >
              Project Overview
            </button>
            <button 
              onClick={() => onNavigate('pedestrian-dashboard')} 
              className="btn"
            >
              Explore Dashboards
            </button>
          </div>
        </div>
      </section>
      
      <section className="featured-section">
        <h2>Featured Dashboards</h2>
        <div className="featured-dashboards">
          <div 
            className="dashboard-card" 
            onClick={() => onNavigate('pedestrian-dashboard')}
          >
            <div className="dashboard-img">
              <div className="placeholder-img"></div>
            </div>
            <div className="dashboard-info">
              <h3>Pedestrian Traffic Overview</h3>
              <p>Analyze pedestrian counts by time of day, location, and over multiple years</p>
            </div>
          </div>
          
          <div 
            className="dashboard-card" 
            onClick={() => onNavigate('nyc-subway-usage')}
          >
            <div className="dashboard-img">
              <div className="placeholder-img"></div>
            </div>
            <div className="dashboard-info">
              <h3>Subway Infrastructure Analysis</h3>
              <p>Explore subway entrance types, transit divisions, and spatial distribution</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="highlights-section">
        <h2>Project Highlights</h2>
        <div className="highlights-grid">
          <div className="highlight-card">
            <div className="highlight-icon">📊</div>
            <h3>Data Exploration</h3>
            <p>Interactive analysis of 15+ years of pedestrian count data across multiple NYC locations</p>
          </div>
          
          <div className="highlight-card">
            <div className="highlight-icon">🗺️</div>
            <h3>Geospatial Mapping</h3>
            <p>Visualizing pedestrian density and subway entrance distribution using interactive maps</p>
          </div>
          
          <div className="highlight-card">
            <div className="highlight-icon">📈</div>
            <h3>Trend Analysis</h3>
            <p>Identifying key patterns and relationships between pedestrian traffic and urban infrastructure</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;