//notacion literal - cuando tengo que crear un objeto

const cancion = {
    //propiedades o atributos se escribren con esta sintaxis -> clave: valor
    titulo: 'Himno Nacional Argentino',
    autores: 'Vicente Lopez y Planes, Blas Parera',
    interprete: 'Abel pintos',
    duracionMinutos: 4,
    estado: true,
    anioAlbum:'2023' ,
    album: 'Alta en el cielo',
    genero: ['Marcha patriota'],
    idioma: 'Español',
    //metodos
    reproducir: function (){
        console.log(this)
        document.writeln(`<p>...Comenzando a reproducir la cancion ▶ ${this.titulo}<p>`)
    },
    stop: ()=> {
        console.log('Desde el metodo Stop')
        console.log(this) 
        document.writeln(`<p>La canción se detuvo ⏹<p> `)}
}

//clases

//que podemos hacer con el objeto
console.log(this)
//mostrar un objeto
console.log(cancion);
document.writeln(cancion+'<br>');
//mostrar las propiedades del objeto
document.writeln(`<p>Titulo: ${cancion.titulo}</p>`)
document.writeln(`<p>Autores: ${cancion.autores}</p>`)
document.writeln(`<p>Interprete: ${ cancion['interprete'] }</p>`)
document.writeln(`<p>Letra: ${cancion.letra}</p>`)

//modificar una propiedad del objeto
cancion.duracionMinutos = 5
document.writeln(`<p>Duración: ${cancion.duracionMinutos} minutos</p> `)

//agregar una propiedad al objeto
cancion.letra = '... toda la cancion';
document.writeln(`<p>Letra: ${cancion.letra}</p>`)

//borrar una propiedad del objeto
delete cancion.letra;
document.writeln(`<p>Letra: ${cancion.letra}</p>`)

//utilizar los metodos de un objeto
cancion.reproducir();
cancion.reproducir();
cancion.stop();