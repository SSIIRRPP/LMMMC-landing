const peakSeason = {
  name: { spa: "Temporada alta", en: "High season" },
  from: "1/06",
  to: "15/09",
};

const lowSeason = {
  name: { spa: "Resto de temporada", en: "Low season" },
  from: "15/9",
  to: "1/06",
};

const shipmasterPrices = {
  "2h": 40,
  "4h": 60,
  "6h": 80,
  "8h": 100,
};

const bavaria39 = {
  type: "veleros",
  images: [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
  ],
  backgroundPosition: "40% 80%",
  price: {
    seasons: [
      {
        ...peakSeason,
        prices: { "2h": 240, "4h": 360, "6h": 420, "8h": 540 },
      },
      {
        ...lowSeason,
        prices: { "2h": 180, "4h": 240, "6h": 300, "8h": 420 },
      },
    ],
  },
  requiresLicense: true,
  capacity: 8,
  requiresShipmaster: true,
  year: 2006,
  horsePower: 55,
  engine: "VOLVO 55cv",
  id: "bavaria-39",
  name: "Bavaria 39",
  size: {
    length: 12,
    breadth: 3.95,
  },
  includes: {
    spa: "Patrón, combustible, seguro y limpieza.",
    en: "Shipmaster, fuel, insurance and cleaning",
  },
  doesnt_include: {
    spa: "Comida y bebida (el cliente puede traer).",
    en: "Food and drinks (customers can bring their own)",
  },
  text: {
    spa: (
      <>
        Navega a vela con nuestro velero de 12 metros por las aguas del Mar
        Menor o Cabo de Palos. Para 8 personas.
      </>
    ),
    en: (
      <>
        Sail with our 12-metre sailboat in the waters of the Mar Menor or Cabo
        de Palos. For 8 people.
      </>
    ),
  },
  equipment: [
    { spa: "Equipo de música bluetooth", en: "Bluetooth stereo system" },
    { spa: "Solarium amplio en proa", en: "Spacious solarium on bow" },
    { spa: "Ducha de agua dulce", en: "Freshwater shower" },
    {
      spa: "Toldo Bimini INOX con extensiones",
      en: "INOX Bimini awning with extensions",
    },
    {
      spa: "Neveras eléctrica y portátil",
      en: "Electric and portable coolers",
    },
    {
      spa: "Escala de baño y mesa en popa",
      en: "Bathing ladder and aft table",
    },
  ],
};

const aquadrac35 = {
  type: "veleros",
  images: [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
  ],
  backgroundPosition: "35% 80%",
  price: {
    seasons: [
      {
        ...peakSeason,
        prices: { "2h": 240, "4h": 360, "6h": 420, "8h": 540 },
      },
      {
        ...lowSeason,
        prices: { "2h": 180, "4h": 240, "6h": 300, "8h": 420 },
      },
    ],
  },
  requiresLicense: true,
  capacity: 8,
  requiresShipmaster: true,
  year: 2006,
  horsePower: 42,
  engine: "Solé Diesel 42",
  id: "maryola-aquadrac-35",
  name: "Maryola Aquadrac 35",
  size: {
    length: 11,
    breadth: 3.95,
  },
  includes: {
    spa: "Patrón, combustible, seguro y limpieza.",
    en: "Shipmaster, fuel, insurance and cleaning",
  },
  doesnt_include: {
    spa: "Comida y bebida (el cliente puede traer).",
    en: "Food and drinks (customers can bring their own).",
  },
  text: {
    spa: <>Disfruta de este velero y su amplia cubierta con solarium</>,
    en: <>Enjoy this sailing yacht and its spacious deck with solarium.</>,
  },
  equipment: [
    { spa: "Equipo de música bluetooth", en: "Bluetooth stereo system" },
    { spa: "Solarium amplio en proa", en: "Spacious solarium on bow" },
    { spa: "Ducha de agua dulce", en: "Freshwater shower" },
    {
      spa: "Toldo Bimini INOX con extensiones",
      en: "INOX Bimini awning with extensions",
    },
    {
      spa: "Neveras eléctrica y portátil",
      en: "Electric and portable coolers",
    },
    {
      spa: "Escala de baño y mesa en popa",
      en: "Bathing ladder and aft table",
    },
  ],
};

