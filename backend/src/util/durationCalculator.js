const millisToTime = (millis) => {
  let diff = 1000 * 60 * 60 * 24;
  let res = "";

  let days = Math.floor(millis / diff);
  millis %= diff;
  diff /= 24;

  let hours = Math.floor(millis / diff);
  millis %= diff;
  diff /= 60;

  var minutes = Math.floor(millis / diff);
  millis %= diff;
  diff /= 60;

  var seconds = (millis / diff).toFixed(0);

  if (days > 0) {
    res += `${days} ${days === "1" ? "day" : "days"} `;
  }
  res += `${hours} ${hours === "1" ? "hour" : "hours"} `;
  res += `${minutes} ${minutes === "1" ? "minute" : "minutes"} `;
  res += `${seconds} ${seconds === "1" ? "second" : "seconds"} `;

  return res;
};

console.log(millisToTime(00000100));
// module.exports = millisToTime;
