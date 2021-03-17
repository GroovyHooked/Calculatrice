let result = document.querySelector('.result');
let zero = document.querySelector('.buttonZero');
let one = document.querySelector('.buttonOne');
let two = document.querySelector('.buttonTwo');
let three = document.querySelector('.buttonThree');
let four = document.querySelector('.buttonFour');
let five = document.querySelector('.buttonFive');
let six = document.querySelector('.buttonSix');
let seven = document.querySelector('.buttonSeven');
let eight = document.querySelector('.buttonEight');
let nine = document.querySelector('.buttonNine');
let comma = document.querySelector('.buttonComma');
let AC = document.querySelector('.buttonAC');
let buttonPlus = document.querySelector('.buttonPlus');
let buttonMinus = document.querySelector('.buttonMinus');
let buttonMutiply = document.querySelector('.buttonMultiply');
let buttonDivided = document.querySelector('.buttonDivided');

let equal = document.querySelector('.buttonEqual');

let firstResult = '';
let factor = '';
let lastResult = '';
let beforeOperation = '';
let entryAfterOperator = false;
let pendingResult = '';
console.log('on est là');
function isEmpty(str) {
    return (!str || 0 === str.length);
}

function add(var1, var2){
    return parseFloat(var1) + parseFloat(var2)
}
function retrieve(var1, var2){
    return parseFloat(var1) - parseFloat(var2)
}
function mutiply(var1, var2){
    return parseFloat(var1) * parseFloat(var2)
}
function devide(var1, var2){
    return parseFloat(var1) / parseFloat(var2)
}