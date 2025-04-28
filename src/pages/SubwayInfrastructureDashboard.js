// SubwayInfrastructureDashboard.js
import React, { useEffect, useRef } from 'react';
import './SubwayInfrastructureDashboard.css';

function SubwayInfrastructureDashboard() {
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
      <h1 className="page-title">Subway Infrastructure Breakdown</h1>
      <p className="page-description">
        This dashboard provides a detailed breakdown of NYC subway infrastructure, focusing on
        entrance types and their distribution across transit divisions.
      </p>
      
      <div className="viz-container">
        <iframe
          src="https://public.tableau.com/views/SubwayInfrastructureBreakdown/SubwayInfrastructureBreakdown?:showVizHome=no&:embed=true"
          width="100%"
          height="827"
          style={{ border: 'none' }}
          title="Subway Infrastructure Breakdown Dashboard"
          ref={vizRef}
        ></iframe>
      </div>
      
      <div className="dashboard-sections">
        <div className="section insight-cards">
          <div className="insight-card">
            <h3>Entry Type Analysis</h3>
            <p>Comparison of entry types (Full-Time vs Part-Time) showing that stairs are the predominant entrance type, with significantly higher numbers than other entrance types.</p>
          </div>
          
          <div className="insight-card">
            <h3>Station Heat Map Analysis</h3>
            <p>Heat map visualization showing the relationship between stations and different entrance types, highlighting which stations have the most diverse infrastructure.</p>
          </div>
          
          <div className="insight-card">
            <h3>Transit Division Analysis</h3>
            <p>Breakdown of entrance types across different transit divisions (BMT, IND, IRT), showing distribution patterns specific to each division.</p>
          </div>
          
          <div className="insight-card">
            <h3>Entrance Type Distribution</h3>
            <p>Analysis of different entrance types (stairs, doors, elevators, escalators, ramps, walkways) and their prevalence throughout the subway system.</p>
          </div>
        </div>
        
        <div className="section dashboard-details">
          <div className="viz-list">
            <h3>Key Visualizations</h3>
            <div className="viz-item">
              <div className="viz-color" style={{backgroundColor: '#3498db'}}></div>
              <span>Entry Type (Full Time vs Part Time)</span>
            </div>
            <div className="viz-item">
              <div className="viz-color" style={{backgroundColor: '#2ecc71'}}></div>
              <span>Station vs Entrance Type Heat Map</span>
            </div>
            <div className="viz-item">
              <div className="viz-color" style={{backgroundColor: '#9b59b6'}}></div>
              <span>Transit Division Analysis</span>
            </div>
            <div className="viz-item">
              <div className="viz-color" style={{backgroundColor: '#e74c3c'}}></div>
              <span>Entrance Type Distribution</span>
            </div>
          </div>
          
          <div className="interactive-features">
            <h3>Interactive Features</h3>
            <ul>
              <li>Filter by transit division (BMT, IND, IRT)</li>
              <li>Filter by entrance type description</li>
              <li>Filter by entry type (Full-Time, Part-Time)</li>
              <li>Filter by station name</li>
              <li>Interactive selection of entrance types for comparison</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubwayInfrastructureDashboard;