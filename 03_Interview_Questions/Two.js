// What are array, functions and objects?

// Array
let animals = ["Dog", "Cat"]
console.log(animals[1]);
console.log(animals.length)
animals.push("Fox")
console.log(animals)

// Function
function add(a, b){
    return a + b
}
console.log(add(2,3))

// Object
let person = {
    name: "john",
    age: 30,
    grades: ['A', 'B', 'C'],
    greet: function(){
        console.log(this.name);
    }
};

console.log(person.name);
console.log(person.grades[1])
person.greet();