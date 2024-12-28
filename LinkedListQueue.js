const LinkedList = require('./linked-list');

class LinkedListQueue {
  constructor() {
    this.list = new LinkedList();
  }
  
  enqueue(value) {
    this.list.append(value)
  }
  
  dequeue() {
    return this.list.removeFromStart()
  }
  
  getSize() {
    return this.list.getSize()
  }
  
  print() {
    this.list.print()
  }
  
  isEmpty() {
    return this.list.isEmpty()
  }
  peek() {
    return this.list.peek()
  }
}

const myQueue = new LinkedListQueue();
console.log(myQueue.isEmpty())
myQueue.enqueue(10)
myQueue.enqueue(20)
myQueue.enqueue(30)
myQueue.print()
console.log(myQueue.dequeue())
myQueue.print()