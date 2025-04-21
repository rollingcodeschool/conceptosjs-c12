//declaro un array vacio 
const alumnos = [];

//declaramos un array con datos
const frutas = ['manzana',20, true,'🍉','🍊']

//mostrar los datos
console.log(alumnos)
console.log(frutas)

document.writeln(alumnos)
document.writeln('<br>')
document.writeln(frutas)
document.writeln('<h2>Mostrar un array</h2>')

//cuantos elementos tiene el array
console.log(frutas.length)
//como accedemos a un elemento de un array
const posicionSandia = 3;
console.log(frutas[0])
console.log(frutas[posicionSandia])

document.writeln(`<ul>`)
for(let i=0; i< frutas.length; i++){
    document.writeln(`<li>${frutas[i]}</li>`)
}
document.writeln(`</ul>`)

document.writeln(`<p>Si accedo a la posicion 4 del array, obtengo: ${frutas[4]} </p>`)
document.writeln(`<p>Si accedo a la posicion 7 del array, obtengo: ${frutas[7]} </p>`)

document.writeln('<h2>Acciones para trabajar con arrays</h2>')

document.writeln('<h3>Agregar elementos en el array (al principio)</h3>')
//agregar un elemento al principio del array
frutas.unshift('🍇')
document.writeln(`<ul>`)
for(let i=0; i< frutas.length; i++){
    document.writeln(`<li>${frutas[i]}</li>`)
}
document.writeln(`</ul>`)

document.writeln('<h3>Agregar elementos en el array (al final)</h3>')
frutas.push('🥝', 30)
document.writeln(`<ul>`)
for(let i=0; i< frutas.length; i++){
    document.writeln(`<li>${frutas[i]}</li>`)
}
document.writeln(`</ul>`)

document.writeln('<h3>Agregar elementos en el medio del array </h3>')
frutas.splice(4,0,'🍎')

document.writeln(`<ul>`)
for(let i=0; i< frutas.length; i++){
    document.writeln(`<li>${frutas[i]}</li>`)
}
document.writeln(`</ul>`)

document.writeln('<h3>Modificar elementos del array </h3>')

frutas[3] = 'uvas'

document.writeln(`<ul>`)
for(let i=0; i< frutas.length; i++){
    document.writeln(`<li>${frutas[i]}</li>`)
}
document.writeln(`</ul>`)

document.writeln('<h3>Eliminar el primer elemento del array </h3>')

frutas.shift()

document.writeln(`<ul>`)
for(let i=0; i< frutas.length; i++){
    document.writeln(`<li>${frutas[i]}</li>`)
}
document.writeln(`</ul>`)

document.writeln('<h3>Eliminar el ultimo elemento del array </h3>')

frutas.pop()

document.writeln(`<ul>`)
for(let i=0; i< frutas.length; i++){
    document.writeln(`<li>${frutas[i]}</li>`)
}
document.writeln(`</ul>`)

document.writeln('<h3>Eliminar un elemento en el medio del array </h3>')

frutas.splice(1,1)
// frutas.splice(1,3) //borrar mas de un elemento desde la posicion 1
// frutas.splice(3) //borra todos los elementos desde la posicion 3 en adelante

document.writeln(`<ul>`)
for(let i=0; i< frutas.length; i++){
    document.writeln(`<li>${frutas[i]}</li>`)
}
document.writeln(`</ul>`)