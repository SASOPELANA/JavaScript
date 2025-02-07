// Objectos en JavaScript
// se puede poner varios valores en objeto en JavaScript como num y string
// podemos poner mas objeto dentro de otro objeto, arrays, funciones

const auto1 = {
  marca: "FIAT",
  modelo: "UNO",
  peso: 1000,
  color: "Rojo",
};

const auto2 = {
  marca: "RENAULT",
  modelo: "12",
  peso: 1200,
  color: "Grees",
};

//  se ṕuede moficar un valor constante de un opbjeto
auto1.marca = "Ferrari";
auto1.modelo = "488 GTB";

// Formas de acceder al valor de un objeto
console.log(auto1);
console.log(auto1["marca"]);

const vendedor = {
  nombre: "Pedro",
  apellido: "Gonzalez",
  empresa: "Auto S.A.",
  // un arrays en el objeto
  habilidadesBlandas: ["Carisma", "Puntual", "Sociable"],
  // una funcion en el objeto
  vender: () => "Pedro a vendido un auto.",

  nombreCompleto: function () {
    return this.nombre + " " + this.apellido;
  },
};

console.log(vendedor.habilidadesBlandas + "\n");

console.log(vendedor);

console.log(" ");

console.log(auto2);
