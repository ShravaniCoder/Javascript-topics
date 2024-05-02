// Map

var arr = [1, 2, 3, 5];

var newArr = arr.map((item, i) => {
  console.log(item + "index" + i);

  return item + i;
});

console.log(newArr);

// Map method output is
//1index0
//2index1
//3index2
//5index3
//[ 1, 3, 5, 8 ]

// that means our Map, it returns.