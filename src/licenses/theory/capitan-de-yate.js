import {
  boatDistance,
  dayNight,
  jetSkisAttr,
  lengthAttr,
  professionalServices,
} from "../attributions";

const name = {
  spa: "Capitán de Yate",
  en: "Yacht Captain",
};

const capitanDeYate = {
  name,
  id: "capitan-de-yate",
  attributions: [
    lengthAttr({ len: 24, name: name["spa"] }),
    dayNight({ both: true, name: name["spa"] }),
    {
      name: "Realizar excursiones turísticas y pesca de recreo",
      description:
        "Prestar servicios de transporte, maniobras en puertos y playas, pruebas de mar y socorrismo con unas habilitaciones anejas.",
      icon: null,
    },
    professionalServices({
      description:
        "Prestar servicios de transporte, maniobras en puertos y playas, pruebas de mar y socorrismo con unas habilitaciones anejas.",
    }),
    boatDistance({ name: name["spa"] }),
    jetSkisAttr(),
  ],
  requirements: [
    {
      name: "Tener el título de PER",
      description: "Deberás tener previamente el título PER.",
      icon: null,
    },
    {
      name: "Examen Teórico",
      description: "Aprobar el examen teórico correspondiente.",
      icon: null,
    },
    {
      name: "Realizar las Prácticas",
      description:
        "Realizar las prácticas básicas de seguridad y navegación de Capitán de Yate.",
      icon: null,
    },
    {
      name: "4 horas de prácticas",
      description:
        "Realizar un reconocimiento médico y realizar un reconocimiento psicotecnico",
      icon: null,
    },
  ],
  background: true,
  backgroundPosition: "50% 80%",
  bckImageFormat: "png",
  description: [],
  /* price: 0, */
  images: [],
  theory: null,
};

export default capitanDeYate;