const saver585 = {
  type: "lanchas-con-licencia",
  images: ["1", "2", "3"],
  backgroundPosition: "35% 50%",
  price: {
    seasons: [
      {
        ...peakSeason,
        prices: { "2h": 160, "4h": 220, "6h": 280, "8h": 350 },
      },
      {
        ...lowSeason,
        prices: { "2h": 140, "4h": 200, "6h": 260, "8h": 320 },
      },
    ],
    shipmaster: shipmasterPrices,
    deposit: 500,
    fuel: { full: 80, half: 40 },
  },
  requiresLicense: true,
  capacity: 6,
  requiresShipmaster: false,
  year: 2019,
  horsePower: 60,
  engine: "Tohatsu 60cv",
  consumption: "9L/h",
  id: "saver-585",
  name: "Saver 585",
  size: {
    length: 5.85,
    breadth: 2.06,
  },
  includes: { spa: "Seguro y limpieza.", en: "Cleaning and insurance" },
  text: {
    spa: (
      <>
        Embarcación de 6 metros, ideal para disfrutar de un día de sol, con
        solarium y 60CV de potencia.
      </>
    ),
    en: (
      <>
        6-metre boat, ideal for enjoying a sunny day, with solarium and 60 hp
        power.
      </>
    ),
  },
  equipment: [
    { spa: "Equipo de música bluetooth", en: "Bluetooth stereo system" },
    { spa: "Solarium amplio en proa", en: "Spacious solarium on bow" },
    { spa: "Ducha de agua dulce", en: "Freshwater shower" },
    { spa: "Toldo Bimini INOX", en: "INOX Bimini awning" },
    {
      spa: "Nevera portátil",
      en: "Portable cooler",
    },
    { spa: "Escala de baño en popa", en: "Stern bathing ladder" },
    { spa: "VHF portátil", en: "Portable VHF" },
    {
      spa: "GPS, SONDA y PLOTTER pantalla 7”",
      en: "GPS, SONDA y PLOTTER 7” screen",
    },
  ],
};

const mareti600 = {
  type: "lanchas-con-licencia",
  backgroundPosition: "45% 65%",
  price: {
    seasons: [
      {
        ...peakSeason,
        prices: { "2h": 180, "4h": 250, "6h": 350, "8h": 400 },
      },
      {
        ...lowSeason,
        prices: { "2h": 170, "4h": 230, "6h": 290, "8h": 350 },
      },
    ],
    shipmaster: shipmasterPrices,
    deposit: 600,
    fuel: { full: 80, half: 40 },
  },
  images: ["1", "2", "3", "4"],
  requiresLicense: true,
  capacity: 8,
  requiresShipmaster: false,
  year: 2022,
  horsePower: 80,
  engine: "Suzuki 80cv",
  consumption: "15L/h",
  id: "mareti-600",
  name: "Mareti 600",
  size: {
    length: 6,
    breadth: 2.5,
  },
  includes: { spa: "Seguro y limpieza.", en: "Cleaning and insurance" },
  text: {
    spa: <>Embarcación del 2022, amplio solarium y motor de 90CV.</>,
    en: <>Boat from 2022, large sundeck and 90hp engine.</>,
  },
  equipment: [
    { spa: "Equipo de música bluetooth", en: "Bluetooth stereo system" },
    {
      spa: "Solarium amplio en proa y popa",
      en: "Spacious solarium on bow and stern",
    },
    { spa: "Ducha de agua dulce", en: "Freshwater shower" },
    {
      spa: "Toldo Bimini INOX",
      en: "INOX Bimini awning",
    },

    { spa: "Escala de baño en popa", en: "Stern bathing ladder" },
    {
      spa: "Mesa desmontable para proa o popa",
      en: "Detachable table for bow or stern",
    },
    { spa: "VHF portátil", en: "Portable VHF" },
    {
      spa: "GPS, SONDA y PLOTTER pantalla 7”",
      en: "GPS, SONDA y PLOTTER 7” screen",
    },
  ],
};

