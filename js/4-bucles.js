// Bucles while - do-while - for
/*
while - mientras
while(condicion logica){   
todas las lineas de codigo que quiero repetir muchas veces
agregar algun código para que la condicion logica se deje de cumplir en algun momento
}
*/
let renglon = 1
while( renglon <= 50){
    document.writeln(`<p>Renglon número ${renglon}</p>`)
    renglon = renglon + 1;  // renglon++
}

/*
hacer - mientras
do{
    todas las lineas de codigo que quiero ejecutar varias veces
    agregar algun código para que la condicion logica se deje de cumplir en algun momento
}while(condicion logica)
*/

let linea =1;
do{
    document.writeln(`<p>Linea número ${linea}</p>`)
    linea++;
}while( linea <=50)

//For
/*
for(let variable=0 ; variable<50 ; variable = variable+2 ){
    lineas de codigo que quiero ejecutar muchas veces
}
*/

//cuenta regresiva
for(let contador=10; contador>0 ; contador--){
    document.writeln(`<p>Cuenta regresiva: ${contador}</p>`)
}