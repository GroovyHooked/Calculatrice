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

let pendingResult = '';
let factor = '';
let lastResult = '';
let tempVar = false;

equal.addEventListener('click', () => {
    if (factor == '+') {
        lastResult = result.innerHTML;
        result.innerHTML = parseFloat(pendingResult) + parseFloat(lastResult);
        tempVar = false;
        pendingResult = '';
        factor = '';
        lastResult = '';
    } else if (factor == '-') {
        lastResult = result.innerHTML;
        result.innerHTML = parseFloat(pendingResult) - parseFloat(lastResult);
        tempVar = false;
        pendingResult = '';
        factor = '';
        lastResult = '';
    } else if (factor == '*') {
        lastResult = result.innerHTML;
        result.innerHTML = parseFloat(pendingResult) * parseFloat(lastResult);
        tempVar = false;
        pendingResult = '';
        factor = '';
        lastResult = '';
    } else if (factor == '/') {
        lastResult = result.innerHTML;
        result.innerHTML = parseFloat(pendingResult) / parseFloat(lastResult);
        tempVar = false;
        pendingResult = '';
        factor = '';
        lastResult = '';
    }
})
one.addEventListener('click', () => {
    if (factor != '*' && factor != '-' && factor != '+' && factor != '/' && tempVar == false) {
        result.innerHTML += 1;
    } else if (factor == '*' && tempVar == true || factor == '-'  && tempVar == true || factor == '+' && tempVar == true || factor == '/' && tempVar == true) {
        result.innerHTML += 1;
    } else if (factor == '*' && tempVar == false || factor == '-' && tempVar == false || factor == '+' && tempVar == false || factor == '/' && tempVar == false) {
        result.innerHTML = '';
        tempVar = true;
        result.innerHTML += 1;
    }
});

two.addEventListener('click', () => {
    if (factor != '*' && factor != '-' && factor != '+' && factor != '/' && tempVar == false) {
        result.innerHTML += 2;
    } else if (factor == '*' && tempVar == true || factor == '-' && tempVar == true || factor == '+' && tempVar == true || factor == '/' && tempVar == true) {
        result.innerHTML += 2;
    } else if (factor == '*' && tempVar == false || factor == '-' && tempVar == false || factor == '+' && tempVar == false || factor == '/' && tempVar == false) {
        result.innerHTML = '';
        result.innerHTML += 2;
        tempVar = true;
    }
});
buttonPlus.addEventListener('click', () => {
    pendingResult = result.innerHTML;
    result.innerHTML = pendingResult;
    factor = '+';
    tempVar = false;
});
zero.addEventListener('click', () => {
    if (factor != '*' && factor != '-' && factor != '+' && factor != '/' && tempVar == false) {
        result.innerHTML += 0;
    } else if (factor == '*' && tempVar == true || factor == '-' && tempVar == true || factor == '+' && tempVar == true || factor == '/' && tempVar == true) {
        result.innerHTML += 0;
    } else if (factor == '*' && tempVar == false || factor == '-' && tempVar == false || factor == '+' && tempVar == false || factor == '/' && tempVar == false) {
        result.innerHTML = '';
        result.innerHTML += 0;
        tempVar = true;
    }
});
three.addEventListener('click', () => {
    if (factor != '*' && factor != '-' && factor != '+' && factor != '/' && tempVar == false) {
        result.innerHTML += 3;
    } else if (factor == '*' && tempVar == true || factor == '-' && tempVar == true || factor == '+' && tempVar == true || factor == '/' && tempVar == true) {
        result.innerHTML += 3;
    } else if (factor == '*' && tempVar == false || factor == '-' && tempVar == false || factor == '+' && tempVar == false || factor == '/' && tempVar == false) {
        result.innerHTML = '';
        result.innerHTML += 3;
        tempVar = true;
    }
});
four.addEventListener('click', () => {
    if (factor != '*' && factor != '-' && factor != '+' && factor != '/' && tempVar == false) {
        result.innerHTML += 4;
    } else if (factor == '*' && tempVar == true || factor == '-' && tempVar == true || factor == '+' && tempVar == true || factor == '/' && tempVar == true) {
        result.innerHTML += 4;
    } else if (factor == '*' && tempVar == false || factor == '-' && tempVar == false || factor == '+' && tempVar == false || factor == '/' && tempVar == false) {
        result.innerHTML = '';
        result.innerHTML += 4;
        tempVar = true;
    }
});
five.addEventListener('click', () => {
    if (factor != '*' && factor != '-' && factor != '+' && factor != '/' && tempVar == false) {
        result.innerHTML += 5;
    } else if (factor == '*' && tempVar == true || factor == '-' && tempVar == true || factor == '+' && tempVar == true || factor == '/' && tempVar == true) {
        result.innerHTML += 5;
    } else if (factor == '*' && tempVar == false || factor == '-' && tempVar == false || factor == '+' && tempVar == false || factor == '/' && tempVar == false) {
        result.innerHTML = '';
        result.innerHTML += 5;
        tempVar = true;
    }
});
six.addEventListener('click', () => {
    if (factor != '*' && factor != '-' && factor != '+' && factor != '/' && tempVar == false) {
        result.innerHTML += 6;
    } else if (factor == '*' && tempVar == true || factor == '-' && tempVar == true || factor == '+' && tempVar == true || factor == '/' && tempVar == true) {
        result.innerHTML += 6;
    } else if (factor == '*' && tempVar == false || factor == '-' && tempVar == false || factor == '+' && tempVar == false || factor == '/' && tempVar == false) {
        result.innerHTML = '';
        result.innerHTML += 6;
        tempVar = true;
    }
});
seven.addEventListener('click', () => {
    if (factor != '*' && factor != '-' && factor != '+' && factor != '/' && tempVar == false) {
        result.innerHTML += 7;
    } else if (factor == '*' && tempVar == true || factor == '-' && tempVar == true || factor == '+' && tempVar == true || factor == '/' && tempVar == true) {
        result.innerHTML += 7;
    } else if (factor == '*' && tempVar == false || factor == '-' && tempVar == false || factor == '+' && tempVar == false || factor == '/' && tempVar == false) {
        result.innerHTML = '';
        result.innerHTML += 7;
        tempVar = true;
    }
});
eight.addEventListener('click', () => {
    if (factor != '*' && factor != '-' && factor != '+' && factor != '/' && tempVar == false) {
        result.innerHTML += 8;
    } else if (factor == '*' && tempVar == true || factor == '-' && tempVar == true || factor == '+' && tempVar == true || factor == '/' && tempVar == true) {
        result.innerHTML += 8;
    } else if (factor == '*' && tempVar == false || factor == '-' && tempVar == false || factor == '+' && tempVar == false || factor == '/' && tempVar == false) {
        result.innerHTML = '';
        result.innerHTML += 8;
        tempVar = true;
    }
});
nine.addEventListener('click', () => {
    if (factor != '*' && factor != '-' && factor != '+' && factor != '/' && tempVar == false) {
        result.innerHTML += 9;
    } else if (factor == '*' && tempVar == true || factor == '-' && tempVar == true || factor == '+' && tempVar == true || factor == '/' && tempVar == true) {
        result.innerHTML += 9;
    } else if (factor == '*' && tempVar == false || factor == '-' && tempVar == false || factor == '+' && tempVar == false || factor == '/' && tempVar == false) {
        result.innerHTML = '';
        result.innerHTML += 9;
        tempVar = true;
    }
});
comma.addEventListener('click', () => {
    function isFloat(n){
        return Number(n) === n && n % 1 !== 0;
    }
    if(!isFloat(parseFloat(result.innerHTML)))
        return result.innerHTML += '.';
});


