//Write a JavaScript function to check if a given string is a palindrome (reads the same forwards and backwards). 

function isPalindrome(str) {
  str = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  return str === str.split("").reverse().join("");
}


console.log(isPalindrome("A man, a plan, a canal, Panama")); 
console.log(isPalindrome("racecar")); 
console.log(isPalindrome("hello")); 
