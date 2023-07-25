
function threeSumWithDuplicates() {
  let result = [];
  let target = 0;
  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (nums[i] + nums[j] + nums[k] === target) {
          result.push([nums[i], nums[j], nums[k]]);
        }
      }
    }
  }
  return result;
}
console.log(threeSumWithDuplicates([-1, 0, 1, 2, -1, -4]));

/**
 * [-1,0,1,2,-1,4]
 * [-4,-1,-1,0,1,1,2]
 *      -> -4 * -1 = 4   =>  twoSum(i+1, 4, nums)  []
 *      -> -1 * -1 = 1   =>  twoSum(i+1, 1, nums) [-1, 0, 1] [-1, -1, 2]
 *      ->  0 * -1 = 0   => twoSum(i+1, 0, nums) []
 *      ->  1 * -1 = -1   => twoSum(i+1, -1, nums) []
 * @param {*} nums
 */

const twoSum = (j, target, nums) => {
  let k = nums.length - 1;
  let result = [];
  while (j < k) {
    const leftVal = nums[j];
    const rightVal = nums[k];
    if (leftVal + rightVal > target) {
      k--;
    } else if (leftVal + rightVal < target) {
      j++;
    } else {
      result.push([target * -1, nums[j], nums[k]]);
      while (j < k && nums[j] === nums[j + 1]) j++;
      while (j < k && nums[k] === nums[k - 1]) k--;
      j++;
      k--;
    }
  }
  return result;l
};

var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) continue;
    let target = nums[i] * -1;
    let subResult = twoSum(i + 1, target, nums);
    result.push(...subResult);
  }
  return result
};

console.log(threeSum([-1,0,1,2,-1,-4]))
