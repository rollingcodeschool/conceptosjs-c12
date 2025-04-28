//declaro un array vacio
const alumnos = [];

//declaramos un array con datos
const frutas = ["manzana", 20, true, "🍉", "🍊"];

//funciones
const mostrarFrutas = (titulo) => {
  document.writeln(`<h3>${titulo}</h3>`);
  document.writeln(`<ul>`);
  for (let i = 0; i < frutas.length; i++) {
    document.writeln(`<li>${frutas[i]}</li>`);
  }
  document.writeln(`</ul>`);
};

//mostrar los datos
console.log(alumnos);
console.log(frutas);

document.writeln(alumnos);
document.writeln("<br>");
document.writeln(frutas);

//cuantos elementos tiene el array
console.log(frutas.length);
//como accedemos a un elemento de un array
const posicionSandia = 3;
console.log(frutas[0]);
console.log(frutas[posicionSandia]);

mostrarFrutas('Mostrar array');

document.writeln(
  `<p>Si accedo a la posicion 4 del array, obtengo: ${frutas[4]} </p>`
);
document.writeln(
  `<p>Si accedo a la posicion 7 del array, obtengo: ${frutas[7]} </p>`
);

document.writeln("<h2>Acciones para trabajar con arrays</h2>");

//agregar elementos en el array
frutas.unshift("🍇");
mostrarFrutas('Agregar elementos en el array (al principio)')

frutas.push("🥝", 30);
mostrarFrutas('Agregar elementos en el array (al final)')

frutas.splice(4, 0, "🍎");
mostrarFrutas('Agregar elementos en el medio del array')

//modificar elementos en el array
frutas[3] = "uvas";
mostrarFrutas('Modificar elementos del array ')

//borrar elementos en el array
frutas.shift();
mostrarFrutas('Eliminar el primer elemento del array')

frutas.pop();
mostrarFrutas('Eliminar el ultimo elemento del array')

frutas.splice(1, 1);
// frutas.splice(1,3) //borrar mas de un elemento desde la posicion 1
// frutas.splice(3) //borra todos los elementos desde la posicion 3 en adelante
mostrarFrutas('Eliminar un elemento en el medio del array')

document.writeln('<h2>Metodos extras para trabar con arrays</h2>')
//find()
// frutas.push('🍤');

const sandia = frutas.find((item)=> item === '🍉')
const sandiaPosition = frutas.findIndex((item)=> item === '🍉')
const camaron = frutas.find((item)=> item === '🍤')
const camaronPosition = frutas.findIndex((item)=> item === '🍤')
console.log(sandia)
console.log(sandiaPosition)
console.log(camaron)
console.log(camaronPosition)

document.writeln(`<p>Se encontro el elemento buscado: ${sandia}, en la posicion: ${sandiaPosition}</p>`)
document.writeln(`<p>Se encontro el elemento buscado: ${camaron}, en la posicion: ${camaronPosition}</p>`)
// falsy
/*
false
''
null
undefined
NaN
-1
*/

if(camaron){
  document.writeln(`<p>Se encontro el 
    elemento buscado: ${camaron}, en la posicion: ${camaronPosition}</p>`)
}else{
  document.writeln(`<p>No se encontro el elemento buscado '🍤'</p>`)
}

//operador ternario  ? :
// (condicion logica) ? 'texto' : 'otro texto'
// document.writeln(`${(camaron) ? '<p>Se encontro el elemento buscado: '+camaron+', en la posicion:'+camaronPosition+'</p>': "<p>No se encontro el elemento buscado '🍤'</p>" }`)

const respuesta = (camaron)? `<p>Se encontro el elemento buscado: ${camaron}, en la posicion: ${camaronPosition}</p>`:`<p>No se encontro el elemento buscado '🍤'</p>`

document.writeln(respuesta)