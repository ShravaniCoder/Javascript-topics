// ForEach 

var arr = [1, 2, 3, 5];

var newArr = arr.forEach((item, i) => {
  console.log(item + "index" + i);

  return item + i;
});

console.log(newArr);

// ForEach method output is
//1index0
//2index1
//3index2
//5index3
//undefined

// that means our ForEach not returns new array.
