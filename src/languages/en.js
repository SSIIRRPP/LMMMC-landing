import SpaFlag from "../assets/icons/spa.png";

const en = {
  name: "en",
  Head: {
    Title: "Boat rentals in La Manga del Mar Menor, Murcia, Spain",
  },
  Header: {
    home: "Home",
    dropdown: {
      title: "Ships",
      all: "All",
      sailboats: "Sailboats",
      license: "Boats (License required)",
      no_license: "Boats (No license required)",
      school: "School",
      us: "Us",
      contact: "Contact",
      theory: "Recreational boating licences",
      practical: "Nautical practices",
    },
  },
  Main: {
    First: {
      header:
        "BOATS AND SAILBOATS FOR RENT IN LA MANGA DEL MAR MENOR, MURCIA. CHARTER DAYS",
      title: "LIVE THE SAILING EXPERIENCE",
      sail: "SAILBOAT RENTING WITH SHIPMASTER",
      boat: "BOAT RENTING WITH AND WITHOUT LICENSE",
      school: (
        <div>
          <h3> NAUTICAL SCHOOL </h3>
          <span>
            (Spanish license)
            <img src={SpaFlag} alt="spain-flag" />
          </span>
        </div>
      ),
    },
    Carousel: {
      title: "Our services",
      slides: {
        Renting: {
          h2: "Boat renting",
          p: "Rent one of our ships, with or without shipmaster.",
          button: "Show available ships",
        },
        School: {
          h2: "Nautical school",
          p: "Learn to sail with us.",
          button: "More information",
        },
        Contact: {
          h2: "Contact us",
          p: "If you have any doubt, feel free to contact us without any obligation.",
          button: "Contact",
        },
      },
    },
  },
  Boats: {
    Header: {
      h1: "Our ships: ",
      h5: "Rent one of our ships now, with our without shipmaster.",
    },
  },
  Boat: {
    Header: {
      Breadcrumb: "Ships",
      Card: {
        head: "Rent",
        title: "Rent this ship now",
        button: "Show prices",
      },
      Badge: {
        button: "Show features",
      },
    },
    Images: {
      h5: "Images",
    },
    Body: {
      Info: {
        includes: "Includes",
        doesnt_include: "Doesn't include",
        equipment: "Equipment",
      },
      Prices: {
        title: "Prices",
        from: "From",
        to: "to",
        button: "Contact",
        options_title: "Additional charges",
        shipmaster: "You can hire a shipmaster for this ship (optional)",
        deposit: "Deposit",
        fuel: { title: "Fuel", half: "Half day", full: "Full day" },
      },
    },
  },
  School: {
    title: "Available courses",
    titles: {
      theory: "Recreational boating licences",
      practice: "Nautical practices",
    },
  },
  Contact: {
    Form: {
      name: "Your name",
      email: "Your email address",
      subject: "Subject",
      message: "Your message",
      subjectPlaceholder: "Select a subject",
      subjectOptions: {
        "Alquiler velero con patrón": "Sailing yacht charter with skipper",
        "Alquiler lanchas": "Boat rental",
        "Consigue tu licencia de navegacion en un día":
          "Get your sailing licence in one day",
        "Cursos PNB/PER": "PNB/PER Courses",
      },
      checkLabel: "I have read and accept the",
      checkLink: "Terms and Conditions",
      button: "Send",
      feedback: {
        success: "Your email has been sent successfully!",
        error:
          "There has been an error. Please try again later, or try another means of contact.",
      },
    },
  },
  NotFound: {
    title: "¡Sorry!",
    text: "We have not found what you were looking for.",
    button: "Home",
  },
  CoursesPrices: {
    title: "Course Fees",
    name: "Course name",
    price: "Price",
    theory: "Recreational boating licences",
    practice: "Nautical practices",
    soon: "Coming soon...",
  },
  boatTypes: (type) => {
    switch (type) {
      case "veleros": {
        return { type: "sailboats", cap: [false] };
      }
      case "lanchas-con-licencia": {
        return { type: "license-boats", cap: [false] };
      }
      case "lanchas-sin-licencia": {
        return { type: "no-license-boats", cap: [false] };
      }
      default: {
        return type;
      }
    }
  },
  boatInfo: {
    shipmaster: "Only with shipmaster",
    requires_license: "Requires license",
    no_license: "No license required",
    info: "More information",
    price_from: "From",
    year: "Year",
    breadth: "Breadth",
    length: "Length",
    capacity: "Capacity",
    engine: "Engine",
    horse_power: "Horse power",
  },
};

export default en;
