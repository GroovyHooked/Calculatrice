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
let buttonDivide = document.querySelector('.buttonDivided');

let equal = document.querySelector('.buttonEqual');

let displayResult = '';
let factor = '';
let entryAfterOperator = false;
let pendingResult = '';

equal.addEventListener('click', ()=>{
    displayResult = result.innerHTML;
    result.innerHTML = operation(pendingResult, factor, displayResult);
    entryAfterOperator = false;
    pendingResult = result.innerHTML;
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
    if(factor!=='+' && factor !== ''){
        result.innerHTML = operation(pendingResult, factor, displayResult);
        console.log('operation factor != = '+ pendingResult + ' '+factor +' '+ displayResult)
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
            console.log('operation factor = = '+ pendingResult + ' '+factor +' '+ displayResult)
            entryAfterOperator = true;
            pendingResult = result.innerHTML;
        }
    }
})
buttonMinus.addEventListener('click', ()=>{
    displayResult = result.innerHTML;
    if(factor!=='-' && factor != ''){
        result.innerHTML = operation(pendingResult, factor, displayResult);
        console.log('operation factor != = '+ pendingResult + ' '+factor +' '+ displayResult)
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
            console.log('operation factor = = '+ pendingResult + ' '+factor +' '+ displayResult)
            entryAfterOperator = true;
            pendingResult = result.innerHTML;
        }
    }
})

buttonMutiply.addEventListener('click', ()=>{
    displayResult = result.innerHTML;
    if(factor!=='*' && factor != ''){
        result.innerHTML = operation(pendingResult, factor, displayResult);
        console.log('operation factor != = '+ pendingResult + ' '+factor +' '+ displayResult)
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
            console.log('operation factor = = '+ pendingResult + ' '+factor +' '+ displayResult)
            entryAfterOperator = true;
            pendingResult = result.innerHTML;
        }
    }
})
buttonDivide.addEventListener('click', ()=>{
    displayResult = result.innerHTML;
    if(factor!=='/' && factor != ''){
        result.innerHTML = operation(pendingResult, factor, displayResult);
        console.log('operation factor != = '+ pendingResult + ' '+factor +' '+ displayResult)
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
            console.log('operation factor = = '+ pendingResult + ' '+factor +' '+ displayResult)
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