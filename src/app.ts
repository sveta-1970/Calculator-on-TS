const keys = document.querySelector(".keys") as HTMLDivElement;
const rezult = document.getElementById("eq") as HTMLInputElement;
const display = document.querySelector(".display input") as HTMLInputElement;
let counter: number = 0;

keys.addEventListener("click", click);

function toggleSign(value: string): string {
  if (value.startsWith("-")) {
    return value.substr(1); // Remove the negative sign
  } else {
    return "-" + value; // Add the negative sign
  }
}

function click(e: MouseEvent) {
  const target = e.target as HTMLButtonElement | null;
  if (target) {
    let button_value: string = target.value;

    switch (button_value) {
      case "=":
        if (display.value === "") {
          display.value = "0";
        } else {
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
        } else if (counter === 1) {
          display.value = (-parseFloat(display.value)).toString();
          counter = 0;
        }
        break;

      default:
        if (display.value == "0") {
          display.value = button_value;
        } else {
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
