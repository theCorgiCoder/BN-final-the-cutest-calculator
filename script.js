// All logic for Calculator
const buttons = document.querySelectorAll("button");

let displayValue = "0";
let result = ""; // is an empty string or null better?

function updateDisplay() {
  const display = document.getElementById("display");
  display.innerText = displayValue;
  console.log("updated display");
}

updateDisplay();
console.log(displayValue);

//listeners for button clicks

function onClickHandler() {
  buttons.forEach((button) => {
    button.addEventListener("click", function (e) {
      const inputValue = button.classList;
      const innerText = button.innerText;
      if (inputValue.contains("number")) {
        inputNumbers(innerText);
        updateDisplay();
      } else if (inputValue.contains("operator")) {
        inputOperators(innerText);
        updateDisplay();
      } else if (inputValue.contains("clear")) {
        inputClearAll();
        updateDisplay();
      } else if (inputValue.contains("delete")) {
        inputDelete();
        updateDisplay();
      } else if (inputValue.contains("equals")) {
        inputEquals();
        updateDisplay();
      } else if (inputValue.contains("decimal")) {
        inputAddDecimal();
        updateDisplay();
      } else {
        console.log(innerText);
      }
    });
  });
}

onClickHandler();

function inputNumbers(num) {
  //first input
  //need parameters for if a operator was used
  if (displayValue === "0" || displayValue === 0) {
    displayValue = num;
  } else {
    displayValue += num;
  }
}

function inputClearAll() {
  return console.log("clear all");
}

function inputDelete() {
  return console.log("delete/backspace");
  // splice method on currentValue of display
}

function inputAddDecimal() {
  // don't use more than 1x
  //limit 0's as 1st number
  return console.log("add .");
}

function inputEquals() {
  return console.log("equals");
}

function useOperators(operator) {
  //logic for operators
  result = operate(Number, Number, operator); //result needs to equal the operate function,
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
