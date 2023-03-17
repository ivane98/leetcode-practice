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
