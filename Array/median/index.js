const { Man2 } = require("@mui/icons-material");

function findMedianOfSortedArrays(num1, num2) {
  let mergedArr = [];
  let i = 0; //index for num1
  let j = 0; //index for num2

  // merge the two sorted array
  while (i < num1.length && j < num2.length) {
    if (num1[i] < num2[j]) {
      mergedArr.push(num1[i]);
      i++;
    } else {
      mergedArr.push(num2[j]);
      j++;
    }
  }

  //   Add any remaining elements from num1 and num2

  while (i < num1.length) {
    mergedArr.push(num1[i]);
    i++;
  }

  while (j < num2.length) {
    mergedArr.push(num2[j]);
    j++;
  }

  //  calculate the median of merged array

  const n = mergedArr.length;

  if (n % 2 === 1) {
    //odd number of elements
    return mergedArr[Math.floor(n / 2)];
  } else { //even number of elements
    const middle1 = mergedArr[n / 2-1];
    const middle2 = mergedArr[n / 2];
    return (middle1 + middle2) / 2;
  }
}
// [1, 2, 3,4, 5, 6]
const num1 = [1, 3, 6];
const num2 = [2,4, 5 ];
const medianValue = findMedianOfSortedArrays(num1, num2);
console.log(medianValue);
