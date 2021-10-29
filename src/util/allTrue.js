const allTrue = function allTrue(...bools) {
  return bools.reduce((acc, x) => (acc && x), true);
};

export default allTrue;
