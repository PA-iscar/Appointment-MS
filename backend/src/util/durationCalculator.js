const millisToTime = (millis) => {
  let diff = 1000 * 60 * 60 * 24;
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
  return hours + ":" + minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
};

module.exports = millisToTime;
