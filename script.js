document.querySelector(".themeButton").addEventListener("click", (e) => {
  const ballElement = document.getElementById("ball");
  const resultsElement = document.getElementById("results");
  const buttonContainerElement = document.getElementById("buttonContainer");
  const labelTextElement = document.getElementById("labelText");
  const calcElement = document.getElementById("calc");
  const themeTextElement = document.getElementById("themeText");

  if (ballElement.classList.contains("ball-move")) {
    ballElement.classList.remove("ball-move");
    ballElement.classList.add("ball-move2");
    resultsElement.classList.remove("resultsWhite");
    resultsElement.classList.add("resultsPurple");
    buttonContainerElement.classList.remove("buttonContainerWhite");
    buttonContainerElement.classList.add("buttonContainerPurple");
    labelTextElement.classList.remove("labelTextWhite");
    labelTextElement.classList.add("labelTextPurple");
    calcElement.classList.remove("calcWhite");
    calcElement.classList.add("calcPurple");
    themeTextElement.classList.remove("themeTextWhite");
    themeTextElement.classList.add("themeTextPurple");
    document.body.classList.remove("white");
    document.body.classList.add("purple");
  } else if (ballElement.classList.contains("ball-move2")) {
    ballElement.classList.remove("ball-move2");
    resultsElement.classList.remove("resultsPurple");
    resultsElement.classList.add("results");
    buttonContainerElement.classList.remove("buttonContainerPurple");
    buttonContainerElement.classList.add("buttonContainer");
    labelTextElement.classList.remove("labelTextPurple");
    labelTextElement.classList.add("labelText");
    calcElement.classList.remove("calcPurple");
    calcElement.classList.add("calc");
    themeTextElement.classList.remove("themeTextPurple");
    themeTextElement.classList.add("themeText");
    document.body.classList.remove("purple");
  } else {
    ballElement.classList.add("ball-move");
    resultsElement.classList.remove("results");
    resultsElement.classList.add("resultsWhite");
    buttonContainerElement.classList.remove("buttonContainer");
    buttonContainerElement.classList.add("buttonContainerWhite");
    labelTextElement.classList.remove("labelText");
    labelTextElement.classList.add("labelTextWhite");
    calcElement.classList.remove("calc");
    calcElement.classList.add("calcWhite");
    themeTextElement.classList.remove("themeText");
    themeTextElement.classList.add("themeTextWhite");
    document.body.classList.add("white");
  }
});

const numberButtons = document.querySelectorAll("[data-number]");
const OperationButtons = document.querySelectorAll("[data-operator]");
const equalsButton = document.querySelector("[data-equals]");
const deleteButton = document.querySelector("[data-delete]");
const allClearButton = document.querySelector("[data-all-clear]");
const previousOperandTextElement = document.querySelector(
  "[data-previous-operand]"
);
const currentOperandTextElement = document.querySelector(
  "[data-current-operand]"
);

class Calculator {
  constructor(previousOperandTextElement, currentOperandTextElement) {
    this.previousOperandTextElement = previousOperandTextElement;
    this.currentOperandTextElement = currentOperandTextElement;
    this.clear();
  }

  appendNumber(number) {
    if (this.currentOperand.includes(".") && number === ".") return;
    this.currentOperand = `${this.currentOperand}${number.toString()}`;
  }

  clear() {
    this.currentOperand = "";
    this.previousOperand = "";
    this.operation = undefined;
  }
  updateDisplay() {
    this.previousOperandTextElement.innerText = this.previousOperand;
    this.currentOperandTextElement.innerText = this.currentOperand;
  }
}

const calculator = new Calculator(
  previousOperandTextElement,
  currentOperandTextElement
);

for (const numberButton of numberButtons) {
  numberButton.addEventListener("click", () => {
    calculator.appendNumber(numberButton.innerText);
    calculator.updateDisplay();
  });
}

allClearButton.addEventListener("click", () => {
  calculator.clear();
  calculator.updateDisplay();
});
