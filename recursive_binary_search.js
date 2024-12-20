function recursiveBinarySearch(arr,numb) {
    return search(arr, numb, 0, arr.length-1)
  }
  
  function search(arr, target,leftIndex,rightIndex) {
      while (leftIndex<=rightIndex) {
        let middleIndex = Math.floor((leftIndex + rightIndex)/2)
      if (target === arr[middleIndex]) {
        return middleIndex
      }
      if (target < arr[middleIndex]) {
        rightIndex = middleIndex -1
      } else {
        leftIndex = middleIndex + 1
      }
      search(arr, target, leftIndex, rightIndex)
    }
    
      return -1
  }
  
  console.log(recursiveBinarySearch([-5,2,4,5,7,8,10],7))
  console.log(recursiveBinarySearch([-5,2,4,5,7,8,10],8))
  console.log(recursiveBinarySearch([-5,2,4,5,7,8,10],20))