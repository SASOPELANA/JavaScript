// Dom en JavaScript

// getElementById(elementId) --> sirve para selecionar el id del html, para cambair titlos o palabras
// getElementsByTagName("h1")  --> sirve para selecionar las etiquetas segmanticas, cambair colores

function mostrar() {
  document.getElementById("seleccionable").innerHTML = Date();
}

function cambiarColor() {
  const newColor = document.getElementsByTagName("h1");

  const colorNuevo = newColor[0];
  colorNuevo.style.backgroundColor = "green";
}

function skill() {
  document.getElementById("skills").innerHTML = Math.random();
}

function cambioFondo() {
  const modoOscuro = document.getElementsByTagName("body");
  const modoOscuro1 = modoOscuro[0];
  modoOscuro1.style.backgroundColor = "#626160";
}
