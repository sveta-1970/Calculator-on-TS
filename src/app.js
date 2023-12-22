"use strict";
const keys = document.querySelector(".keys");
const rezult = document.getElementById("eq");
const display = document.querySelector(".display input");
let counter = 0;
keys.addEventListener("click", click);
function toggleSign(value) {
    if (value.startsWith("-")) {
        return value.substr(1); // Remove the negative sign
    }
    else {
        return "-" + value; // Add the negative sign
    }
}
function click(e) {
    const target = e.target;
    if (target) {
        let button_value = target.value;
        switch (button_value) {
            case "=":
                if (display.value === "") {
                    display.value = "0";
                }
                else {
                    display.value = eval(display.value);
                }
                break;
            case "AC":
                display.value = "0";
                break;
            case "%":
                display.value = (parseFloat(display.value) * 0.01).toString();
                break;
            case "+/-":
                if (counter === 0) {
                    display.value = (-parseFloat(display.value)).toString();
                    counter++;
                }
                else if (counter === 1) {
                    display.value = (-parseFloat(display.value)).toString();
                    counter = 0;
                }
                break;
            default:
                if (display.value == "0") {
                    display.value = button_value;
                }
                else {
                    display.value += button_value;
                }
                break;
        }
    }
}
/*
  //const numberRegex = /^[0-9]+$/;
  if (numberRegex.test(button_value)) {
    // The button_value is a number
    console.log("Clicked a number:", button_value);
    const pressedButton: string = button_value;

  } else {
    // The button_value is not a number
    console.log("Clicked an operand:", button_value);
    switch (button_value) {
    }
    
  }
  */
/*

let tempIn = 0;
let counter = 0;
let operand1 = 0;



function click(e) {
  const button_value = e.target.value;
  rezult.disabled = false;
  switch (button_value) {
    case "=":
      if (display.value == "") {
        display.value = "";
      } else {
        display.value = eval(display.value);
        rezult.disabled = true;
      }
      break;
    case "m+":
      //memoryIn.disabled = false;
      tempIn = display.value;
      display.style.textAlign = "justify";
      display.value = "m" + "";
      rezult.disabled = true;
      if (tempIn) {
        memoryIn.disabled = true;
      }

      break;
    case "m-":
      display.style.textAlign = "right";
      display.value = tempIn;
      break;
    case "mrc":
      if (counter === 0) {
        tempIn = display.value;
        display.style.textAlign = "left";
        display.value = "m";
        counter++;
      } else if (counter === 1) {
        display.style.textAlign = "right";
        display.value = tempIn;
        counter++;
      } else {
        display.value = "";
        window.counter = 0;
      }
      break;
    case "C":
      display.value = "";
      break;
    default:
      display.value += button_value;
      break;
  }
}

*/
