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
