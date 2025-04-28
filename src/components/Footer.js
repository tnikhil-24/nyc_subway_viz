import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <h3>NYC Pedestrian Traffic Analysis</h3>
            <p>Scientific Data Visualization Project</p>
          </div>
          
          <div className="footer-links">
            <a href="#" className="footer-link">Project Documentation</a>
            <a href="#" className="footer-link">Data Sources</a>
            <a href="#" className="footer-link">Contact</a>
          </div>
        </div>
        
        <div className="footer-copyright">
          © 2025 Scientific Data Visualization Project. All visualizations created using Tableau.
        </div>
      </div>
    </footer>
  );
}

export default Footer;