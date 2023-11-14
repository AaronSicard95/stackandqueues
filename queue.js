/** Node: node for a queue. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {
    let newN = new Node(val);
    if(this.first==null){
      this.first=newN;
      this.last=newN;
      this.size++;
      return;
    }else{
      this.last.next=newN;
      this.last=newN;
      this.size++;
      return;
    }
  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {
    if(this.first==null){
      throw new Error("que is empty");
    }else{
      const r = this.first.val;
      this.first = this.first.next;
      this.size--;
      return r;
    }
  }

  /** peek(): return the value of the first node in the queue. */

  peek() {
    return this.first.val;
  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
    if(this.size==0){
      return true;
    }else{
      return false;
    }
  }
}

module.exports = Queue;
