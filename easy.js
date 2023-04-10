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

//344. Reverse String

// var reverseString = function (s) {
//   return s.reverse();
// };

// console.log(reverseString(["h", "e", "l", "l", "o"]));

//28. Find the Index of the First Occurrence in a String

// var strStr = function (haystack, needle) {
//   if (haystack === needle || needle === "") {
//     return 0;
//   }

//   for (let i = 0; i < haystack.length; i++) {
//     if (haystack[i] === needle[0]) {
//       let newstr = haystack.substring(i, i + needle.length);
//       if (newstr === needle) {
//         return i;
//       }
//     }
//   }
//   return -1;
// };

// console.log(strStr("leetcode", "leeto"));

//125. Valid Palindrome

// var isPalindrome = function (s) {
//   let arr = s.split("");
//   let result = [];
//   let alphabet = "0123456789abcdefghijklmnopqrstuvwxyz";

//   for (let i of arr) {
//     if (alphabet.includes(i.toLowerCase())) {
//       result.push(i.toLowerCase());
//     }
//   }
//   return result.join("") === result.reverse().join("");
// };

// console.log(isPalindrome("race a car"));

//171. Excel Sheet Column Number

// var titleToNumber = function (s) {
//   let total = 0; //1
//   for (let i = 0; i < s.length; i++) {
//     total = total * 26 + s.charCodeAt(i) - "A".charCodeAt(0) + 1;
//   }
//   return total;
// };

// console.log(titleToNumber("ZY"));

// 242. Valid Anagram

// var isAnagram = function (s, t) {
//   if (s.length !== t.length) return false;
//   let count = {};
//   let N = s.length;

//   for (let i = 0; i < N; i++) {
//     if (!count[s[i]]) count[s[i]] = 0;
//     if (!count[t[i]]) count[t[i]] = 0;
//     count[s[i]]++;
//     count[t[i]]--;
//   }

//   for (let ch in count) {
//     if (count[ch] !== 0) return false;
//   }

//   return true;

//   // let sSorted = s.split("").sort().join("");
//   // let tSorted = t.split("").sort().join("");
//   // return sSorted === tSorted;
// };

// console.log(isAnagram("rat", "car"));

// 387. First Unique Character in a String

// var firstUniqChar = function (s) {
//   let obj = {};

//   for (let i = 0; i < s.length; i++) {
//     if (!obj[s[i]]) obj[s[i]] = 0;
//     obj[s[i]]++;
//   }

//   for (let i = 0; i < s.length; i++) {
//     if (obj[s[i]] === 1) return i;
//   }

//   return -1;
// };

// console.log(firstUniqChar("leetcode"));

//412. Fizz Buzz

// var fizzBuzz = function (n) {
//   let answer = [];
//   for (let i = 1; i <= n; i++) {
//     if (i % 3 == 0 && i % 5 == 0) {
//       answer.push("FizzBuzz");
//     } else if (i % 5 == 0) {
//       answer.push("Buzz");
//     } else if (i % 3 == 0) {
//       answer.push("Fizz");
//     } else {
//       answer.push(`${i}`);
//     }
//   }
//   return answer;
// };

// console.log(fizzBuzz(15));


//141. Linked List Cycle

// let hasCycle = function (head) {
//   let fast = head;
//   let slow = head;

//   while (fast && fast.next) {
//     fast = fast.next.next;
//     slow = slow.next;

//     if (fast === slow) {
//       return true;
//     }
//   }

//   return false;
// };

// console.log(hasCycle([1]));

//160. Intersection of Two Linked Lists

// var getIntersectionNode = function (headA, headB) {
//   if (!headA || !headB) return null;

//   let pointA = headA;
//   let pointB = headB;

//   while (pointA !== pointB) {
//     if (pointA === null) {
//       pointA = headB;
//     } else {
//       pointA = pointA.next;
//     }

//     if (pointB === null) {
//       pointB = headA;
//     } else {
//       pointB = pointB.next;
//     }
//   }

//   return pointA;
// };

//202. Happy Number

// let getNumSum = (num) => {
//   let total = 0;

//   while (num !== 0) {
//     let lastNum = num % 10;
//     num = Math.floor(num / 10);
//     total += Math.pow(lastNum, 2);
//   }

