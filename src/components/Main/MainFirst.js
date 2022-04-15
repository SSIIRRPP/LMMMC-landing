import { useCallback, useContext } from "react";
import { Parallax } from "react-scroll-parallax";
import FirstBackground from "../../assets/images/first.jpg";
/* import FirstBackground from "../../assets/images/1.png"; */
/* import FirstBackground from "../../assets/images/2.jpeg"; */
import Sailboat from "../../assets/images/velero.png";
import Boat from "../../assets/images/yate.png";
import { ReactComponent as Rose } from "../../assets/images/rosa.svg";
import "./styles/MainFirst.scss";
import ADJParallaxBanner from "../Visual/Parallax/AdjustableParallaxBanner";
import ThemeContext from "../../contexts/ThemeContext";
import LanguageContext from "../../contexts/LanguageContext";
import LayoutContext from "../../contexts/LayoutContext";

const Body = ({ height }) => {
  const {
    text: {
      Main: {
        First: { header, title, sail, boat, school },
      },
    },
  } = useContext(LanguageContext);
  const {
    sizes: { width },
  } = useContext(LayoutContext);
  return (
    <div className="MainFirstBody" style={{ height }}>
      <div className="MainFirstBody__container">
        <div className="MainFirstBody__header">
          <div className="MainFirstBody__header--left">
            <div className="MainFirstBody__header--leftWrapper">
              <span />
            </div>
          </div>
          <h6 className="MainFirstBody__header--right">{header}</h6>
        </div>
        <div className="MainFirstBody__title">
          <h1 style={width < 430 ? { wordBreak: "break-word" } : {}}>
            {title}
          </h1>
        </div>
        <div className="MainFirstBody__separator" />
        <div className="MainFirstBody__body">
          <div className="MainFirstBody__item--icon">
            <img src={Sailboat} alt="sailboat" />
          </div>
          <div className="MainFirstBody__item--name">
            <h3>{sail}</h3>
          </div>
          <div className="MainFirstBody__item--icon">
            <img src={Boat} alt="boat" />
          </div>
          <div className="MainFirstBody__item--name">
            <h3>{boat}</h3>
          </div>
          <div className="MainFirstBody__item--icon rose">
            <Rose fill="#fff" height={100} />
          </div>
          <div className="MainFirstBody__item--name rose">{school}</div>
        </div>
      </div>
    </div>
  );
};

const MainFirst = () => {
  const { theme } = useContext(ThemeContext);
  const widthSwitch = useCallback((width) => {
    switch (true) {
      case width >= 1280: {
        return { height: 800, width };
      }
      case width >= 750: {
        return { height: 700, width };
      }
      case width < 750:
      default: {
        return { height: 850, width };
      }
    }
  }, []);

  const layers = useCallback(
    ({ height, width }) => [
      {
        image: FirstBackground,
        translateY: [-10, 10],
        scale: [1.15, 1, "easeOutCubic"],
        shouldAlwaysCompleteAnimation: true,
        /* style: {
          backgroundPosition: "85% center",
        }, */
      },
      {
        children: (
          <div className="MainFirst__main" style={{ height }}>
            <Parallax
              translateY={[0, -20]}
              scale={[1, 0.75]}
              opacity={[1, 0.8, "easeOutCubic"]}
              shouldAlwaysCompleteAnimation={true}
              className="MainFirst__main--parallax"
              style={{
                height,
              }}
            >
              <Body height={height} />
            </Parallax>
          </div>
        ),
        opacity: [1, 0.3],
        shouldAlwaysCompleteAnimation: true,
        style: {
          zIndex: 3,
        },
      },
      {
        children: (
          <div className="MainFirst__separator" style={{ width, height }}>
            <Parallax
              scaleY={[6, 1]}
              startScroll={height * 0.7}
              shouldAlwaysCompleteAnimation={true}
              /* onProgressChange={(p) => console.log("prg: ", p)} */
              style={{
                width,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                className={`MainFirst__separator--container MainFirst__separator--container${
                  theme.name === "dark" ? "-dark" : "-light"
                }`}
              />
            </Parallax>
          </div>
        ),
      },
    ],
    [theme]
  );

  return (
    <>
      <ADJParallaxBanner
        className="MainFirst__parallax"
        containerClass="MainFirst"
        layers={layers}
        widthSwitch={widthSwitch}
        includeWidthContainer
      />
    </>
  );
};

export default MainFirst;
