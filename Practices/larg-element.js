function findLargestInNestedArray(arr) {
  let largest = arr[0][0];
  for (const subArray of arr) {
    for (const num of subArray) {
      if (num > largest) {
        largest = num;
      }
    }
  }
  return largest;
}

const nestedArray = [
  [3, 7, 2],
  [8, 1, 5],
  [9, 4, 6],
];
console.log("Largest element:", findLargestInNestedArray(nestedArray)); 
