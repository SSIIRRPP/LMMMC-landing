import { useCallback, useContext, useEffect, useMemo, useRef } from "react";
import LanguageContext from "../../contexts/LanguageContext";
import capitalize from "../../util/capitalize";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
} from "@mui/material";
import CapacityIcon from "../Visual/CapacityIcon";
import LayoutContext from "../../contexts/LayoutContext";

const BoatHeaderBadge = ({ boat }) => {
  const tmRef = useRef(null);
  const {
    sizes: { width },
  } = useContext(LayoutContext);
  const {
    text: {
      boatTypes,
      Boat: {
        Header: {
          Badge: { button },
        },
      },
      boatInfo: { shipmaster, requires_license, no_license, year },
    },
  } = useContext(LanguageContext);

  const type = useMemo(() => {
    const { type: t, cap = [true, [1]] } = boatTypes(boat.type);
    return capitalize(t.split("-").join(" "), ...cap);
  }, [boat?.type, boatTypes]);

  const handleClick = useCallback(
    (e) => {
      e?.preventDefault();
      const id = width > 992 ? "boat-info" : "boat-specs";
      const secId = !(width > 992) ? "boat-info" : "boat-specs";
      const secEl = document.getElementById(secId);
      const yOffset = -80;
      const element = document.getElementById(id);
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      tmRef.current = setTimeout(() => {
        element.classList.add("anim-pulse", "anim-backwards");
        if (width <= 992) {
          secEl.classList.add("anim-pulse", "anim-backwards");
        }
      }, 100);
    },
    [width]
  );

  useEffect(
    () => () => {
      if (tmRef.current) {
        clearTimeout(tmRef.current);
      }
    },
    []
  );

  return (
    <Card className="BoatHeader__BodyBadge">
      <CardHeader className="BoatHeader__BodyBadge--top" title={type} />
      <div className="BoatHeader__BodyBadge--separator" />
      <CardContent className="BoatHeader__BodyBadge--bottom">
        {boat.requiresShipmaster ? (
          <div className="BoatHeader__BodyBadge--item BoatHeader__BodyBadge--shipmaster">
            <h6>{shipmaster}</h6>
          </div>
        ) : (
          <div className="BoatHeader__BodyBadge--item BoatHeader__BodyBadge--license">
            {boat.requiresLicense ? (
              <h6>{requires_license}</h6>
            ) : (
              <h6>{no_license}</h6>
            )}
          </div>
        )}
        {boat.capacity ? (
          <CapacityIcon
            className="BoatHeader__BodyBadge--item"
            capacity={boat.capacity}
            light
          />
        ) : null}
        <div className="BoatHeader__BodyBadge--item BoatHeader__BodyBadge--price">
          <h6>
            {year}: {boat.year}
          </h6>
        </div>
      </CardContent>
      <div className="BoatHeader__BodyBadge--separator" />
      <CardActions>
        <Button onClick={handleClick}>{button}</Button>
      </CardActions>
    </Card>
  );
};

export default BoatHeaderBadge;
