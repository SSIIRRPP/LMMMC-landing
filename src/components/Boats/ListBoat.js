/* import img from "../../assets/images/boats" */
/* const imags = boat.images.map((img) =>
  require(`../../assets/images/boats/${boat.id}/${img}.jpeg`)
); */
import { useCallback, useContext, useMemo, useState } from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { Parallax } from "react-scroll-parallax";
import ThemeContext from "../../contexts/ThemeContext";
import ADJParallaxBanner from "../Visual/Parallax/AdjustableParallaxBanner";
import { ReactComponent as PeopleIcon } from "../../assets/icons/people.svg";
import { ReactComponent as WhatsAppIcon } from "../../assets/icons/whatsapp.svg";
import { ReactComponent as ClearIcon } from "../../assets/icons/clear.svg";
import "./styles/ListBoat.scss";
import { Button } from "react-bootstrap";
import { Modal } from "@mui/material";
import { useNavigate } from "react-router";
import FadeInComp from "../Visual/FadeInComp";
import LanguageContext from "../../contexts/LanguageContext";
/* var asyncRequire = require("async-require"); */

const fadeOpts = {
  ratio: 0.5,
  threshold: [0.5],
};

const ImageModal = ({ openModal, setOpenModal, image, boat }) => {
  return (
    <Modal
      open={openModal}
      keepMounted
      onBackdropClick={() => setOpenModal(false)}
      onClose={() => setOpenModal(false)}
    >
      <div
        onClick={() => setOpenModal(false)}
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TransformWrapper>
          {() => (
            <div
              style={
                {
                  /* padding: "5vh 5vw", */
                }
              }
              onClick={(e) => e.stopPropagation()}
            >
              <div
                onClick={() => setOpenModal(false)}
                style={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                }}
              >
                <ClearIcon width={40} height={40} />
              </div>
              <TransformComponent>
                <img
                  src={image}
                  alt={boat.id}
                  style={{ maxWidth: "90vw", maxHeight: "90vh" }}
                />
              </TransformComponent>
            </div>
          )}
        </TransformWrapper>
      </div>
    </Modal>
  );
};

const Body = ({ boat, inverted, linkText, width }) => {
  const [openModal, setOpenModal] = useState(false);
  const {
    text: {
      Boats: {
        ListBoat: {
          Body: { shipmaster, requires_license, no_license, info },
        },
      },
    },
  } = useContext(LanguageContext);
  const navigate = useNavigate();
  const mainImage = useMemo(
    () => require(`../../assets/images/boats/${boat.id}/main.jpeg`),
    [boat.id]
  );
  return (
    <div className={`ListBoat${inverted ? " inverted" : ""}`}>
      <div className="ListBoat__container">
        <FadeInComp options={fadeOpts}>
          <div className="ListBoat__first" onClick={() => setOpenModal(true)}>
            <div
              className="ListBoat__first--image"
              style={{ backgroundImage: `url(${mainImage})` }}
            />
          </div>
        </FadeInComp>
        <FadeInComp options={fadeOpts} className="ListBoat__second">
          <div className="ListBoat__second--top">
            <div className="ListBoat__second--item ListBoat__second--name">
              <h2>{boat.name}</h2>
            </div>
            {boat.requiresShipmaster ? (
              <div className="ListBoat__second--item ListBoat__second--shipmaster">
                <h5>{shipmaster}</h5>
              </div>
            ) : null}

            <div className="ListBoat__second--item ListBoat__second--license">
              {boat.requiresLicense ? (
                <>
                  {!boat.requiresShipmaster ? (
                    <h6>{requires_license}</h6>
                  ) : null}
                </>
              ) : (
                <h6>{no_license}</h6>
              )}
            </div>
            {boat.capacity ? (
              <div className="ListBoat__second--item ListBoat__second--capacity">
                <h6>{boat.capacity}</h6>{" "}
                <span>
                  <PeopleIcon />
                </span>
              </div>
            ) : null}
            <div className="ListBoat__second--item ListBoat__second--description">
              <p>{boat.description}</p>
            </div>
          </div>
          <div className="ListBoat__second--bottom">
            <Button
              variant="success"
              className="ListBoat__second--link ListBoat__second--whatsapp"
              as="a"
              href={linkText}
              target="_blank"
            >
              <div className="ListBoat__second--whatsappContainer">
                <WhatsAppIcon fill="#fff" width={40} height={40} />
              </div>
            </Button>
            <Button
              onClick={() => navigate(`/embarcaciones/${boat.id}`)}
              className="ListBoat__second--link ListBoat__second--info"
            >
              {info}
            </Button>
          </div>
        </FadeInComp>
      </div>
      <ImageModal
        openModal={openModal}
        setOpenModal={setOpenModal}
        boat={boat}
        image={mainImage}
      />
    </div>
  );
};

const ListBoat = (props) => {
  const { boat } = props;
  const { theme } = useContext(ThemeContext);

  const widthSwitch = useCallback((width) => {
    switch (true) {
      case width < 800: {
        return { height: 950 };
      }
      default: {
        return { height: 700 };
      }
    }
  }, []);

  const backgroundImage = useMemo(
    () => require(`../../assets/images/boats/${boat.id}/background.jpeg`),
    [boat.id]
  );

  const layers = useCallback(
    (layerProps) => {
      const { height } = layerProps;
      return [
        {
          scale: [1.25, 1.1],
          speed: -2,
          opacity: [0.8, 0.9],
          children: (
            <div
              className="ListBoat__background--background"
              style={{ height, backgroundImage: `url(${backgroundImage})` }}
            />
          ),
        },
        {
          speed: 2,
          children: (
            <div className="ListBoat__wrapper">
              <Body {...props} {...layerProps} />
            </div>
          ),
          style: { height, zIndex: 3 },
        },
        {
          children: (
            <div className="ListBoat__background" style={{ height }}>
              <Parallax
                scaleY={[1.5, 3]}
                scaleX={[1.1, 1]}
                startScroll={height * 0.7}
                shouldAlwaysCompleteAnimation={true}
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div
                  className={`ListBoat__background--plx rotated ListBoat__background--plx${
                    theme.name === "dark" ? "-dark" : "-light"
                  }`}
                />
              </Parallax>
              <Parallax
                scaleY={[3, 1.5]}
                scaleX={[1.1, 1]}
                startScroll={height * 0.7}
                shouldAlwaysCompleteAnimation={true}
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div
                  className={`ListBoat__background--plx ListBoat__background--plx${
                    theme.name === "dark" ? "-dark" : "-light"
                  }`}
                />
              </Parallax>
            </div>
          ),
        },
      ];
    },
    [theme, backgroundImage, props]
  );

  return (
    <ADJParallaxBanner
      className={`${props?.inverted ? " inverted" : ""}`}
      layers={layers}
      widthSwitch={widthSwitch}
    />
  );
};

export default ListBoat;
