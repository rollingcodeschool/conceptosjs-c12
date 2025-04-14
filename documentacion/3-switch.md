# 🏦 Documentación del Simulador de Cajero Automático

📌 Descripción: Este programa simula las operaciones básicas de un cajero automático con las siguientes funcionalidades:

 - ✅ Consultar saldo
 - 💰 Ingresar dinero
 - 💸 Extraer dinero

## 🛠️ Funcionamiento
- 🔸 Variables Iniciales
    - saldo: Se inicializa con $10,000 (simulando una cuenta con fondos).
    - opcion: Captura la elección del usuario mediante un prompt().

### 🔸 Estructura Principal (Switch Case)
El programa utiliza una estructura switch para manejar las diferentes operaciones:

```javascript
switch(opcion) {
  case 1: // Consultar saldo
    // ...
    break;
  case 2: // Ingresar dinero
    // ...
    break;
  case 3: // Extraer dinero
    // ...
    break;
  default: // Opción inválida
    // ...
}
```
### 📋 Detalle de Operaciones
#### 1️⃣ CASE 1: Consultar Saldo
 - Muestra el saldo actual con document.writeln().
 - Ejemplo de salida: `Su saldo es: $10000`

#### 2️⃣ CASE 2: Ingresar Dinero
 - Solicita el monto a depositar mediante prompt().
 - Actualiza el saldo sumando el depósito (saldo += deposito).
 - Muestra confirmación con el nuevo saldo.
 - Ejemplo de salida: `Depositaste $500,tu saldo actual es: $10500`

#### 3️⃣ CASE 3: Extraer Dinero
- Solicita el monto a retirar mediante prompt().
- Valida si hay fondos suficientes:
    - Si SÍ, resta el monto y muestra el nuevo saldo. `Monto a extraer - $2000, tu saldo actual es: $8000` 
    - Si NO, muestra "Saldo insuficiente".

#### ⚠️ DEFAULT: Opción Inválida
Se ejecuta si el usuario ingresa una opción no válida (ej: 4, "abc").

Mensaje: `Ingresaste una opción inválida.` 

## 💡 Posibles Mejoras
 - 🔒 Validar entradas no numéricas (ej: evitar que el usuario ingrese texto en depósitos/retiros).
 - 🔄 Usar un bucle para permitir múltiples operaciones sin recargar la página.
- 💳 Añadir más opciones como transferencias o cambio de PIN.
----
🌟 "Cada línea de código es un paso hacia dominar la lógica de programación. ¡Sigue practicando y verás cómo cada desafío se convierte en una oportunidad para crecer! 🚀💻"