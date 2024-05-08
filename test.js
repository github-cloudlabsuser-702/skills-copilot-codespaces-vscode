class Calculator {
    add(a, b) {
        return a + b;
    }

    subtract(a, b) {
        return a - b;
    }

    multiply(a, b) {
        return a * b;
    }

    divide(a, b) {
        if (b === 0) {
            throw new Error("Cannot divide by zero");
        }
        return a / b;
    }
}

// Usage
const calculator = new Calculator();

let num1 = parseFloat(prompt("Enter the first number:"));
let num2 = parseFloat(prompt("Enter the second number:"));
let operation = prompt("Enter the operation (add, subtract, multiply, divide):");

switch(operation) {
    case 'add':
        alert(calculator.add(num1, num2));
        break;
    case 'subtract':
        alert(calculator.subtract(num1, num2));
        break;
    case 'multiply':
        alert(calculator.multiply(num1, num2));
        break;
    case 'divide':
        alert(calculator.divide(num1, num2));
        break;
    default:
        alert("Invalid operation");
}