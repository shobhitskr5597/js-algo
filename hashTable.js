class HashTable {
	constructor(size) {
  	this.table = new Array(size)
    this.size = size
  }
  
  hash(key) {
  	let count = 0;
    for (let i=0; i<key.length;i++) {
    	count += key.charCodeAt(i)
    }
    return count % this.size
  }
  
  set(key,value) {
  	let index= this.hash(key)
    this.table[index] = value
  }
  
  get(key) {
  	let index = this.hash(key)
    return this.table[index]
  }
  
  remove(key) {
  	let index = this.hash(key)
    this.table[index] = undefined
  }
  
  display() {
  	for (let i=0;i<this.table.length;i++) {
    	if (this.table[i]) {
      	console.log(i, this.table[i])
      }
    }
  }
}

let myTable = new HashTable(50);
myTable.set('name', 'John')
myTable.set('value', '4')
console.log(myTable.get('name'))
myTable.display()
myTable.remove('value')
console.log(myTable.get('value'))