/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */


function reverseList(head: ListNode | null): ListNode | null {
  let prev = head;
  // Edge case for empty list.
  if (!head) return null;
  head = head.next;
  // The front the list now shouldn't point to anything
  prev!.next = null;
  let next = head;

  while (head !== null) {
    next = next!.next;
    head.next = prev;
    prev = head;
    head = next;
  }

  return prev;
}

