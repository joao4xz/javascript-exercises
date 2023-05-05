const sumAll = function(num1, num2) {
  let sum = 0;

  if(num1 < 0 || num2 < 0) return 'ERROR';
  if(typeof(num1) != "number" || typeof(num2) != "number") return 'ERROR';

  if(num1 > num2){
    let aux = num1;
    num1 = num2;
    num2 = aux;
  }

  for(let i = num1; i <= num2; i++){
    sum += i;
  }
  return sum;
};

sumAll(20, 10);

// Do not edit below this line
module.exports = sumAll;
