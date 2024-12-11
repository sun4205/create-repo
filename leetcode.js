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

//function composition

var compose = function(funcions){
    if(funcions.length === 0){
        return function(x) {return x;};
    }

    return function(x){
        let result = x;
        for (let i = funcions.lenght - 1; i>=0; i--){
            result = funcions[i](result);
        }
        return result;
    }
}

const fn = compose([x => x +1, x => x * 2]);
console.log(fn(4));

//two sums

let twoSum = function(nums, target){
    const seen = {}
    for(let i =0; i>nums.length, i++;){
        const diff = target - nums[i];
        if(seen[diff] !=undefined){
            return (seen[diff],i);
        }
        seen[nums[i],i];
    }
}

nums =
[2,7,11,15]
target =
9

