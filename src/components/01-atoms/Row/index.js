import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const Row = ({ children, justifyContent, alignItems, width, height, border, backgroundColor }) => {
  const styles = { width, height, border, backgroundColor };
  let myClassName = "My__Row";
  if(justifyContent) myClassName += ` My__JustifyContent__${justifyContent}`;
  if(alignItems) myClassName += ` My__AlignItems__${alignItems}`;
  return <div style={styles} className={myClassName}>{children}</div>;
};

Row.propTypes = {
  children: PropTypes.node.isRequired,
  justifyContent: PropTypes.oneOf(['SpaceBetween']),
  alignItems: PropTypes.oneOf(['Center']),
  width: PropTypes.string,
  height: PropTypes.string,
  border: PropTypes.string,
  backgroundColor: PropTypes.string,
};

export default Row;