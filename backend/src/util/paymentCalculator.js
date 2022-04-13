const calcAmount = (duration) => {
  if (duration < 2) return 20;
  if (duration < 4) return 40;
  if (duration < 6) return 60;
  if (duration < 8) return 80;
  if (duration < 10) return 100;
  if (duration < 12) return 120;
  if (duration < 24) return 240;

  return 1000;
};

module.exports = calcAmount;
