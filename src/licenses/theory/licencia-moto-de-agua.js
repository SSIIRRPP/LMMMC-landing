import { boatDistance, boatPower, dayNight, lengthAttr } from "../attributions";
import {
  ageRequirement,
  medicCertificateRequirement,
  practiceHoursRequirement,
  theoryHoursRequirement,
} from "../requirements";

const name = {
  spa: "Licencia de motos de agua",
  en: "Jet ski licence",
};

const licenciaMotoAgua = {
  name,
  id: "licencia-moto-de-agua",
  attributions: [
    lengthAttr({ len: 6, name: name["spa"] }),
    dayNight({ both: false, name: name["spa"] }),
    boatPower(),
    boatDistance({ distance: "2 millas" }),
  ],
  requirements: [
    theoryHoursRequirement({ hours: 2 }),
    ageRequirement({ age: 16 }),
    medicCertificateRequirement(),
    practiceHoursRequirement({ hours: 4 }),
  ],
  background: true,
  backgroundPosition: "50% 50%",
  bckImageFormat: "jpg",
  description: [],
  price: 120,
  images: [],
  theory: null,
};

export default licenciaMotoAgua;
