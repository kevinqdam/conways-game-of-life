import React, { useState } from 'react';
import { InputNumber } from 'antd';

import Cell from './Cell';
import { GRID_SIDE_SIZE_IN_PX, MAX_SIDE_LENGTH, MIN_SIDE_LENGTH } from '../constants';

import styles from './styles/Grid.module.scss';

const Grid = function Grid() {
  /* Grid Factory */
  const createGrid = (n) => Array.from(
    // eslint-disable-next-line no-shadow
    { length: n }, (_, row) => Array.from({ length: n }, (_, col) => <Cell key={`${row},${col}`} />),
  );

  /* Hooks */
  const [sideLength, setSideLength] = useState(MIN_SIDE_LENGTH);
  const [grid, setGrid] = useState(createGrid(sideLength));

  /* Event Handlers */
  const handleSideLengthInput = (n) => {
    setSideLength(n);
    setGrid(createGrid(n));
  };

  /* Styles */
  const gridClassNames = [
    styles.center,
    styles.grid,
  ].join(' ');

  const gridDynamicStyles = {
    width: `${GRID_SIDE_SIZE_IN_PX}px`,
    height: `${GRID_SIDE_SIZE_IN_PX}px`,
    gridTemplateColumns: `repeat(${Math.floor(sideLength)}, 1fr)`,
  };

  const inputSideLengthClassNames = [
    styles.center,
    styles['input-side-length'],
  ].join(' ');

  return (
    <div>
      <div style={gridDynamicStyles} className={gridClassNames}>{grid}</div>
      <div className={inputSideLengthClassNames}>
        <InputNumber
          size="large"
          min={MIN_SIDE_LENGTH}
          max={MAX_SIDE_LENGTH}
          defaultValue={MIN_SIDE_LENGTH}
          onChange={handleSideLengthInput}
        />
      </div>
    </div>
  );
};

export default Grid;
