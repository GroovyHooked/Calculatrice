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
let otherState = '';
let entryAfterOperator = false;
let pendingResult = '';

function isEmpty(str) {
    return (!str || 0 === str.length);
}

equal.addEventListener('click', () => {
    if (factor === '+') {
        console.log(isEmpty(result.innerHTML))
        lastResult = result.innerHTML;
        result.innerHTML = parseFloat(displayResult) + parseFloat(lastResult);
        entryAfterOperator = false;
        console.log('***** EQUAL results *******')
        console.log('lastResult = ' + parseFloat(lastResult));
        console.log('displayResult = ' + parseFloat(displayResult));
        console.log('entryAfterOperator = ' + entryAfterOperator);
        console.log('end of line')
        lastResult = '';
        displayResult = '';
    } else if (factor === '-') {
        lastResult = result.innerHTML;
        result.innerHTML = parseFloat(displayResult) - parseFloat(lastResult);
        entryAfterOperator = false;
        console.log('***** EQUAL results *******')
        console.log('lastResult = ' + parseFloat(lastResult));
        console.log('displayResult = ' + parseFloat(displayResult));
        console.log('entryAfterOperator = ' + entryAfterOperator);
        console.log('end of line')
        lastResult = '';
        displayResult = '';
    } else if (factor === '*') {
        lastResult = result.innerHTML;
        result.innerHTML = parseFloat(displayResult) * parseFloat(lastResult);
        entryAfterOperator = false;
        console.log('***** EQUAL results *******')
        console.log('lastResult = ' + parseFloat(lastResult));
        console.log('displayResult = ' + parseFloat(displayResult));
        console.log('entryAfterOperator = ' + entryAfterOperator);
        console.log('end of line')
        lastResult = '';
        displayResult = '';
    } else if (factor === '/') {
        lastResult = result.innerHTML;
        result.innerHTML = parseFloat(displayResult) / parseFloat(lastResult);
        entryAfterOperator = false;
        console.log('***** EQUAL results *******')
        console.log('Dernière entrée = ' + parseFloat(lastResult));
        console.log('Première entrée = ' + parseFloat(displayResult));
        console.log('entryAfterOperator = ' + entryAfterOperator);
        console.log('end of line')
        lastResult = '';
        displayResult = '';
    }
})
one.addEventListener('click', () => {
    if (factor !== '*' && factor !== '-' && factor !== '+' && factor !== '/' && entryAfterOperator === false) {
        result.innerHTML += 1;
        displayResult += 1;
        console.log('==== Ch 1/ Partie 1 ====');
        console.log('entryAfterOperator= ' + entryAfterOperator);
        console.log('factor = ' + factor);
        console.log('pendingRes = ' + pendingResult);
        console.log('displayResult = ' + displayResult);
        //console.log('final = ' + lastResult);
        console.log('end of line');
    } else if (factor === '*' && entryAfterOperator === true || factor === '-' && entryAfterOperator === true || factor === '+' && entryAfterOperator === true || factor === '/' && entryAfterOperator === true) {
        result.innerHTML += 1;
        displayResult += 1;
        console.log('==== Ch 1/ Partie 2 ====')
        console.log('entryAfterOperator= ' + entryAfterOperator)
        console.log('factor = ' + factor)
        console.log('displayResult = ' + displayResult)
        console.log('pendingRes = ' + pendingResult);
        //console.log('final = ' + lastResult)
        console.log('end of line')
    } else if (factor === '*' && entryAfterOperator === false || factor === '-' && entryAfterOperator === false || factor === '+' && entryAfterOperator === false || factor === '/' && entryAfterOperator === false) {
        console.log('==== Ch 1/ Partie 3 ====')
        console.log('entryAfterOperator= ' + entryAfterOperator)
        result.innerHTML = '';
        displayResult = '';
        entryAfterOperator = true;
        result.innerHTML += 1;
        displayResult += 1;

        console.log('entryAfterOperator= ' + entryAfterOperator)
        console.log('factor = ' + factor)
        console.log('displayResult = ' + displayResult)
        console.log('pendingRes = ' + pendingResult);
        //console.log('final = ' + lastResult)
        console.log('end of line')
    }
});
buttonPlus.addEventListener('click', () => {
    console.log('***** PLUS results *******')
    if(otherState !== '' && pendingResult !== ''){
        result.innerHTML = parseFloat(displayResult) + parseFloat(otherState);
        console.log('1er if')
        console.log('Opération = ' + displayResult + ' + '+ pendingResult);
        entryAfterOperator = false;
        otherState = '';
    } else if (pendingResult !== ''){
        //displayResult = result.innerHTML;
        result.innerHTML = parseFloat(displayResult) + parseFloat(pendingResult);
        otherState = parseFloat(displayResult) + parseFloat(pendingResult);
        console.log('1er if')
        console.log('Opération = ' + displayResult + ' + '+ pendingResult);
        entryAfterOperator = false;
    } else {
        console.log('entryAfterOperator = ' + entryAfterOperator)
        pendingResult = displayResult;
        result.innerHTML = pendingResult;
        factor = '+';
        entryAfterOperator = false;
    }
    /*} else if (displayResult && lastResult){
        lastResult = result.innerHTML;
        result.innerHTML = parseFloat(displayResult) + parseFloat(lastResult);
        entryAfterOperator = true;
        console.log('2eme if')
    }


    /*if (displayResult && pendingResult){
        lastResult = result.innerHTML;
        result.innerHTML = parseFloat(displayResult) + parseFloat(lastResult);
    }
    displayResult = result.innerHTML;
    result.innerHTML = displayResult;
    factor = '+';
    entryAfterOperator = false;*/
    console.log('Pending = ' + pendingResult);
    console.log('displayResult = ' + displayResult);
    //console.log('lastResult = ' + parseFloat(lastResult));
    console.log('factor = ' + factor)
    console.log('entryAfterOperator = ' + entryAfterOperator)
    console.log('end of line')
});

