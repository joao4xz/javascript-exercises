const convertToCelsius = function(fahrNumber) {
  return Math.round(((fahrNumber - 32) * 5/9) * 10) /10;
};

const convertToFahrenheit = function(celsNumber) {
  return Math.round(((celsNumber * 9/5) + 32) * 10) /10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

// Math.round(number * 10) / 10