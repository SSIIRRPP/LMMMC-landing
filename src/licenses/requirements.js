export const theoryHoursRequirement = ({ hours, of, icon } = {}) => ({
  name: `${hours} horas de teoría`,
  description: of
    ? `Realizar un curso teórico de ${of} de al menos ${hours} horas de duración.`
    : `Realizar un curso teórico de al menos ${hours} horas de duración.`,
  icon: icon ? icon : null,
});

export const practiceHoursRequirement = ({ hours, of, icon } = {}) => ({
  name: `${hours} horas de prácticas`,
  description: of
    ? `Realizar ${of} de al menos ${hours} horas de duración.`
    : `Realizar ${hours} horas prácticas de seguridad y navegación.`,
  icon: icon ? icon : null,
});

export const medicCertificateRequirement = ({ icon } = {}) => ({
  name: "Certificado médico (No incluido)",
  description: "Tendrás que traerlo por tu cuenta para obtener la licencia.",
  icon: icon ? icon : null,
});

export const ageRequirement = ({ age, icon } = {}) => ({
  name: `Tener al menos ${age} años`,
  description: `Necesitas tener al menos ${age} años para poder darte de alta.`,
  icon: icon ? icon : null,
});
