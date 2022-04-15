import {
  checkIcon,
  compassIcon,
  radioIcon,
  securityIcon,
} from "../caracteristics";

const name = {
  spa: "Prácticas de Navegación de PNB",
  en: "PNB Licence navigation practices",
};

const practicaPNB = {
  id: "practica-pnb",
  name,
  description: [],
  caracteristics: [
    radioIcon("Simulador de práctica de radio real y envolvente."),
    securityIcon("Prácticas de motor y seguridad."),
    compassIcon("Práctica opcional para navegar a vela"),
    checkIcon("Práctica opcional de travesía a baleares."),
  ],
  background: true,
  backgroundPosition: "70% 50%",
  bckImageFormat: "jpg",
  price: 180,
  images: [],
};

export default practicaPNB;
