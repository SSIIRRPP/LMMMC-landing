import { checkIcon, timeIcon } from "../caracteristics";

const name = {
  spa: "Prácticas de Capitán de Yate",
  en: "Yacht Captain Course",
};

const practicaCapitanYate = {
  id: "practica-capitan-yate",
  name,
  description: [],
  caracteristics: [
    checkIcon("Realizadas en aguas abiertas"),
    timeIcon("48 horas de duración"),
  ],
  price: 350,
  background: true,
  backgroundPosition: "40% 100%",
  bckImageFormat: "avif",
  images: [],
};

export default practicaCapitanYate;
