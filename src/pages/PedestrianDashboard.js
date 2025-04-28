// PedestrianDashboard.js
import React, { useEffect, useRef } from 'react';
import './PedestrianDashboard.css';

function PedestrianDashboard() {
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
      <h1 className="page-title">NYC Pedestrian Traffic Overview</h1>
      <p className="page-description">
        This dashboard provides a comprehensive view of pedestrian traffic patterns across New York City, 
        highlighting temporal trends, location comparisons, and long-term volume changes.
      </p>
      
      <div className="viz-container">
        {/* Use a direct iframe approach instead */}
        <iframe
          src="https://public.tableau.com/views/Project_Phase_2_17457905030440/PedestrianActivityGrowthTrends?:showVizHome=no&:embed=true"
          width="100%"
          height="827"
          style={{ border: 'none' }}
          title="NYC Pedestrian Traffic Dashboard"
          ref={vizRef}
        ></iframe>
      </div>
      
      <div className="dashboard-sections">
        <div className="section insight-cards">
          <div className="insight-card">
            <h3>Time of Day Analysis</h3>
            <p>Pedestrian counts categorized by morning, midday, and evening periods, revealing distinct traffic patterns.</p>
          </div>
          
          <div className="insight-card">
            <h3>Location Comparison</h3>
            <p>Comparative analysis of pedestrian volumes across different NYC locations, identifying the busiest areas.</p>
          </div>
          
          <div className="insight-card">
            <h3>Monthly Trends</h3>
            <p>Seasonal variations in pedestrian traffic, highlighting patterns across different months of the year.</p>
          </div>
          
          <div className="insight-card">
            <h3>Historical Volume</h3>
            <p>Long-term pedestrian count trends from 2007 to 2024, showing growth patterns at key locations.</p>
          </div>
        </div>
        
        <div className="section dashboard-details">
          <div className="viz-list">
            <h3>Key Visualizations</h3>
            <div className="viz-item">
              <div className="viz-color" style={{backgroundColor: '#3498db'}}></div>
              <span>Time of Day Comparison</span>
            </div>
            <div className="viz-item">
              <div className="viz-color" style={{backgroundColor: '#2ecc71'}}></div>
              <span>Top 10 Pedestrian Locations</span>
            </div>
            <div className="viz-item">
              <div className="viz-color" style={{backgroundColor: '#9b59b6'}}></div>
              <span>Pedestrian Traffic Density Map</span>
            </div>
            <div className="viz-item">
              <div className="viz-color" style={{backgroundColor: '#e74c3c'}}></div>
              <span>Cumulative Pedestrian Volume Over Time</span>
            </div>
          </div>
          
          <div className="interactive-features">
            <h3>Interactive Features</h3>
            <ul>
              <li>Filter by location name</li>
              <li>Filter by time period (AM, Midday, PM)</li>
              <li>Filter by date range</li>
              <li>Hover for detailed information</li>
              <li>Select specific locations for comparison</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PedestrianDashboard;