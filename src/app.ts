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

 