//   return total;
// };

// var isHappy = function (n) {
//   let fast = n;
//   let slow = n;

//   while (true) {
//     fast = getNumSum(getNumSum(fast));
//     slow = getNumSum(slow);

//     if (fast === slow) {
//       return fast === 1;
//     }
//   }
// };

// console.log(isHappy(19));

// 70. Climbing Stairs

// var climbStairs = function (n) {
//   let memo = {};

//   let count = (k) => {
//     if (memo[k]) return memo[k];
//     if (k <= 1) return 1;
//     if (k == 2) return 2;
//     memo[k] = count(k - 1) + count(k - 2);
//     return memo[k];
//   };

//   return count(n);
// };

// console.log(climbStairs(5));

//69. Sqrt(x)

// var mySqrt = function (x) {
//   let left = 1;
//   let right = Math.floor(x / 2) + 1;
//   let mid;

//   while (left <= right) {
//     mid = Math.floor((left + right) / 2);

//     if (mid * mid > x) {
//       right = mid - 1;
//     } else if (mid * mid < x) {
//       left = mid + 1;
//     } else {
//       return mid;
//     }
//   }

//   return right;
// };

// console.log(mySqrt(8));

//326. Power of Three

// var isPowerOfThree = function (n) {
//   if (n == 3) {
//     return true;
//   }
//   if (n < 3) {
//     return false;
//   }
//   if (n == 1) {
//     return true;
//   }

//   return isPowerOfThree(n / 3);
// };

// console.log(isPowerOfThree(1));

// 101. Symmetric Tree

// var isSymmetric = function (root) {
//   function recurse(l, r) {
//     if (!l && !r) return true;
//     if (!l || !r || l.val !== r.val) return false;

//     return recurse(l.left, r.right) && recurse(l.right, r.left);
//   }
//   return recurse(root.left, root.right);
// };

// 104. Maximum Depth of Binary Tree

// var maxDepth = function (root) {
//   if (!root) return 0;
//   const queue = [root];
//   let depth = 0;
//   while (queue.length !== 0) {
//     depth++;
//     const len = queue.length;
//     for (let i = 0; i < len; i++) {
//       if (queue[i].left) queue.push(queue[i].left);
//       if (queue[i].right) queue.push(queue[i].right);
//     }
//     queue.splice(0, len);
//   }
//   return depth;
// };

//94. Binary Tree Inorder Traversal

// var inorderTraversal = function(root, list = []) {
//     if(root.left){
//         inorderTraversal(root.left, list)
//     }
//     list.push(root.val)
//     if(root.right){
//         inorderTraversal(root.right, list)
//     }

//     return list
// };

//190. Reverse Bits

// var reverseBits = function (n) {
//   const bits = n.toString(2).padStart(32, "0").split("").reverse().join("");
//   return parseInt(bits, 2);
// };

// console.log(reverseBits(00000010100101000001111010011100));

// 191. Number of 1 Bits

// var hammingWeight = function (n) {
//   let count = 0;

//   while (n !== 0) {
//     let isOne = n & 1;

//     if (isOne === 1) count++;

//     n = n >>> 1;
//   }

//   return count;
// };

// console.log(hammingWeight(11111111111111111111111111111101));

//206. Reverse Linked List

// var reverseList = function (head) {
//   let curr = head;
//   let prev = null;
//   let next;

//   while (curr !== null) {
//     next = curr.next;
//     curr.next = prev;
//     prev = curr;
//     curr = next;
//   }

//   return prev;
// };

//234. Palindrome Linked List

// let reverse = (head) => {
//   let cur = head;
//   let prev = null;
//   let next;

//   while (cur !== null) {
//     next = cur.next;
//     cur.next = prev;
//     prev = cur;
//     cur = next;
//   }

//   return prev;
// };

// var isPalindrome = function (head) {
//   let fast = head;
//   let slow = head;
//   let startPointer = head;
//   let len = 0;

//   while (fast && fast.next) {
//     fast = fast.next.next;
//     slow = slow.next;
//     len++;
//   }

//   let mid = reverse(slow);

//   while (len) {
//     len--;
//     if (mid.val !== startPointer.val) return false;
//     mid = mid.next;
//     startPointer = startPointer.next;
//   }
//   return true;
// };
