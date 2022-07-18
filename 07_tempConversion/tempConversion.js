const ftoc = function(value) {
  temp = ((value - 32) * 5 / 9).toFixed(1);
  return parseFloat(temp)
};

const ctof = function(value) {
  temp = ((value * 9 / 5) + 32).toFixed(1);
  return parseFloat(temp)
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
