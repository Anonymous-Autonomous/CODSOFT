let prevValue;
let operator;
const inputValue = document.getElementById("value");
let buttons = document.querySelectorAll(".number");
let operatorHandler = 0;
let specOperator1 = document.querySelector(".specOperator1");
let specOperator2 = document.getElementById("extra");
let specOperator3 = document.querySelector(".specOperator3");




for (const button of buttons) {
    button.addEventListener("click", () => {
        prevValue = inputValue.innerHTML;
        if (button.innerHTML == '*' && operatorHandler == 0) {
            console.log("hello");
            operatorHandler = 1;
            inputValue.innerText = prevValue + button.innerHTML;
        }
        else if (button.innerHTML == '+' && operatorHandler == 0) {
            inputValue.innerText = prevValue + button.innerHTML;
            operatorHandler = 1;
        }
        else if (button.innerHTML == '-' && operatorHandler == 0) {
            inputValue.innerText = prevValue + button.innerHTML;
            operatorHandler = 1;
        }
        else if (button.innerHTML == '%' && operatorHandler == 0) {
            inputValue.innerText = prevValue + button.innerHTML;
            operatorHandler = 1;
        }
        else {
            operatorHandler = 1;
            inputValue.innerText = prevValue + button.innerHTML;
        }
    })
}
specOperator1.addEventListener("click", (e) => {
    inputValue.innerText = "";
})
specOperator2.addEventListener("click", (e) => {
    try {
        inputValue.innerText = eval(inputValue.innerHTML);
    }
    catch (e){
        inputValue.innerText = "Error.."
    }
})
specOperator3.addEventListener("click",(e)=>{
    inputValue.innerHTML= inputValue.innerText.toString().slice(0,-1);
})
