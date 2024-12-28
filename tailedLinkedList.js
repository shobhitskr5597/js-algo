class Node {
	constructor(value) {
  	this.value = value
    this.next = null
  }
}

class LinkedList {
	constructor() {
  	this.head = null
    this.tail = null
    this.size = 0
  }
  
  isEmpty() {
  	return this.size === 0
  }
  
  getSize() {
  	return this.size
  }
  
  // Big O:O(1)
  prepend(value) {
  	const node = new Node(value)
    if (this.isEmpty()) {
    	this.head = node
    	this.tail = node
    } else {
    	node.next = this.head
      this.head = node
    }
    this.size++
  }
  
  //Big O:O(n)
  append(value) {
  const node = new Node(value)
  	if (this.isEmpty()) {
    	this.head = node
      this.tail = node
    } else {
    	this.tail.next = node
      this.tail = node
    }
    this.size++
  }
  
  removeFromStart() {
  	if (this.isEmpty()) {
    	return null
    } else {
    	let removedNode = this.head.value
      this.head = this.head.next
      this.size--
      return removedNode
    }
  }
  
  removeFromEnd() {
  	if (this.isEmpty()) {
    	return null
    } else {
    	const value = this.tail.value
      if (this.size === 1) {
      	this.head = null
        this.tail = null
      } else {
      	let prev= this.head
        while(prev.next!== this.tail) {
        	prev=prev.next
        }
        prev.next = null
        this.tail = prev
      }
      this.size--
      return value
    }
  }
  
  print() {
  	if (this.isEmpty()) {
    	console.log('LinkedList is Empty')
    } else {
    	let curr = this.head
      let valuesList = ''
      while (curr) {
      	valuesList += `${curr.value} `
        curr = curr.next
      }
      console.log(valuesList)
    }
  }
}

module.exports = LinkedList;

// const list = new LinkedList();
// list.append(1)
// list.append(2)
// list.append(3)
// list.prepend(4)
// console.log('List is empty?' + list.isEmpty())
// list.print()
// list.removeFromStart()
// list.removeFromEnd()
// list.print()
