function isPalindrome(str) {
  str = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  return str === str.split("").reverse().join("");
}

// Example usage:
console.log(isPalindrome("A man, a plan, a canal, Panama")); // Output will be true
console.log(isPalindrome("racecar")); // Output will be true
console.log(isPalindrome("hello")); // Output will be false
