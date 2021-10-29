const { default: cellKey } = require('../src/util/cellKey');
const { default: nextGen } = require('../src/util/nextGen');

test('Any live cell with fewer than two live neighbors dies, as if by underpopulation', () => {
  const sideLength = 10;
  const keysOfActiveCells = new Set();
  keysOfActiveCells.add(cellKey(0, 0));
  keysOfActiveCells.add(cellKey(0, 1));
  const keysOfNextGen = nextGen(sideLength, keysOfActiveCells);
  expect(keysOfNextGen.has(cellKey(0, 0))).toBe(false);
  expect(keysOfNextGen.has(cellKey(0, 1))).toBe(false);
});

test('Any live cell with two or three live neighbors lives on to the next generation', () => {
  const sideLength = 10;
  const keysOfActiveCells = new Set();
  keysOfActiveCells.add(cellKey(0, 0));
  keysOfActiveCells.add(cellKey(0, 1));
  keysOfActiveCells.add(cellKey(1, 0));
  const keysOfNextGen = nextGen(sideLength, keysOfActiveCells);
  expect(keysOfNextGen.has(cellKey(0, 0))).toBe(true);
  expect(keysOfNextGen.has(cellKey(0, 1))).toBe(true);
  expect(keysOfNextGen.has(cellKey(1, 0))).toBe(true);
});

test('Any live cell with more than three live neighbors dies', () => {
  const sideLength = 10;
  const keysOfActiveCells = new Set();
  keysOfActiveCells.add(cellKey(0, 0));
  keysOfActiveCells.add(cellKey(0, 1));
  keysOfActiveCells.add(cellKey(1, 0));
  keysOfActiveCells.add(cellKey(1, 1));
  keysOfActiveCells.add(cellKey(1, 2));
  const keysOfNextGen = nextGen(sideLength, keysOfActiveCells);
  expect(keysOfNextGen.has(cellKey(0, 0))).toBe(true);
  expect(keysOfNextGen.has(cellKey(0, 1))).toBe(false);
  expect(keysOfNextGen.has(cellKey(1, 0))).toBe(true);
  expect(keysOfNextGen.has(cellKey(1, 1))).toBe(false);
  expect(keysOfNextGen.has(cellKey(1, 2))).toBe(true);
});

test('Any dead cell with exactly three live neighbors becomes a live cell', () => {
  const sideLength = 10;
  const keysOfActiveCells = new Set();
  keysOfActiveCells.add(cellKey(0, 1));
  keysOfActiveCells.add(cellKey(1, 0));
  keysOfActiveCells.add(cellKey(1, 1));
  const keysOfNextGen = nextGen(sideLength, keysOfActiveCells);
  expect(keysOfNextGen.has(cellKey(0, 0))).toBe(true);
  expect(keysOfNextGen.has(cellKey(0, 1))).toBe(true);
  expect(keysOfNextGen.has(cellKey(1, 0))).toBe(true);
  expect(keysOfNextGen.has(cellKey(1, 1))).toBe(true);
});
