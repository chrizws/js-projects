
let count = 0;

function counter() {
    count++;
    let counter = document.getElementById("counter");
    counter.innerText = count;

}

let savedNumbers = document.getElementById("display");

function saveNum() {
    let count = document.getElementById("counter").innerText;
    savedNumbers.textContent += count + " - ";

}
