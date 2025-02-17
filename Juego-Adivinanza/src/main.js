// Juego de adivinanza en JavaScript

// Nuemro al azar

let numAzar = Math.random() * 100;

// numero entre el 1 - 100
numAzar = Math.floor(numAzar) + 1;

// manipulacion de dom
let numeroEntrada = document.getElementById("numeroEntrada");

let mensaje = document.getElementById("mensaje");

let intento = document.getElementById("intento");

let intentos = 0;

// Esta accion se va a ejecutar cuando se toque el boton chequear
function chequearResultado() {
  intentos++;
  intento.textContent = intentos;

  let numeroIngresado = parseInt(numeroEntrada.value);

  // si el usario ingresa datos no validos
  if (numeroIngresado < 1 || numeroIngresado > 100 || isNaN(numeroIngresado)) {
    mensaje.textContent =
      "¡Por favor introduce un número valido entre el 1 y 100!";
    mensaje.style.color = "black";
    return;
  }

  // el usario adivina el numero al azar
  if (numeroIngresado === numAzar) {
    mensaje.textContent = "¡Felicitaciones! ¡Adivinaste el número!";
    mensaje.style.color = "green";
    numeroEntrada.disabled = true;
  } else if (numeroIngresado < numAzar) {
    mensaje.textContent = "¡El número adivinar es mayor al que ingresaste!";
    mensaje.style.color = "red";
  } else {
    mensaje.textContent = "¡El número adivinar es menor al que ingresaste!";
    mensaje.style.color = "red";
  }
}
