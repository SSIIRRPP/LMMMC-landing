import UsSection from "../components/Us/UsSection";
import FadeIn from "react-fade-in";
import { useCallback, useContext, useMemo } from "react";
import ThemeContext from "../contexts/ThemeContext";
import LanguageContext from "../contexts/LanguageContext";
const Body = ({ img, theme }) => {
  const { lang } = useContext(LanguageContext);
  return img.label ? (
    <div
      style={{
        marginBottom: "5%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          backgroundColor: theme.backgroundTranslucid,
          boxShadow: theme.mainBoxShadow,
          borderRadius: ".4rem",
          padding: ".5rem 2rem",
        }}
      >
        <p
          style={{
            color: theme.color,
            fontSize: ".8rem",
            margin: 0,
          }}
        >
          {typeof img.label === "string" ? img.label : img.label[lang]}
        </p>
      </div>
    </div>
  ) : null;
};

const _sections = (theme) => [
  {
    text: {
      spa: "La mangamarmenocharter es una empresa ubicada en el puerto Tomás Maestre de La Manga. Desde aquí realizamos salidas durante todo el año, por la buena climatología de la zona, ya sea aprovechando nuestro Mar Menor o los fondeaderos de la costa murciana.",
      en: "La mangamarmenocharter is a company located in the port Tomás Maestre in La Manga. From here we make trips all year round, due to the good weather in the area, either taking advantage of our Mar Menor or the anchorages of the Murcian coast.",
    },
    id: 1,
    images: [
      {
        src: "puertoTomasMaestre.jpg",
        label: { spa: "Puerto Tomás Maestre", en: "Tomás Maestre port" },
      },
      { src: "la-manga-del-mar-menor-03.jpg", label: "La manga del Mar Menor" },
      {
        src: "la-manga-3.jpg",
        label: { spa: "Costa de La Manga", en: "La Manga Coast" },
      },
    ],
    body: (img) => <Body img={img} theme={theme} />,
  },
  {
    text: {
      spa: "Visitaremos la Isla Grosa y El Farallón, fondeando en sus cristalinas aguas, así como el Cabo de Palos.",
      en: "We will visit the Grosa Island and El Farallón, anchoring in its crystal clear waters, as well as Cabo de Palos",
    },
    id: 2,
    images: [
      { src: "isla-grosa-farallon-1.jpg", label: "El Farallón" },
      {
        src: "la-grossa.jpg",
        label: { spa: "La Isla Grosa", en: "La Grosa Island" },
        style: { backgroundPosition: "center 0%" },
      },
      { src: "cabo-de-palos.jpg", label: "Cabo de Palos" },
    ],
    body: (img) => <Body img={img} theme={theme} />,
  },
  {
    text: {
      spa: "Bucearemos en los limpios bajos marinos, debido a la posidonia de la zona.",
      en: "We will dive in the clean shallows, due to the posidonia in the area.",
    },
    id: 3,
    images: [
      { src: "posidonia-2.jpg", label: "Posidonia" },
      {
        src: "fondo-marino.jpg",
        label: {
          spa: "Fondo Marino en el Cabo de Palos",
          en: "Seabed at Cabo de Palos",
        },
        style: { backgroundPosition: "center 100%" },
      },
      {
        src: "ss-sirio.jpg",
        label: {
          spa: "Naufragio del SS Sirio, en el Cabo de Palos",
          en: "Wreck of the SS Sirio, at Cabo de Palos",
        },
        style: { backgroundPosition: "center 0%" },
      },
    ],
    body: (img) => <Body img={img} theme={theme} />,
  },
  {
    text: {
      spa: "Fondear en el Mar Menor para disfrutar de la tranquilidad de sus aguas. Ideal para toda la familia y para practicar deportes náuticos.",
      en: "Anchor in the Mar Menor to enjoy the tranquillity of its waters. Ideal for the whole family and for water sports.",
    },
    id: 4,
    images: [
      { src: "cala-reona.jpg", label: { spa: "Cala Reona", en: "Reona cove" } },
      {
        src: "cala-del-pino.jpg",
        label: { spa: "Cala del pino", en: "El Pino cove" },
        style: { backgroundPosition: "center 100%" },
      },
      { src: "paddle-surf.webp", label: "Paddle Surf" },
    ],
    body: (img) => <Body img={img} theme={theme} />,
    imagesScale: [1.15, 1],
  },
  {
    text: {
      spa: "Si deseas otro plan de navegación, nos adaptamos a tus necesidades o preferencias. Salidas de puesta de sol, travesías de dos o tres días... No dudes en contactarnos.",
      en: "If you want another sailing plan, we adapt to your needs or preferences. Sunset trips, two or three-day trips... Do not hesitate to contact us.",
    },
    id: 5,
    images: [
      { src: "puesta-de-sol-1.jpg", label: null },
      { src: "puesta-de-sol-2.jpg", label: null },
    ],
    body: (img) => <Body img={img} theme={theme} />,
  },
];

const Us = () => {
  const { theme } = useContext(ThemeContext);

  const sections = useMemo(
    () => (typeof _sections === "function" ? _sections(theme) : _sections),
    [theme]
  );

  const widthSwitch = useCallback((width) => {
    switch (true) {
      case width < 700: {
        return { height: 600 };
      }
      default: {
        return { height: 850 };
      }
    }
  }, []);

  return (
    <div>
      {/* <h4>
        La mangamarmenocharter es una empresa ubicada en el puerto tomas maestre
        de la manga. desde aquí realizamos salidas durante todo el año, por la
        buena climatología de la zona, ya sea aprovechando nuestro mar menor o
        los fondeaderos de la costa murciana.
      </h4>
      <br />
      <h4>
        Visitaremos si os apetece la isla grosa y farallón, fondeareMos en sus
        cristalinas aguas o bien bucearemos en los limpios bajos marinos, debido
        a la Posidonia de la zona.
      </h4>
      <br />
      <h4>
        En el mar menor y sus islas podremos fondear en un plan más calmado y
        pasar un día navegando a vela para toda la familia. Si deseas otro plan
        de navegación nos adaptamos a tus necesidades o preferencias , salidas
        de puesta de sol, travesías de dos o tres días.
      </h4>
      <br />
      <h4>
        No te pierdas la ocasión de pasar una experiencia diferente con la
        familia o amigos
      </h4>
      <br />
      <h4>Llámanos, te esperamos</h4> */}
      <FadeIn delay={400}>
        {sections.map((section, i) => (
          <UsSection
            key={`us_${section.id}_section`}
            {...section}
            inverted={(i + 1) % 2 === 0}
            widthSwitch={widthSwitch}
          />
        ))}
      </FadeIn>
    </div>
  );
};

export default Us;

// equipment, includes, size, engine, fuel consumption,
