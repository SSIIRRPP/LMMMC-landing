import {
  checkIcon,
  compassIcon,
  radioIcon,
  securityIcon,
} from "../caracteristics";

const name = {
  spa: "Prácticas de Navegación de PER",
  en: "PER Licence navigation practices",
};

const practicaPER = {
  id: "practica-per",
  name,
  description: [],
  caracteristics: [
    radioIcon("Simulador de práctica de radio real y envolvente."),
    securityIcon("Prácticas de motor y seguridad."),
    compassIcon("Práctica opcional para navegar a vela."),
    checkIcon("Práctica opcional de travesía a baleares."),
  ],
  background: true,
  backgroundPosition: "40% 70%",
  bckImageFormat: "jpg",
  price: 200,
  images: [],
};

export default practicaPER;
