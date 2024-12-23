function binarySearch(arr,numb) {
    let leftIndex = 0;
    let rightIndex = arr.length -1;
    
    while (leftIndex<= rightIndex) {
        let middleIndex = Math.floor((leftIndex + rightIndex)/2)
      if (arr[middleIndex] === numb) {
          return middleIndex
      }
      if (numb < arr[middleIndex]) {
          rightIndex = middleIndex-1;
      } else {
          leftIndex = middleIndex+1;
      }
    }
    return -1
  } 
  
  console.log(binarySearch([-5,2,4,5,7,8,10],7))

  //Big O: O(logn)