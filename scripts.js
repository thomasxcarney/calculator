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
       if(secondNumber === 0){
        return "Are you insane?"
       } else return divide(firstNumber, secondNumber);
    } else return "Error";
};

const allNumbers = document.querySelectorAll('.number');
const display = document.querySelector('.display');
const operatorButtons = document.querySelectorAll('.operator');
const equalsButton = document.querySelector('.equals');
const clearButton = document.querySelector('.clear');

allNumbers.forEach(item => {
    item.addEventListener('click', event => {
    if(!firstNumber){
        firstNumber = Number(item.innerHTML);
        updateDisplay(firstNumber);
    } else if (!secondNumber){
        secondNumber = Number(item.innerHTML);
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

function updateDisplay(value){
    display.innerHTML = value;
}