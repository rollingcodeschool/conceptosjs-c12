//nombre, edad, apellido, genero, mail, nombreUsuario, estado
//asistencia, presentacionPracticos, curso 
class Persona {
  //lo primero que hacemos es construir las propiedades del objeto
  //propiedad privada
  #mail;
  constructor(nombreParam, edadParam, apellidoParam, generoParam, mailParam, nombreUsuarioParam) {
    this.nombre = nombreParam;
    this.edad = edadParam
    this.apellido = apellidoParam
    this.genero = generoParam
    this.#mail = mailParam
    this.nombreUsuario = nombreUsuarioParam
    this.estado = true //propiedad por defecto
  }
  //propiedades computadas get y set
get getMail(){
    return this.#mail
}

set setMail(nuevoMail){
    if(nuevoMail.trim().length >0){
        this.#mail = nuevoMail
    }
}

  //metodos 
  mostrarDatos(){
    document.writeln(`<ul>
        <li>Nombre: ${this.nombre}</li>
        <li>Apellido: ${this.apellido}</li>
        <li>Edad: ${this.edad}</li>
        <li>Genero: ${this.genero}</li>
        <li>Email: ${this.#mail}</li>
        </ul>`)
  }
  
}

//herencia
class Alumno extends Persona{
    // puedo agregar propiedades privadas
    constructor(nombreParam, edadParam, apellidoParam, generoParam, mailParam, nombreUsuarioParam,  cursoParam){
       //invocar al constructor de la clase padre
       super(nombreParam, edadParam,apellidoParam,generoParam,mailParam,nombreUsuarioParam);
       this.asistencia = 0
       this.curso = cursoParam
       this.presentacionPracticos = []
    }
    //agregar get, set y metodos

    //polimorfismo
    mostrarDatos(){
        document.writeln(`<ul>
            <li>Nombre: ${this.nombre}</li>
            <li>Apellido: ${this.apellido}</li>
            <li>Edad: ${this.edad}</li>
            <li>Genero: ${this.genero}</li>
            <li>Email: ${this.getMail}</li>
            <li>Curso: ${this.curso}</li>
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
jose.setMail = 'joseRomero2@mail.com'
jose.mostrarDatos();

const valentina = new Alumno('Valentina', 30, 'Iramain', 'F', 'valentina@mail.com', 'valentinaIramain', 'Fullstack')
console.log(valentina)
valentina.mostrarDatos()

