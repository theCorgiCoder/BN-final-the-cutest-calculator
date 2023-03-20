// All logic for Calculator
const buttons = document.querySelectorAll("button");
const display = document.getElementById("display");

let displayValue = "0";
let result = null;
let number1 = null;
let number2 = null;
let operation1 = null;
let operation2 = null;

function updateDisplay() {
  display.innerText = displayValue;
}
onClick();
//Listens for all button click events and then calls handler function
function onClick() {
  buttons.forEach((button) => {
    button.addEventListener("click", onClickHandler(button));
  });
}

function onClickHandler(button) {
  button.addEventListener("click", function () {
    const inputValue = button.classList;
    const innerText = button.innerText;
    if (inputValue.contains("number")) {
      inputNumbers(innerText);
      updateDisplay();
    } else if (inputValue.contains("operator")) {
      useOperators(innerText);
      updateDisplay();
    } else if (inputValue.contains("clear-all")) {
      clearDisplay(innerText);
      updateDisplay();
    } else if (inputValue.contains("equals")) {
      inputEquals(innerText);
      updateDisplay();
    } else if (inputValue.contains("decimal")) {
      inputAddDecimal(innerText);
      updateDisplay();
    } else if (inputValue.contains("delete")) {
      inputDelete();
    } else if (inputValue.contains("percentage")) {
      inputPercentage(innerText);
      updateDisplay();
    } else {
      return;
    }
  });
}

function inputNumbers(num) {
  //handles first number input
  if (operation1 === null) {
    if (displayValue === "0" || displayValue === 0) {
      displayValue = num;
      number1 = displayValue;
    } else if (displayValue === number1) {
      displayValue += num;
      number1 = displayValue;
    } else {
      displayValue += num;
      number1 = displayValue;
    }
  } else if (displayValue === number1) {
    //handles second number input
    displayValue = num;
    number2 = displayValue;
  } else {
    displayValue += num;
    number2 = displayValue;
  }
}

function useOperators(operatorPressed) {
  if (display.innerText === "") {
    return;
  }
  if (operation1 === null) {
    if (displayValue === "Nope, stop it.") {
      clearDisplay();
      return;
    }
    operation1 = operatorPressed;
  } else if (operation1 !== null && operation2 === null) {
    updateResult(operatorPressed);
  } else if (operation1 !== null && operation2 !== null) {
    updateResult(operatorPressed);
  } else {
    if (displayValue === "Nope, stop it.") {
      clearDisplay();
      return;
    }
    operation2 = operatorPressed;
  }
}

function updateResult(operatorPressed) {
  // Updates result first pair of numbers and operator1
  if (operation2 === null) {
    operation2 = operatorPressed;
    number2 = displayValue;
    result = operate(Number(number1), Number(number2), operation1);
    displayValue = result;
    number1 = displayValue;
    result = null;
  } else {
    // Updates every result after operation pressed
    number2 = displayValue;
    result = operate(Number(number1), Number(number2), operation2);
    operation2 = operatorPressed;
    displayValue = result;
    number1 = displayValue;
    result = null;
  }
}

function inputDelete() {
  display.innerText = display.innerText.slice(0, -1);
  return (displayValue = display.innerText);
}

function inputAddDecimal(decimal) {
  if (!displayValue.includes(decimal)) {
    if (displayValue === "0" || displayValue === null) {
      displayValue += decimal;
    } else {
      displayValue += decimal;
    }
  } else {
    return;
  }
}

function inputPercentage() {
  displayValue = number1 / 100;
}

function clearDisplay() {
  displayValue = "0";
  result = null;
  operation1 = null;
  operation2 = null;
  number1 = null;
  number2 = null;
}

function inputEquals() {
  if (operation1 !== null && operation2 === null) {
    if (result === "Nope, stop it.") {
      displayValue = "Nope, stop it.";
      clearDisplay();
    } else {
      result = operate(Number(number1), Number(number2), operation1);
      number2 = displayValue;
      displayValue = result;
      number1 = displayValue;
      number2 = null;
      operation1 = null;
      operation2 = null;
      result = null;
    }
  } else if (operation1 !== null && operation2 !== null) {
    if (result === "Nope, stop it.") {
      displayValue = "Nope, stop it.";
      clearDisplay();
    } else {
      result = operate(Number(number1), Number(number2), operation2);
      displayValue = result;
      number1 = displayValue;
      number2 = null;
      operation1 = null;
      operation2 = null;
      result = null;
    }
  } else {
    return;
  }
}

function operate(n1, n2, op) {
  if (op === "-") {
    return n1 - n2;
  } else if (op === "+") {
    return n1 + n2;
  } else if (op === "x") {
    return n1 * n2;
  } else if (op === "÷") {
    if (n2 === 0) {
      return "Nope, stop it.";
    } else {
      return n1 / n2;
    }
  }
}
