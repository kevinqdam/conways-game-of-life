const anyTrue = function anyTrue(...bools) {
  return bools.reduce((acc, x) => (acc || x), false);
};

export default anyTrue;
