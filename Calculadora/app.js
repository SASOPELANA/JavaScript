// Agregar un valor a pantalla del boton de la calculadora

function agregar(valor) {
  document.getElementById("pantalla").value += valor;
}

// borrar el contenido de la pantalla
function borrar() {
  document.getElementById("pantalla").value = "";
}

// Calcular el resultado de la pantalla
// Metodo de Javascript eval para evaluar expresiones
function calcular() {
  const valorPantalla = document.getElementById("pantalla").value;
  const resultado = eval(valorPantalla);
  document.getElementById("pantalla").value = resultado;
}
