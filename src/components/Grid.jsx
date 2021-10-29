import React, { useState, useRef, useCallback } from 'react';
import { InputNumber, Button } from 'antd';
import { ClearOutlined, PauseOutlined, PlaySquareOutlined } from '@ant-design/icons';

import Cell from './Cell';
import createGrid from '../factory/createGrid';
import { GRID_SIDE_SIZE_IN_PX, MAX_SIDE_LENGTH, MIN_SIDE_LENGTH } from '../constants';

import styles from './styles/Grid.module.scss';
import cellKey from '../util/cellKey';
import nextGen from '../util/nextGen';

const Grid = function Grid() {
  /* Hooks */
  const keysOfActiveCells = useRef(new Set());
  const [sideLength, setSideLength] = useState(MIN_SIDE_LENGTH);
  const [grid, setGrid] = useState(createGrid(sideLength, keysOfActiveCells.current));
  const [isRunning, setIsRunning] = useState(false);
  const isRunningRef = useRef(isRunning);

  /* Game of Life Runner */
  const run = useCallback(() => {
    if (!isRunningRef.current) return;

    keysOfActiveCells.current = nextGen(sideLength, keysOfActiveCells.current);
    setGrid(createGrid(sideLength, keysOfActiveCells.current));
    setTimeout(run, 1000);
  }, [sideLength]);

  /* Event Handlers */
  const handleSideLengthInput = (n) => {
    setSideLength(n);
    setGrid(createGrid(n, keysOfActiveCells.current));
  };
  const handleGridClick = (e) => {
    const key = e.target.attributes['cell-key'].value;
    if (keysOfActiveCells.current.has(key)) keysOfActiveCells.current.delete(key);
    else keysOfActiveCells.current.add(key);

    setGrid(createGrid(sideLength, keysOfActiveCells.current));
  };
  const handleClear = () => {
    keysOfActiveCells.current.clear();
    setIsRunning(false);
    isRunningRef.current = false;
    setGrid(createGrid(sideLength, keysOfActiveCells.current));
  };
  const handlePlayPause = () => {
    setIsRunning(!isRunning);
    if (!isRunning) {
      isRunningRef.current = true;
      run();
    } else {
      isRunningRef.current = false;
    }
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

  const inputSideLengthClassNames = [styles['input-side-length']].join(' ');
  const btnsClassNames = [styles.btns].join(' ');

  return (
    /* eslint-disable jsx-a11y/click-events-have-key-events */
    /* eslint-disable jsx-a11y/no-static-element-interactions */
    <div>
      <div onClick={handleGridClick} style={gridDynamicStyles} className={gridClassNames}>
        {
          grid.map(
            (rowArr, row) => rowArr.map(
              (cell, col) => <Cell key={cellKey(row, col)} cell={cell} />,
            ),
          )
        }
      </div>
      <div className={inputSideLengthClassNames}>
        <InputNumber
          size="large"
          min={MIN_SIDE_LENGTH}
          max={MAX_SIDE_LENGTH}
          defaultValue={MIN_SIDE_LENGTH}
          onChange={handleSideLengthInput}
          disabled={isRunningRef.current}
        />
      </div>
      <div className={btnsClassNames}>
        <Button size="large" icon={<ClearOutlined />} onClick={handleClear} />
        {(
        isRunningRef.current
          ? <Button size="large" type="primary" icon={<PauseOutlined />} onClick={handlePlayPause} />
          : <Button size="large" type="primary" icon={<PlaySquareOutlined />} onClick={handlePlayPause} />
        )}
      </div>
    </div>
    /* eslint-enable jsx-a11y/click-events-have-key-events */
    /* eslint-enable jsx-a11y/no-static-element-interactions */
  );
};

export default Grid;
