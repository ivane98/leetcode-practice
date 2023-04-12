//1. Two Sum

var twoSum = function (nums, target) {
//   let output = [];
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] == target) {
//         output.push(i, j);
//       }
//     }
//   }
//   return output;

const hash = {}

for(let i = 0; i < nums.length; i++){
    let val = nums[i]
    hash[val] = i
}

for(let i = 0; i < nums.length; i++){
    let pk = target - nums[i]

    if(hash[pk] && hash[pk] !== i){
        return [i, hash[pk]]
    }
}
};

//20. Valid Parentheses
const pairs = {"(":")", "[":"]", "{":"}"}
     
var isValid = function(s) {
    if(s.length %2 === 1) return false
    if(s[0] === ")" || s[0] === "]" || s[0] === "}") return false
    if(s[s.length - 1] === "[" || s[s.length - 1] === "(" || s[s.length - 1] === "{")  return false

    let stack = []

    for(let i = 0; i < s.length; i++){
        if(s[i] === "(" || s[i] === "{" || s[i] === "["){
            stack.push(s[i])
        }else if(pairs[stack.pop()] !== s[i]){
            return false
        }
    }

    return stack.length === 0
    
};




