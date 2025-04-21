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


//invocar o llamar una función
saludar()
despedirnos()

const numero1 = parseInt(prompt('Ingresa el primer número'))
const numero2 = parseInt(prompt('Ingresa el segundo número'))

sumar(numero1,numero2);
sumar(numero1,10);
sumar("230",10);

