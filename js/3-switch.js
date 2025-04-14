/*
Cree un programa al estilo de un cajero automatico con las siguientes opciones:
1- consultar el saldo
2- ingresar dinero
3- extraer dinero

switch(opcion){
    case 1:
        todas las lineas de codigo si la opcion es 1
        break;
    case 2:
        todas las lineas de codigo si la opcion es 2
        break;
    case n:
        todas las lineas de codigo si la opcion es n
        break;
    default:
        todas las lineas de codigo que se ejecutan si la opcion ingresada no coincide con ninguno de los casos programados anteriormente.
}
*/

//declarar e inicializar variables
let opcion = parseInt(
  prompt(
    "Selecione una opción: 1- consultar el saldo, 2- ingresa dinero, 3- extraer dinero"
  )
);
let saldo = 10000;

switch (opcion) {
  case 1:
    document.writeln("Su saldo es : $" + saldo);
    break;
  case 2:
    const deposito = Number(prompt("Ingrese el monto a depositar"));
    console.log(deposito);
    saldo = saldo + deposito; // saldo += deposito
    // document.writeln(
    //   "Depositaste $" + deposito + ", tu saldo actual es: $" + saldo
    // );
    document.writeln(
      `<br>Depositaste $${deposito}, tu saldo actual es: $${saldo}`
    );
    break;

}
