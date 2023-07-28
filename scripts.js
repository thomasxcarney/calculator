const add = (a, b) => (a+b);

const subtract = (a, b) => (a-b);

const multiply = (a, b) => (a*b);

const divide = (a, b) => (a/b);

let firstNumber;
let secondNumber;
let operator;

function operate(firstNumber, operator, secondNumber){
    if(operator == '+'){
        return add(firstNumber, secondNumber);
    } else if (operator == '-'){
       return subtract(firstNumber, secondNumber);
    } else if (operator == '*'){
       return multiply(firstNumber, secondNumber);
    } else if (operator == '/'){
       return divide(firstNumber, secondNumber);
    } else return "Error";
};