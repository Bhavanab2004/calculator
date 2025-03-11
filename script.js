let currentInput = '';
let operator = '';
let previousInput = '';

function appendNumber(number) {
    if (currentInput.length < 12) {
        if (currentInput === '0') {
            currentInput = number;
        } else {
            currentInput += number;
        }
        updateDisplay();
    }
}

function chooseOperator(op) {
    if (currentInput === '' && previousInput !== '') {
        operator = op;
        return;
    }
    if (previousInput !== '') {
        computeResult();
    }
    operator = op;
    previousInput = currentInput;
    currentInput = '';
}

function computeResult() {
    if (previousInput === '' || currentInput === '') return;
    
    let result;
    const prev = parseFloat(previousInput);
    const curr = parseFloat(currentInput);

    switch (operator) {
        case '+':
            result = prev + curr;
            break;
        case '-':
            result = prev - curr;
            break;
        case '*':
            result = prev * curr;
            break;
        case '/':
            result = curr !== 0 ? prev / curr : 'Error';
            break;
        default:
            return;
    }

    currentInput = result.toString().slice(0, 12);
    operator = '';
    previousInput = '';
    updateDisplay();
}

function clearDisplay() {
    currentInput = '';
    operator = '';
    previousInput = '';
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').innerText = currentInput || '0';
}
