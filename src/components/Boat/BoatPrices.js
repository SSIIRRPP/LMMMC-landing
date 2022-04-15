import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
} from "@mui/material";
import { useContext, useMemo } from "react";
import LanguageContext from "../../contexts/LanguageContext";
import ThemeContext from "../../contexts/ThemeContext";
import { ReactComponent as WhatsappIcon } from "../../assets/icons/whatsapp.svg";
import "./styles/BoatPrices.scss";
import { generateWaUrl } from "../../constants";
import FadeInComp from "../Visual/FadeInComp";

const generateBoatLink = (boatName, season = "") =>
  generateWaUrl(
    `Quisiera más información sobre el alquiler del barco *${boatName}*, para "${season}"`
  );

const SeasonCard = ({ season, boat }) => {
  const { theme } = useContext(ThemeContext);

  const {
    text: {
      Boat: {
        Body: {
          Prices: { from, to, button },
        },
      },
    },
    lang,
  } = useContext(LanguageContext);

  const linkText = useMemo(
    () => generateBoatLink(boat.name, season.name["spa"]),
    [boat?.name, season?.name /* , lang */]
  );

  return (
    <Box
      className="BoatPrices__season--box"
      /* sx={{ minHeight: "250px", minWidth: "200px" }} */
    >
      <Card
        className="BoatPrices__season--card"
        sx={{ backgroundColor: theme.backgroundSecondary }}
      >
        <CardHeader
          title={
            <h5
              style={{
                color: theme.color,
                marginBottom: 0,
                whiteSpace: "nowrap",
              }}
            >
              {season.name[lang]}
            </h5>
          }
        />
        <CardContent>
          <div className="BoatPrices__season--body">
            <div className="BoatPrices__season--date">
              <h6 style={{ color: theme.color }}>
                <span style={{ color: theme.colorSecondary }}>{from}</span>{" "}
                {season.from}{" "}
                <span style={{ color: theme.colorSecondary }}>{to}</span>{" "}
                {season.to}{" "}
              </h6>
            </div>
            <div className="BoatPrices__season--pricesWrapper">
              <div className="BoatPrices__season--prices">
                {Object.entries(season.prices).map((entry, i) => {
                  return (
                    <div
                      className="BoatPrices__season--price"
                      key={`season-price-${i}`}
                    >
                      <span style={{ color: theme.colorSecondary }}>
                        {entry[0]}:{" "}
                      </span>{" "}
                      <span style={{ color: theme.color }}>{entry[1]}€</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </CardContent>
        <CardActions>
          <Button
            style={{ color: theme.color, margin: "0 auto" }}
            href={linkText}
          >
            <WhatsappIcon fill={theme.color} style={{ marginRight: ".5rem" }} />{" "}
            {button}
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

const BoatPricesExtra = ({ price }) => {
  const { shipmaster, deposit, fuel } = price;
  const { theme } = useContext(ThemeContext);
  const {
    text: {
      Boat: {
        Body: {
          Prices: {
            options_title,
            shipmaster: shpmst,
            deposit: dpst,
            fuel: { title: fuel_title, half: fuel_half, full: fuel_full },
          },
        },
      },
    },
  } = useContext(LanguageContext);
  return shipmaster || deposit || fuel ? (
    <div className="BoatPrices__options">
      <Box>
        <Card
          className="BoatPrices__options--card"
          sx={{ backgroundColor: theme.backgroundSecondary }}
        >
          <CardHeader
            title={
              <h5
                style={{
                  color: theme.color,
                  textAlign: "center",
                  marginBottom: 0,
                }}
              >
                {options_title}
              </h5>
            }
          />
          <CardContent
            className="BoatPrices__options--body"
            style={{ gridTemplateColumns: deposit || fuel ? "1fr 1fr" : "1fr" }}
          >
            {shipmaster ? (
              <div className="BoatPrices__options--left">
                <p style={{ color: theme.color }}>{shpmst}</p>
                <div>
                  {Object.entries(shipmaster).map((entry, i) => {
                    return (
                      <div
                        className="BoatPrices__season--price"
                        key={`season-price-${i}`}
                      >
                        <span style={{ color: theme.colorSecondary }}>
                          {entry[0]}:{" "}
                        </span>{" "}
                        <span style={{ color: theme.color }}>{entry[1]}€</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            ) : null}
            {deposit || fuel ? (
              <div className="BoatPrices__options--right">
                {fuel ? (
                  <div className="BoatPrices__options--rightItem BoatPrices__options--fuel">
                    <h6 style={{ color: theme.color }}>{fuel_title}</h6>
                    <div className="BoatPrices__options--fuelContainer">
                      <div className="BoatPrices__options--fuelItem">
                        <span style={{ color: theme.colorSecondary }}>
                          {fuel_half}:{" "}
                        </span>{" "}
                        <span style={{ color: theme.color }}>{fuel.half}€</span>
                      </div>
                      <div>
                        <span style={{ color: theme.colorSecondary }}>
                          {fuel_full}:{" "}
                        </span>{" "}
                        <span style={{ color: theme.color }}>{fuel.full}€</span>
                      </div>
                    </div>
                  </div>
                ) : null}
                {deposit ? (
                  <div className="BoatPrices__options--rightItem BoatPrices__options--deposit">
                    <span
                      style={{
                        color: theme.colorSecondary,
                        marginRight: ".3rem",
                      }}
                    >
                      {dpst}:
                    </span>
                    <span style={{ color: theme.color }}> {deposit}€</span>
                  </div>
                ) : null}
              </div>
            ) : null}
          </CardContent>
        </Card>
      </Box>
    </div>
  ) : null;
};

const BoatPrices = ({ boat }) => {
  const { price } = boat;
  const {
    text: {
      Boat: {
        Body: {
          Prices: { title },
        },
      },
    },
  } = useContext(LanguageContext);
  const { theme } = useContext(ThemeContext);
  return (
    <div className="BoatPrices">
      <FadeInComp className="BoatPrices__header">
        <h5 style={{ color: theme.color }}>{title}</h5>
        <div style={{ border: `1px solid ${theme.backgroundSecondary}` }} />
      </FadeInComp>
      <div className="BoatPrices__body">
        {/* <Container> */}
        <div className="BoatPrices__seasons">
          {price.seasons.map((season, i) => {
            return (
              <FadeInComp
                key={`season-card-${i}`}
                className="BoatPrices__season--container"
              >
                <SeasonCard boat={boat} season={season} />
              </FadeInComp>
            );
          })}
        </div>
        {/* </Container> */}
        <FadeInComp>
          <BoatPricesExtra price={price} />
        </FadeInComp>
      </div>
    </div>
  );
};

export default BoatPrices;
