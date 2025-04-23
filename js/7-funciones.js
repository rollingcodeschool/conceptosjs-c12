//declaracion tradicional
function saludar(){
    //bloque de codigo que quiero reutilizar mas adelante
    document.writeln('<p>Hola mundo 🌎</p>')
}

//expresion de función
const despedirnos = function (){
    document.writeln('<p>Adios mundo 🌎</p>')
}

//funcion con parametro
function sumar(num1, num2){
    document.writeln(`<p>El resultado es: ${num1 + num2} </p>`)
}

// funcion que retorna un valor
// function multiplicar(num1, num2){
//     // const resultado = 
//     return num1 * num2
//     // nunca va nada luego del return
//     // console.log(num1)
// }

//arrow functions
const multiplicar = (num1,num2) => num1 * num2
const saludarMundo = () => document.writeln('<p>Hola mundo 🌎 version 2</p>')
const saludarPersona = (nombrePersona='Anonimus') =>  document.writeln(`<p>Hola ${nombrePersona}</p>`)

//invocar o llamar una función
saludar()
despedirnos()

const numero1 = parseInt(prompt('Ingresa el primer número'))
const numero2 = parseInt(prompt('Ingresa el segundo número'))
const nombre = prompt('Ingresa tu nombre')

sumar(numero1,numero2);
sumar(numero1,10);
sumar("230",10);

console.log(multiplicar(numero1, numero2))
const resultado = multiplicar(numero1,numero2);
document.writeln(`<p>Multiplicar num1:${numero1} * num2:${numero2} = ${resultado} </p>`)
// document.writeln(`<p>Multiplicar num1:${numero1} * num2:${numero2}= ${multiplicar(numero1,numero2)} </p>`)

saludarMundo()
console.log(nombre)
console.log(nombre.trim())
saludarPersona(nombre.trim())
saludarPersona()