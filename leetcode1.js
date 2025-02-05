Input: (nums = [2, 7, 11, 15]), (target = 9);
Output: [0, 1];

const twoSum = function (nums, target) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (map.has(complement)) return [map.get(complement), i];
    map.set(nums[i], i);
  }
};

const removeDuplicates = function (nums){
    let k=1;
    for(let i=0; i<nums.length-1; i++){
        if(nums[i] !== nums[i+1]){
            nums[k] = nums[i+1];
            k++;
        }
    }
    return k;
}

