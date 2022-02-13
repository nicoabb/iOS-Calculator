let num1;
let num2;
let symbol;

function backspace() {
    const txtValue = document.getElementById("value");
    if (txtValue.textContent.length !== 1) {
        const newTxt = txtValue.textContent.slice(0, -1);
        txtValue.innerHTML = newTxt;
    } else {
        txtValue.innerHTML = "0";
    }
}

function append(event){
    const newNumber = event.target.textContent;
    let txtValue = document.getElementById("value");
    const number = txtValue.textContent;
    console.log(num2)
    if (number === "0") {
        txtValue.innerHTML = newNumber;
    } else if (num2){ //if writing the second number, we'll rewrite what is in the result section
        txtValue.innerHTML = newNumber;
        num2 = Boolean(false); //false so doesn't rewrite the second number
    } else {
        txtValue.innerHTML = number + newNumber;
    }
}

function operate(event){
    symbol = event.target.textContent;
    if (symbol !== "C") {
        num1 = parseInt(document.getElementById("value").textContent);
        num2 = Boolean(true); //¡time to write the second number!
    } else {
        solve();
    }
}

function solve() {
    let result = 0;
    const txtValue = document.getElementById("value");
    num2 = parseInt(txtValue.textContent); //well now num2 is actually a number
    console.log(symbol)
    switch (symbol) {
        case "C":
            txtValue.innerHTML = "0";
            num2 = Boolean(false); //to prevent take a wrong num2, cause with C you clear all 
            break;
        case "÷":
            result = num1 / num2;
            break;
        case "×":
            result = num1 * num2;
            break;
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
    }
    txtValue.innerHTML = result.toString();
}