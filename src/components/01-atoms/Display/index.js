import React from 'react';
import PropTypes from 'prop-types';

import './style.css'

const Display = ({ children }) => <div className="My__Display">{children}</div>;

Display.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Display;