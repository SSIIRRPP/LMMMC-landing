import { checkIcon, sailingIcon, swapIcon, timeIcon } from "../caracteristics";

const name = {
  spa: "Ampliación de atribuciones de PER",
  en: "PER licence extension courses",
};

const practicaAmpliacionPER = {
  id: "practica-ampliacion-per",
  name,
  description: [],
  caracteristics: [
    swapIcon("Ampliación para embarcaciones de hasta 24 metros."),
    checkIcon("Realizadas en aguas abiertas"),
    timeIcon("24 horas de duración"),
    sailingIcon("Habilita para travesías entre península y baleares"),
  ],
  background: true,
  backgroundPosition: "90% 55%",
  bckImageFormat: "png",
  price: 225,
  images: [],
};

export default practicaAmpliacionPER;
