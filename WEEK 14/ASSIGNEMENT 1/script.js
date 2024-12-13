const result = document.getElementById('result');
const buttons = document.querySelectorAll('.keys button');

let currentInput = '';
let previousInput = '';
let operator = '';

function handleNumberClick(value) {
  currentInput += value;
  result.value = currentInput;
}

function handleOperatorClick(op) {
  if (currentInput === '') return;

  if (previousInput !== '') {
    calculate();
  }

  operator = op;
  previousInput = currentInput;
  currentInput = '';
}

function handleEqualClick() {
  if (previousInput === '' || currentInput === '') return;

  calculate();
  operator = '';
  currentInput = result.value;
  previousInput = '';
}

function calculate() {
  let computation;
  const prev = parseFloat(previousInput);
  const current = parseFloat(currentInput);

  if (isNaN(prev) || isNaN(current)) return;

  switch (operator) {
    case '+':
      computation = prev + current;
      break;
    case '-':
      computation = prev - current;
      break;
    case '*':
      computation = prev * current;
      break;
    case '/':
      computation = prev / current;
      break;
    default:
      return;
  }

  result.value = computation;
  currentInput = computation.toString();
  previousInput = '';
}

function handleClearClick() {
  currentInput = '';
  previousInput = '';
  operator = '';
  result.value = '';
}

buttons.forEach(button => {
  if (button.id === 'clear') {
    button.addEventListener('click', handleClearClick);
  } else if (button.id === 'equal') {
    button.addEventListener('click', handleEqualClick);
  } else if (button.id === 'add' || button.id === 'subtract' || button.id === 'multiply' || button.id === 'divide') {
    button.addEventListener('click', () => handleOperatorClick(button.innerText));
  } else {
    button.addEventListener('click', () => handleNumberClick(button.innerText));
  }
});

document.getElementById('decimal').addEventListener('click', () => {
  if (!currentInput.includes('.')) {
    currentInput += '.';
    result.value = currentInput;
  }
});
