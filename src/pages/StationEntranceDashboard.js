// StationEntranceDashboard.js
import React, { useEffect, useRef } from 'react';
import './StationEntranceDashboard.css';

function StationEntranceDashboard() {
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
      <h1 className="page-title">Station and its Entrance Types</h1>
      <p className="page-description">
        This dashboard examines the NYC subway station entrance types and their distribution across different 
        stations, providing insights into the infrastructure organization of the transit system.
      </p>
      
      <div className="viz-container">
        <iframe
          src="https://public.tableau.com/views/Stationanditsentrancetypes/Stationanditsentrancetypes?:showVizHome=no&:embed=true"
          width="100%"
          height="827"
          style={{ border: 'none' }}
          title="Station and Entrance Types Dashboard"
          ref={vizRef}
        ></iframe>
      </div>
      
      <div className="dashboard-sections">
        <div className="section insight-cards">
          <div className="insight-card">
            <h3>Subway Entrance Locations</h3>
            <p>Geographic map of subway entrances across NYC, color-coded by transit division (BMT, IND, IRT).</p>
          </div>
          
          <div className="insight-card">
            <h3>Station vs Entrance Type Heat Map</h3>
            <p>Heat map visualization showing the relationship between stations and entrance types (stair, door, elevator, escalator, etc.).</p>
          </div>
          
          <div className="insight-card">
            <h3>Entry Type Analysis</h3>
            <p>Comparison of full-time vs part-time entrances across different entrance types throughout the subway system.</p>
          </div>
          
          <div className="insight-card">
            <h3>Transit Division Analysis</h3>
            <p>Analysis of entrance types and distributions across the three major transit divisions (BMT, IND, IRT).</p>
          </div>
        </div>
        
        <div className="section dashboard-details">
          <div className="viz-list">
            <h3>Key Visualizations</h3>
            <div className="viz-item">
              <div className="viz-color" style={{backgroundColor: '#3498db'}}></div>
              <span>Subway Entrance Locations Map</span>
            </div>
            <div className="viz-item">
              <div className="viz-color" style={{backgroundColor: '#2ecc71'}}></div>
              <span>Entry Type Distribution</span>
            </div>
            <div className="viz-item">
              <div className="viz-color" style={{backgroundColor: '#9b59b6'}}></div>
              <span>Station vs Entrance Type Heat Map</span>
            </div>
            <div className="viz-item">
              <div className="viz-color" style={{backgroundColor: '#e74c3c'}}></div>
              <span>Transit Division Comparison</span>
            </div>
          </div>
          
          <div className="interactive-features">
            <h3>Interactive Features</h3>
            <ul>
              <li>Filter by transit division (BMT, IND, IRT)</li>
              <li>Filter by entrance type (Stair, Door, Elevator, Escalator, etc.)</li>
              <li>Filter by entry type (Full-Time, Part-Time)</li>
              <li>Filter by station name</li>
              <li>Interactive station selection for detailed analysis</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StationEntranceDashboard;