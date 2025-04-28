// NYCSubwayUsageDashboard.js
import React, { useEffect, useRef } from 'react';
import './NYCSubwayUsageDashboard.css';

function NYCSubwayUsageDashboard() {
  const vizRef = useRef(null);
  
  useEffect(() => {
    // Create a script element to load the Tableau JavaScript API
    const scriptElement = document.createElement('script');
    scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
    scriptElement.async = true;
    
    // Add the script to the document
    document.body.appendChild(scriptElement);
    
    // Clean up only the script we added
    return () => {
      if (document.body.contains(scriptElement)) {
        document.body.removeChild(scriptElement);
      }
    };
  }, []);

  return (
    <div className="dashboard-page">
      <h1 className="page-title">NYC Subway Usage Overview</h1>
      <p className="page-description">
        This dashboard provides an overview of NYC subway infrastructure and usage patterns, 
        focusing on the busiest stations and entrance distribution across transit divisions.
      </p>
      
      <div className="viz-container">
        <iframe
          src="https://public.tableau.com/views/NYCSubwayUsageOverview/NYCSubwayUsageOverview?:showVizHome=no&:embed=true"
          width="100%"
          height="827"
          style={{ border: 'none' }}
          title="NYC Subway Usage Overview Dashboard"
          ref={vizRef}
        ></iframe>
      </div>
      
      <div className="dashboard-sections">
        <div className="section insight-cards">
          <div className="insight-card">
            <h3>Top 10 Busiest Stations</h3>
            <p>Horizontal bar chart showing the top 10 busiest subway stations in NYC, with 34th St leading the list, followed by 23rd St and 14th St stations.</p>
          </div>
          
          <div className="insight-card">
            <h3>Number of Entrances by Transit Division</h3>
            <p>Bar chart comparing the number of subway entrances across the three major transit divisions (BMT, IND, IRT), with additional breakdown by entry type (Full-Time vs Part-Time).</p>
          </div>
          
          <div className="insight-card">
            <h3>Subway Entrance Locations</h3>
            <p>Geographic map showing the distribution of subway entrances across NYC, color-coded by transit division (BMT, IND, IRT).</p>
          </div>
          
          <div className="insight-card">
            <h3>Station Data Analysis</h3>
            <p>Detailed information about each station including its transit division and entrance count, available through interactive filtering.</p>
          </div>
        </div>
        
        <div className="section dashboard-details">
          <div className="viz-list">
            <h3>Key Visualizations</h3>
            <div className="viz-item">
              <div className="viz-color" style={{backgroundColor: '#3498db'}}></div>
              <span>Top 10 Busiest Stations</span>
            </div>
            <div className="viz-item">
              <div className="viz-color" style={{backgroundColor: '#2ecc71'}}></div>
              <span>Entrances by Transit Division</span>
            </div>
            <div className="viz-item">
              <div className="viz-color" style={{backgroundColor: '#9b59b6'}}></div>
              <span>Subway Entrance Map</span>
            </div>
            <div className="viz-item">
              <div className="viz-color" style={{backgroundColor: '#e74c3c'}}></div>
              <span>Station Detail View</span>
            </div>
          </div>
          
          <div className="interactive-features">
            <h3>Interactive Features</h3>
            <ul>
              <li>Filter by station name</li>
              <li>Filter by transit division (BMT, IND, IRT)</li>
              <li>Filter by entry type (Full-Time, Part-Time)</li>
              <li>Hover for detailed station information</li>
              <li>Interactive map selection for specific station analysis</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NYCSubwayUsageDashboard;