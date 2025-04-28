import React, { useState } from 'react';
import './VisualizationGallery.css';

function VisualizationGallery() {
  const [activeViz, setActiveViz] = useState(null);

  const visualizations = [
    {
      id: 'top-10-busiest-stations',
      title: 'Top 10 Busiest Stations in NYC',
      description: 'Ranking of the top 10 busiest subway stations by pedestrian traffic in NYC.',
      url: 'https://public.tableau.com/views/Top10BusiestStationsinNYC/Top10BusiestStationsinNYC?:language=en-US&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link'
    },
    {
      id: 'entrances-by-transit-division',
      title: 'No of Entrances by Transit Division',
      description: 'Distribution of pedestrian entrances categorized by different NYC transit divisions.',
      url: 'https://public.tableau.com/views/NoofEntrancesbyTransitDivision/NoofEntrancesbyTransitDivision?:language=en-US&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link'
    },
    {
      id: 'subway-entrance-locations',
      title: 'Subway Entrance Locations',
      description: 'Map visualization showing geographic locations of subway entrances across NYC.',
      url: 'https://public.tableau.com/views/NoofEntrancesbyTransitDivision/SubwayEntranceLocations?:language=en-US&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link'
    },
    {
      id: 'entry-type-breakdown',
      title: 'Entry Type (Full Time vs Part Time)',
      description: 'Comparison of full-time versus part-time subway entrance types across the city.',
      url: 'https://public.tableau.com/views/NoofEntrancesbyTransitDivision/EntryTypeFullTimevsPartTime?:language=en-US&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link'
    },
    {
      id: 'station-entrance-heatmap',
      title: 'Station vs Entrance Type Heat Map',
      description: 'Heatmap illustrating the relationship between stations and entrance types.',
      url: 'https://public.tableau.com/views/NoofEntrancesbyTransitDivision/StationvsEntranceTypeHeatMap?:language=en-US&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link'
    },
    {
      id: 'entrances-vs-entrance-types',
      title: 'Entrances per Station vs Number of Entrance Types',
      description: 'Analysis of the number of entrances per station versus number of entrance types.',
      url: 'https://public.tableau.com/views/NoofEntrancesbyTransitDivision/EntrancesperStationvsNumberofEntranceTypes?:language=en-US&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link'
    },
    {
      id: 'pedestrian-traffic-trend',
      title: 'Pedestrian Traffic Trend Over Time',
      description: 'Trends in pedestrian foot traffic over different times of the day.',
      url: 'https://public.tableau.com/views/NoofEntrancesbyTransitDivision/PedestrianTrafficTrendOverTime?:language=en-US&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link'
    },
    {
      id: 'top-10-pedestrian-locations',
      title: 'Top 10 Pedestrian Locations',
      description: 'Top 10 locations in NYC with the highest pedestrian counts.',
      url: 'https://public.tableau.com/views/NoofEntrancesbyTransitDivision/Top10PedestrianLocations?:language=en-US&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link'
    },
    {
      id: 'time-of-day-density',
      title: 'Time of Day Comparison',
      description: 'Comparison of pedestrian density patterns during morning, midday, and evening.',
      url: 'https://public.tableau.com/views/NoofEntrancesbyTransitDivision/TimeofDayComparison?:language=en-US&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link'
    },
    {
      id: 'locations-vs-time-of-day',
      title: 'Locations vs Time of Day',
      description: 'Analysis of entrance types (full-time vs part-time) compared across locations and time.',
      url: 'https://public.tableau.com/views/NoofEntrancesbyTransitDivision/LocationsvsTimeofDay?:language=en-US&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link'
    },
    {
      id: 'foot-traffic-density-map',
      title: 'Pedestrian Foot Traffic Density Map',
      description: 'Heatmap showing overall pedestrian foot traffic density across NYC subway stations.',
      url: 'https://public.tableau.com/views/NoofEntrancesbyTransitDivision/PedestrianFootTrafficDensityMap?:language=en-US&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link'
    },
    {
      id: 'cumulative-volume-over-time',
      title: 'Cumulative Pedestrian Volume Over Time',
      description: 'Cumulative visualization of pedestrian volumes over time throughout NYC.',
      url: 'https://public.tableau.com/views/NoofEntrancesbyTransitDivision/CumulativePedestrianVolumeOverTime?:language=en-US&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link'
    },
    {
      id: 'average-pedestrian-by-month',
      title: 'Average Pedestrian Count by Month',
      description: 'Average pedestrian counts by month across different transit divisions.',
      url: 'https://public.tableau.com/views/NoofEntrancesbyTransitDivision/AveragePedestrianCountbyMonth?:language=en-US&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link'
    },
    {
      id: 'monthly-pedestrian-trend',
      title: 'Monthly Pedestrian Trend',
      description: 'Monthly trend analysis of pedestrian counts across the NYC subway system.',
      url: 'https://public.tableau.com/views/NoofEntrancesbyTransitDivision/MonthlyPedestrianTrend?:language=en-US&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link'
    }
  ];

  const openVizModal = (viz) => {
    setActiveViz(viz);
  };

  const closeVizModal = () => {
    setActiveViz(null);
  };

  return (
    <div className="visualization-gallery">
      <h1 className="page-title">Visualization Gallery</h1>
      <p className="page-description">
        Explore all visualizations from the NYC Pedestrian Traffic Analysis project. 
        Click on any visualization to view the interactive version.
      </p>

      <div className="gallery-grid">
        {visualizations.map(viz => (
          <div key={viz.id} className="gallery-item" onClick={() => openVizModal(viz)}>
            <div className="gallery-item-content">
              <h3>{viz.title}</h3>
              <p>{viz.description}</p>
              <div className="viz-preview">
                <div className="preview-placeholder">
                  <span>Click to view</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {activeViz && (
        <div className="viz-modal">
          <div className="modal-overlay" onClick={closeVizModal}></div>
          <div className="modal-content">
            <div className="modal-header">
              <h2>{activeViz.title}</h2>
              <button className="close-btn" onClick={closeVizModal}>×</button>
            </div>
            <div className="modal-body">
              <iframe
                src={`${activeViz.url}?:showVizHome=no&:embed=true`}
                width="100%"
                height="700"
                style={{ border: 'none' }}
                title={activeViz.title}
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default VisualizationGallery;
