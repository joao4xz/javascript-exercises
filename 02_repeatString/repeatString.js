const repeatString = function(string, num) {
  let wholeString = '';
  if(num < 0) return 'ERROR';
  
  for(let i = 0; i < num; i++){
    wholeString += string;
  }
  
  return wholeString
};

// Do not edit below this line
module.exports = repeatString;
