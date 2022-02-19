import boats from "../boats";
import ListBoat from "../components/Boats/ListBoat";
import BackgroundImage from "../assets/images/barcoCenital.jpg";
import "./styles/Boats.scss";
import ADJParallaxBanner from "../components/Visual/Parallax/AdjustableParallaxBanner";
import { useCallback, useContext } from "react";
import { LayoutContext } from "../components/Layout";
import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from "react-parallax-mouse";
import ThemeContext from "../contexts/ThemeContext";
import { generateWaUrl } from "../constants";
import { Parallax } from "react-scroll-parallax";
import LazyLoader from "../util/LazyLoader";
import FadeInComp from "../components/Visual/FadeInComp";
import FadeIn from "react-fade-in";
import LanguageContext from "../contexts/LanguageContext";

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

const Header = ({ width, height }) => {
  const { touch } = useContext(LayoutContext);
  const {
    text: {
      Boats: {
        Header: { h1, h5 },
      },
    },
  } = useContext(LanguageContext);
  return (
    <FadeInComp options={fadeOpts}>
      <MouseParallaxContainer
        enabled={!touch}
        useWindowMouseEvents
        containerStyles={{
          height,
          width,
        }}
      >
        <MouseParallaxChild
          factorX={-0.002}
          factorY={-0.005}
          updateStyles={(o) => {
            return {
              height,
              width,
            };
          }}
        >
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
        </MouseParallaxChild>
      </MouseParallaxContainer>
    </FadeInComp>
  );
};

const Background = ({ height, width }) => {
  const { touch } = useContext(LayoutContext);
  return (
    <MouseParallaxContainer
      enabled={!touch}
      useWindowMouseEvents
      containerStyles={{
        height,
        width,
      }}
    >
      <MouseParallaxChild
        factorX={0.002}
        factorY={0.005}
        updateStyles={(o) => {
          return {
            height,
            width,
          };
        }}
      >
        <div
          style={{
            height,
            width,
            backgroundImage: `url(${BackgroundImage})`,
            backgroundPosition: "center center",
            backgroundSize: "cover",
          }}
        />
      </MouseParallaxChild>
    </MouseParallaxContainer>
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
    <div className={`Boats ${theme.name}`}>
      <LazyLoader>
        <ADJParallaxBanner
          layers={layers}
          widthSwitch={widthSwitch}
          containerStyle={{ height: "100%" }}
        />
        <Body />
      </LazyLoader>
    </div>
  );
};

export default Boats;
