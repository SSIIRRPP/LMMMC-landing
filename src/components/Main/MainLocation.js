import ADJParallaxBanner from "../Visual/Parallax/AdjustableParallaxBanner";
import BackgroundImage from "../../assets/images/tarifasBarcos.jpg";
import { useCallback, useContext } from "react";
import { Parallax } from "react-scroll-parallax";
import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from "react-parallax-mouse";
import { LayoutContext } from "../Layout";
import FadeInComp from "../Visual/FadeInComp";

const defHeight = 800;

const fadeOpts = {
  ratio: 0.4,
  threshold: [0.4, 0.6],
};

const Body = ({ width, height }) => {
  const { touch } = useContext(LayoutContext);
  /* console.log("props: ", props); */
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
          factorX={-0.005}
          factorY={-0.005}
          updateStyles={(o) => {
            return {
              height,
              width,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            };
          }}
        >
          <Parallax
            speed={15}
            /* scale={[0.7, 1, [0.66, 0.13, 0, 0.99]]} */
            style={{
              backgroundColor: "white",
              borderRadius: ".4rem",
              height: height * 0.8,
              width: width ? width * 0.9 : 0,
              maxWidth: "900px",
            }}
          />
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
        factorX={0.005}
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

const MainLocation = () => {
  const layers = useCallback((props) => {
    const { height, width } = props;
    return [
      {
        translateY: [-10, 10],
        scale: [1.35, 1.1],
        shouldAlwaysCompleteAnimation: true,
        children: <Background {...props} />,
        style: {
          /* display: "flex",
          justifyContent: "center",
          alignItems: "center", */
        },
      },
      {
        style: {
          height: height,
          background:
            "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgb(0, 0, 0, .82) 75%, rgba(0,0,0,1) 100%)",
        },
        scale: [1.25, 1, [0.39, 0.27, 0, 0.96]],
        translateY: [100, 0, [0.39, 0.27, 0, 0.96]],
      },
      {
        children: <Body {...props} />,
        style: {
          width,
          height: height,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        },
      },
    ];
  }, []);

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
        return { height: defHeight, width };
      }
    }
  }, []);

  return <ADJParallaxBanner layers={layers} widthSwitch={widthSwitch} />;
};

export default MainLocation;
