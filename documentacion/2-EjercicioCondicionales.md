# Sistema de Evaluación de Notas 📊🎓

¡Hola desarrolladores! 👋 Vamos a analizar este programa que evalúa el desempeño en un examen según la nota obtenida.

## 🎯 Objetivo del Programa
El código recibe una nota (entre 0 y 100) y muestra un mensaje diferente según estos rangos:
- Nota inválida: fuera del rango 0-100 ❌
- Desaprobado: 0-59 😮
- Aprobado con lo justo: 60-69 😋
- Aprobado con buen desempeño: 70-79 😎
- Excelente desempeño: 80-100 😁

## 🔍 Estructura del Código

```javascript
const nota = parseInt(prompt("Ingrese una nota de 0 al 100"));

if (!isNaN(nota)) {
  if (nota < 0 || nota > 100) {
    document.writeln("Nota invalida");
  } else if (nota <= 59) {
    document.writeln("Desaprobado 😮");
  } else if (nota <= 69) {
    document.writeln("Aprobado con lo justo 😋");
  } else if (nota <= 79) {
    document.writeln("Aprobado con buen desempeño 😎");
  } else {
    document.writeln("Excelente desempeño 😁");
  }
} else {
  document.writeln("Operacion Invalida");
}
```
## 🧠 Explicación Paso a Paso
1- Entrada de Datos:
- prompt() solicita la nota al usuario 💬
- parseInt() convierte el texto a número entero 🔢

2- Validación:
- !isNaN(nota) verifica que sea un número válido ✅
- Si no es número, muestra "Operación Inválida" ⚠️

3- Evaluación de Rangos:
- Anidamiento de condiciones if/else if para cada caso
- Uso de operadores lógicos (||, &&) para definir rangos
- Orden descendente para simplificar condiciones (no es necesario repetir rangos)

## 🎓 Conceptos Aprendidos
- Condicionales anidados
- Validación de entrada de usuario
- Operadores lógicos
- Estructura de decisiones múltiples
- Conversión de tipos


¡Recuerden que la práctica hace al maestro! 🤹‍♂️ Cada condición que escriben es como una bifurcación en el camino de su programa. ¡Sigan codificando! 🚀