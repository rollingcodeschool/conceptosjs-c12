let saldo = 10000;

do {
  const opcion = parseInt(
    prompt(
      "Selecione una opción: 1- consultar el saldo, 2- ingresa dinero, 3- extraer dinero"
    )
  );
  switch (opcion) {
    case 1:
    case "1":
    case "saldo":
      document.writeln("<br>Su saldo es : $" + saldo);
      console.log('Su saldo es : $' + saldo)
      break;
    case 2:
      const deposito = Number(prompt("Ingrese el monto a depositar"));
      console.log('Deposite:',deposito);
      saldo = saldo + deposito; // saldo += deposito
      console.log('saldo actual:',saldo);
      // document.writeln(
      //   "Depositaste $" + deposito + ", tu saldo actual es: $" + saldo
      // );
      document.writeln(
        `<br>Depositaste $${deposito}, tu saldo actual es: $${saldo}`
      );
      break;
    case 3:
      //preguntar al usuario cuanto quiere extraer
      const montoExtraer = Number(prompt("Ingrese el monto que desea extraer"));
      console.log(montoExtraer)
      //preguntar si el monto ingresado es valido
      if (montoExtraer <= saldo) {
        //extraer el dinero si esta todo bien
        saldo = saldo - montoExtraer; // saldo -= montoExtraer
        console.log(saldo)
        document.writeln(
          `Monto a extraer -$${montoExtraer}, tu saldo actual es: $${saldo}`
        );
      } else {
        document.writeln(`Saldo insuficiente`);
        console.log(`Saldo insuficiente`)
      }
      break;
    default:
      document.writeln("Ingresaste una opción invalida");
  }
} while (confirm("¿Desea realizar otra operación?"));
