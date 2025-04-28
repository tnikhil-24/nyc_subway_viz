// PedestrianGrowthDashboard.js
import React, { useEffect, useRef } from 'react';
import './PedestrianGrowthDashboard.css';

function PedestrianGrowthDashboard() {
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
      <h1 className="page-title">Pedestrian Activity & Growth Trends</h1>
      <p className="page-description">
        This dashboard analyzes pedestrian traffic patterns by time of day, location, and over multiple years,
        revealing key trends and growth patterns across New York City.
      </p>
      
      <div className="viz-container">
        <iframe
          src="https://public.tableau.com/views/PedestrianActivityGrowthTrends/PedestrianActivityGrowthTrends?:showVizHome=no&:embed=true"
          width="100%"
          height="827"
          style={{ border: 'none' }}
          title="Pedestrian Activity Growth Trends Dashboard"
          ref={vizRef}
        ></iframe>
      </div>
      
      <div className="dashboard-sections">
        <div className="section insight-cards">
          <div className="insight-card">
            <h3>Time of Day Comparison</h3>
            <p>Bar chart comparing pedestrian counts across different times of day (AM, Midday, PM), showing that evening (PM) hours consistently have the highest pedestrian traffic.</p>
          </div>
          
          <div className="insight-card">
            <h3>Locations vs Time of Day</h3>
            <p>Combined chart showing pedestrian counts by location and time of day, allowing for detailed comparison of traffic patterns across different NYC areas.</p>
          </div>
          
          <div className="insight-card">
            <h3>Cumulative Pedestrian Volume</h3>
            <p>Area chart tracking cumulative pedestrian volume growth from 2008 to 2024 for key locations, showing long-term growth trends with a notable disruption around 2020.</p>
          </div>
          
          <div className="insight-card">
            <h3>Average Pedestrian Count by Month</h3>
            <p>Bar chart comparing average pedestrian counts across different months for selected locations, revealing seasonal patterns in foot traffic.</p>
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
              <span>Locations vs Time of Day</span>
            </div>
            <div className="viz-item">
              <div className="viz-color" style={{backgroundColor: '#9b59b6'}}></div>
              <span>Cumulative Volume Over Time</span>
            </div>
            <div className="viz-item">
              <div className="viz-color" style={{backgroundColor: '#e74c3c'}}></div>
              <span>Monthly Average Comparison</span>
            </div>
          </div>
          
          <div className="interactive-features">
            <h3>Interactive Features</h3>
            <ul>
              <li>Filter by location name</li>
              <li>Filter by time of day (AM, Midday, PM)</li>
              <li>Select specific locations for comparison</li>
              <li>Filter by month for seasonal analysis</li>
              <li>Interactive selection of time periods for trend analysis</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
          

  );
}

export default PedestrianGrowthDashboard;