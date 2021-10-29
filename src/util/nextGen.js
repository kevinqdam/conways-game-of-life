import createGrid from '../factory/createGrid';
import allTrue from './allTrue';
import anyTrue from './anyTrue';
import cellKey from './cellKey';
import countLive from './countLive';

const nextGen = function nextGeneration(sideLength, keysOfActiveCells) {
  const grid = createGrid(sideLength, keysOfActiveCells);
  const keysOfNextGen = new Set();
  grid.map(
    (rowArr) => rowArr.map(
      ({ isActive, row, col }) => (
        {
          isActive, row, col, count: countLive(grid, row, col),
        }
      ),
    ),
  ).forEach((rowArr) => {
    rowArr.forEach(({
      isActive, count, row, col,
    }) => {
      if (
        anyTrue(
          allTrue(isActive, anyTrue(count === 2, count === 3)),
          allTrue(!isActive, count === 3),
        )
      ) {
        keysOfNextGen.add(cellKey(row, col));
      }
    });
  });

  return keysOfNextGen;
};

export default nextGen;
