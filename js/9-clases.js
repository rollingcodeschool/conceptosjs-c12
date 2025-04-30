//nombre, edad, apellido, genero, mail, nombreUsuario, estado
class Persona {
  //lo primero que hacemos es construir las propiedades del objeto
  
  constructor(nombreParam, edadParam, apellidoParam, generoParam, mailParam, nombreUsuarioParam) {
    this.nombre = nombreParam;
    this.edad = edadParam
    this.apellido = apellidoParam
    this.genero = generoParam
    this.mail = mailParam
    this.nombreUsuario = nombreUsuarioParam
    this.estado = true //propiedad por defecto
  }
  //propiedades computadas

  //metodos 
  mostrarDatos(){
    document.writeln(`<ul>
        <li>Nombre: ${this.nombre}</li>
        <li>Apellido: ${this.apellido}</li>
        <li>Edad: ${this.edad}</li>
        <li>Genero: ${this.genero}</li>
        <li>Email: ${this.mail}</li>
        </ul>`)
  }
  
}

//instancia de Persona o debo crear un objeto Persona
const ximena = new Persona('Ximena',29,'Barrientos','F','ximena@mail.com','ximenaBarrientos')
const jose = new Persona('jose',30,'Romero','M','joseRomero@mail.com','joseRomero')
ximena.mostrarDatos()
console.log(ximena)
jose.mostrarDatos()

//modificar datos del objeto, por fuera de la clase
jose.mail = 'joseRomero2@mail.com'
jose.mostrarDatos();