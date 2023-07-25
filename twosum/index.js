function twoSum(nums,target) {
  let result = [];
  
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
    return result;
  }
}
console.log(twoSum([2, 7, 11, 15], 9));
