// TrafficInsightsDashboard.js
import React, { useEffect, useRef } from 'react';
import './TrafficInsightsDashboard.css';

function TrafficInsightsDashboard() {
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
      <h1 className="page-title">NYC Pedestrian and Subway Traffic Insights</h1>
      <p className="page-description">
        This dashboard examines pedestrian traffic patterns across New York City, analyzing
        temporal trends, top locations, and density distribution.
      </p>
      
      <div className="viz-container">
        <iframe
          src="https://public.tableau.com/views/NYCPedestrianandSubwayTrafficInsights/NYCPedestrianandSubwayTrafficInsights?:showVizHome=no&:embed=true"
          width="100%"
          height="827"
          style={{ border: 'none' }}
          title="Pedestrian and Subway Traffic Insights Dashboard"
          ref={vizRef}
        ></iframe>
      </div>
      
      <div className="dashboard-sections">
        <div className="section insight-cards">
          <div className="insight-card">
            <h3>Pedestrian Traffic Trend Over Time</h3>
            <p>Line chart showing the long-term trend in pedestrian traffic from 2008 to 2024, with notable fluctuations including a significant drop around 2020-2021.</p>
          </div>
          
          <div className="insight-card">
            <h3>Monthly Pedestrian Trend</h3>
            <p>Line chart displaying pedestrian volume trends by month across multiple years, showing seasonal patterns and recovery trajectory after the 2020 decline.</p>
          </div>
          
          <div className="insight-card">
            <h3>Top 10 Pedestrian Locations</h3>
            <p>Horizontal bar chart ranking the busiest pedestrian locations in NYC, with West 34th Street, Seventh Avenue, and Fifth Avenue consistently ranking as top locations.</p>
          </div>
          
          <div className="insight-card">
            <h3>Pedestrian Foot Traffic Density Map</h3>
            <p>Geographic map visualizing pedestrian count distribution across NYC, with color and size indicators representing traffic volume at different locations.</p>
          </div>
        </div>
        
        <div className="section dashboard-details">
          <div className="viz-list">
            <h3>Key Visualizations</h3>
            <div className="viz-item">
              <div className="viz-color" style={{backgroundColor: '#3498db'}}></div>
              <span>Long-term Pedestrian Trend</span>
            </div>
            <div className="viz-item">
              <div className="viz-color" style={{backgroundColor: '#2ecc71'}}></div>
              <span>Monthly Pattern Analysis</span>
            </div>
            <div className="viz-item">
              <div className="viz-color" style={{backgroundColor: '#9b59b6'}}></div>
              <span>Top Pedestrian Locations</span>
            </div>
            <div className="viz-item">
              <div className="viz-color" style={{backgroundColor: '#e74c3c'}}></div>
              <span>Pedestrian Density Map</span>
            </div>
          </div>
          
          <div className="interactive-features">
            <h3>Interactive Features</h3>
            <ul>
              <li>Filter by location name</li>
              <li>Filter by month</li>
              <li>Filter by pedestrian count range</li>
              <li>Select specific years for trend analysis</li>
              <li>Interactive map selection for specific location details</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrafficInsightsDashboard;