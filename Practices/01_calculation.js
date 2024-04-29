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
        return "Invalid operation"; 
    }
}


console.log(calculate(5, 10, 'add'));           
console.log(calculate(10, 5, 'subtract'));      
console.log(calculate(5, 10, 'multiply'));      
console.log(calculate(10, 5, 'divide'));        
console.log(calculate(2, 3, 'exponentiate'));   
console.log(calculate(10, 3, 'modulo'));        
console.log(calculate(5, 0, 'divide'));         
console.log(calculate(10, 0, 'modulo'));       


