import {
  boatDistance,
  boatPower,
  dayNight,
  jetSkisAttr,
  lengthAttr,
  professionalServices,
} from "../attributions";
import {
  medicCertificateRequirement,
  practiceHoursRequirement,
} from "../requirements";

const name = {
  spa: "Patrón de Yate",
  en: "Yacht Pattern",
};

const patronDeYate = {
  name,
  id: "patron-de-yate",
  attributions: [
    lengthAttr({ len: 24, name: name["spa"] }),
    dayNight({ both: true, name: name["spa"] }),
    boatPower(),
    boatDistance({ distance: "150 millas" }),
    jetSkisAttr(),
    professionalServices({
      description:
        "Prestar servicios de transporte, Realizar excursiones turísticas y pesca de recreo,",
    }),
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
    medicCertificateRequirement(),
    practiceHoursRequirement({ hours: 24 }),
  ],
  background: true,
  backgroundPosition: "50% 90%",
  bckImageFormat: "webp",
  description: [],
  /* price: 0, */
  images: [],
  theory: null,
};

export default patronDeYate;
