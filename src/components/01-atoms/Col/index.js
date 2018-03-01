import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const Col = ({ children, justifyContent, alignItems, width, height, border, backgroundColor, borderRadius }) => {
  const styles = { width, height, border, backgroundColor, borderRadius };
  let myClassName = 'My__Col';
  if(justifyContent) myClassName += ` My__JustifyContent__${justifyContent}`;
  if(alignItems) myClassName += ` My__AlignItems__${alignItems}`;
  return (
    <div style={styles} className={myClassName}>
      {children}
    </div>
  );
};

Col.propTypes = {
  children: PropTypes.node.isRequired,
  justifyContent: PropTypes.oneOf(['SpaceBetween']),
  alignItems: PropTypes.oneOf(['Center']),
  width: PropTypes.string,
  height: PropTypes.string,
  border: PropTypes.string,
  backgroundColor: PropTypes.string,
  borderRadius: PropTypes.string,
};

export default Col;