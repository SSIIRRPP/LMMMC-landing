const spa = {
  name: "spa",
  Head: {
    Title: "Alquiler de barcos en La Manga del Mar Menor, Murcia",
  },
  Header: {
    home: "Inicio",
    dropdown: {
      title: "Barcos",
      all: "Ver todos",
      sailboats: "Veleros",
      license: "Lanchas (Licencia)",
      no_license: "Lanchas (Sin licencia)",
      school: "Escuela",
      us: "Nosotros",
      contact: "Contacto",
      theory: "Titulos náuticos de recreo",
      practical: "Prácticas náuticas",
    },
  },
  Main: {
    First: {
      header:
        "ALQUILER DE LANCHAS Y VELEROS EN LA MANGA DEL MAR MENOR, MURCIA. CHARTER DAYS",
      title: "VIVE LA EXPERIENCIA DE NAVEGAR",
      sail: "ALQUILER VELEROS CON PATRÓN",
      boat: "ALQUILER LANCHAS CON LICENCIA Y SIN LICENCIA",
      school: (
        <div>
          <h3>ESCUELA NÁUTICA</h3>
          <ul>
            <li>
              <span>PRÁCTICA</span>
            </li>
            <li>
              <span>
                TEORÍA <small>(En construcción...)</small>
              </span>
            </li>
          </ul>
        </div>
      ),
    },
    Carousel: {
      title: "Nuestros servicios",
      slides: {
        Renting: {
          h2: "Alquiler de Embarcaciones",
          p: "Alquila una de nuestras embarcaciones, con o sin patrón.",
          button: "Ver embarcaciones disponibles",
        },
        School: {
          h2: "Escuela náutica",
          p: "Aprende a navegar con nosotros.",
          button: "Más información",
        },
        Contact: {
          h2: "Contáctanos",
          p: "Si tienes alguna duda, o quieres más información, puedes ponerte en contacto con nosotros sin compromiso.",
          button: "Contacto",
        },
      },
    },
  },
  Boats: {
    Header: {
      h1: "Nuestras embarcaciones: ",
      h5: "Alquila ya una de nuestras embarcaciones con o sin patrón.",
    },
  },
  Boat: {
    Header: {
      Breadcrumb: "Barcos",
      Card: {
        head: "Alquiler",
        title: "Alquila ya esta embarcación",
        button: "Ver precios",
      },
      Badge: {
        button: "Ver características",
      },
    },
    Images: {
      h5: "Imágenes",
    },
    Body: {
      Info: {
        includes: "Incluye",
        doesnt_include: "No incluye",
        equipment: "Equipamiento",
      },
      Prices: {
        title: "Precios",
        from: "Desde",
        to: "hasta",
        button: "Contactar",
        options_title: "Cargos adicionales",
        shipmaster:
          "Puedes contratar un patrón para esta embarcación (opcional)",
        deposit: "Fianza",
        fuel: { title: "Combustible", half: "Medio dia", full: "Dia completo" },
      },
    },
  },
  School: {
    title: "Cursos disponibles",
    titles: {
      theory: "Titulos náuticos de recreo",
      practice: "Prácticas náuticas",
    },
  },
  Contact: {
    Form: {
      name: "Su nombre",
      email: "Su correo electrónico",
      subject: "Asunto de su consulta",
      message: "Su mensaje",
      subjectPlaceholder: "Selecciona un Asunto",
      subjectOptions: {
        "Alquiler velero con patrón": "Alquiler velero con patrón",
        "Alquiler lanchas": "Alquiler lanchas",
        "Consigue tu licencia de navegacion en un día":
          "Consigue tu licencia de navegacion en un día",
        "Cursos PNB/PER": "Cursos PNB/PER",
      },
      checkLabel: "He leído y acepto los",
      checkLink: "Términos y Condiciones",
      button: "Enviar",
      feedback: {
        success: "¡Tu correo se ha enviado con éxito!",
        error:
          "Ha habido un error. Por favor, inténtalo más tarde, o prueba otro medio de contacto.",
      },
    },
  },
  NotFound: {
    title: "¡Lo sentimos!",
    text: "No hemos encontrado lo que buscabas.",
    button: "Inicio",
  },
  CoursesPrices: {
    title: "Precios de los Cursos",
    name: "Nombre del curso",
    price: "Precio",
    theory: "Titulos náuticos de recreo",
    practice: "Prácticas náuticas",
    soon: "Próximamente...",
  },
  boatTypes: (type) => ({ type }),
  boatInfo: {
    shipmaster: "Solo con patrón",
    requires_license: "Requiere licencia",
    no_license: "No requiere licencia",
    info: "Más información",
    price_from: "Desde",
    year: "Año",
    breadth: "Manga",
    length: "Eslora",
    capacity: "Capacidad",
    engine: "Motor",
    horse_power: "Potencia del motor",
  },
};

export default spa;
