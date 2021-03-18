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

let displayResult = '';
let factor = '';
let lastResult = '';
let beforeOperation = '';
let entryAfterOperator = false;
let pendingResult = '';
console.log('**************')
console.log('displayResult = ' + displayResult);
console.log('factor = ' + factor);
console.log('pendingResult = ' + pendingResult);
console.log('entryAfterOperator = ' + entryAfterOperator);
console.log('**************')
console.log('lastResult = ' + lastResult);
console.log('beforeOperation = ' + beforeOperation);


function operation(var1, factor, var2){
    return window.eval(parseFloat(var1) + factor + parseFloat(var2));
}

one.addEventListener('click', ()=>{
    console.log('*****ONE*********')
    console.log('displayResult = ' + displayResult);
    console.log('factor = ' + factor);
    console.log('pendingResult = ' + pendingResult);
    console.log('entryAfterOperator = ' + entryAfterOperator);
    console.log('********ONE******')
    if(entryAfterOperator === false){
        result.innerHTML += 1;
    } else {
        result.innerHTML = '';
        result.innerHTML += 1;
        entryAfterOperator = false;
    }
    console.log('displayResult = ' + displayResult);
    console.log('factor = ' + factor);
    console.log('pendingResult = ' + pendingResult);
    console.log('entryAfterOperator = ' + entryAfterOperator);
    console.log('****END ONE**********')
})
two.addEventListener('click', ()=>{
    console.log('*******TWO*******')
    console.log('displayResult = ' + displayResult);
    console.log('factor = ' + factor);
    console.log('pendingResult = ' + pendingResult);
    console.log('entryAfterOperator = ' + entryAfterOperator);
    console.log('*******TWO*******')
    if(entryAfterOperator === false){
        result.innerHTML += 2;
    } else {
        result.innerHTML = '';
        result.innerHTML += 2;
        entryAfterOperator = false;
    }
    console.log('displayResult = ' + displayResult);
    console.log('factor = ' + factor);
    console.log('pendingResult = ' + pendingResult);
    console.log('entryAfterOperator = ' + entryAfterOperator);
    console.log('*****END TWO*********')
})
buttonPlus.addEventListener('click', ()=>{
    displayResult = result.innerHTML;
    if(factor!== '+'){
        console.log('******PLUS********')
        console.log('displayResult = ' + displayResult);
        console.log('factor = ' + factor);
        console.log('pendingResult = ' + pendingResult);
        console.log('entryAfterOperator = ' + entryAfterOperator);
        console.log('**************')
        result.innerHTML = operation(pendingResult, factor, displayResult);
        entryAfterOperator = true;
        factor = '+';
        console.log('displayResult = ' + displayResult);
        console.log('factor = ' + factor);
        console.log('pendingResult = ' + pendingResult);
        console.log('entryAfterOperator = ' + entryAfterOperator);
        console.log('******PLUS********')
    } else if(pendingResult === ''){
        console.log('******PLUS********')
        console.log('displayResult = ' + displayResult);
        console.log('factor = ' + factor);
        console.log('pendingResult = ' + pendingResult);
        console.log('entryAfterOperator = ' + entryAfterOperator);
        console.log('*******PLUS*******')
        factor = '+';
        pendingResult = result.innerHTML;
        entryAfterOperator = true;

        console.log('displayResult = ' + displayResult);
        console.log('factor = ' + factor);
        console.log('pendingResult = ' + pendingResult);
        console.log('entryAfterOperator = ' + entryAfterOperator);
        console.log('*****PLUS*********')
    } else {
        console.log('******PLUS********')
        console.log('displayResult = ' + displayResult);
        console.log('factor = ' + factor);
        console.log('pendingResult = ' + pendingResult);
        console.log('entryAfterOperator = ' + entryAfterOperator);
        console.log('*****PLUS*********')
        result.innerHTML = operation(pendingResult, factor, displayResult);
        entryAfterOperator = true;
        pendingResult = result.innerHTML;

        console.log('displayResult = ' + displayResult);
        console.log('factor = ' + factor);
        console.log('pendingResult = ' + pendingResult);
        console.log('entryAfterOperator = ' + entryAfterOperator);
        console.log('*****END PLUS*********')
    }
})
buttonMinus.addEventListener('click', ()=>{
    console.log('**************')
    console.log('displayResult = ' + displayResult);
    console.log('factor = ' + factor);
    console.log('pendingResult = ' + pendingResult);
    console.log('entryAfterOperator = ' + entryAfterOperator);
    console.log('**************')
    displayResult = result.innerHTML;
    if(factor!== '-'){
        console.log('**************')
        console.log('displayResult = ' + displayResult);
        console.log('factor = ' + factor);
        console.log('pendingResult = ' + pendingResult);
        console.log('entryAfterOperator = ' + entryAfterOperator);

        result.innerHTML = operation(pendingResult, factor, displayResult);
        entryAfterOperator = true;
        factor = '-';
        console.log('**************')
        console.log('displayResult = ' + displayResult);
        console.log('factor = ' + factor);
        console.log('pendingResult = ' + pendingResult);
        console.log('entryAfterOperator = ' + entryAfterOperator);
        console.log('**************')
    } else if(pendingResult === ''){
        console.log('**************')
        console.log('displayResult = ' + displayResult);
        console.log('factor = ' + factor);
        console.log('pendingResult = ' + pendingResult);
        console.log('entryAfterOperator = ' + entryAfterOperator);

        factor = '-';
        pendingResult = result.innerHTML;
        entryAfterOperator = true;
        console.log('**************')
        console.log('displayResult = ' + displayResult);
        console.log('factor = ' + factor);
        console.log('pendingResult = ' + pendingResult);
        console.log('entryAfterOperator = ' + entryAfterOperator);
        console.log('**************')
    } else {
        console.log('**************')
        console.log('displayResult = ' + displayResult);
        console.log('factor = ' + factor);
        console.log('pendingResult = ' + pendingResult);
        console.log('entryAfterOperator = ' + entryAfterOperator);
        console.log('**************')
        result.innerHTML = operation(pendingResult, factor, displayResult);
        entryAfterOperator = true;
        pendingResult = result.innerHTML;

        console.log('displayResult = ' + displayResult);
        console.log('factor = ' + factor);
        console.log('pendingResult = ' + pendingResult);
        console.log('entryAfterOperator = ' + entryAfterOperator);
        console.log('**************')
    }
})
buttonMutiply.addEventListener('click', ()=>{
    displayResult = result.innerHTML;
    if(pendingResult === ''){
        factor = '*';
        pendingResult = result.innerHTML;
        entryAfterOperator = true;
    } else {
        result.innerHTML = operation(pendingResult, factor, displayResult);
        entryAfterOperator = true;
        pendingResult = result.innerHTML;
    }
})
buttonDivided.addEventListener('click', ()=>{
    displayResult = result.innerHTML;
    if(pendingResult === ''){
        factor = '/';
        pendingResult = result.innerHTML;
        entryAfterOperator = true;
    } else {
        result.innerHTML = operation(pendingResult, factor, displayResult);
        entryAfterOperator = true;
        pendingResult = result.innerHTML;
    }
})
equal.addEventListener('click', ()=>{
    displayResult = result.innerHTML;
    if(factor === '+'){
        result.innerHTML = add(pendingResult, displayResult);
        console.log('plus');
    } else if(factor === '-'){
        result.innerHTML = retrieve(pendingResult, displayResult);
        console.log('minus');
    } else if(factor === '*'){
        result.innerHTML = mutiply(pendingResult, displayResult);
        console.log('*');
    } else if(factor === '/'){
        result.innerHTML = devide(pendingResult, displayResult);
        console.log('/');
    }

})




AC.addEventListener('click', ()=>{
    factor = '';
    lastResult = '';
    beforeOperation = '';
    entryAfterOperator = false;
    pendingResult = '';
    result.innerHTML = '';
})