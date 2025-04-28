import React from 'react';
import './TableauPlaceholder.css';

function TableauPlaceholder({ title, description }) {
  return (
    <div className="tableau-placeholder">
      <div className="placeholder-content">
        <h3>{title}</h3>
        <p>{description || "Tableau visualization would be embedded here"}</p>
        <p className="placeholder-note">
          In production, this would be replaced with an actual Tableau embed
        </p>
      </div>
    </div>
  );
}

export default TableauPlaceholder;