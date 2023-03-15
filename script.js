// All logic for Calculator

const buttons = document.querySelectorAll("button");
// const display = document.querySelector("display-number");
// console.log(display);

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const action = button.dataset.action;

    if (action === "add") {
      console.log("Addition");
    } else if (action === "subtract") {
      console.log("subtraction");
    } else if (action === "divide") {
      console.log("division");
    } else if (action === "multiply") {
      console.log("multiplication");
    } else if (action === "equals") {
      console.log("equals to");
    } else if (action === "clear") {
      console.log("clear all");
    } else if (action === "decimal") {
      console.log("decimal point");
    } else if (action === "negative-positive-integer") {
      console.log("negative or positive");
    } else {
      console.log("number");
    }
  });
});

function operate(num1, operator, num2) {
  let result = "";
  if (operator === "add") {
    result = num1 + num2;
  } else if (operator === "subtract") {
    result = num1 - num2;
  } else if (operator === "multiply") {
    result = num1 * num2;
  } else if (operator === "divide") {
    result = num1 / num2;
  }

  return result;
}

// console.log(operate(20, "divide", 2));
