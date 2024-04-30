// What is scope in javascript?

// Local scope: Variables declared inside a function have local scope, which means they can only be accesseed within the function not outside.
function myFunction(){
   let a = 1;
   console.log(a)
}
myFunction();
console.log(a);
// output : Error: a is not defined.