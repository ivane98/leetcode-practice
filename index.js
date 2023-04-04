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

var getIntersectionNode = function (headA, headB) {
  if (!headA || !headB) return null;

  let pointA = headA;
  let pointB = headB;

  while (pointA !== pointB) {
    if (pointA === null) {
      pointA = headB;
    } else {
      pointA = pointA.next;
    }

    if (pointB === null) {
      pointB = headA;
    } else {
      pointB = pointB.next;
    }
  }

  return pointA;
};
