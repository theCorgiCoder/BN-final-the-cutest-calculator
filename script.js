// All logic for Calculator
const buttons = document.querySelectorAll("button");
const display = document.getElementById("display");

let displayValue = "0";
let result = null;
let operationType = null;

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
    } else {
      console.log(innerText);
    }
  });
}

function inputNumbers(num) {
  //handles first input
  if (operationType === null) {
    if (displayValue === "0" || displayValue === 0) {
      displayValue = num;
      console.log("num input1", num);
    } else if (displayValue === num) {
      displayValue = num;
      console.log("num input2", num);
    } else {
      displayValue += num;
    }
  } else {
    displayValue = num;
  }
}

function useOperators(operatorPressed) {
  if (!display.innerText) {
    return;
  }
  if (operationType !== null) {
    if (display.innerText === null) {
      operationType = operatorPressed;
      console.log("op 1");
      return;
    }
  } else {
    operationType = operatorPressed;
    display.innerText = "";
    console.log("op 2");
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

function clearDisplay() {
  displayValue = "0";
  result = null;
  operationType = null;
}

function inputEquals() {
  if (!display.innerText) {
    return;
  }
  result = operate(Number(firstNumber), Number(secondNumber), operatorPressed);
  displayValue = result;

  console.log("equals");
}

function operate(n1, n2, op) {
  if (op === "-") {
    return n1 - n2;
  } else if (op === "+") {
    return n1 + n2;
  } else if (op === "/") {
    if (n2 === 0) {
      return "Nope, go home.";
    } else {
      return n1 / n2;
    }
  } else if (op === "*") {
    return n1 * n2;
  }
}
