import {
  attributionsExtension,
  boatDistance,
  boatPower,
  dayNight,
  lengthAttr,
  professionalServices,
} from "../attributions";
import { ageRequirement, medicCertificateRequirement } from "../requirements";

const name = {
  spa: "Licencia PER online + tutoría",
  en: "PER online licence + tutoring",
};

const patronDeEmbarcacionesDeRecreo = {
  name,
  id: "patron-de-embarcaciones-de-recreo",
  attributions: [
    lengthAttr({ len: 15, name: name["spa"] }),
    dayNight({ both: true, name: name["spa"] }),
    boatPower(),
    boatDistance({ distance: "12 millas" }),
    professionalServices({
      description:
        "La titulación PER te permite dar ciertos servicios de transporte, maniobras en puerto y playa y pruebas de socorrismo con habilitaciones ajenas.",
    }),
    attributionsExtension({
      description:
        "Al realizar ciertas prácticas podrás navegar entre la península y Baleares en barcos de hasta 24 metros de eslora.",
    }),
  ],
  requirements: [
    {
      name: "Radio Operador Corto Alcance",
      description:
        "Tendrás que realizar el curso práctico de radio operador de corto alcance.",
      icon: null,
    },
    ageRequirement({ age: 18 }),
    medicCertificateRequirement(),
    {
      name: "Realizar las Prácticas",
      description:
        "Sin necesidad de examen, tendrás que realizar las prácticas básicas de seguridad y navegación.",
      icon: null,
    },
  ],
  background: true,
  backgroundPosition: "50% 60%",
  bckImageFormat: "jpg",
  description: [],
  price: 100,
  images: [],
  theory: null,
};

export default patronDeEmbarcacionesDeRecreo;
