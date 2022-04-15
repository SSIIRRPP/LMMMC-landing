import { checkIcon, timeIcon } from "../caracteristics";

const name = {
  spa: "Prácticas de habilitacion a Vela",
  en: "Sailing qualification training",
};

const practicaHabilitacionAVela = {
  id: "practica-habilitacion-vela",
  name,
  description: [],
  caracteristics: [
    timeIcon("16 horas de duración"),
    checkIcon("Para pnb, per, patrón y capitán de yate."),
  ],
  background: true,
  backgroundPosition: "90% 100%",
  bckImageFormat: "jpg",
  price: 125,
  images: [],
};

export default practicaHabilitacionAVela;
