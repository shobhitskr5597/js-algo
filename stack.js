const LinkedList = require('./linked-list');

class LinkedListStack {
  constructor() {
    this.stack = new LinkedList()
  }
  
  isEmpty() {
    return this.stack.isEmpty()
  }
  
  push(value) {
    this.stack.append(value)
  }
  
  pop() {
    this.stack.removeFromStart()
  }
  
  getSize() {
    return this.stack.getSize()
  }
  
  peek() {
    return this.stack.peek()
  }
  print() {
        this.stack.print()
    }
}

const myStack = new LinkedListStack();
console.log(myStack.isEmpty())
myStack.push(1)
myStack.push(2)
myStack.push(3)
myStack.push(4)
myStack.pop()
console.log(myStack.getSize())
myStack.print()