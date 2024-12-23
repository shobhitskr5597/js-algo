function cartesianProduct(arr1,arr2) {
    let tempArr = []
    for (let i=0; i<arr1.length;i++) {
        for (let j=0; j<arr2.length;j++) {
          tempArr.push([arr1[i], arr2[j]])
      }
    }
    return tempArr
  }
  
  console.log(cartesianProduct([1,2],[3,4,5]))
  