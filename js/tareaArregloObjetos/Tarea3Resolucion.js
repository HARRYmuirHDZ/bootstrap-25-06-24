let series = [
    { id: 1, Serie: "Ana", Categoria: "Drama", Temporadas: 2 },
    { id: 2, Serie: "Stranger Things", Categoria: "Ciencia Ficción", Temporadas: 4 },
    { id: 3, Serie: "The Crown", Categoria: "Historia", Temporadas: 5 },
    { id: 4, Serie: "La Casa de Papel", Categoria: "Crimen", Temporadas: 5 }
];


let personas = [
    { id: 1, nombre: "Ana", apellido: "Drama", edad: 2 },


];
let animales = [
    { id: 1, nombre: "Ana", apellido: "Drama", edad: 2 },


];
let plantas = [
    { id: 1, nombre: "Ana", apellido: "Drama", edad: 2 },
    { id: 2, nombre: "Ana", apellido: "Drama", edad: 2 },

];
//1
Mostrar(series)
function Mostrar(datos) {
    datos.forEach(item => {
        //debugger
        console.log(`La informacion es ${item.Serie} ${item.Categoria}`)
    });


}
//2 
longitud(plantas)

function longitud(datos) {
    console.log(datos.length)


}

//3
Mayuscula(series)

function Mayuscula(datos) {
    datos.forEach(element => {
        console.log(`El texto es : ${element.Serie.toUpperCase()}`)
    });
}
//3
Minus(series)

function Minus(datos) {

    datos.forEach(element => {
        if (element.Serie == "Ana")
            console.log(`El texto es : ${element.Serie.toLowerCase()}`)
    });
}

//5

BuscarSerie(series, "Stranger Things")

function BuscarSerie(datos, nombre) {


    datos.forEach(element => {
        if (element.series === nombre) {
            console.log(`Serie encontrada: ${element.Serie}`)

        } else {
            console.log(":(")
        }
    });

}
BuscarSerie2(series, "Stranger Things")
function BuscarSerie2(datos, nombre) {

    let encontrar = datos.find(element => element.Serie === nombre)


    if (encontrar) {
        console.log(`Serie encontrada: ${encontrar.Serie}`)

    } else {
        console.log(":(")
    }
}
verificar(series, "Stranger Things")

function verificar(datos, palabra) {

    datos.forEach(element => {
        console.log(element.Serie.includes(palabra))
    });
}


Insertar(series, { id: 5, Serie: "las aventuras de tobias", Categoria: "Drama", Temporadas: 2 })

function Insertar(datos, nuevo) {
    datos.push(nuevo)
    console.log("nuevo", nuevo)
    console.log("Lista", datos)
}