const add = (a, b) => (a+b);

const subtract = (a, b) => (a-b);

const multiply = (a, b) => (a*b);

const divide = (a, b) => (a/b);

let firstNumber;
let secondNumber;
let operator;

function operate(firstNumber, operator, secondNumber){
    if(operator == '+'){
        return (Math.round(add(Number(firstNumber), Number(secondNumber))* 100) / 100);
    } else if (operator == '-'){
       return (Math.round(subtract(Number(firstNumber), Number(secondNumber))* 100) / 100);
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
const deleteButton = document.querySelector('.delete');

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

equalsButton.addEventListener('click', event => {
    if(firstNumber && operator && secondNumber){
        equalsButtonOperation();
    };
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

function equalsButtonOperation(){
    updateDisplay(operate(firstNumber, operator, secondNumber));
}

equalsButton.addEventListener('click', event => equalsButtonOperation);

clearButton.addEventListener('click', event => {
    firstNumber = '';
    secondNumber = '';
    operator = '';
    updateDisplay('0');
 });

deleteButton.addEventListener('click', event => {
    if(!operator){
        firstNumber = firstNumber.substring(0, firstNumber.length-1);
        updateDisplay(firstNumber);
    } if(secondNumber){
        secondNumber = secondNumber.substring(0, secondNumber.length-1);
        updateDisplay(secondNumber);
    }
 });

function addDecimal() {
    if(firstNumber && !operator && firstNumber.indexOf('.') < 0){
        firstNumber += '.';
        updateDisplay(firstNumber);
    } else if(secondNumber && secondNumber.indexOf('.') < 0){
        secondNumber += '.';
        updateDisplay(secondNumber);
    }
}

decimalButton.addEventListener('click', event => addDecimal());

function updateDisplay(value){
    display.innerHTML = value;
}

document.addEventListener('keydown', (e) => {
    if(Number(e.key)){
        if(!operator && !firstNumber){
            firstNumber = e.key;
            updateDisplay(firstNumber);
        } else if(firstNumber && !operator){
            firstNumber += e.key;
            updateDisplay(firstNumber);
        } else if (operator && !secondNumber){
            secondNumber = e.key;
            updateDisplay(secondNumber);
        } else if(operator && secondNumber){
            secondNumber += e.key;
            updateDisplay(secondNumber);
        };
    } else if(e.key == "."){
        addDecimal();
    } else if(firstNumber && !operator){
        if(e.key == '+' || e.key == '-' || e.key == '*' || e.key == '/'){
            operator = e.key;
        };
    } else if(firstNumber && operator && secondNumber && e.key == '='){
        equalsButtonOperation();
    }
});