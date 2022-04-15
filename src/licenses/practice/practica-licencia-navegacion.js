import { checkIcon, timeIcon } from "../caracteristics";

const name = {
  spa: "Prácticas de Licencia de Navegación",
  en: "Navigation Licence practice Course",
};

const practicaLicenciaNavegacion = {
  id: "practica-licencia-navegacion",
  name,
  description: [],
  caracteristics: [
    checkIcon("Licencia de navegación en el día y sin realizar examen"),
    timeIcon("Curso de 6 horas: 2 de teoría y 4 de prácticas"),
  ],
  background: true,
  backgroundPosition: "50% 70%",
  bckImageFormat: "jpg",
  price: 120,
  images: [],
};

export default practicaLicenciaNavegacion;
