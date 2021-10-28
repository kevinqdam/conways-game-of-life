import cellKey from '../util/cellKey';
import createCell from './createCell';

const createGrid = function createGrid(sideLength, keysOfActiveCells) {
  const nullArr = Array.from(
    { length: sideLength }, () => Array.from({ length: sideLength }, () => null),
  );

  return nullArr.map(
    (rowArr, row) => rowArr.map(
      (_, col) => createCell(keysOfActiveCells.has(cellKey(row, col)), row, col),
    ),
  );
};

export default createGrid;
