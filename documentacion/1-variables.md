# Documentación del Código JavaScript Básico 📚✨

¡Hola, aprendices de JavaScript! 👋 Aquí les dejo una guía descontracturada del código que están estudiando. Vamos a entenderlo paso a paso con emojis y explicaciones claras.

## 📝 Comentarios en JavaScript

```javascript
// Comentario de una línea 🗒️

/* Esto es
un comentario 
de múltiples líneas 📑 */
```
Los comentarios son notas que el programador deja para explicar el código. JavaScript los ignora completamente.

## 🖨️ Mostrando mensajes

```javascript
console.log("Mensaje de prueba"); // Muestra en la consola del navegador 🖥️

document.writeln("<p>Feliz cumple vale 🎈 </p>"); // Escribe directamente en el HTML 🎂
document.writeln("Hola mundo"); // Otro mensaje en la página 🌍
```
## 📦 Variables

JavaScript tiene 3 formas de declarar variables:

```javascript
let anioNuevo; // Declarada pero sin valor �

let anio = 2025; // Declarada y asignada 🗓️
anio = 2024; // Puede cambiar su valor (let permite reasignar) 🔄

const url = "http://127.0.0.1:5500/index.html"; // Constante (no puede cambiar) 🔒
// url = 'nuevo valor' // Esto daría error ❌
```

## ➕ Ejemplo práctico: Suma de números

```javascript
const numero1 = parseInt(prompt('Ingrese un número')), 
  numero2 =  parseInt(prompt('Ingrese un segundo número'));
document.writeln("<br>La suma es:" + (numero1 + numero2));
```
- prompt() muestra un cuadro de diálogo para que el usuario ingrese datos 💬
- parseInt() convierte el texto a número 🔢
- Luego sumamos y mostramos el resultado 🧮

## 🧱 Tipos de datos primitivos

### 🔤 Strings (cadenas de texto)

```javascript
const nombreUsuario = 'Emilse Arias'; // Comillas simples
const producto = "Paraguas"; // Comillas dobles
const saludo = `Hola mundo`; // Backticks (permite interpolación)
```

### 🔢 Numbers (números)

```javascript
const edad = 30; // Entero
const precio = 3000.50; // Decimal
const negativo = -400; // Negativo
```

### � Booleanos (verdadero/falso)

```javascript
const esMayordeEdad = true; // Sí
const encendido = false; // No
```

### ⚫ Valores especiales

```javascript
const informacion = null; // Valor nulo (vacío intencional) 🕳️
let datosExtras; // undefined (no tiene valor asignado) ❓
```

## 🏗️ Tipos de datos referenciales

### 🧸 Objeto literal

```javascript
const funko = {
  nombre: 'ironman', // propiedad: valor
  numero: 'XSF3434',
  precio: 30.5
}
```

### 🎨 Array (lista)

```javascript
const colores = ['azul','amarillo', 'rojo'] // Lista ordenada 🌈
```
### Symbol (valor único)

```javascript
const alumno = Symbol('legajo') // Crea un identificador único 🔑
```
### 🔍 Mostrando valores en consola

```javascript
console.log(nombreUsuario); // Muestra cada variable
console.log(Number.MAX_SAFE_INTEGER) // Número más grande seguro en JS �
```

## 💡 Consejos finales
 - Usa const por defecto y let solo cuando necesites cambiar el valor 🔄
 - Los comentarios son tus amigos - explican tu código a otros (y a tu yo futuro) 🤓
 - Practica con diferentes tipos de datos para entenderlos mejor �
 - La consola (console.log) es tu mejor herramienta para debuggear 🐛
 - ¡Sigan codando! 🚀💻 El mejor aprendizaje viene con la práctica constante.