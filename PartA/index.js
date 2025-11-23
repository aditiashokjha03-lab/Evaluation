// Q.1
let arr1 = [10, 20, 30];
let arr2 = [40, 50];

let combined = [...arr1,...arr2];
console.log(combined);


// Q.2
let person = { name: "Venu", age: 25 };
let extra = { city: "Bengaluru" };

let profile = {...person, ...extra};
console.log(profile);


// Q.3
function sumAll(...args) {
  return args.reduce((sum, current) => sum+current, 0);
}

console.log(sumAll(1,2,3,4));

// Q.4
let numbers = [10, 20, 30, 40, 50];

let [a, ...remaining] = numbers;

console.log(a);
console.log(remaining);


// Q.5
let user = {
  name: "Alice",
  address: {
    city: "Bengaluru",
    pin: 560001,
    geo: { lat: 11.22, lng: 77.33 }
  }
};

const {address:{city, geo: {lat, lng}}} =user;

console.log(city);
console.log(lat);
console.log(lng);


// Q.6
function multiply(a, b) {
  return a * b;
}

const multiply = (a,b) => a*b;

console.log(multiply(5,4));

// Q.7
let emp = {
  name: "Prakash",
  details: {
    department: "IT",
    profile: { role: "Developer" }
  }
};

let role= emp.details?.profile?.role;

