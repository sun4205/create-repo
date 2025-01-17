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

//remove duplicates two sorted array.
var removeDuplicates = function(nums) {
    if (nums.length === 0) return 0; 
    
    let k = 1; 
    
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) { 
            nums[k] = nums[i];       
            k++;                     
        }
    }
    
    return k; 
};

//remove element
var removeElement = function(nums, val) {
    let k =0;
    for(let i=0; i<nums.length; i++){
        if(nums[i] !== val){
            nums[k] = nums[i];
            k++;
        }
    }
    return k;
};

//plus one
var plusOne = function(digits) {
    let n = digits.length;

    for(let i=n-1; i>=0; i--){
        if(digits[i]<9){
            digits[i] += 1;
            return digits;
        }
        digits[i] =0;
    }
        digits.unshift(1);
        return digits;
    }

    //pascal's Triangle
    function getRow(rowIndex) {
        let row = [1]; 
        for (let i = 0; i < rowIndex; i++) {
          row = [0, ...row, 0].map((_, j, arr) => arr[j] + arr[j + 1]).slice(0, -1);
        }
        return row;
      }

    