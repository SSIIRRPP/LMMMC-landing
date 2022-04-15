import { checkIcon, timeIcon } from "../caracteristics";

const name = {
  spa: "Prácticas de Patrón de Yate",
  en: "Yacht Skipper Course",
};

const practicaPatronYate = {
  id: "practica-patron-yate",
  name,
  description: [],
  caracteristics: [
    checkIcon("Realizadas en aguas abiertas"),
    timeIcon("48 horas de duración"),
  ],
  price: 350,
  background: true,
  backgroundPosition: "40% 100%",
  bckImageFormat: "webp",
  images: [],
};

export default practicaPatronYate;
