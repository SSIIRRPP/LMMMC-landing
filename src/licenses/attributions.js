export const lengthAttr = ({ len, name, icon } = {}) => ({
  name: `Hasta ${len} metros de eslora`,
  description: `${
    name ? `La titulación de ${name} permite` : "Permite"
  } gobernar embarcaciones de una eslora máxima de ${len} metros.`,

  icon: icon ? icon : null,
});

export const dayNight = ({ both = true, name, night = false, icon } = {}) => ({
  name: both
    ? "Navegación diurna y noturna"
    : night
    ? "Navegación nocturna"
    : "Navegación diurna",
  description: both
    ? `${
        name ? `La titulación de ${name} permite` : "Permite"
      } la navegación diurna y nocturna.`
    : night
    ? `${
        name ? `La titulación de ${name} permite` : "Permite"
      } la navegación nocturna`
    : `${
        name ? `La titulación de ${name} permite` : "Permite"
      } la navegación diurna`,

  icon: icon ? icon : null,
});

export const boatPower = ({ power, icon } = {}) => ({
  name: power ? `Potencia de hasta ${power}` : "Sin límite de potencia",
  description: power
    ? `Permite manejar embarcaciones y motos de agua de hasta ${power}`
    : "No establece límite de potencia en las embarcaciones, ni motos de agua.",

  icon: icon ? icon : null,
});

export const boatDistance = ({ distance, name, icon } = {}) => ({
  name: distance ? `Hasta ${distance} de la costa` : "Sin límite de distancia",
  description: distance
    ? `La distancia máxima permitida para alejarse de la costa son ${distance}.`
    : `${
        name ? `La titulación de ${name} permite` : "Permite"
      } la navegación sin limite de distancia a la costa`,

  icon: icon ? icon : null,
});

export const jetSkisAttr = ({ icon } = {}) => ({
  name: "Motos de Agua",
  description: "Te permite gobernar todo tipo de motos náuticas.",
  icon: icon ? icon : null,
});

export const professionalServices = ({ description, icon } = {}) => ({
  name: "Servicios Profesionales",
  description,
  icon: icon ? icon : null,
});

export const attributionsExtension = ({ description, icon } = {}) => ({
  name: "Ampliación de Atribuciones",
  description,
  icon: icon ? icon : null,
});