buttonMinus.addEventListener('click', () => {
    console.log(factor)
    if (displayResult) {
        lastResult = result.innerHTML;
        result.innerHTML = parseFloat(displayResult) - parseFloat(lastResult);
        factor = '-';
        entryAfterOperator = true;
    }
    displayResult = result.innerHTML;
    result.innerHTML = displayResult;
    factor = '-';
    entryAfterOperator = false;
    console.log('***** PLUS results *******')
    console.log('displayResult = ' + displayResult);
    console.log('lastResult = ' + parseFloat(lastResult));
    console.log('factor = ' + factor)
    console.log('entryAfterOperator = ' + entryAfterOperator)
    console.log('end of line')

});
buttonDivided.addEventListener('click', () => {
    console.log(factor)
    if (displayResult) {
        lastResult = result.innerHTML;
        result.innerHTML = parseFloat(displayResult) / parseFloat(lastResult);
        factor = '/';
        entryAfterOperator = true;
    }
    displayResult = result.innerHTML;
    result.innerHTML = displayResult;
    factor = '/';
    entryAfterOperator = false;
    console.log('***** PLUS results *******')
    console.log('displayResult = ' + displayResult);
    console.log('lastResult = ' + parseFloat(lastResult));
    console.log('factor = ' + factor)
    console.log('entryAfterOperator = ' + entryAfterOperator)
    console.log('end of line')

});
buttonMutiply.addEventListener('click', () => {
    console.log(factor)
    if (displayResult) {
        lastResult = result.innerHTML;
        result.innerHTML = parseFloat(displayResult) * parseFloat(lastResult);
        factor = '*';
        entryAfterOperator = true;
    }
    displayResult = result.innerHTML;
    result.innerHTML = displayResult;
    factor = '*';
    entryAfterOperator = false;
    console.log('***** PLUS results *******')
    console.log('displayResult = ' + displayResult);
    console.log('lastResult = ' + parseFloat(lastResult));
    console.log('factor = ' + factor)
    console.log('entryAfterOperator = ' + entryAfterOperator)
    console.log('end of line')

});


