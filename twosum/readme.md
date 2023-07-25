### Two Sum Problem

Given an array of integers `nums` and an integer `target`, return the indices of the two numbers such that they add up to the `target`.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

**Example 1:**

Input: `nums = [2, 7, 11, 15]`, `target = 9`
Output: `[0, 1]`
Explanation: Because `nums[0] + nums[1]` equals `9`, we return `[0, 1]`.

**Example 2:**

Input: `nums = [3, 2, 4]`, `target = 6`
Output: `[1, 2]`

**Example 3:**

Input: `nums = [3, 3]`, `target = 6`
Output: `[0, 1]`

**Constraints:**

- 2 <= `nums.length` <= 10^4
- -10^9 <= `nums[i]` <= 10^9
- -10^9 <= `target` <= 10^9
- Only one valid answer exists.

**Follow-up:**

Can you come up with an algorithm that is less than O(n^2) time complexity?

```javascript
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

const threeSum = function (nums) {
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
