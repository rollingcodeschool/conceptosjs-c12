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
const resultado = numero1 + numero2;

document.writeln("<br>La suma de los dos numeros ingresados es:" + resultado);
// document.writeln(resultado)
