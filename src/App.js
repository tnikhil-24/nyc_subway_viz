import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import OverviewPage from './pages/OverviewPage';
import MethodologyPage from './pages/MethodologyPage';
import PedestrianDashboard from './pages/PedestrianDashboard';
import SubwayDashboard from './pages/SubwayDashboard';
import VisualizationsPage from './pages/VisualizationGallery';
import InsightsPage from './pages/InsightsPage';

// Import new dashboard components
import NYCSubwayUsageDashboard from './pages/NYCSubwayUsageDashboard';
import SubwayInfrastructureDashboard from './pages/SubwayInfrastructureDashboard';
import StationEntranceDashboard from './pages/StationEntranceDashboard';
import TrafficInsightsDashboard from './pages/TrafficInsightsDashboard';
import PedestrianGrowthDashboard from './pages/PedestrianGrowthDashboard';
import VisualizationGallery from './pages/VisualizationGallery';

function App() {
  const [activeTab, setActiveTab] = useState('home');
  
  const renderActivePage = () => {
    switch (activeTab) {
      case 'home':
        return <HomePage onNavigate={setActiveTab} />;
      case 'overview':
        return <OverviewPage />;
      case 'methodology':
        return <MethodologyPage />;
      case 'pedestrian-dashboard':
        return <PedestrianDashboard />;
      case 'subway-dashboard':
        return <SubwayDashboard />;
      case 'visualizations':
        return <VisualizationsPage />;
      case 'insights':
        return <InsightsPage />;
      // New dashboard routes
      case 'nyc-subway-usage':
        return <NYCSubwayUsageDashboard />;
      case 'subway-infrastructure-breakdown':
        return <SubwayInfrastructureDashboard />;
      case 'station-entrance-types':
        return <StationEntranceDashboard />;
      case 'traffic-insights':
        return <TrafficInsightsDashboard />;
      case 'pedestrian-growth':
        return <PedestrianGrowthDashboard />;
      // Visualization Gallery
      case 'visualization-gallery':
        return <VisualizationGallery />;
      default:
        return <HomePage onNavigate={setActiveTab} />;
    }
  };
  
  return (
    <div className="app">
      <Header />
      <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
      <main className="main-content">
        {renderActivePage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;