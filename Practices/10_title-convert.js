function toTitleCase(str) {
  return str.replace(/\b\w/g, function (char) {
    return char.toUpperCase();
  });
}

console.log(toTitleCase("hello world")); 
console.log(toTitleCase("good morning")); 
