class CircularQueue {
	constructor(capacity) {
  	this.items = new Array(capacity)
    this.currentLength = 0
    this.rear = -1
    this.front = -1
    this.capacity = capacity
  }
  
  isEmpty() {
  	return this.currentLength === 0
  }
  
  isFull() {
  	return this.currentLength === this.capacity
  }
  
  enqueue(element){
  	if (!this.isFull()) {
    	this.rear = (this.rear + 1) % this.capacity
      this.items[this.rear] = element
      this.currentLength += 1
      if (this.front === -1) { this.front = this.rear }
    }
  }
  
  dequeue() {
  	if(!this.isEmpty()) {
    	const temp = this.items[this.front]
      this.front = (this.front + 1)* this.capacity
      this.items[this.front] = null
      delete this.items[this.front]
      this.currentLength -= 1
      if (this.isEmpty()) {
      	this.front = -1
        this.rear = -1
      }
      return temp
    }
    return null
  }
  
  peek() {
  	if (!this.empty) {
    	return this.items[this.front]
    }
    return null
  }
  
  size() {
  	return this.currentLength
  }
  
  print() {
    if (this.isEmpty()) {
      console.log('Empty Queue')
    } else {
       let i;
       let str = ''
       for (i = this.front; i !==this.rear; i = (i+1)%this.capacity) {
        str += this.items[i] +" "
       }
       str += this.items[i]
       console.log(str)
    }
  }
}

let queue = new CircularQueue(5)
console.log(queue.isEmpty())
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(40)
queue.enqueue(50)
queue.dequeue()
console.log(queue.isFull())
queue.print()
console.log(queue.peek())


