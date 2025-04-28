import React from 'react';
import './SubwayDashboard.css';
import TableauPlaceholder from '../components/TableauPlaceholder';
// Import TableauViz for production use
// import TableauViz from '../components/TableauViz';

function SubwayDashboard() {
  return (
    <div className="subway-dashboard">
      <h1 className="page-title">NYC Subway Infrastructure Analysis</h1>
      <p className="page-description">
        This dashboard explores the NYC subway system infrastructure, focusing on entrance types, 
        station distributions, and their relationship to pedestrian traffic patterns.
      </p>
      
      <div className="viz-container">
        {/* In production, use the actual Tableau dashboard URL */}
        {/* <TableauViz url="https://public.tableau.com/views/YourDashboardName/NYCSubwayInfrastructure" /> */}
        <TableauPlaceholder 
          title="NYC Subway Infrastructure Dashboard" 
          description="Interactive dashboard visualizing subway entrance types, transit divisions, and infrastructure distribution"
        />
      </div>
      
      <div className="feature-cards">
        <div className="feature-card">
          <h3>Subway Entrance Locations</h3>
          <p>
            Geospatial distribution of subway entrances across NYC, color-coded by transit division.
          </p>
        </div>
        
        <div className="feature-card">
          <h3>Entry Type Analysis</h3>
          <p>
            Breakdown of entrance types (stair, elevator, escalator) across the subway system.
          </p>
        </div>
        
        <div className="feature-card">
          <h3>Transit Division Comparison</h3>
          <p>
            Comparative analysis of entrance counts across different NYC transit divisions.
          </p>
        </div>
      </div>
      
      <div className="dashboard-details">
        <div className="section">
          <h2>Key Infrastructure Insights</h2>
          <ul className="insights-list">
            <li>Stairs are the predominant entrance type across all stations</li>
            <li>IRT and BMT divisions have similar entrance counts, with IND having fewer entrances</li>
            <li>Manhattan has the highest density of subway entrances in NYC</li>
            <li>Stations with multiple entrance types correlate with higher pedestrian traffic</li>
          </ul>
        </div>
        
        <div className="section">
          <h2>Visualization Techniques</h2>
          <div className="viz-techniques">
            <div className="viz-technique">
              <div className="technique-color" style={{backgroundColor: '#3498db'}}></div>
              <span>Geographic mapping with color encoding</span>
            </div>
            <div className="viz-technique">
              <div className="technique-color" style={{backgroundColor: '#2ecc71'}}></div>
              <span>Bar charts for categorical comparisons</span>
            </div>
            <div className="viz-technique">
              <div className="technique-color" style={{backgroundColor: '#f1c40f'}}></div>
              <span>Heat maps for station-entrance type relationships</span>
            </div>
            <div className="viz-technique">
              <div className="technique-color" style={{backgroundColor: '#e74c3c'}}></div>
              <span>Scatter plots for correlation analysis</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubwayDashboard;