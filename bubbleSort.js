function bubbleSort(arr) {
    for (let i=0;i<arr.length;i++) {
        for (let j=i+1;j<arr.length;j++) {
          if (arr[i]>arr[j]) {
            [arr[i],arr[j]] = [arr[j],arr[i]]
        }
      }
    }
    return arr
  }
  
console.log(bubbleSort([-5,8,3,7,4,0,6]))

//Big O: O(n^2)