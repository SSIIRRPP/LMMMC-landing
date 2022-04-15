import { useCallback, useContext, useMemo } from "react";
import { Container } from "react-bootstrap";
import Expand from "react-expand-animated";
import LayoutContext from "../../contexts/LayoutContext";
import ThemeContext from "../../contexts/ThemeContext";
import ADJParallaxBanner from "../Visual/Parallax/AdjustableParallaxBanner";
import MouseParallax from "../Visual/Parallax/MouseParallax";
import ParallaxBackgroundLines from "../Visual/Parallax/ParallaxBackgroundLines";
import BoatBreadcrumb from "./BoatBreadcrumb";
import BoatHeaderBadge from "./BoatHeaderBadge";
import BoatHeaderCard from "./BoatHeaderCard";
import "./styles/BoatHeader.scss";

const Bottom = ({ boat, height }) => {
  const { scrolling = false } = useContext(LayoutContext);
  const { theme } = useContext(ThemeContext);
  return (
    <div className="BoatHeader__Bottom" style={{ height }}>
      <div className="BoatHeader__Bottom--top">
        <h1
          style={{
            backgroundColor: theme.backgroundSecondary,
            color: theme.color,
          }}
        >
          {boat.name}
        </h1>
      </div>
      <div
        className="BoatHeader__Bottom--middle"
        style={{ backgroundColor: theme.backgroundSecondary }}
      />
      <Expand duration={150} open={!scrolling} /* transitions={["height"]} */>
        <div
          style={{ backgroundColor: theme.backgroundSecondary }}
          className="BoatHeader__Bottom--bottom"
        />
      </Expand>
    </div>
  );
};

const Background = (props) => {
  const { image, height, width, boat } = props;
  const newProps = useMemo(() => {
    let nP = { ...props };
    delete nP.image;
    return nP;
  }, [props]);

  return (
    <MouseParallax {...newProps} factor={{ x: 0.002, y: 0.005 }}>
      <div
        style={{
          height,
          width,
          backgroundImage: `url(${image})`,
          backgroundPosition: boat?.backgroundPosition,
          backgroundSize: "cover",
        }}
      />
    </MouseParallax>
  );
};

const Lines = ({ height }) => {
  const sty = useMemo(
    () => ({
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "center",
    }),
    []
  );
  const lines = useMemo(() => {
    return [
      {
        scale: { x: [1.1, 1], y: [1.2, 1.1] },
        startScroll: height * 0.7,
        style: {
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        },
        rotated: true,
      },
      {
        scale: { x: [1.2, 1.1], y: [1.1, 1] },
        startScroll: height * 0.7,
        style: {
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        },
        toLeft: true,
      },
    ];
  }, [height]);
  return <ParallaxBackgroundLines lines={lines} style={sty} height={height} />;
};

const Body = (props) => {
  const { boat } = props;
  const newProps = useMemo(() => {
    let nP = { ...props };
    delete nP.boat;
    return nP;
  }, [props]);
  return (
    <Container>
      <MouseParallax
        {...newProps}
        factor={{ x: -0.002, y: -0.005 }}
        containerStyles={{ padding: ".5rem", overflow: "visible" }}
      >
        <div className="BoatHeader__Body">
          <div className="BoatHeader__Body--first">
            <BoatBreadcrumb boat={boat} />
            <BoatHeaderBadge boat={boat} />
          </div>
          <div className="BoatHeader__Body--second">
            <BoatHeaderCard boat={boat} />
          </div>
        </div>
      </MouseParallax>
    </Container>
  );
};

const BoatHeader = ({ boat }) => {
  const backgroundImage = useMemo(
    () => require(`../../assets/images/boats/${boat.id}/background.jpeg`),
    [boat.id]
  );

  const layers = useCallback(
    (props) => {
      const { height } = props;
      return [
        {
          scale: [1.25, 1.1],
          speed: -4,
          opacity: [0.8, 0.9],
          children: (
            <Background boat={boat} image={backgroundImage} {...props} />
          ),
        },
        {
          children: <Bottom boat={boat} {...props} />,
          style: { height, zIndex: 3 },
        },
        {
          children: <Lines {...props} />,
          style: { height, zIndex: 5 },
        },
        {
          children: <Body boat={boat} {...props} />,
          style: { height, zIndex: 10 },
        },
      ];
    },
    [boat, backgroundImage]
  );

  const widthSwitch = useCallback((width) => {
    switch (true) {
      case width < 796: {
        return { height: 750 };
      }
      default: {
        return { height: 600 };
      }
    }
  }, []);

  return <ADJParallaxBanner layers={layers} widthSwitch={widthSwitch} fadeIn />;
};

export default BoatHeader;
