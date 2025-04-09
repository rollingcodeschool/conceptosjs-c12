# Estructuras de Decisión en JavaScript 🤔➡️↩️

¡Hola devs! 👋 Vamos a aprender sobre las estructuras que permiten a nuestro código tomar decisiones, como si tuviera cerebro 🧠✨.

## 📊 Estructuras Condicionales Básicas

### 1. Condicional Simple (IF) ✔️

```javascript
if(condicion logica) {
    // Código que se ejecuta SI la condición es verdadera
}
```

#### Ejemplo

```javascript
if (llueve) {
  llevarParaguas(); // Solo si llueve ☔
}
```

### 2. Condicional Doble (IF-ELSE) ✔️❌

```javascript
if(condicion logica) {
    // Código si es verdadero
} else {
    // Código si es falso
}
```

#### Ejemplo

```javascript
if (tengoHambre) {
  comer(); // 🍕
} else {
  seguirProgramando(); // 💻
}
```

### 3. Condicional Múltiple (IF-ELSE IF) ✔️➖✔️

```javascript
if (condicion1) {
  // Código para condición1
} else if (condicion2) {
  // Código para condición2
} else {
  // Código si ninguna se cumple
}
```

## 🎯 Ejemplo Práctico: Validación de Edad

```javascript
const edad = parseInt(prompt("Ingrese su edad"));

if (edad >= 18) {
  alert("Sos mayor de edad"); // 👍
} else {
  alert("Sos menor de edad"); // 👶
}
```

### ¿Cómo funciona este código? 🔍

- prompt() pide la edad al usuario (aparece un cuadrito) 💬
- parseInt() convierte el texto a número 🔢
- if(edad >= 18) verifica si la edad es 18 o más
- Muestra un mensaje diferente según el resultado 🎭

### 🚨 Errores Comunes

- Olvidar los paréntesis () después del if
- Confundir = (asignación) con == o === (comparación)
- No usar llaves {} cuando hay múltiples líneas

## 📚 Para Recordar

- if es como decir "SI pasa esto, ENTONCES haz esto"
- else es como decir "EN CASO CONTRARIO, haz esto otro"
- Las condiciones siempre deben evaluar a true o false

¡Practiquen con diferentes condiciones para dominarlas! 💪 El código que toma decisiones es código inteligente. 🤖
