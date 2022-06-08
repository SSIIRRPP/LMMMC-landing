import boats from "../boats";
import ListBoat from "../components/Boats/ListBoat";
import BackgroundImage from "../assets/images/barcoCenital.jpg";
import "./styles/Boats.scss";
import ADJParallaxBanner from "../components/Visual/Parallax/AdjustableParallaxBanner";
import { useCallback, useContext } from "react";
import ThemeContext from "../contexts/ThemeContext";
import { generateWaUrl } from "../constants";
import { Parallax } from "react-scroll-parallax";
import LazyLoader from "../util/LazyLoader";
import FadeInComp from "../components/Visual/FadeInComp";
import FadeIn from "react-fade-in";
import LanguageContext from "../contexts/LanguageContext";
import MouseParallax from "../components/Visual/Parallax/MouseParallax";

const fadeOpts = {
  ratio: 0.2,
  threshold: [0.2, 0.8],
};

const generateBoatLink = (boatName) =>
  generateWaUrl(
    `Quisiera más información sobre el alquiler del barco *${boatName}*.`
  );

const Body = () => {
  return (
    <div className="Boats__body">
      {boats.map((b, i) => (
        <div className="Boats__body--item" key={`list-${b.id}-${i}`}>
          <FadeIn>
            <div className="Boats__body--header"></div>
            <ListBoat
              boat={b}
              inverted={i % 2 !== 0}
              linkText={generateBoatLink(b.name)}
            />
          </FadeIn>
        </div>
      ))}
    </div>
  );
};

const Header = (props) => {
  const { height, width } = props;
  const {
    text: {
      Boats: {
        Header: { h1, h5 },
      },
    },
  } = useContext(LanguageContext);
  return (
    <FadeInComp options={fadeOpts}>
      <MouseParallax {...props} factor={{ x: -0.002, y: -0.005 }}>
        <Parallax speed={-5} startScroll={200}>
          <div className="Boats__header" style={{ width, height }}>
            <div className="Boats__header--container">
              <h1>{h1}</h1>
              <div className="Boats__header--text">
                <h5>{h5}</h5>
              </div>
            </div>
          </div>
        </Parallax>
      </MouseParallax>
    </FadeInComp>
  );
};

const Background = (props) => {
  const { height, width } = props;
  return (
    <MouseParallax {...props}>
      <div
        style={{
          height,
          width,
          backgroundImage: `url(${BackgroundImage})`,
          backgroundPosition: "center center",
          backgroundSize: "cover",
        }}
      />
    </MouseParallax>
  );
};

const Boats = () => {
  const { theme } = useContext(ThemeContext);
  const layers = useCallback(
    (props) => [
      {
        scale: [1.35, 1.1],
        children: <Background {...props} />,
      },
      {
        children: <Header {...props} />,
      },
    ],
    []
  );

  const widthSwitch = () => {
    switch (true) {
      default: {
        return { height: 400 };
      }
    }
  };

  return (
    <main className={`Boats ${theme.name}`}>
      <LazyLoader>
        <ADJParallaxBanner
          layers={layers}
          widthSwitch={widthSwitch}
          containerStyle={{ height: "100%" }}
        />
        <Body />
      </LazyLoader>
    </main>
  );
};

export default Boats;