two.addEventListener('click', () => {
    if (factor != '*' && factor != '-' && factor != '+' && factor != '/' && entryAfterOperator == false) {
        result.innerHTML += 2;
        displayResult += 2;
        console.log('==== ch 2/ partie 1 ====')
        console.log('entryAfterOperator= ' + entryAfterOperator)
        console.log('factor = ' + factor)
        console.log('displayResult = ' + displayResult)
        console.log('final = ' + lastResult)
        console.log('end of line')
    } else if (factor == '*' && entryAfterOperator == true || factor == '-' && entryAfterOperator == true || factor == '+' && entryAfterOperator == true || factor == '/' && entryAfterOperator == true) {
        result.innerHTML += 2;
        displayResult += 2;
        console.log('==== ch 2/ partie 2 ====')
        console.log('entryAfterOperator= ' + entryAfterOperator)
        console.log('factor = ' + factor)
        console.log('displayResult = ' + displayResult)
        console.log('final = ' + lastResult)
        console.log('end of line')
    } else if (factor == '*' && entryAfterOperator == false || factor == '-' && entryAfterOperator == false || factor == '+' && entryAfterOperator == false || factor == '/' && entryAfterOperator == false) {
        result.innerHTML = '';
        displayResult = '';
        result.innerHTML += 2;
        displayResult += 2;
        entryAfterOperator = true;
        console.log('==== ch 2/ partie 3 ====')
        console.log('entryAfterOperator= ' + entryAfterOperator)
        console.log('factor = ' + factor)
        console.log('displayResult = ' + displayResult)
        console.log('final = ' + lastResult)
        console.log('end of line')
    }
});
zero.addEventListener('click', () => {
    if (factor != '*' && factor != '-' && factor != '+' && factor != '/' && entryAfterOperator == false) {
        result.innerHTML += 0;
        console.log('==== ch 0/ partie 1 ====')
        console.log('entryAfterOperator= ' + entryAfterOperator)
        console.log('factor = ' + factor)
        console.log('displayResult = ' + displayResult)
        console.log('final = ' + lastResult)
        console.log('end of line')
    } else if (factor == '*' && entryAfterOperator == true || factor == '-' && entryAfterOperator == true || factor == '+' && entryAfterOperator == true || factor == '/' && entryAfterOperator == true) {
        result.innerHTML += 0;
        console.log('==== ch 0/ partie 2 ====')
        console.log('entryAfterOperator= ' + entryAfterOperator)
        console.log('factor = ' + factor)
        console.log('displayResult = ' + displayResult)
        console.log('final = ' + lastResult)
        console.log('end of line')
    } else if (factor == '*' && entryAfterOperator == false || factor == '-' && entryAfterOperator == false || factor == '+' && entryAfterOperator == false || factor == '/' && entryAfterOperator == false) {
        result.innerHTML = '';
        result.innerHTML += 0;
        entryAfterOperator = true;
        console.log('==== ch 0/ partie 3 ====')
        console.log('entryAfterOperator= ' + entryAfterOperator)
        console.log('factor = ' + factor)
        console.log('displayResult = ' + displayResult)
        console.log('final = ' + lastResult)
        console.log('end of line')
    }
});
three.addEventListener('click', () => {
    if (factor != '*' && factor != '-' && factor != '+' && factor != '/' && entryAfterOperator == false) {
        result.innerHTML += 3;
        console.log('==== ch 3/ partie 1 ====')
        console.log('entryAfterOperator= ' + entryAfterOperator)
        console.log('factor = ' + factor)
        console.log('displayResult = ' + displayResult)
        console.log('final = ' + lastResult)
        console.log('end of line')
    } else if (factor == '*' && entryAfterOperator == true || factor == '-' && entryAfterOperator == true || factor == '+' && entryAfterOperator == true || factor == '/' && entryAfterOperator == true) {
        result.innerHTML += 3;
        console.log('==== ch 3/ partie 2 ====')
        console.log('entryAfterOperator= ' + entryAfterOperator)
        console.log('factor = ' + factor)
        console.log('displayResult = ' + displayResult)
        console.log('final = ' + lastResult)
        console.log('end of line')
    } else if (factor == '*' && entryAfterOperator == false || factor == '-' && entryAfterOperator == false || factor == '+' && entryAfterOperator == false || factor == '/' && entryAfterOperator == false) {
        result.innerHTML = '';
        result.innerHTML += 3;
        entryAfterOperator = true;
        console.log('==== ch 3/ partie 3 ====')
        console.log('entryAfterOperator= ' + entryAfterOperator)
        console.log('factor = ' + factor)
        console.log('displayResult = ' + displayResult)
        console.log('final = ' + lastResult)
        console.log('end of line')
    }
});
four.addEventListener('click', () => {
    if (factor != '*' && factor != '-' && factor != '+' && factor != '/' && entryAfterOperator == false) {
        result.innerHTML += 4;
        console.log('==== ch 4/ partie 1 ====')
        console.log('entryAfterOperator= ' + entryAfterOperator)
        console.log('factor = ' + factor)
        console.log('end of line')
    } else if (factor == '*' && entryAfterOperator == true || factor == '-' && entryAfterOperator == true || factor == '+' && entryAfterOperator == true || factor == '/' && entryAfterOperator == true) {
        result.innerHTML += 4;
        console.log('==== ch 4/ partie 2 ====')
        console.log('entryAfterOperator= ' + entryAfterOperator)
        console.log('factor = ' + factor)
        console.log('end of line')
    } else if (factor == '*' && entryAfterOperator == false || factor == '-' && entryAfterOperator == false || factor == '+' && entryAfterOperator == false || factor == '/' && entryAfterOperator == false) {
        result.innerHTML = '';
        result.innerHTML += 4;
        entryAfterOperator = true;
        console.log('==== ch 4/ partie 3 ====')
        console.log('entryAfterOperator= ' + entryAfterOperator)
        console.log('factor = ' + factor)
        console.log('end of line')
    }
});
five.addEventListener('click', () => {
    if (factor != '*' && factor != '-' && factor != '+' && factor != '/' && entryAfterOperator == false) {
        result.innerHTML += 5;
        console.log('==== ch 5/ partie 1 ====')
        console.log('entryAfterOperator= ' + entryAfterOperator)
        console.log('factor = ' + factor)
        console.log('end of line')
    } else if (factor == '*' && entryAfterOperator == true || factor == '-' && entryAfterOperator == true || factor == '+' && entryAfterOperator == true || factor == '/' && entryAfterOperator == true) {
        result.innerHTML += 5;
        console.log('==== ch 5/ partie 2 ====')
        console.log('entryAfterOperator= ' + entryAfterOperator)
        console.log('factor = ' + factor)
        console.log('end of line')
    } else if (factor == '*' && entryAfterOperator == false || factor == '-' && entryAfterOperator == false || factor == '+' && entryAfterOperator == false || factor == '/' && entryAfterOperator == false) {
        result.innerHTML = '';
        result.innerHTML += 5;
        entryAfterOperator = true;
        console.log('==== ch 5/ partie 3 ====')
        console.log('entryAfterOperator= ' + entryAfterOperator)
        console.log('factor = ' + factor)
        console.log('end of line')
    }
});
six.addEventListener('click', () => {
    if (factor != '*' && factor != '-' && factor != '+' && factor != '/' && entryAfterOperator == false) {
        result.innerHTML += 6;
        console.log('==== ch 6/ partie 1 ====')
        console.log('entryAfterOperator= ' + entryAfterOperator)
        console.log('factor = ' + factor)
        console.log('end of line')
    } else if (factor == '*' && entryAfterOperator == true || factor == '-' && entryAfterOperator == true || factor == '+' && entryAfterOperator == true || factor == '/' && entryAfterOperator == true) {
        result.innerHTML += 6;
        console.log('==== ch 6/ partie 2 ====')
        console.log('entryAfterOperator= ' + entryAfterOperator)
        console.log('factor = ' + factor)
        console.log('end of line')
    } else if (factor == '*' && entryAfterOperator == false || factor == '-' && entryAfterOperator == false || factor == '+' && entryAfterOperator == false || factor == '/' && entryAfterOperator == false) {
        result.innerHTML = '';
        result.innerHTML += 6;
        entryAfterOperator = true;
        console.log('==== ch 6/ partie 3 ====')
        console.log('entryAfterOperator= ' + entryAfterOperator)
        console.log('factor = ' + factor)
        console.log('end of line')
    }
});
seven.addEventListener('click', () => {
    if (factor != '*' && factor != '-' && factor != '+' && factor != '/' && entryAfterOperator == false) {
        result.innerHTML += 7;
        console.log('==== ch 7/ partie 1 ====')
        console.log('entryAfterOperator= ' + entryAfterOperator)
        console.log('factor = ' + factor)
        console.log('end of line')
    } else if (factor == '*' && entryAfterOperator == true || factor == '-' && entryAfterOperator == true || factor == '+' && entryAfterOperator == true || factor == '/' && entryAfterOperator == true) {
        result.innerHTML += 7;
        console.log('==== ch 7/ partie 2 ====')
        console.log('entryAfterOperator= ' + entryAfterOperator)
        console.log('factor = ' + factor)
        console.log('end of line')
    } else if (factor == '*' && entryAfterOperator == false || factor == '-' && entryAfterOperator == false || factor == '+' && entryAfterOperator == false || factor == '/' && entryAfterOperator == false) {
        result.innerHTML = '';
        result.innerHTML += 7;
        entryAfterOperator = true;
        console.log('==== ch 7/ partie 3 ====')
        console.log('entryAfterOperator= ' + entryAfterOperator)
        console.log('factor = ' + factor)
        console.log('end of line')
    }
});
eight.addEventListener('click', () => {
    if (factor != '*' && factor != '-' && factor != '+' && factor != '/' && entryAfterOperator == false) {
        result.innerHTML += 8;
        console.log('==== ch 8/ partie 1 ====')
        console.log('entryAfterOperator= ' + entryAfterOperator)
        console.log('factor = ' + factor)
        console.log('end of line')
    } else if (factor == '*' && entryAfterOperator == true || factor == '-' && entryAfterOperator == true || factor == '+' && entryAfterOperator == true || factor == '/' && entryAfterOperator == true) {
        result.innerHTML += 8;
        console.log('==== ch 8/ partie 2 ====')
        console.log('entryAfterOperator= ' + entryAfterOperator)
        console.log('factor = ' + factor)
        console.log('end of line')
    } else if (factor == '*' && entryAfterOperator == false || factor == '-' && entryAfterOperator == false || factor == '+' && entryAfterOperator == false || factor == '/' && entryAfterOperator == false) {
        result.innerHTML = '';
        result.innerHTML += 8;
        entryAfterOperator = true;
        console.log('==== ch 8/ partie 3 ====')
        console.log('entryAfterOperator= ' + entryAfterOperator)
        console.log('factor = ' + factor)
        console.log('end of line')
    }
});
nine.addEventListener('click', () => {
    if (factor != '*' && factor != '-' && factor != '+' && factor != '/' && entryAfterOperator == false) {
        result.innerHTML += 9;
        console.log('==== ch 9/ partie 1 ====')
        console.log('entryAfterOperator= ' + entryAfterOperator)
        console.log('factor = ' + factor)
        console.log('end of line')
    } else if (factor == '*' && entryAfterOperator == true || factor == '-' && entryAfterOperator == true || factor == '+' && entryAfterOperator == true || factor == '/' && entryAfterOperator == true) {
        result.innerHTML += 9;
        console.log('==== ch 9/ partie 2 ====')
        console.log('entryAfterOperator= ' + entryAfterOperator)
        console.log('factor = ' + factor)
        console.log('end of line')
    } else if (factor == '*' && entryAfterOperator == false || factor == '-' && entryAfterOperator == false || factor == '+' && entryAfterOperator == false || factor == '/' && entryAfterOperator == false) {
        result.innerHTML = '';
        result.innerHTML += 9;
        entryAfterOperator = true;
        console.log('==== ch 9/ partie 3 ====')
        console.log('entryAfterOperator= ' + entryAfterOperator)
        console.log('factor = ' + factor)
        console.log('end of line')
    }
});
comma.addEventListener('click', () => {
    function isFloat(n) {
        return Number(n) === n && n % 1 !== 0;
    }

    if (!isFloat(parseFloat(result.innerHTML)))
        return result.innerHTML += '.';
});

