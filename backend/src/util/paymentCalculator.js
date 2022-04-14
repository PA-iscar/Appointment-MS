//? Calculate amount based on Vehicle type

const calcAmount = (duration, vtype) => {
  const offSet =
    vtype === "twoWheeler" ? 1 : vtype == "suv" ? 2 : 3;
  if (duration < 2) return 20 * offSet;
  if (duration < 4) return 40 * offSet;
  if (duration < 6) return 60 * offSet;
  if (duration < 8) return 80 * offSet;
  if (duration < 10) return 100 * offSet;
  if (duration < 12) return 120 * offSet;
  if (duration < 24) return 240 * offSet;

  return 1000 * offSet;
};

module.exports = calcAmount;
