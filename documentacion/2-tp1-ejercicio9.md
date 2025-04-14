# 📝 Documentación del Programa de Detección de Vocales
## 📌 Descripción
Este programa solicita una frase al usuario (de máximo 5 caracteres) y muestra las vocales que contiene.

## 🛠️ Funcionamiento
🔹 Entrada
- El usuario ingresa una frase mediante un prompt().
- La frase se convierte automáticamente a minúsculas (toLowerCase()).

🔹 Procesamiento
 1. Validación de longitud: 
     - Si la frase tiene más de 5 caracteres, muestra: "Ingresaste una cadena inválida" ❌.
 2. Detección de vocales:
     - Verifica cada carácter (charAt()) para ver si es una vocal (a, e, i, o, u).
     - Si encuentra una vocal, la muestra en el documento con document.writeln().

🔹 Salida
- Muestra las vocales encontradas en el documento.

```javascript
const frase = prompt('Ingresa una frase de hasta 5 caracteres').toLowerCase();

if(frase.length <= 5) {
    if(frase.charAt(0) === 'a' || frase.charAt(0) === 'e' || frase.charAt(0) === 'i' || frase.charAt(0) === 'o' || frase.charAt(0) === 'u') {
        document.writeln(frase.charAt(0));
    }
    if(frase.charAt(1) === 'a' || frase.charAt(1) === 'e' || frase.charAt(1) === 'i' || frase.charAt(1) === 'o' || frase.charAt(1) === 'u') {
        document.writeln(frase.charAt(1));
    }
    if(frase.charAt(2) === 'a' || frase.charAt(2) === 'e' || frase.charAt(2) === 'i' || frase.charAt(2) === 'o' || frase.charAt(2) === 'u') {
        document.writeln(frase.charAt(2));
    }
    if(frase.charAt(3) === 'a' || frase.charAt(3) === 'e' || frase.charAt(3) === 'i' || frase.charAt(3) === 'o' || frase.charAt(3) === 'u') {
        document.writeln(frase.charAt(3));
    }
    if(frase.charAt(4) === 'a' || frase.charAt(4) === 'e' || frase.charAt(4) === 'i' || frase.charAt(4) === 'o' || frase.charAt(4) === 'u') {
        document.writeln(frase.charAt(4));
    }
} else {
    alert('Ingresaste una cadena invalida');
}
```
## 💡 Mejoras Posibles
✅ Optimización con bucles:

Usar un bucle for para evitar repetir condiciones `(for(let i = 0; i < frase.length; i++)).`

✅ Manejo de mayúsculas/minúsculas:

Convertir la entrada a minúsculas (toLowerCase()) para simplificar las comparaciones.

✅ Interfaz más clara:

Mostrar un mensaje como "Vocales encontradas: a, e" en lugar de imprimir una por línea.

---

🌟 "Cada línea de código es una oportunidad para aprender algo nuevo. ¡Sigue explorando y descubrirás lo increíble que es programar! 🚀💡"