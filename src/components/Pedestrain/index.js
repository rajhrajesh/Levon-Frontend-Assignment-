import React from 'react';
import PropTypes from 'prop-types';

const Pedestrian = ({isActive, onClick }) => (
  <button onClick={onClick} aria-label={isActive ? "Pedestrian Request Button Active" : "Pedestrian Request Button Inactive"}>
    Pedestrian Cross
  </button>
);

Pedestrian.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Pedestrian