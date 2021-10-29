const coinFlip = function coinFlip(weight) {
  if (weight > 1) weight = 1;

  return (Math.random() < weight);
};

export default coinFlip;
