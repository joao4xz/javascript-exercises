const removeFromArray = function(array, ...args) {
  let newArray = [];

  array.forEach((num) => {
    if(!args.includes(num)){
      newArray.push(num);
    }
  });

  console.log(`Array: ${newArray}`);
  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
