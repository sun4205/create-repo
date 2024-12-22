let twoSum = function (nums, target) {
  const seen = {};
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (seen[diff] != undefined) {
      return [seen[diff], i];
    }
    seen[nums[i]] = i;
  }
  return [];
};

nums = [2, 7, 11, 15];
target = 9;

console.log(twoSum(nums, target));
