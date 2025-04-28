import React from 'react';
import './OverviewPage.css';

function OverviewPage() {
  return (
    <div className="overview-page">
      <h1 className="page-title">Project Overview</h1>
      <p className="page-description">
        An exploration of NYC pedestrian traffic patterns and their relationship with subway infrastructure.
      </p>
      
      <div className="overview-content">
        <div className="section">
          <h2>Problem Statement</h2>
          <p>
            This project explores pedestrian traffic patterns across New York City, analyzing 
            both pedestrian counts at various locations and their relationship with subway 
            infrastructure. Through interactive data visualization, we aim to understand 
            pedestrian movement trends by time of day, location, and over multiple years.
          </p>
          
          <h2>Domain</h2>
          <p>
            The project focuses on urban mobility analysis, examining the intersection of 
            pedestrian traffic flows and public transportation infrastructure in New York City. 
            These insights are valuable for urban planning, transportation management, and 
            business location strategy.
          </p>
          
          <h2>Data Source</h2>
          <p>
            The analysis utilizes two primary datasets:
          </p>
          <ul>
            <li>NYC pedestrian counts across various locations</li>
            <li>NYC subway entrance and infrastructure data</li>
          </ul>
        </div>
        
        <div className="section project-highlights">
          <h2>Project Highlights</h2>
          <div className="highlight-item">
            <div className="highlight-icon">🕒</div>
            <div className="highlight-content">
              <h3>Temporal Analysis</h3>
              <p>Examining pedestrian traffic patterns by time of day, month, and year</p>
            </div>
          </div>
          
          <div className="highlight-item">
            <div className="highlight-icon">🗺️</div>
            <div className="highlight-content">
              <h3>Spatial Visualization</h3>
              <p>Mapping pedestrian counts and subway entrances across NYC</p>
            </div>
          </div>
          
          <div className="highlight-item">
            <div className="highlight-icon">📈</div>
            <div className="highlight-content">
              <h3>Trend Analysis</h3>
              <p>Identifying long-term pedestrian volume patterns over multiple years</p>
            </div>
          </div>
          
          <div className="highlight-item">
            <div className="highlight-icon">🚇</div>
            <div className="highlight-content">
              <h3>Infrastructure Analysis</h3>
              <p>Examining relationships between subway station entrances and pedestrian traffic</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OverviewPage;