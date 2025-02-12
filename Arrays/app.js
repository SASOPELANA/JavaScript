// Arrays - vectores - JavaScript

let vector = [
  { fruta: "Naranja", precio: 10 },
  { fruta: "Manzana", precio: 20 },
  { fruta: "Lima", precio: 30 },
  { fruta: "Pera", precio: 40 },
  { fruta: "Mango", precio: 50 },
  { fruta: "Kiwi", precio: 60 },
];
const resultado = vector.find((x) => x.fruta === "Kiwi");

console.log(resultado);
