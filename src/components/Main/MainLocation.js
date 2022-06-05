import ADJParallaxBanner from "../Visual/Parallax/AdjustableParallaxBanner";
import BackgroundImage from "../../assets/images/tarifasBarcos.jpg";
import { useCallback } from "react";
import { Parallax } from "react-scroll-parallax";
import FadeInComp from "../Visual/FadeInComp";
import MouseParallax from "../Visual/Parallax/MouseParallax";
import "./styles/MainLocation.scss";

const defHeight = 800;

const fadeOpts = {
  ratio: 0.4,
  threshold: [0.4, 0.6],
};

const url =
  "https://www.google.com/maps/embed?hl=en-GB&pb=!1m14!1m8!1m3!1d3154.9010137487735!2d-0.7419713!3d37.7454664!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4185fc37fbe271%3A0xb0436966114d08be!2sLa%20Manga%20Mar%20Menor%20Ch%C3%A1rter!5e0!3m2!1ses!2ses!4v1648243888659!5m2!1ses!2ses";

const Body = (props) => {
  const { width, height } = props;

  return (
    <FadeInComp options={fadeOpts}>
      <MouseParallax
        {...props}
        updateStyles={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        factor={{ x: -0.005, y: -0.005 }}
      >
        <Parallax
          speed={15}
          style={{
            backgroundColor: "white",
            borderRadius: ".4rem",
            height: height * 0.8,
            width: width ? width * 0.9 : 0,
            maxWidth: "900px",
            overflow: "hidden",
          }}
        >
          <div className="mapouter">
            <div className="gmap_canvas">
              {width && height ? (
                <>
                  <iframe
                    src={url}
                    width={`${width * 0.9 > 900 ? 900 : width * 0.9}`}
                    height={`${height * 0.8}`}
                    style={{ border: 0 }}
                    allowFullScreen=""
                    title="map"
                    loading="lazy"
                    id="gmap_canvas"
                    frameBorder="0"
                    scrolling="no"
                    marginHeight="0"
                    marginWidth="0"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </>
              ) : null}
            </div>
          </div>
        </Parallax>
      </MouseParallax>
    </FadeInComp>
  );
};

const Background = (props) => {
  const { width, height } = props;
  return (
    <MouseParallax
      {...props}
      updateStyles={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      factor={{ x: 0.005, y: 0.005 }}
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
    </MouseParallax>
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

  return (
    <ADJParallaxBanner layers={layers} a={true} widthSwitch={widthSwitch} />
  );
};

export default MainLocation;
