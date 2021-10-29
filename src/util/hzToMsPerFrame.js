const hzToMsPerFrame = function hzToMsPerFrame(hz) {
  return Math.ceil((1 / hz) * 1000);
};

export default hzToMsPerFrame;
