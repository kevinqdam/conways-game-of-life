import { DIRECTIONS } from '../constants';
import isOutOfBounds from './isOutOfBounds';

const countLive = function countLive(arr, row, col) {
  return DIRECTIONS.reduce((count, [dr, dc]) => {
    if (isOutOfBounds(arr, row + dr, col + dc)) return count;

    return (arr[row + dr][col + dc].isActive ? count + 1 : count);
  }, 0);
};

export default countLive;
