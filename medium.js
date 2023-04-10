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