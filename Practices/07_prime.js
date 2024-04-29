function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

// Example usage:
console.log(isPrime(7)); // Output will be true (7 is a prime number)
console.log(isPrime(12)); // Output will be false (12 is not a prime number)
