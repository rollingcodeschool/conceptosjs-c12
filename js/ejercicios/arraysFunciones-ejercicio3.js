// Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, repitiendo 50 veces esta operación.

function numeroAleatorio() {
    return  Math.floor(Math.random() * (6) + 1);
  }

const apariciones = [0,0,0,0,0,0,0,0,0,0,0,0,0] 

for(let indiceApariciones=0; indiceApariciones< 50; indiceApariciones++){
// guardar en una variable dado1, dado2, el valor obtenido de largar el dado
const dado1 = numeroAleatorio();
const dado2 = numeroAleatorio();
console.log('dado1:'+ dado1, 'dado2:'+dado2)
// sumar los dados
const suma =dado1 + dado2
console.log('suma:'+ suma)
//anotar cuantas veces salio cada suma 2 al 12
apariciones[suma] = apariciones[suma] + 1 //apariciones[suma]++ 
console.log(apariciones)
}
