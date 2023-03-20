//66. Plus One

// var plusOne = function(digits) {
//     const fromArray = digits.join("");
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
