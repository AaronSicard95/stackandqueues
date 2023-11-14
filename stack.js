/** Node: node for a stack. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** push(val): add new value to end of the stack. Returns undefined. */

  push(val) {
    let newN = new Node(val);
    if(this.first==null){
      this.first=newN;
      this.last=newN;
      this.size++;
    }else{
      newN.next = this.first;
      this.first=newN;
      this.size++;
    }
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
    if(this.size==0){
      throw new Error("stack is empty")
    }else{
      const r = this.first.val;
      this.first=this.first.next;
      this.size--;
      return r;
    }
  }

  /** peek(): return the value of the first node in the stack. */

  peek() {
    return this.first.val;
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    return this.size==0;
  }
}

module.exports = Stack;
