import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const Row = ({ children, justifyContent, alignItems }) => {
  let myClassName = "My__Row";
  if(justifyContent) myClassName += ` My__JustifyContent__${justifyContent}`;
  if(alignItems) myClassName += ` My__AlignItems__${alignItems}`;
  return <div className={myClassName}>{children}</div>;
};

Row.propTypes = {
  children: PropTypes.node.isRequired,
  justifyContent: PropTypes.oneOf(['Center']),
  alignItems: PropTypes.oneOf(['Center']),
};

export default Row;