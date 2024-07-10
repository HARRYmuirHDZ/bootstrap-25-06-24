

//console.log --mostrar
//alert ---mostrar
// prompt --ingresar

//console.log(mensaje)

//resultado 

//dom
//documento object model

//seleccionar el elemento del dom por el id y cambiar el contenido 

//documentos.obtenerporid(aqui id).propiedad = valor   
//document.getElementById("resultado").textContent = "hola mundo"

//document.getElementById("resultado").style.backgroundColor= "blue"

let divResultado = document.getElementById("resultado")

console.log(divResultado)



divResultado.textContent = "Hola mundo"
divResultado.style.backgroundColor ="red"


let pNombre = document.getElementById("Nombre")
console.log(pNombre)


pNombre.textContent = "Harry Muir"
pNombre.style.backgroundColor = "green"



let titulo = document.getElementById("titulo").value;

//titulo.textContent = "gato"
//titulo.innerHTML ="perro"


console.log(titulo)


let nuevoparrafo = document.createElement("p")
nuevoparrafo.textContent ="contenido de la etiqueta"
divResultado.appendChild(nuevoparrafo)

console.log(nuevoparrafo)



