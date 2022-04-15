import {
  boatDistance,
  dayNight,
  jetSkisAttr,
  lengthAttr,
} from "../attributions";
import {
  ageRequirement,
  medicCertificateRequirement,
  practiceHoursRequirement,
} from "../requirements";

const name = {
  spa: "Licencia PNB online + tutoría",
  en: "PNB online licence + tutoring",
};

const patronDeNavegacionBasica = {
  name,
  id: "patron-de-navegacion-basica",
  attributions: [
    lengthAttr({ len: 8, name: name["spa"] }),
    dayNight({ both: true, name: name["spa"] }),
    jetSkisAttr(),
    boatDistance({ distance: "5 millas" }),
  ],
  requirements: [
    {
      name: "Curso PNB de radiocomunicaciones",
      description:
        "Realizar un curso PNB de radiocomunicaciones de 4 horas (2 teóricas y 2 prácticas).",
      icon: null,
    },
    ageRequirement({ age: 18 }),
    medicCertificateRequirement(),
    practiceHoursRequirement({ hours: 8 }),
  ],
  background: true,
  backgroundPosition: "50% 100%",
  bckImageFormat: "jpg",
  description: [],
  price: 50,
  images: [],
  theory: null,
};

export default patronDeNavegacionBasica;
