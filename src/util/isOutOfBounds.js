import anyTrue from './anyTrue';

const isOutOfBounds = function isOutOfBounds(arr, row, col) {
  return anyTrue(row < 0, col < 0, row >= arr.length, col >= arr[0].length);
};

export default isOutOfBounds;
