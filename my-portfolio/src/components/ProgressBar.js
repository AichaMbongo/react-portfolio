//ProgressBar.js
import React from 'react';

const Skill = ({ name, value, color }) => (
    <div className="col-md-12 mt-4">
      <h5>{name}</h5>
      <div className={`progress`} role="progressbar" aria-label={name} aria-valuenow={value} aria-valuemin="0" aria-valuemax="100">
        <div className={`progress-bar progress-bar-striped bg-${color}`} style={{ width: `${value}%` }}>{value}%</div>
      </div>
    </div>
  );

  export default Skill;