buttonMinus.addEventListener('click', () => {
    pendingResult = result.innerHTML;
    result.innerHTML = pendingResult;
    factor = '-';
    tempVar = false;

});
buttonDivided.addEventListener('click', () => {
    pendingResult = result.innerHTML;
    result.innerHTML = pendingResult;
    factor = '/';
    tempVar = false;

});
buttonMutiply.addEventListener('click', () => {
    pendingResult = result.innerHTML;
    result.innerHTML = pendingResult;
    factor = '*';
    tempVar = false;

});
AC.addEventListener('click', () => {
    result.innerHTML = '';
    pendingResult = '';
    factor = '';
    lastResult = '';
    tempVar = false;
});
function isFloat(n){
    return Number(n) === n && n % 1 !== 0;
}
console.log(isFloat(5))
console.log(isFloat(5.7))
/*
*     if (factor == '+'){
        lastResult = result.innerHTML;
        result.innerHTML = parseFloat(pendingResult) + parseFloat(lastResult);
    } else if(factor == '-'){
        lastResult = result.innerHTML;
        result.innerHTML = parseFloat(pendingResult) - parseFloat(lastResult);
    } else if(factor == '*'){
        lastResult = result.innerHTML;
        result.innerHTML = parseFloat(pendingResult) * parseFloat(lastResult);
    } else if(factor == '/'){
        lastResult = result.innerHTML;
        result.innerHTML = parseFloat(pendingResult) / parseFloat(lastResult);
        console.log(parseFloat(lastResult))
        console.log(parseFloat(pendingResult))
    }
    * switch (factor){
        case '+':
            lastResult = result.innerHTML;
            result.innerHTML = parseFloat(pendingResult) + parseFloat(lastResult);
            break;
        case '-':
            lastResult = result.innerHTML;
            result.innerHTML = parseFloat(pendingResult) - parseFloat(lastResult);
            break;
        case '*':
            lastResult = result.innerHTML;
            result.innerHTML = parseFloat(pendingResult) * parseFloat(lastResult);
            break;
        case '/':
            lastResult = result.innerHTML;
            result.innerHTML = parseFloat(pendingResult) / parseFloat(lastResult);
            break;
*
* */