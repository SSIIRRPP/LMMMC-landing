import {
  boatDistance,
  boatPower,
  dayNight,
  jetSkisAttr,
  lengthAttr,
} from "../attributions";
import {
  ageRequirement,
  medicCertificateRequirement,
  practiceHoursRequirement,
  theoryHoursRequirement,
} from "../requirements";

const name = {
  spa: "Licencia de navegación / Titulín",
  en: "Navigation Licence / Titulín",
};

const licenciaDeNavegacion = {
  name,
  id: "licencia-de-navegacion",
  attributions: [
    lengthAttr({ len: 6, name: name["spa"] }),
    dayNight({ both: false, name: name["spa"] }),
    boatPower(),
    boatDistance({ distance: "2 millas" }),
    jetSkisAttr(),
  ],
  requirements: [
    theoryHoursRequirement({ hours: 2 }),
    ageRequirement({ age: 16 }),
    medicCertificateRequirement(),
    practiceHoursRequirement({ hours: 4 }),
  ],
  background: true,
  backgroundPosition: "50% 50%",
  bckImageFormat: "webp",
  description: [],
  price: 100,
  images: [],
  theory: null,
};

export default licenciaDeNavegacion;
