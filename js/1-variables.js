//Comentario de una linea

/* Esto es
un comentario 
de multiples lineas */

console.log("Mensaje de prueba");

document.writeln("<p>Feli cumple vale 🎈 </p>");
document.writeln("Hola mundo");

// variables (let - const - var)
let anioNuevo;

let anio = 2025;

document.writeln("<br>Año actual " + anio);
document.writeln("<br>Año actual ", anio);

anio = 2024;
document.writeln("<br>Año actual ", anio);

const url = "http://127.0.0.1:5500/index.html";

document.writeln("<br>El link de live server es: " + url);

// url = 'nuevo valor'
document.writeln("<br>El link de live server es: " + url);

//Ejemplo de suma de dos numeros
// todo: cambiar este ejercicio por constantes
// const numero1, numero2, resultado
const numero1 = parseInt(prompt('Ingrese un número')), 
  numero2 =  parseInt(prompt('Ingrese un segundo número'));
document.writeln("<br>La suma de los dos numeros ingresados es:" + (numero1 + numero2));
// document.writeln(resultado)

//tipos de datos primitivos
//string
const nombreUsuario = 'Emilse Arias';
const producto = "Paraguas";
const saludo = `Hola mundo`;
//number
const edad = 30;
const precio = 3000.50;
const negativo = -400;

//booleanos
const esMayordeEdad = true;
const encendido = false;

//null - este valor indica el vacio
const informacion = null;

//undefined
let datosExtras;

//tipos de datos especiales
//objeto con notacion literal
const funko = {
  nombre: 'ironman',
  numero: 'XSF3434',
  precio: 30.5
}

const colores = ['azul','amarillo', 'rojo']

//symbol
const alumno = Symbol('legajo')

console.log(nombreUsuario);
console.log(producto);
console.log(saludo);
console.log(edad);
console.log(precio);
console.log(negativo);
console.log(esMayordeEdad);
console.log(encendido);
console.log(informacion);
console.log(datosExtras);
console.log(funko);
console.log(colores);
console.log(alumno);

console.log(Number.MAX_SAFE_INTEGER)