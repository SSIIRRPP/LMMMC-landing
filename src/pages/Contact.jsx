import { useCallback, useMemo } from "react";
import ContactForm from "../components/Contact/ContactForm";
import ADJParallaxBanner from "../components/Visual/Parallax/AdjustableParallaxBanner";
import MouseParallax from "../components/Visual/Parallax/MouseParallax";
import ParallaxBackgroundLines from "../components/Visual/Parallax/ParallaxBackgroundLines";
import backgroundImage from "../assets/images/contact-background.jpg";
import "./styles/Contact.scss";

const Background = (props) => {
  const { height, width } = props;

  return (
    <MouseParallax {...props} factor={{ x: 0.002, y: 0.005 }}>
      <div
        className="Contact__background"
        style={{
          height,
          width,
          backgroundImage: `url(${backgroundImage})`,
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

const Body = () => {
  return (
    <div className="Contact__body">
      <ContactForm />
    </div>
  );
};

const Contact = () => {
  const layers = useCallback((props) => {
    const { height } = props;
    const l = [
      {
        scale: [1.25, 1.1],
        speed: -4,
        opacity: [0.8, 0.9],
        children: <Background {...props} />,
      },
      {
        children: <Lines {...props} />,
        style: { height, zIndex: 5 },
      },
      {
        children: <Body {...props} />,
        style: { height, zIndex: 10 },
      },
    ];
    return l;
  }, []);

  const widthSwitch = useCallback((width) => {
    switch (true) {
      default: {
        return { height: 900 };
      }
    }
  }, []);

  return <ADJParallaxBanner layers={layers} widthSwitch={widthSwitch} />;
};

export default Contact;
