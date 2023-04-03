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
