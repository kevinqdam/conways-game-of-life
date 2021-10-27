import React, { useState } from 'react';

import styles from './styles/Cell.module.scss';

const Cell = function Cell() {
  const [isActive, setIsActive] = useState(false);

  /* Event Handlers */
  const handleClick = () => { setIsActive(!isActive); };

  /* Styles */
  const cellDynamicstyles = {
    backgroundColor: isActive ? 'black' : null,
  };
  const cellClassNames = [
    styles.cell,
  ].join(' ');

  return (
    /* eslint-disable jsx-a11y/no-static-element-interactions */
    /* eslint-disable jsx-a11y/click-events-have-key-events */
    <div style={cellDynamicstyles} className={cellClassNames} onClick={handleClick} />
    /* eslint-enable jsx-a11y/no-static-element-interactions */
    /* eslint-enable jsx-a11y/click-events-have-key-events */
  );
};

export default Cell;
