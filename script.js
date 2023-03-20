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
  // display.innerText = parseFloat(displayValue).toFixed(6);
  display.innerText = displayValue;
  console.log(
    "UPDATE: ",
    "Display: ",
    display.innerText,
    "displayValue: ",
    displayValue
  );
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
      console.log(
        "num input3",
        num,
        "n1: ",
        number1,
        "n2: ",
        number2,
        displayValue
      );
    } else if (displayValue === number1) {
      displayValue += num;
      number1 = displayValue;
      console.log(
        "num input2",
        num,
        "n1",
        number1,
        "n2",
        number2,
        displayValue
      );
    } else {
      displayValue += num;
      number1 = displayValue;
      console.log(
        "num input5",
        num,
        "n1",
        number1,
        "n2",
        number2,
        displayValue
      );
    }
  } else if (displayValue === number1) {
    //handles second number input
    displayValue = num;
    number2 = displayValue;
    console.log(
      "num input3",
      num,
      "n1: ",
      number1,
      "n2: ",
      number2,
      displayValue
    );
  } else {
    displayValue += num;
    number2 = displayValue;
    console.log(
      "num input4",
      num,
      "n1: ",
      number1,
      "n2: ",
      number2,
      displayValue
    );
  }
}

function useOperators(operatorPressed) {
  if (display.innerText === "") {
    return;
  }
  if (operation1 === null) {
    operation1 = operatorPressed;
    console.log("opInput1: ", number1, operation1, number2);
  } else {
    operation2 = operatorPressed;
    console.log("opInput2: ", number1, operation1, number2, operation2);
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
  console.log(number1);
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
  if (operation1 !== null) {
    result = operate(Number(number1), Number(number2), operation1);
    number2 = displayValue;
    if (result === "no") {
      displayValue = "Nope, stop it.";
    } else {
      displayValue = result;
      number1 = displayValue;
      number2 = null;
      operation1 = null;
      operation2 = null;
      result = null;
    }
  } else if (operation2 !== null) {
    number2 = displayValue;
    result = operate(Number(number1), Number(number2), operation1);
    if (result === "no") {
      displayValue = "Nope, stop it.";
    } else {
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
      return "no";
    } else {
      return n1 / n2;
    }
  }
}
