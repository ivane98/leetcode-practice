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

var titleToNumber = function (s) {
  let total = 0; //1
  for (let i = 0; i < s.length; i++) {
    total = total * 26 + s.charCodeAt(i) - "A".charCodeAt(0) + 1;
  }
  return total;
};

console.log(titleToNumber("ZY"));
