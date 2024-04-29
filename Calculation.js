function calculate(num1, num2, operation) {
    if (operation === 'add') {
        return num1 + num2; // Addition
    } else if (operation === 'subtract') {
        return num1 - num2; // Subtraction
    } else if (operation === 'multiply') {
        return num1 * num2; // Multiplication
    } else if (operation === 'divide') {
        if (num2 !== 0) {
            return num1 / num2; // Division
        } else {
            return "Cannot divide by zero";
        }
    } else if (operation === 'exponentiate') {
        return Math.pow(num1, num2); // Exponentiation
    } else if (operation === 'modulo') {
        if (num2 !== 0) {
            return num1 % num2; // Modulo
        } else {
            return "Cannot perform modulo by zero";
        }
    } else {
        return "Invalid operation"; // If the operation is none of the above
    }
}

// Example usage:
console.log(calculate(5, 10, 'add'));           // Output will be 15
console.log(calculate(10, 5, 'subtract'));      // Output will be 5
console.log(calculate(5, 10, 'multiply'));      // Output will be 50
console.log(calculate(10, 5, 'divide'));        // Output will be 2
console.log(calculate(2, 3, 'exponentiate'));   // Output will be 8 (2^3)
console.log(calculate(10, 3, 'modulo'));        // Output will be 1 (10 % 3)
console.log(calculate(5, 0, 'divide'));         // Output will be "Cannot divide by zero"
console.log(calculate(10, 0, 'modulo'));       // Output will be "Cannot perform modulo by zero"
