// TODO: this file! :)
// TODO: this file! :)
const form = document.querySelector("form");
const sortOne = document.getElementById("sortOne");
const sortAll = document.getElementById("sortAll");
const output = document.querySelector("#numberBank output");
const oddsOutput = document.querySelector("#odds output");
const evensOutput = document.querySelector("#evens output");

let numberBank = []; 

const displayNumberBank = () => {
    output.innerText = numberBank.join(", ");
};

form.addEventListener("submit", function (event) {
    event.preventDefault();
    const data = new FormData(event.target);
    const num = parseInt(data.get("number"), 10);
    
    if (!isNaN(num)) {
        numberBank.push(num);
        displayNumberBank();
    } else {
        alert("Please enter a valid number.");
    }

    form.reset();
});

sortOne.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default button behavior
    if (numberBank.length > 0) {
        const num = numberBank.shift(); // Remove the first number from the bank
        if (num % 2 === 0) {
            evensOutput.innerText += `${num}, `;
        } else {
            oddsOutput.innerText += `${num}, `;
        }
        displayNumberBank();
    } else {
        alert("No numbers to sort.");
    }
});

sortAll.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default button behavior
    while (numberBank.length > 0) {
        const num = numberBank.shift(); // Remove the first number from the bank
        if (num % 2 === 0) {
            evensOutput.innerText += `${num}, `;
        } else {
            oddsOutput.innerText += `${num}, `;
        }
    }
    displayNumberBank();
});