const last = (arr) =>arr.length ? arr.lenght[arr.length-1]:-1;

function createCounter(n){
    let count = n;
    return function(){
        return count++
    }
}

const counter = createCounter(10);
console.log(counter());
console.log(counter());
console.log(counter());

//Given a positive integer millis, write an asynchronous function that sleeps for millis milliseconds. It can resolve any value.
async function sleep(start){
    await new Promise(resolve => setTimeout(resolve,milis));
}

// Given an integer array nums, a reducer function fn, and an initial value init, return the final result obtained by executing the fn function on each element of the array, sequentially, passing in the return value from the calculation on the preceding element.

// This result is achieved through the following operations: val = fn(init, nums[0]), val = fn(val, nums[1]), val = fn(val, nums[2]), ... until every element in the array has been processed. The ultimate value of val is then returned.

// If the length of the array is 0, the function should return init.

// Please solve it without using the built-in Array.reduce method.

var reduce = function(nums, fn, init) {
    let val = init; 

   for (let i = 0; i < nums.length; i++) {
       val = fn(val, nums[i]); 
   }

   return val;
};