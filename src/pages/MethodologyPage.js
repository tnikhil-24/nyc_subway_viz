import React from 'react';
import './MethodologyPage.css';

function MethodologyPage() {
  return (
    <div className="methodology-page">
      <h1 className="page-title">Methodology</h1>
      <p className="page-description">
        The approach and process used to analyze NYC pedestrian and subway data.
      </p>
      
      <div className="section workflow-section">
        <h2>Data Workflow</h2>
        <div className="workflow-image">
          <img src="https://media-hosting.imagekit.io/b8fcb146f6fd49cd/workflow.png?Expires=1840407211&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=ccJXE5~owOhLoChAWuZgaEAagV4fXfqi-RHpLMYxPEzX83XcJoLqCfoBM8hGfeQePItkNkPwI7mIDFcOw5jslIQxq5tA72J1vSbEHEi-lZz9iw2KRDA~EP0S-8--3rNZiTerL6iD5sC3jEPlsk2KBx3UURjywLL3Xpv17-SPmSjCD4BfZDYQKAw4jq7hiW3kAZ7kuIVTSPm5mFKYBWBvUPU4yB-vEvCTGd09ugFSLqXxmZCWeS0yjq7wQu3g0K7d7b~zPmHpfAfR5Ye2N4otK4yWPMm4R9Uw12gZHdfbDF8719fPQMEvHybNbYUdd-WzImyrw2QDiBWaRUw6x9phbw__" alt="Data Workflow Diagram" className="workflow-diagram" />
        </div>
        <p>
          The data processing workflow began with raw subway entrance and pedestrian count CSV files, 
          followed by data cleaning and preprocessing using Python. The cleaned data was then imported 
          into Tableau for visualization and dashboard creation. The interactive visualizations were 
          organized into thematic dashboards for comprehensive analysis.
        </p>
      </div>
      
      <div className="methodology-grid">
        <div className="section">
          <h2>Data Abstraction</h2>
          <p>
            The datasets used in this project contain information about pedestrian counts across various NYC locations
            and subway entrance details including coordinates, entrance types, and station information.
          </p>
          <ul>
            <li><strong>Type:</strong> Structured, time-series and geospatial data</li>
            <li><strong>Key attributes:</strong> Location Name, Date, Time of Day, Pedestrian Count, Latitude, Longitude, Entrance Type</li>
            <li><strong>Transformation:</strong> Data cleaning, aggregation, and geo-encoding</li>
          </ul>
        </div>
        
        <div className="section">
          <h2>Task Abstraction</h2>
          <p>
            The analytical tasks focused on discovering pedestrian traffic patterns and their relationship to subway infrastructure.
          </p>
          <ul>
            <li><strong>Target:</strong> Traffic patterns, temporal trends, spatial distributions</li>
            <li><strong>Actions:</strong> Comparing locations, analyzing time-based trends, identifying correlations</li>
            <li><strong>Methods:</strong> Filtering, aggregation, comparative analysis, geospatial mapping</li>
          </ul>
        </div>
      </div>
      
      <div className="section tools-section">
        <h2>Implementation Tools</h2>
        <div className="tools-grid">
          <div className="tool-card">
            <h3>Data Processing</h3>
            <ul>
              <li>Python</li>
              <li>Pandas</li>
              <li>NumPy</li>
            </ul>
          </div>
          
          <div className="tool-card">
            <h3>Visualization</h3>
            <ul>
              <li>Tableau</li>
              <li>Tableau Public</li>
              <li>Mapbox integration</li>
            </ul>
          </div>
          
          <div className="tool-card">
            <h3>Web Integration</h3>
            <ul>
              <li>React</li>
              <li>Tableau JavaScript API</li>
              <li>CSS</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MethodologyPage;