console.log("funcionando calculadora");

document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault();
    calculadora2(event);
});

function calculadora2(event){
    event.preventDefault();

    const Num1 = parseFloat(document.getElementById("Num1").value);
    const Num2 = parseFloat(document.getElementById("Num2").value);
    const operaciones = document.getElementById("operaciones").value;
    const resultado = document.getElementById("resultado");
    let calculo;

    switch(operaciones) {
        case "+":
            calculo = Num1 + Num2;
            break;
        case "-":
            calculo = Num1 - Num2;
            break;
        case "*":d 
            calculo = Num1 * Num2;
            break;
        case "/":
            if (Num2 !== 0) {
                calculo = Num1 / Num2;
            } else {
                calculo = "No se puede dividir por cero.";
            }
            break;
        default:
            calculo = "Operación no válida";
            break;
    }
    
    resultado.textContent = `El resultado es: ${calculo}`;
    console.log(operaciones);
}

    //console.log(`El valor1 es ${Num1} el valor 2 es ${Num2}`)
    
    //let calculo = Num1 + Num2;
   // resultado.textContent = `el resultado es ${calculo}`;
//}

//console.log("funcionando calculadora")

//function restar(event) {
    

    //parsefloat convierte string a decimal
     //parsefloat convierte string a int

    
   // let calculo = parseFloat(Num1.value) - parseFloat(Num2.value);
   // resultado.textContent = `el resultado es ${calculo}`;
    
