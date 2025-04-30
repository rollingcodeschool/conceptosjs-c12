// Crea un objeto libro que tenga propiedades título, autor, año y género. Luego, escribe una función que reciba un array de libros y un género y devuelva un array con los libros de ese género usando filter. Usa prompt para ingresar los datos de los libros y el género.

const libros = []

function filtrarPorGenero(arrayLibros, genero){
    const arrayFiltrado = arrayLibros.filter((itemlibro)=> itemlibro.genero === genero);
    return arrayFiltrado
}

do{
// título, autor, año y género
const titulo = prompt('Ingresa un titulo')
const autor = prompt('Ingresa un autor')
const anio = prompt('Ingresa un año')
const genero = prompt('Ingresa un genero')

// const libro = {
//     titulo: titulo,
//     autor: autor,
//     anio, //anio: anio
//     genero
// }

libros.push({titulo: titulo, 
    autor: autor,
    anio, //anio: anio
    genero})
console.log(libros)
}while(confirm('¿Desea ingresar otro libro?'))

//preguntar al usuario el genero
const generoSolicitado = prompt('Ingresa un genero para buscar')

const librosPorGenero= filtrarPorGenero(libros,generoSolicitado)
console.log(librosPorGenero)