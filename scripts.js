const add = (a, b) => (a+b);

const subtract = (a, b) => (a-b);

const multiply = (a, b) => (a*b);

const divide = (a, b) => (a/b);

let firstNumber;
let secondNumber;
let operator;

function operate(firstNumber, operator, secondNumber){
    if(operator == '+'){
        return add(Number(firstNumber), Number(secondNumber));
    } else if (operator == '-'){
       return subtract(Number(firstNumber), Number(secondNumber));
    } else if (operator == '*'){
       return (Math.round(multiply(Number(firstNumber), Number(secondNumber))* 100) / 100);
    } else if (operator == '/'){
       if(secondNumber === 0){
        return "Are you insane?"
       } else return (Math.round(divide(Number(firstNumber), Number(secondNumber))* 100) / 100);
    } else return "Error";
};

const allNumbers = document.querySelectorAll('.number');
const display = document.querySelector('.display');
const operatorButtons = document.querySelectorAll('.operator');
const equalsButton = document.querySelector('.equals');
const clearButton = document.querySelector('.clear');
const decimalButton = document.querySelector('.point');

allNumbers.forEach(item => {
    item.addEventListener('click', event => {
    if(!firstNumber){
        firstNumber = item.innerHTML;
        updateDisplay(firstNumber);
    } else if(!operator) {
        firstNumber += item.innerHTML;
        updateDisplay(firstNumber);
    } else if (!secondNumber){
        secondNumber = item.innerHTML;
        updateDisplay(secondNumber);
    } else {
        secondNumber += item.innerHTML;
        updateDisplay(secondNumber);
    };
    });
});

operatorButtons.forEach(item => {
    item.addEventListener('click', event => {
        if(!operator){
            operator = item.innerHTML;
        } else {
            updateDisplay(operate(firstNumber, operator, secondNumber));
            firstNumber = display.innerHTML;
            secondNumber = '';
            operator = item.innerHTML;
        };
    });
});

equalsButton.addEventListener('click', event => {
    updateDisplay(operate(firstNumber, operator, secondNumber));
});

clearButton.addEventListener('click', event => {
    firstNumber = '';
    secondNumber = '';
    operator = '';
    updateDisplay('696969');
 });

decimalButton.addEventListener('click', event => {
    if(firstNumber && !operator && firstNumber.indexOf('.') < 0){
        firstNumber += '.';
        updateDisplay(firstNumber);
    } else if(secondNumber && secondNumber.indexOf('.') < 0){
        secondNumber += '.';
        updateDisplay(secondNumber);
    }
 });

function updateDisplay(value){
    display.innerHTML = value;
}