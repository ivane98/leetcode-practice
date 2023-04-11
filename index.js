//49. Group Anagrams

var groupAnagrams = function(strs) {
    const sortedStrs = strs.map(word => word.split('').sort().join(''))
   const hash = {}

   for(let i = 0; i < strs.length; i++){
     if(!hash[sortedStrs[i]]){
       hash[sortedStrs[i]] = [strs[i]]
     }
     else {
       hash[sortedStrs[i]].push(strs[i])
     }
   }

   return Object.values(hash)
};

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))

// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

