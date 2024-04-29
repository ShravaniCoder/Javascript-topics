function findMax(arr) {

    if (arr.length === 0) {
        return "Array is empty"
    }
    return Math.max(...arr)
}

const numbers = [3, 7, 2, 8, 10, 5];
console.log("Maximum numbers:", findMax(numbers))


