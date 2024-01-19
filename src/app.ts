/**
 * MRC кнопка для отображения или стирания (при повторном нажатии) содержимого памяти 
M+ занести значение в память (если там ничего нет) или добавить то, что на экране к содержимому памяти (результат сложения сохраняется в памяти) 
M- вычесть то, что на экране, из содержимого памяти (результат вычитания сохраняется в памяти) 
let operand1 = 0;
 */

const keys = document.querySelector(".keys") as HTMLDivElement;
const rezult = document.getElementById("eq") as HTMLInputElement;
const display = document.querySelector(".display input") as HTMLInputElement;
const memoryFlag = document.querySelector("#memoryFlag") as HTMLSpanElement;
const memoryIn = document.querySelector("#memoryIn") as HTMLInputElement;
const memoryOut = document.querySelector("#memoryOut") as HTMLInputElement;

let counter: number = 0;
let tempIn: number = 0;

keys.addEventListener("click", click);

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

      //MRC кнопка для отображения или стирания (при повторном нажатии) содержимого памяти
      case "MRC":
        if (counter === 0) {
          display.value = tempIn.toString();
          memoryFlag.innerText = "";
          counter++;
        } else if (counter === 1) {
          display.value = "0";
          tempIn = 0;
          counter = 0;
        }
        break;

      //M+ занести значение в память (если там ничего нет) или добавить то, что на экране к содержимому памяти (результат сложения сохраняется в памяти)
      case "M+":
        if (memoryFlag.innerText === "m") {
          tempIn += parseFloat(display.value);
        } else {
          tempIn = parseFloat(display.value);
          memoryFlag.innerText = "m";
        }
        display.value = "0";
        break;

      //M- вычесть то, что на экране, из содержимого памяти (результат вычитания сохраняется в памяти)
      case "M-":
        tempIn -= parseFloat(display.value);
        display.value = "0";
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

function toggleSign(value: string): string {
  if (value.startsWith("-")) {
    return value.substr(1); // Remove the negative sign
  } else {
    return "-" + value; // Add the negative sign
  }
}

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
  */
