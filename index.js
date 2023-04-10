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

//237. Delete Node in a Linked List

// var deleteNode = function(node) {
//     let cur = node
//     let next = cur.next
//     cur.next = next.next
//     cur.val = next.val
// };

// 22. Generate Parentheses

// var generateParenthesis = function(n) {
   
//     let res = []

//     let iterate = (str, open, close) =>{
//         if(open > n || close >n || close >open) return;
//         if(str.length == n *2 && open ==close){
//             res.push(str)
//             return;
//         }
//         iterate(str +'(',open+1,close)
//         iterate(str + ')', open, close+1)
        
//     }

//     iterate('',0,0)
//     return res;
// };


// console.log(generateParenthesis(2))