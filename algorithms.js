const find_missing = function(input) {
    let n = input.length + 1;
  let sum = 0;
    for (let i in input) {
      sum += input[i];
      console.log(input[i]);
    }
  return Math.floor((n * (n + 1)) / 2) - sum;
  };
 console.log(find_missing([1,2,3,4,6,7,8,9,10]));