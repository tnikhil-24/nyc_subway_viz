import React from 'react';
import './InsightsPage.css';

function InsightsPage() {
  return (
    <div className="insights-page">
      <h1 className="page-title">Insights & Analysis</h1>
      <p className="page-description">
        Key findings and analytical insights from the NYC pedestrian and subway data visualization project.
      </p>
      
      <div className="section">
        <h2>Key Findings</h2>
        <div className="findings-grid">
          <div className="finding-card">
            <h3>Temporal Patterns</h3>
            <ul>
              <li>Evening (PM) hours consistently show the highest pedestrian traffic volumes</li>
              <li>September has the highest average pedestrian count, while October shows the lowest</li>
              <li>Long-term pedestrian volume shows steady growth from 2007-2019, followed by a significant drop in 2020, and recovery in subsequent years</li>
            </ul>
          </div>
          
          <div className="finding-card">
            <h3>Spatial Distribution</h3>
            <ul>
              <li>West 34th Street, Seventh Avenue, and Fifth Avenue consistently rank as the top pedestrian traffic locations</li>
              <li>Manhattan shows significantly higher pedestrian density compared to other boroughs</li>
              <li>Commercial areas and major transit hubs show the highest concentration of foot traffic</li>
            </ul>
          </div>
          
          <div className="finding-card">
            <h3>Infrastructure Relationships</h3>
            <ul>
              <li>Strong correlation between locations with multiple subway entrances and high pedestrian volumes</li>
              <li>Stations with diverse entrance types (stairs, elevators, escalators) typically serve areas with higher foot traffic</li>
              <li>IRT division shows the highest number of entrances, correlating with some of the busiest pedestrian areas</li>
            </ul>
          </div>
          
          <div className="finding-card">
            <h3>Trend Analysis</h3>
            <ul>
              <li>The monthly pedestrian trend shows consistent patterns year over year with seasonal variations</li>
              <li>Year-over-year growth in pedestrian traffic was disrupted around 2020 but shows signs of recovery</li>
              <li>East 161st Street, East Fordham Road, and East Tremont Avenue show the strongest cumulative growth over time</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="section">
        <h2>Data Storytelling Narrative</h2>
        <div className="narrative-container">
          <div className="narrative-stage">
            <h3>Stage 1: Understanding the Dataset</h3>
            <p>
              Our exploration began with analyzing pedestrian count data across various NYC locations, examining
              attributes like location name, time of day, date, and pedestrian volumes. The raw data revealed 
              significant variations in traffic patterns based on location, time, and date. Initial observations
              highlighted Manhattan as a pedestrian hotspot and showed distinct patterns between morning, 
              midday, and evening periods.
            </p>
          </div>
          
          <div className="narrative-stage">
            <h3>Stage 2: Deeper Analysis and Correlations</h3>
            <p>
              Diving deeper, we discovered strong correlations between subway infrastructure and pedestrian traffic.
              Areas with multiple subway entrances consistently showed higher foot traffic. The data revealed that
              pedestrian volumes peak during evening hours across most locations, with specific streets like
              West 34th Street and Fifth Avenue experiencing exceptionally high traffic. Temporal analysis uncovered
              monthly patterns with September showing the highest average pedestrian counts.
            </p>
          </div>
          
          <div className="narrative-stage">
            <h3>Stage 3: Insights and Implications</h3>
            <p>
              The analysis provides valuable insights for urban planning, business location strategy, and 
              transportation management. The strong relationship between subway infrastructure and pedestrian 
              volumes suggests that transit accessibility significantly influences foot traffic. The temporal 
              patterns identified can help businesses optimize operating hours and staff scheduling. Long-term
              trends show the resilience of NYC's pedestrian ecosystem, with volumes recovering after the 
              significant drop in 2020, pointing to the enduring vitality of New York's street life.
            </p>
          </div>
        </div>
      </div>
      
      <div className="section">
        <h2>Future Research Directions</h2>
        <div className="future-directions">
          <div className="direction-card">
            <h3>Predictive Modeling</h3>
            <p>
              Develop predictive models for future pedestrian volumes based on historical data, transit changes, and urban development plans.
            </p>
          </div>
          
          <div className="direction-card">
            <h3>Additional Data Integration</h3>
            <p>
              Incorporate weather data, event information, and retail density to develop a more comprehensive understanding of factors influencing pedestrian traffic.
            </p>
          </div>
          
          <div className="direction-card">
            <h3>Real-time Analysis</h3>
            <p>
              Explore possibilities for real-time pedestrian monitoring and visualization to support dynamic urban management strategies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InsightsPage;