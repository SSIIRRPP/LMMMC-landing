import { checkIcon, sailingIcon, swapIcon, timeIcon } from "../caracteristics";

const name = {
  spa: "Ampliación de atribuciones PER + Vela",
  en: "Sailing + PER licence extension courses",
};

const practicaPERVela = {
  id: "practica-ampliacion-per-vela",
  name,
  description: [],
  caracteristics: [
    swapIcon("Ampliación para embarcaciones de hasta 24 metros."),
    checkIcon("Realizadas en aguas abiertas"),
    timeIcon("48 horas de duración"),
    sailingIcon("Habilita para travesías entre península y baleares"),
  ],
  background: true,
  backgroundPosition: "20% 100%",
  bckImageFormat: "jpg",
  price: 300,
  images: [],
};

export default practicaPERVela;

// sailing: 5, boats: 4, yatch: 4, radio: 2
