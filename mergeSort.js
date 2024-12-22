function mergeSort(arr) {
    if (arr.length<2){return arr}
    let middleIndex = Math.floor(arr.length/2)
    let leftArr = arr.slice(0, middleIndex)
    let rightArr = arr.slice(middleIndex)
    return merge(mergeSort(leftArr),mergeSort(rightArr))
  }
  
  function merge(leftArr, rightArr) {
  let tempArr = []
      while (leftArr.length>0 && rightArr.length>0) {
        if (leftArr[0]<=rightArr[0]) {
          tempArr.push(leftArr.shift())
      } else {
          tempArr.push(rightArr.shift())
      }
    }
    return [...tempArr,...leftArr, ...rightArr]
  }
  
  console.log(mergeSort([-5, 8, 3,10,20, 7, 4, 0, 6]))
  