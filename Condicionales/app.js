// Condicionales en JavaScript

/*
let estilosMusica = "Trap";

switch (estilosMusica) {
  case "Phonk":
    console.log("Te recomiendo musica motivadora Phonk: Rocky");

    break;

  case "Hard Metal":
    console.log("Te recomiendo musica motivadora para entrenar: Fitgnes.");

    break;

  case "Metal":
    console.log("Te recomiendo el grupo Metallica, Iron Maiden.");

    break;

  case "Pop":
    console.log("Te recomiendo Michael Jackson.");

    break;

  default:
    console.log("No conosco este tipo de musica. Te recomiendo Phonk 😃");

    break;
}

*/

// if anidado

let edad = 20;
let nacionaldidad = "Argentino";
let tienePasaporte = false;

if (edad >= 18) {
  console.log("Tiene edad para viajar, aprobado trámite 1.");
  if (nacionaldidad === "Argentino") {
    console.log("La documentacion es correcta, aprovado tramite 2.");
    if (tienePasaporte) {
      console.log("Usted puede viajar, buen viaje!! 😃 ");
    } else {
      console.log("No puede viajar, el pasaporte es obligatorio. 🙁");
    }
  } else {
    console.log(
      "Debe presentar la documentacion de tu pais de origen, para poder viajar.",
    );
  }
} else {
  console.log("Deves ser mayor de edad para viajar al exterior.");
}
