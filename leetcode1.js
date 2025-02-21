Input: (nums = [2, 7, 11, 15]), (target = 9);
Output: [0, 1];

var twoSum = function (nums, target) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (map.has(complement)) return [map.get(complement), i];
    map.set(nums[i], i);
  }
};

var twoSum = function (nums, target) {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (map.has(target - nums[i])) {
      return [map.get(target - nums[i]), i];
    } else {
      map.set(nums[i], i);
    }
  }
  return [];
};

var removeDuplicates = function (nums) {
  let k = 1;
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] !== nums[i + 1]) {
      nums[k] = nums[i + 1];
      k++;
    }
  }
  return k;
};

const removeDuplicates = function (nums) {
  const uniqueNums = [...new Set(nums)];
  nums.length = 0;
  nums.push(...uniqueNums);
  return uniqueNums.length;
};

var removeElement = function (nums, val) {
  let k = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k] = nums[i];
      k++;
    }
  }

  return k;
};

const searchInsert = function (nums, target) {
  let left = 0,
    right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) return mid;
    else if (nums[mid] < target) left = mid + 1;
    else right = mid - 1;
  }

  return left;
};

const plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i]++;
      return digits;
    }
    digits[i] = 0;
  }
  digits.unshift(1);
  return digits;
};

var merge = function (nums1, m, nums2, n) {
  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1;

  while (j >= 0) {
    if (i >= 0 && nums1[i] > nums2[j]) {
      nums1[k] = nums1[i];
      i--;
    } else {
      nums1[k] = nums2[j];
      j--;
    }
    k--;
  }
};

function sortedArrayToBST(nums) {
  function buildTree(left, right) {
    if (left > right) return null;

    const mid = Math.floor((left + right) / 2);

    const node = { val: nums[mid], left: null, right: null };

    node.left = buildTree(left, mid - 1);
    node.right = buildTree(mid + 1, right);

    return node;
  }

  return buildTree(0, nums.length - 1);
}

function generate(numRows) {
  let triangle = [[1]];

  for (let i = 1; i < numRows; i++) {
    let prevRow = triangle[i - 1];
    let newRow = [1];

    for (let j = 1; j < prevRow.length; j++) {
      newRow.push(prevRow[j - 1] + prevRow[j]);
    }

    newRow.push(1);
    triangle.push(newRow);
  }

  return triangle;
}

console.log(generate(5));

function singleNumber(nums) {
  let result = 0;
  for (let num of nums) {
    result ^= num;
  }
  return result;
}

function singleNumber(nums) {
  const count = {};

  for (let num of nums) {
    count[num] = (count[num] || 0) + 1;
  }

  for (let num in count) {
    if (count[num] === 1) {
      return Number(num);
    }
  }
}
