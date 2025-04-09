//Estructura de decision

/*
condicional simple
if(condicion logica){
    todas las lineas de codigo que quiero ejecutar si se cumple la condicion
}

condicional doble
if(condicion logica){
    todas las lineas de codigo que quiero ejecutar si se cumple la condicion
}else{
    todas las lineas de codigo que quiero ejecutar si no se cumple la condicion
}

if(condicion logica){
    todas las lineas de codigo que quiero ejecutar si se cumple la condicion
}else-if(condicion logica 2){
    todas las lineas de codigo que quiero ejecutar si no se cumple la condicion
}
*/

//Pedir la edad y decir si es mayor de edad: Crear un algoritmo que pida la edad del usuario y 
//determine si es mayor de edad (18 años o más).

const edad = parseInt(prompt('Ingrese su edad'))
if( edad >= 18){
    alert('Sos mayor de edad')
}else{
    alert('Sos menor de edad')
}