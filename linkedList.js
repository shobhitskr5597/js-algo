class Node {
	constructor(value) {
  	this.value = value
    this.next = null
  }
}

class LinkedList {
	constructor() {
  	this.head = null
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
    } else {
    	let prev = this.head
      while(prev.next) {
      	prev = prev.next
      }
      prev.next = node
    }
    this.size++
  }
  
  insert(value, index) {
  	if (this.index<0 || this.index > this.getSize()) {
    	return
    }
    if (this.index === 0) {
    	this.append(value)
    } else {
    	const node = new Node(value)
      let prev = this.head
      for (let i=0; i< index-1;i++) {
      	prev = prev.next
      }
      node.next = prev.next
      prev.next = node
      this.size++
    }
  }
  
  remove(index) {
  	if (this.index <0 || this.index>this.getSize()) {
    	return
    }
    let removedNode;
    if (this.index === 0) {
      removedNode = this.head
      this.head = this.head.next
    } else {
      let prev= this.head
      for (let i=0;i<index-1;i++) {
      	prev = prev.next
      }
      removedNode = prev.next
      prev.next = removedNode.next
    }
    this.size--
    return removedNode.value
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

const list = new LinkedList();
/* console.log('List is empty?' + list.isEmpty())
console.log('Size of List is'+ list.getSize()) */
list.append(10)
list.append(20)
list.append(30)
console.log('List is empty?' + list.isEmpty())
list.insert(40,1)
list.remove(2)
list.print()
