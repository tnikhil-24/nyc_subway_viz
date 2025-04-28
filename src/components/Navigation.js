import React from 'react';
import './Navigation.css';

function Navigation({ activeTab, onTabChange }) {
  const tabs = [
    { id: 'home', label: 'Home' },
    { id: 'overview', label: 'Project Overview' },
    { id: 'methodology', label: 'Methodology' },
    
    // Pedestrian Dashboards
    // { id: 'pedestrian-dashboard', label: 'Pedestrian Overview' },
    { id: 'pedestrian-growth', label: 'Pedestrian Growth Trends' },
    
    // Subway Dashboards
    // { id: 'subway-dashboard', label: 'Subway Overview' },
    { id: 'nyc-subway-usage', label: 'Subway Usage' },
    { id: 'subway-infrastructure-breakdown', label: 'Infrastructure Breakdown' },
    { id: 'station-entrance-types', label: 'Station Entrance Types' },
    
    // Combined Insights
    { id: 'traffic-insights', label: 'Traffic Insights' },
    
    // Visualization Gallery
    { id: 'visualization-gallery', label: 'Visualization Gallery' },
    
    // Other Pages
    { id: 'visualizations', label: 'Key Visualizations' },
    { id: 'insights', label: 'Insights & Analysis' }
  ];
  
  // Group tabs for dropdown menus
  const pedestrianTabs = tabs.filter(tab => 
    tab.id === 'pedestrian-dashboard' || tab.id === 'pedestrian-growth'
  );
  
  const subwayTabs = tabs.filter(tab => 
    tab.id === 'subway-dashboard' || 
    tab.id === 'nyc-subway-usage' || 
    tab.id === 'subway-infrastructure-breakdown' || 
    tab.id === 'station-entrance-types'
  );
  
  const insightTabs = tabs.filter(tab => 
    tab.id === 'traffic-insights' || 
    tab.id === 'visualizations' || 
    tab.id === 'insights'
  );
  
  const mainTabs = tabs.filter(tab => 
    tab.id === 'home' || 
    tab.id === 'overview' || 
    tab.id === 'methodology' ||
    tab.id === 'visualization-gallery'
  );
  
  return (
    <nav className="navigation">
      <div className="container">
        <ul className="nav-list">
          {/* Main Tabs */}
          {mainTabs.map(tab => (
            <li key={tab.id} className="nav-item">
              <button 
                className={`nav-link ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => onTabChange(tab.id)}
              >
                {tab.label}
              </button>
            </li>
          ))}
          
          {/* Pedestrian Dashboards Dropdown */}
          <li className="nav-item dropdown">
            <button className="nav-link dropdown-toggle">
              Pedestrian Data
            </button>
            <div className="dropdown-menu">
              {pedestrianTabs.map(tab => (
                <button 
                  key={tab.id}
                  className={`dropdown-item ${activeTab === tab.id ? 'active' : ''}`}
                  onClick={() => onTabChange(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </li>
          
          {/* Subway Dashboards Dropdown */}
          <li className="nav-item dropdown">
            <button className="nav-link dropdown-toggle">
              Subway Data
            </button>
            <div className="dropdown-menu">
              {subwayTabs.map(tab => (
                <button 
                  key={tab.id}
                  className={`dropdown-item ${activeTab === tab.id ? 'active' : ''}`}
                  onClick={() => onTabChange(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </li>
          
          {/* Insights Dropdown */}
          <li className="nav-item dropdown">
            <button className="nav-link dropdown-toggle">
              Insights
            </button>
            <div className="dropdown-menu">
              {insightTabs.map(tab => (
                <button 
                  key={tab.id}
                  className={`dropdown-item ${activeTab === tab.id ? 'active' : ''}`}
                  onClick={() => onTabChange(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;