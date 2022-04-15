import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import boats from "../boats";
import BoatHeader from "../components/Boat/BoatHeader";
import BoatImages from "../components/Boat/BoatImages";
import NotFound from "./NotFound";
import FadeIn from "react-fade-in";
import BoatBody from "../components/Boat/BoatBody";
import LayoutContext from "../contexts/LayoutContext";

const Boat = () => {
  const { boatId } = useParams();
  const [init, setInit] = useState(false);
  const [boat, setBoat] = useState(null);
  const [show, setShow] = useState(false);
  const { Fallback } = useContext(LayoutContext);

  useEffect(() => {
    if (boatId) {
      setBoat(boats.find((b) => b.id === boatId));
      setInit(true);
    }
  }, [boatId]);

  useEffect(() => {
    setShow(false);
    let tm = setTimeout(() => setShow(true), 100);
    return () => clearTimeout(tm);
  }, [boat]);

  return boat ? (
    <>
      {show ? (
        <FadeIn delay={300} transitionDuration={500}>
          <BoatHeader boat={boat} />
          <BoatImages boat={boat} />
          <BoatBody boat={boat} />
        </FadeIn>
      ) : (
        <Fallback />
      )}
    </>
  ) : (
    <>{init ? <NotFound /> : null}</>
  );
};

export default Boat;
