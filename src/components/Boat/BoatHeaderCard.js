import {
  Box,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import { useContext, useMemo } from "react";
import LanguageContext from "../../contexts/LanguageContext";

const BoatHeaderCard = ({ boat }) => {
  const {
    text: {
      boatInfo: { price_from },
      Boat: {
        Header: {
          Card: { head, title, button },
        },
      },
    },
  } = useContext(LanguageContext);

  const minPrice = useMemo(() => {
    const prices = boat.price.seasons
      .map((s) => Object.values(s.prices))
      .flat()
      .sort((a, b) => a - b, 0);
    return prices[0];
  }, [boat.price]);

  const handleClick = (e) => {
    e?.preventDefault();
    const id = "boat-prices";
    const yOffset = -80;
    const element = document.getElementById(id);
    const y =
      element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
    element.classList.add("anim-pulse", "anim-backwards");
    /* const el = document.getElementById("boat-prices");
    el && el.scrollIntoView({ behavior: "smooth" }); */
  };

  return (
    <Box className="BoatHeader__BodyCard--container" sx={{ width: 250 }}>
      <Card className="BoatHeader__BodyCard" variant="outlined">
        <CardHeader className="BoatHeader__BodyCard--title" title={head} />
        <CardContent className="BoatHeader__BodyCard--content">
          <h6>{title}</h6>
          <h3>
            {price_from} <strong>{minPrice}</strong>€
          </h3>
        </CardContent>
        <CardActions>
          <Button onClick={handleClick}>{button}</Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default BoatHeaderCard;
