import { RANDOM_DENSITY } from '../constants';
import cellKey from './cellKey';
import coinFlip from './coinFlip';

const randomActiveCells = function randomActiveCells(sideLength) {
  const keysOfActiveCells = new Set();
  for (let row = 0; row < sideLength; row += 1) {
    for (let col = 0; col < sideLength; col += 1) {
      if (coinFlip(RANDOM_DENSITY)) keysOfActiveCells.add(cellKey(row, col));
    }
  }

  return keysOfActiveCells;
};

export default randomActiveCells;
