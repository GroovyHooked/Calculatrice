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

function operation(var1, factor, var2){
    return window.eval(parseFloat(var1) + factor + parseFloat(var2));
}
function isFloat(n) {
    return Number(n) === n && n % 1 !== 0;
}

buttonPlus.addEventListener('click', ()=>{
    displayResult = result.innerHTML;
    if (factor === '='){
        factor = '+';
        pendingResult = result.innerHTML;
        entryAfterOperator = true;
    } else if(factor!=='+' && factor !== ''){
        result.innerHTML = operation(pendingResult, factor, displayResult);
        log('operation factor != = '+ pendingResult + ' '+factor +' '+ displayResult)
        entryAfterOperator = true;
        factor = '+';
        pendingResult = result.innerHTML;
    } else {
        if (pendingResult === '') {
            factor = '+';
            pendingResult = result.innerHTML;
            entryAfterOperator = true;
        } else {
            result.innerHTML = operation(pendingResult, factor, displayResult);
            log('operation factor = = '+ pendingResult + ' '+factor +' '+ displayResult)
            entryAfterOperator = true;
            pendingResult = result.innerHTML;
        }
    }
})
buttonMinus.addEventListener('click', ()=>{
    displayResult = result.innerHTML;
    if (factor === '='){
        factor = '-';
        pendingResult = result.innerHTML;
        entryAfterOperator = true;
    } else if(factor!=='-' && factor != ''){
        result.innerHTML = operation(pendingResult, factor, displayResult);
        log('operation factor != = '+ pendingResult + ' '+factor +' '+ displayResult)
        entryAfterOperator = true;
        factor = '-';
        pendingResult = result.innerHTML;
    } else {
        if (pendingResult === '') {
            factor = '-';
            pendingResult = result.innerHTML;
            entryAfterOperator = true;
        } else {
            result.innerHTML = operation(pendingResult, factor, displayResult);
            log('operation factor = = '+ pendingResult + ' '+factor +' '+ displayResult)
            entryAfterOperator = true;
            pendingResult = result.innerHTML;
        }
    }
})

buttonMutiply.addEventListener('click', ()=>{
    displayResult = result.innerHTML;
    if (factor === '='){
        factor = '*';
        pendingResult = result.innerHTML;
        entryAfterOperator = true;
    } else if(factor!=='*' && factor != ''){
        result.innerHTML = operation(pendingResult, factor, displayResult);
        log('operation factor != = '+ pendingResult + ' '+factor +' '+ displayResult)
        entryAfterOperator = true;
        factor = '*';
        pendingResult = result.innerHTML;
    } else {
        if (pendingResult === '') {
            factor = '*';
            pendingResult = result.innerHTML;
            entryAfterOperator = true;
        } else {
            result.innerHTML = operation(pendingResult, factor, displayResult);
            log('operation factor = = '+ pendingResult + ' '+factor +' '+ displayResult)
            entryAfterOperator = true;
            pendingResult = result.innerHTML;
        }
    }
})
buttonDivide.addEventListener('click', ()=>{
    displayResult = result.innerHTML;
    if (factor === '='){
        factor = '/';
        pendingResult = result.innerHTML;
        entryAfterOperator = true;
    } else if(factor!=='/' && factor != ''){
        result.innerHTML = operation(pendingResult, factor, displayResult);
        log('operation factor != = '+ pendingResult + ' '+factor +' '+ displayResult)
        entryAfterOperator = true;
        factor = '/';
        pendingResult = result.innerHTML;
    } else {
        if (pendingResult === '') {
            factor = '/';
            pendingResult = result.innerHTML;
            entryAfterOperator = true;
        } else {
            result.innerHTML = operation(pendingResult, factor, displayResult);
            log('operation factor = = '+ pendingResult + ' '+factor +' '+ displayResult)
            entryAfterOperator = true;
            pendingResult = result.innerHTML;
        }
    }
})
one.addEventListener('click', ()=>{
    if(entryAfterOperator === false){
        result.innerHTML += 1;
    } else {
        result.innerHTML = '';
        result.innerHTML += 1;
        entryAfterOperator = false;
    }
})
two.addEventListener('click', ()=>{
    if(entryAfterOperator === false){
        result.innerHTML += 2;
    } else {
        result.innerHTML = '';
        result.innerHTML += 2;
        entryAfterOperator = false;
    }
})
three.addEventListener('click', ()=>{
    if(entryAfterOperator === false){
        result.innerHTML += 3;
    } else {
        result.innerHTML = '';
        result.innerHTML += 3;
        entryAfterOperator = false;
    }
})
four.addEventListener('click', ()=>{
    if(entryAfterOperator === false){
        result.innerHTML += 4;
    } else {
        result.innerHTML = '';
        result.innerHTML += 4;
        entryAfterOperator = false;
    }
})
five.addEventListener('click', ()=>{
    if(entryAfterOperator === false){
        result.innerHTML += 5;
    } else {
        result.innerHTML = '';
        result.innerHTML += 5;
        entryAfterOperator = false;
    }
})
six.addEventListener('click', ()=>{
    if(entryAfterOperator === false){
        result.innerHTML += 6;
    } else {
        result.innerHTML = '';
        result.innerHTML += 6;
        entryAfterOperator = false;
    }
})
seven.addEventListener('click', ()=>{
    if(entryAfterOperator === false){
        result.innerHTML += 7;
    } else {
        result.innerHTML = '';
        result.innerHTML += 7;
        entryAfterOperator = false;
    }
})
eight.addEventListener('click', ()=>{
    if(entryAfterOperator === false){
        result.innerHTML += 8;
    } else {
        result.innerHTML = '';
        result.innerHTML += 8;
        entryAfterOperator = false;
    }
})
nine.addEventListener('click', ()=>{
    if(entryAfterOperator === false){
        result.innerHTML += 9;
    } else {
        result.innerHTML = '';
        result.innerHTML += 9;
        entryAfterOperator = false;
    }
})
zero.addEventListener('click', ()=>{
    if(entryAfterOperator === false){
        result.innerHTML += 0;
    } else {
        result.innerHTML = '';
        result.innerHTML += 0;
        entryAfterOperator = false;
    }
})
comma.addEventListener('click', ()=>{
    if (!isFloat(parseFloat(result.innerHTML)))
         result.innerHTML += '.';
})
