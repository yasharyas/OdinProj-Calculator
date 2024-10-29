// script.js
function add(a, b) {
	return a + b;
}

function subtract(a, b) {
	return a - b;
}

function multiply(a, b) {
	return a * b;
}

function divide(a, b) {
	return b === 0 ? "Error" : a / b;
}
function operate(operator, a, b) {
	switch (operator) {
		case "+":
			return add(a, b);
		case "-":
			return subtract(a, b);
		case "*":
			return multiply(a, b);
		case "/":
			return divide(a, b);
		default:
			return null;
	}
}
let firstNumber = "";
let secondNumber = "";
let currentOperator = null;
let shouldResetDisplay = false;

const display = document.getElementById("display");

function updateDisplay(value) {
	display.textContent = value;
}

function appendNumber(number) {
	if (display.textContent === "0" || shouldResetDisplay) {
		display.textContent = number;
		shouldResetDisplay = false;
	} else {
		display.textContent += number;
	}
}
