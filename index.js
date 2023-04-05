//141. Linked List Cycle

// var hasCycle = function (head) {
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
