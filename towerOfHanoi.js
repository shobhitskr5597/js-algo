function towerOfHanoi(n,fromRod,toRod, usingRod) {
	if (n<2) {
  	console.log(`Mode block from ${fromRod} to ${toRod}`)
    return
  }
  towerOfHanoi(n-1, fromRod, usingRod, toRod)
  console.log(`Mode block from ${fromRod} to ${usingRod}`)
  towerOfHanoi(n-1, usingRod, toRod, fromRod)
}

console.log(towerOfHanoi(3,'A','C','B'))

//Big O: O(2^n)