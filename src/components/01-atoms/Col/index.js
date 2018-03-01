import React from 'react';

import './style.css';

const Col = ({ children, justifyContent, alignItems }) => {
  let myClassName = 'My__Col';
  if(justifyContent) myClassName += ` My__JustifyContent__${justifyContent}`;
  if(alignItems) myClassName += ` My__AlignItems__${alignItems}`;
  return (
    <div className={myClassName}>
      {children}
    </div>
  );
};

export default Col;