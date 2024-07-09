//Tarea JS trate de utilizar funciones para encapsular su codigo . 


// 1-Crear una función que salude
// Crear una función llamada 'saludar' que tome un parámetro 'nombre' y retorne un saludo
// Solicitar al usuario ingresar su nombre y mostrar el saludo en la consola

function saludar(nombre) {
    return "Hola " + nombre;
}

let nombre = prompt("Ingresa tu nombre:");
console.log(saludar(nombre));



//  2-Determinar si una persona es mayor de edad

// Solicitar al usuario ingresar su edad
function esMayorDeEdad(edad){
return edad >= 18;
}

let edad = parseInt(prompt("Ingresa tu edad:"));
// Verificar si la persona es mayor de edad y mostrar el resultado en la consola
if (esMayorDeEdad(edad)) {
console.log("Eres mayor de Edad")
} else {
console.log("Eres menor de Edad")
}

// 3-Crear un objeto con información de un libro y mostrar una propiedad
// Crear un objeto llamado 'libro' con propiedades 'titulo', 'autor' y 'año'
let libro = {
    titulo: "El Principito",
    autor: "Antoine de Saint-Exupéry",
    año: 1943

};

// Mostrar la propiedad "El libro fue escrito por : 'autor' " 'autor' del objeto en la consola
console.log("El libro fue escrito por "+libro.autor);


//4-Verificar si una cadena está vacía

// Solicitar al usuario ingresar una cadena o string 
let cadena = prompt("Ingresa una cadena:");
// Verificar si la cadena está vacía y mostrar el resultado en la consola
if (cadena === 0) {
    console.log("cadena vacia");
} else {
    console.log("cadena No vacia");
}

//5-Usar un switch para mostrar el día de la semana

// Solicitar al usuario ingresar un número del 1 al 7
    let dia = parseInt(prompt("Ingresa un número del 1 al 7:"));
// Mostrar el día de la semana correspondiente usando un switch
    switch (dia) {
    case 1:
        console.log("Es Lunes ");
    break;

    case 2:
        console.log("Es Martes ");
    break;  

    case 3:
        console.log("Es Mieroles ");
    break;

    case 4:
        console.log("Es Jueves ");
    break;

    case 5:
        console.log("Es Viernes ");
    break;

    case 6:
        console.log("Es Sabado ");
    break;

    case 7:
        console.log("Es Domingo ");
    break;

    default:
    console.log("Ingresa un número del 1 al 7:");
    }

//6-Crear un array y mostrar la posicion 7 y 0
// Crear un array llamado 'Pokemones' con al menos 10 Especies

let Pokemones =["groudon","raiquaza","Latias","Latios","Articuno","Zapdos","Ho-oh","Regirock","kyogre","mewtwo"]
console.log(Pokemones[7])
console.log(Pokemones[0])

//7-Usar un operador lógico para verificar si un número está en un rango
// Solicitar al usuario ingresar un número
    let numero = parseFloat(prompt("Ingresa un número:"));
// // Verificar si el número está entre 1 y 10, y mostrar el resultado en la consola
    if (numero >= 1 && numero <= 10) {
    console.log("si el número está entre 1 y 10");
    } else {
    console.log("No el numero no esta entre 1 y 10");
    }

//8 Sumar dos números ingresados por el usuario

// Solicitar al usuario ingresar dos números
    let numero1 = parseFloat(prompt("Ingresa el primer número:"));
    let numero2 = parseFloat(prompt("Ingresa el segundo número:"));
// // Sumar los números y mostrar el resultado en la consola
    let suma = numero1+numero2;
    console.log("da igual a "+suma);

//9 Crear una constante y mostrarla en consola

// Crear una constante llamada 'pi' y asignarle un valor
    const pi= 3.14;
// // Mostrar el valor de 'pi' en la consola
    console.log("PI es igual a = "+pi);

// 10 Verificar si una persona puede votar
// Instrucción: Solicitar al usuario ingresar su edad y nacionalidad. Crear una función que verifique si la persona puede votar. La persona puede votar si tiene 18 años o más y es de nacionalidad 'peruana' o 'colombiana'.

// Solicitar al usuario ingresar su edad y nacionalidad


//no pude hacer esta me quedo mal//
let edad = parseInt(prompt("Ingresa tu edad:"));
let nacionalidad = prompt("Ingresa tu nacionalidad:");

// // Función para verificar si la persona puede votar
function puedeVotar(edad, nacionalidad) {
    return (edad >= 18 && (nacionalidad === "colombiano" || nacionalidad === "peruana"))
}

if (puedeVotar(edad, nacionalidad)) {
    console.log("Puedes votar.");
} else {
    console.log("No puedes votar.");
}


// //11  Determinar si una persona está en edad escolar
// // Instrucción: Solicitar al usuario ingresar su edad y verificar si la persona está en edad escolar (de 6 a 18 años) o si es un adulto mayor (65 años o más).
// // Solicitar al usuario ingresar su edad
let edad = parseInt(prompt("Ingresa tu edad:"));

// Función para verificar si la persona está en edad escolar o es adulto mayor
function verificarEdad(edad) {
    if (edad >= 6 && edad <= 18) {
        return "Estás en edad escolar.";
    } else if (edad >= 65) {
        return "Eres un adulto mayor.";
    } else {
        return "No estás en edad escolar ni eres un adulto mayor.";
    }
}

// Llamar a la función y mostrar el resultado
let resultado = verificarEdad(edad);
alert(resultado);
