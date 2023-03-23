//66. Plus One

// var plusOne = function(digits) {
//   const fromArray = digits.join("");
//   const toInt = BigInt(fromArray);
//   const addOne = toInt + 1n;
//   const result = Array.from(String(addOne), Number);
//   return result;
// };

//88. Merge Sorted Array

// var merge = function (nums1, m, nums2, n) {
//   nums1.length = m;
//   nums2.length = n;
//   nums1.push(...nums2);
//   nums1.sort((a, b) => a - b);
//   return nums1;
// };

//108. Convert Sorted Array to Binary Search Tree

// var sortedArrayToBST = function (nums, left = 0, right = nums.length - 1) {
//   if (left > right) return null;
//   let mid = Math.floor((left + right) / 2);
//   let root = new TreeNode(nums[mid]);

//   root.left = sortedArrayToBST(nums, left, mid - 1);
//   root.right = sortedArrayToBST(nums, mid + 1, right);

//   return root;
// };

//118. Pascal's Triangle

// var generate = function (numRows) {
//   if (numRows < 1) return [];
//   if (numRows === 1) return [[1]];

//   const triangle = [[1]];

//   for (let i = 1; i < numRows; i++) {
//     let prevRow = triangle[i - 1];
//     let currRow = [];

//     currRow.push(1);

//     for (let j = 1; j < prevRow.length; j++) {
//       currRow[j] = prevRow[j] + prevRow[j - 1];
//     }

//     currRow.push(1);

//     triangle.push(currRow);
//   }
//   return triangle;
// };

// 121. Best Time to Buy and Sell Stock

// var maxProfit = function (prices) {
//   let sellIdx = prices.length - 1;
//   let profit = 0;

//   for (let buyIdx = prices.length - 1; buyIdx >= 0; buyIdx--) {
//     let sellVal = prices[sellIdx];
//     let buyVal = prices[buyIdx];

//     if (buyVal - sellVal >= 0) {
//       sellIdx = buyIdx;
//     } else {
//       let price = sellVal - buyVal;

//       profit = Math.max(profit, price);
//     }
//   }

//   return profit;
// };

// console.log(maxProfit([7, 1, 5, 3, 6, 4]));

// 136. Single Number

// var singleNumber = function (nums) {

// let obj = {};

// for (var i = 0; i < nums.length; i++) {
// if (!obj[nums[i]]) {
//   obj[nums[i]] = 1;
// } else {
//   obj[nums[i]]++;
// }

// if (obj[nums[i]] === 1) return Number(nums[i]);
// }
// };

// console.log(singleNumber([4, 1, 2, 1, 2]));

//169. Majority Element

// var majorityElement = function(nums) {
//     let obj = {};
//     let len = nums.length /2

// for (var i = 0; i < nums.length; i++) {
//     if (!obj[nums[i]]) {
//       obj[nums[i]] = 1;
//     } else {
//       obj[nums[i]]++;
//     }

//     if (obj[nums[i]] > len) return Number(nums[i]);
//   }

// };

//217. Contains Duplicate

// var containsDuplicate = function (nums) {
//   var obj = {};

//   for (var i = 0; i < nums.length; i++) {
//     if (!obj[nums[i]]) {
//       obj[nums[i]] = 1;
//     } else {
//       obj[nums[i]]++;
//     }

//     if (obj[nums[i]] > 1) return true;
//   }
//   //const s = new Set(nums); return s.size !== nums.length
//   return false;
// };

// console.log(containsDuplicate([2, 14, 18, 22, 22]));

//268. Missing Number

// var missingNumber = function (nums) {
//   let len = nums.length;
//   let allSum = (len * (len + 1)) / 2;
//   let sum = nums.reduce((a, b) => a + b, 0);

//   return allSum - sum;
// };

// console.log(missingNumber([3, 0, 1]));

//283. Move Zeroes

// var moveZeroes = function (nums) {
//   let lastNonZeroIdx = 0;

//   for (let i = 0; i < nums.length; i++) {

//     if (nums[i] !== 0) {
//       nums[lastNonZeroIdx] = nums[i];
//       lastNonZeroIdx++;
//     }
//   }

//   for (let i = lastNonZeroIdx; i < nums.length; i++) {
//     nums[i] = 0;
//   }

// };

// console.log(moveZeroes([0, 1, 0, 3, 12]));

// 350. Intersection of Two Arrays II

// var intersect = function (nums1, nums2) {
//   let obj = {};
//   let result = [];

//   for (let i of nums1) {
//     if (!obj[i]) {
//       obj[i] = 1;
//     } else {
//       obj[i]++;
//     }
//   }

//   for (let i of nums2) {
//     if (obj[i] > 0) {
//       result.push(i);
//       obj[i]--;
//     }
//   }

//   return result;

// };

// console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]));

//[2,2]
