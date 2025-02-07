// Manejo del dom

// seleccion de elemento con id  -->   getElementById(elementId)

// seleccion y busca el primer elemento del css (id, clases) -->  let elemento = document.querySelector('#miElemento');
// let elemento = document.querySelector('.miClase'); // Selecciona el primer elemento con la clase 'miClase'
// solo devuelve el primer elemento encontrado

// Seleccion de varios elemento en css (id - clases)
// const listItems = document.querySelectorAll("ul.list > li");

const title = document.getElementById("title");

// console.log(title);

const mainDiv = document.querySelector(".main-div");

// console.log(mainDiv);

const listItems = document.querySelectorAll("ul.list > li");
// console.log(listItems);

// Aplicar cambio de los elemento seleccionados con el dom
title.innerHTML = "Manipulando el Dom";
title.innerHTML = "<em>Nuevo elemento</em>";

const imagen = document.querySelector("img");

window.cambioImagen = function () {
  imagen.setAttribute("src", "../public/bun-logo.svg");
  imagen.classList.add("img-new");
  mainDiv.style.backgroundColor = "#ffcc00";
};

// remover un atributo con document.body.removeChild(atributo)
const oldDiv = document.querySelector(".old-div");
document.body.removeChild(oldDiv);

// crear un elemnto en el html y agregarlo
const nuevoDiv = document.createElement("div");
nuevoDiv.innerHTML = "Soy un nuevo div";
document.body.appendChild(nuevoDiv);

// capturar eventos
const button = document.querySelector(".otro-boton");
// funcion para agregar eventos

// agregamos imagenes con el dom
let con = 0;

button.addEventListener("click", () => {
  button.innerHTML = "Se agrego otra imagen";

  if (con < 2) {
    const imagen2 = document.createElement("img");

    imagen2.setAttribute("src", "../public/vite.svg");
    document.body.appendChild(imagen2);
    con++;
  } else {
    alert("Alcanzo el limite de imagenes");
  }
});

// Lista dinamica, con valor y boton para agregar
const input = document.querySelector("#itemInput");
const addButton = document.querySelector("#addButton");
const list = document.querySelector("#dynamiList");

addButton.addEventListener("click", () => {
  if (input.value.trim() !== "") {
    let newItem = document.createElement("li");
    newItem.innerText = input.value;
    list.appendChild(newItem);
    input.value = "";
  }
});

//Filtro de lista
const filterInput = document.querySelector("#filterInput");
const itemsList = document.querySelector(".list");

filterInput.addEventListener("keyup", () => {
  // Funcion toLowerCase() para que la búsqueda sea case insensitive, es decir, que 'a' y 'A' coincidan

  const term = filterInput.value.toLowerCase();

  const items = itemsList.getElementsByTagName("li");

  Array.from(items).forEach((item) => {
    if (item.textContent.toLowerCase().indexOf(term) !== -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
});
