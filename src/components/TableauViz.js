import React, { useEffect, useRef } from 'react';
import './TableauViz.css';

function TableauViz({ url, options = {} }) {
  const vizRef = useRef(null);
  const vizObjRef = useRef(null);

  useEffect(() => {
    // Load the Tableau Visualization API
    const loadTableauAPI = () => {
      return new Promise((resolve) => {
        if (window.tableau) {
          resolve();
          return;
        }

        const script = document.createElement('script');
        script.src = 'https://public.tableau.com/javascripts/api/tableau-2.min.js';
        script.onload = () => resolve();
        document.body.appendChild(script);
      });
    };

    // Initialize the visualization
    const initViz = async () => {
      try {
        await loadTableauAPI();
        
        // Clean up previous viz if exists
        if (vizObjRef.current) {
          vizObjRef.current.dispose();
          vizObjRef.current = null;
        }

        // Create new viz
        if (window.tableau && vizRef.current) {
          const defaultOptions = {
            hideTabs: true,
            hideToolbar: true,
            width: '100%',
            height: '600px',
          };
          
          const vizOptions = { ...defaultOptions, ...options };
          vizObjRef.current = new window.tableau.Viz(vizRef.current, url, vizOptions);
        }
      } catch (error) {
        console.error('Error initializing Tableau visualization:', error);
      }
    };

    initViz();

    // Clean up on unmount
    return () => {
      if (vizObjRef.current) {
        vizObjRef.current.dispose();
        vizObjRef.current = null;
      }
    };
  }, [url, options]);

  return (
    <div className="tableau-viz-container">
      <div ref={vizRef} className="tableau-viz"></div>
    </div>
  );
}

export default TableauViz;