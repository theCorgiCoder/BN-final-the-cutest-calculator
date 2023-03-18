// All logic for Calculator
const buttons = document.querySelectorAll("button");
const display = document.getElementById("display");

let displayValue = "0";
let result = null; // is an empty string or null better?

function updateDisplay() {
  display.innerText = displayValue;
  console.log(
    "UPDATE: ",
    "Display: ",
    display.innerText,
    "displayValue: ",
    displayValue
  );
}
//Listens for all button click events and then calls handler function
function onClick() {
  buttons.forEach((button) => {
    button.addEventListener("click", onClickHandler(button));
  });
}

onClick();

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
      console.log(
        "DELETE-AFTER: ",
        "Display: ",
        display.innerText,
        "displayValue: ",
        displayValue
      );
    } else {
      console.log(innerText);
    }
  });
}

function inputNumbers(num) {
  //first input
  //need parameters for if a operator was used
  if (displayValue === "0" || displayValue === 0) {
    displayValue = num;
  } else {
    displayValue += num;
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
