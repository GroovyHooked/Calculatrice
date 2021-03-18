const result = document.querySelector('.result');
const zero = document.querySelector('.buttonZero');
const one = document.querySelector('.buttonOne');
const two = document.querySelector('.buttonTwo');
const three = document.querySelector('.buttonThree');
const four = document.querySelector('.buttonFour');
const five = document.querySelector('.buttonFive');
const six = document.querySelector('.buttonSix');
const seven = document.querySelector('.buttonSeven');
const eight = document.querySelector('.buttonEight');
const nine = document.querySelector('.buttonNine');
const comma = document.querySelector('.buttonComma');
const AC = document.querySelector('.buttonAC');
const buttonPlus = document.querySelector('.buttonPlus');
const buttonMinus = document.querySelector('.buttonMinus');
const buttonMutiply = document.querySelector('.buttonMultiply');
const buttonDivide = document.querySelector('.buttonDivided');

const equal = document.querySelector('.buttonEqual');

let displayResult = '';
let factor = '';
let entryAfterOperator = false;
let pendingResult = '';
let log = console.log;

/*======== FUNCTIONS ===========*/
function operation(var1, factor, var2){
    return window.eval(parseFloat(var1) + factor + parseFloat(var2));
}
function whichOperator(operator){
    displayResult = result.innerHTML;
    if (factor === '='){
        factor = operator;
        pendingResult = result.innerHTML;
        entryAfterOperator = true;
    } else if(factor!== operator && factor !== ''){
        result.innerHTML = operation(pendingResult, factor, displayResult);
        log('operation factor != = '+ pendingResult + ' '+factor +' '+ displayResult)
        entryAfterOperator = true;
        factor = operator;
        pendingResult = result.innerHTML;
    } else {
        if (pendingResult === '') {
            factor = operator;
            pendingResult = result.innerHTML;
            entryAfterOperator = true;
        } else {
            result.innerHTML = operation(pendingResult, factor, displayResult);
            log('operation factor = = '+ pendingResult + ' '+factor +' '+ displayResult)
            entryAfterOperator = true;
            pendingResult = result.innerHTML;
        }
    }
}
function isFloat(n) {
    return Number(n) === n && n % 1 !== 0;
}
function numberEntry(number)
{
    if (entryAfterOperator === false) {
        result.innerHTML += number;
    } else {
        result.innerHTML = '';
        result.innerHTML += number;
        entryAfterOperator = false;
    }
}
/*===========================*/
/*===EQUAL==CLEAR==COMMA=====*/
equal.addEventListener('click', ()=>{
    displayResult = result.innerHTML;
    result.innerHTML = operation(pendingResult, factor, displayResult);
    entryAfterOperator = true;
    pendingResult = result.innerHTML;
    factor = '=';
})
AC.addEventListener('click', ()=>{
    factor = '';
    entryAfterOperator = false;
    pendingResult = '';
    result.innerHTML = '';
})
comma.addEventListener('click', ()=>{
    if (!isFloat(parseFloat(result.innerHTML)))
        result.innerHTML += '.';
})
/*===========================*/
/*======= OPERATORS ==========*/
buttonPlus.addEventListener('click', ()=>{
    whichOperator('+');
})
buttonMinus.addEventListener('click', ()=>{
    whichOperator('-');
})
buttonMutiply.addEventListener('click', ()=>{
    whichOperator('*');
})
buttonDivide.addEventListener('click', ()=>{
    displayResult = result.innerHTML;
    whichOperator('/');
})
/*===========================*/
/*==========NUMBERS==========*/
one.addEventListener('click', ()=>{
    numberEntry(1)
})
two.addEventListener('click', ()=>{
    numberEntry(2)
})
three.addEventListener('click', ()=>{
    numberEntry(3)
})
four.addEventListener('click', ()=>{
    numberEntry(4)
})
five.addEventListener('click', ()=>{
    numberEntry(5)
})
six.addEventListener('click', ()=>{
    numberEntry(6)
})
seven.addEventListener('click', ()=>{
    numberEntry(7)
})
eight.addEventListener('click', ()=>{
    numberEntry(8)
})
nine.addEventListener('click', ()=>{
    numberEntry(9)
})
zero.addEventListener('click', ()=>{
    numberEntry(0)
})
/*===========================*/
