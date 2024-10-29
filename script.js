const display = document.getElementById("display");
let firstOperand = null;
let secondOperand = null;
let currentOperator = null;
let shouldResetDisplay = false;

function resetDisplay() {
	display.innerText = "0";
	shouldResetDisplay = false;
}

function clear() {
	display.innerText = "0";
	firstOperand = null;
	secondOperand = null;
	currentOperator = null;
}

function appendNumber(number) {
	if (display.innerText === "0" || shouldResetDisplay) {
		display.innerText = number;
		shouldResetDisplay = false;
	} else {
		display.innerText += number;
	}
}

function chooseOperator(operator) {
	if (currentOperator !== null) evaluate();
	firstOperand = parseFloat(display.innerText);
	currentOperator = operator;
	shouldResetDisplay = true;
}

function evaluate() {
	if (currentOperator === null || shouldResetDisplay) return;
	if (currentOperator === "/" && display.innerText === "0") {
		display.innerText = "Error";
		return;
	}
	secondOperand = parseFloat(display.innerText);
	display.innerText = operate(currentOperator, firstOperand, secondOperand);
	currentOperator = null;
}

function operate(operator, a, b) {
	switch (operator) {
		case "+":
			return a + b;
		case "-":
			return a - b;
		case "*":
			return a * b;
		case "/":
			return a / b;
		default:
			return null;
	}
}

document.querySelectorAll(".btn").forEach((button) => {
	button.addEventListener("click", () => {
		if (button.id === "clear") clear();
		else if (button.id === "equals") evaluate();
		else if (["add", "subtract", "multiply", "divide"].includes(button.id)) {
			chooseOperator(button.innerText);
		} else if (button.id === "decimal") {
			if (!display.innerText.includes(".")) display.innerText += ".";
		} else {
			appendNumber(button.innerText);
		}
	});
});
