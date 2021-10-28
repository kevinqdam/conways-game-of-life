const not = function not(fn) {
  return (x) => (!fn(x));
};

export default not;
