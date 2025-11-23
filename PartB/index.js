// Q.8
let nums = [10, 3, 7, 20, 13, 2];

// using map
let squares= nums.map(function(num) {
  return num*num;
});

console.log(squares);

// using filter
function isPrime(num) {
  if (num <= 1) return false;
  for (let i=2; i<= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
}
return true;
}

let primeNumbers = nums.filter(isPrime);

console.log(primeNumbers);

// // using reduce
let sum = nums.reduce(fraction(accumulator, currentNum) {
    return accumulator + currentNum,
}, 0);

console.log(sum);

// using Sort
let sortedDescending = [...nums].sort (functions(a,b) {
  return b-a;
});

console.log(sortedDescending);


// Q.9