AC.addEventListener('click', () => {
    result.innerHTML = '';
    displayResult = '';
    factor = '';
    lastResult = '';
    entryAfterOperator = false;
});

/*
*     if (factor == '+'){
        lastResult = result.innerHTML;
        result.innerHTML = parseFloat(displayResult) + parseFloat(lastResult);
    } else if(factor == '-'){
        lastResult = result.innerHTML;
        result.innerHTML = parseFloat(displayResult) - parseFloat(lastResult);
    } else if(factor == '*'){
        lastResult = result.innerHTML;
        result.innerHTML = parseFloat(displayResult) * parseFloat(lastResult);
    } else if(factor == '/'){
        lastResult = result.innerHTML;
        result.innerHTML = parseFloat(displayResult) / parseFloat(lastResult);
        console.log(parseFloat(lastResult))
        console.log(parseFloat(displayResult))
    }
    * switch (factor){
        case '+':
            lastResult = result.innerHTML;
            result.innerHTML = parseFloat(displayResult) + parseFloat(lastResult);
            break;
        case '-':
            lastResult = result.innerHTML;
            result.innerHTML = parseFloat(displayResult) - parseFloat(lastResult);
            break;
        case '*':
            lastResult = result.innerHTML;
            result.innerHTML = parseFloat(displayResult) * parseFloat(lastResult);
            break;
        case '/':
            lastResult = result.innerHTML;
            result.innerHTML = parseFloat(displayResult) / parseFloat(lastResult);
            break;
*
* */