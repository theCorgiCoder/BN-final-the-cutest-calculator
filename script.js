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
    } else {
      console.log(innerText);
    }
  });
}

function inputNumbers(num) {
  //handles first input
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

// Currently not working correctly....
function useOperators(operatorPressed) {
  if (display.innerText === "") {
    return;
  }
  if (operation1 === null) {
    if (number1 !== null && number2 === null) {
      operation1 = operatorPressed;
      console.log("opInput1: ", number1, operation1, number2);
      return;
    }
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

function clearDisplay() {
  displayValue = "0";
  result = null;
  operation1 = null;
  operation2 = null;
  number1 = null;
  number2 = null;
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
