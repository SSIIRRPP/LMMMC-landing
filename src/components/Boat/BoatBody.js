import { Container, ListGroup } from "react-bootstrap";
import { useContext, useMemo } from "react";
import LanguageContext from "../../contexts/LanguageContext";
import ThemeContext from "../../contexts/ThemeContext";
import { useResizeDetector } from "react-resize-detector";
import FadeIn from "react-fade-in";
import "./styles/BoatBody.scss";
import FadeInComp from "../Visual/FadeInComp";
import BoatPrices from "./BoatPrices";
import CapacityIcon from "../Visual/CapacityIcon";

const SpecItem = ({ name, value, unit = "" }) => {
  const { theme } = useContext(ThemeContext);
  return value ? (
    <p style={{ color: theme.color }}>
      <span style={{ color: theme.colorSecondary }}>{name}:</span> {value}
      {unit}
    </p>
  ) : null;
};

const BoatSpecs = ({ boat }) => {
  const { theme } = useContext(ThemeContext);
  const {
    text: {
      boatInfo: { breadth, length, year, engine, horse_power },
    },
  } = useContext(LanguageContext);
  const { width, ref } = useResizeDetector();

  const cols = useMemo(() => {
    switch (true) {
      case width > 1100: {
        return 3;
      }
      case width < 400: {
        return 1;
      }
      case width < 700: {
        return 2;
      }
      default: {
        return 3;
      }
    }
  }, [width]);

  return (
    <>
      <div
        className="BoatBody__specs--container"
        ref={ref}
        style={{
          backgroundColor: theme.backgroundSecondary,
          borderRadius: ".4rem",
          marginBottom: "1rem",
        }}
      >
        <FadeIn
          delay={100}
          transitionDuration={400}
          wrapperTag="ul"
          className={`BoatBody__specs--cols${cols}`}
          childTag="li"
        >
          <SpecItem name={breadth} value={boat.size?.breadth} unit="m" />
          <SpecItem name={length} value={boat.size?.length} unit="m" />
          <SpecItem name={year} value={boat.year} />
          <CapacityIcon
            capacity={boat.capacity}
            addLabel
            followTheme
            styles={{ span: { paddingBottom: ".3rem" } }}
          />
          <SpecItem name={engine} value={boat.engine} />
          <SpecItem name={horse_power} value={`${boat.horsePower}`} unit="cv" />
        </FadeIn>
      </div>
    </>
  );
};

const BoatInfo = ({ boat }) => {
  const { theme } = useContext(ThemeContext);
  const {
    text: {
      Boat: {
        Body: {
          Info: { includes, doesnt_include, equipment },
        },
      },
    },
    lang,
  } = useContext(LanguageContext);

  const borderColor = theme.backgroundSecondary;

  return (
    <>
      <div className="BoatBody__info" style={{ borderColor: borderColor }}>
        {boat.includes || boat.doesnt_include ? (
          <ul className="BoatBody__info--includes">
            {boat.includes && (
              <li style={{ color: theme.color }}>
                <span style={{ color: theme.colorSecondary }}>
                  {includes}:{" "}
                </span>
                {boat.includes[lang]}
              </li>
            )}
            {boat.doesnt_include && (
              <li style={{ color: theme.color }}>
                <span style={{ color: theme.colorSecondary }}>
                  {doesnt_include}:{" "}
                </span>
                {boat.doesnt_include[lang]}
              </li>
            )}
          </ul>
        ) : null}
        <div
          className="BoatBody__info--separator"
          style={{ backgroundColor: borderColor }}
        />
        <div className="BoatBody__info--equipment">
          <div className="BoatBody__info--equipmentHeader">
            <h6 style={{ color: theme.color }}>{equipment}</h6>
          </div>
          <ListGroup as="ul">
            {boat.equipment.map((eqp, i) => (
              <ListGroup.Item
                key={`equipment-list-${i}`}
                as="li"
                style={{
                  color: theme.color,
                  borderColor: borderColor,
                  backgroundColor: theme.background,
                }}
              >
                {eqp[lang]}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </div>
      </div>
    </>
  );
};

const BoatBody = ({ boat }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className="BoatBody__wrapper"
      style={{
        backgroundColor: theme.background,
      }}
    >
      <Container>
        <div className="BoatBody">
          <FadeInComp className="BoatBody__specs" id="boat-specs">
            <BoatSpecs boat={boat} />
          </FadeInComp>
          <FadeInComp id="boat-info">
            <BoatInfo boat={boat} />
          </FadeInComp>
          <div className="BoatBody__prices" id="boat-prices">
            <BoatPrices boat={boat} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BoatBody;
