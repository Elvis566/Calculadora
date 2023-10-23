var num1 = document.querySelector("#num1");
var num2 = document.querySelector("#num2");

var resultado = document.querySelector("#Resultado");

function suma(){
    let suma = parseInt(num1.value)+parseInt(num2.value);
    resultado.innerHTML=" El Resultado es: " +(suma);
}
function resta(){
    let resta = parseInt(num1.value)-parseInt(num2.value);
    resultado.innerHTML=" El Resultado es: " +(resta);
}