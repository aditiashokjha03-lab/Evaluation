// Q.10
function counter() {
  let count= 0;
  return function() {
    count = count + 1;
    return count;
  };
}

const c = counter();

console.log(c());
console.log(c());
console.log(c());


// Q.11
function createWallet() {
  let balance =0;
  return {
    addMoney: function(amount)
    {
      balance += amount;
      console.log(`Added ${amount}. New balance: ${balance}`);
    },
    checkBalance: function() {
      return balance;
    }
  };
}
