const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.queueCount = 0;
  }

  get size() {
    return this.queueCount;
  }

  enqueue(element) {
    const newList = new ListNode(element);
    if (!this.first) {
      this.first = newList;
      this.last = newList;
    } else {
      this.last.next = newList;
      this.last = newList;
    }
    return this.queueCount++;
  }

  dequeue() {
    const temp = this.first;
    this.first = this.first.next;
    this.queueCount--;
    return temp.value;
  }
}

module.exports = Queue;