const mareti500 = {
  type: "lanchas-sin-licencia",
  images: ["1", "2", "3"],
  backgroundPosition: "35% 15%",
  price: {
    seasons: [
      {
        ...peakSeason,
        prices: { "2h": 140, "4h": 200, "6h": 260, "8h": 320 },
      },
      {
        ...lowSeason,
        prices: { "2h": 120, "4h": 170, "6h": 220, "8h": 270 },
      },
    ],
    shipmaster: shipmasterPrices,
    deposit: 400,
    fuel: { full: 40, half: 20 },
  },
  requiresLicense: false,
  capacity: 5,
  requiresShipmaster: false,
  year: 2021,
  horsePower: 15,
  engine: "Suzuki 15cv",
  consumption: "4L/h",
  id: "mareti-500",
  name: "Mareti 500 Classic",
  size: {
    length: 4.99,
    breadth: 1.9,
  },
  includes: { spa: "Seguro y limpieza.", en: "Cleaning and insurance" },
  text: {
    spa: <>Sé tu propio patrón por un día. Proa convertible en solarium.</>,
    en: <>Be your own skipper for a day. Bow convertible into a solarium.</>,
  },
  equipment: [
    { spa: "Equipo de música bluetooth", en: "Bluetooth stereo system" },
    { spa: "Solarium amplio en proa", en: "Spacious solarium on bow" },
    { spa: "Ducha de agua dulce", en: "Freshwater shower" },
    { spa: "Toldo Bimini INOX", en: "INOX Bimini awning" },
    {
      spa: "Nevera portátil",
      en: "Portable cooler",
    },
    { spa: "Escala de baño en popa", en: "Stern bathing ladder" },
    { spa: "VHF portátil", en: "Portable VHF" },
    {
      spa: "GPS, SONDA y PLOTTER pantalla 7”",
      en: "GPS, SONDA y PLOTTER 7” screen",
    },
  ],
};

const karnic440 = {
  type: "lanchas-sin-licencia",
  images: ["1", "2"],
  backgroundPosition: "40% 30%",
  price: {
    seasons: [
      {
        ...peakSeason,
        prices: { "2h": 140, "4h": 200, "6h": 260, "8h": 320 },
      },
      {
        ...lowSeason,
        prices: { "2h": 120, "4h": 170, "6h": 220, "8h": 270 },
      },
    ],
    shipmaster: shipmasterPrices,
    deposit: 400,
    fuel: { full: 40, half: 20 },
  },
  includes: { spa: "Seguro y limpieza.", en: "Cleaning and insurance" },
  requiresLicense: false,
  capacity: 4,
  requiresShipmaster: false,
  year: 2022,
  horsePower: 15,
  engine: "Honda 15cv",
  consumption: "3L/h",
  id: "karnic-440",
  name: "Karnic 440",
  size: {
    length: 5.0,
    breadth: 1.95,
  },
  text: {
    spa: (
      <>Embarcación disponible sin titulación. Ideal para empezar a navegar.</>
    ),
    en: <>Boat available without licence. Ideal to start sailing.</>,
  },
  equipment: [
    { spa: "Equipo de música bluetooth", en: "Bluetooth stereo system" },
    { spa: "Solarium amplio en proa", en: "Spacious solarium on bow" },
    { spa: "Ducha de agua dulce", en: "Freshwater shower" },
    { spa: "Toldo Bimini INOX", en: "INOX Bimini awning" },
    {
      spa: "Nevera portátil",
      en: "Portable cooler",
    },
    { spa: "Escala de baño en popa", en: "Stern bathing ladder" },
    { spa: "VHF portátil", en: "Portable VHF" },
    {
      spa: "GPS, SONDA y PLOTTER pantalla 7”",
      en: "GPS, SONDA y PLOTTER 7” screen",
    },
  ],
};

const boats = [
  bavaria39,
  aquadrac35,
  saver585,
  mareti600,
  mareti500,
  karnic440,
];

export default boats;
