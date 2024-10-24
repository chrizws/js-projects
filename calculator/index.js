let answer = document.getElementById("answer");


function add() {
    let num1 = document.getElementById("num1");
    let num2 = document.getElementById("num2");

    answer.textContent = +num1.value + +num2.value;

}

function subtract() {
    let num1 = document.getElementById("num1");
    let num2 = document.getElementById("num2");
    answer.textContent = +num1.value - +num2.value;

}

function divide() {
    let num1 = document.getElementById("num1");
    let num2 = document.getElementById("num2");
    answer.textContent = +num1.value / +num2.value;
}

function multiply() {
    let num1 = document.getElementById("num1");
    let num2 = document.getElementById("num2");
    answer.textContent = +num1.value * +num2.value;
}
