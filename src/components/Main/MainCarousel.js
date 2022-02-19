import {
  useEffect,
  useMemo,
  useState,
  useCallback,
  useContext,
  useRef,
} from "react";
import { Button, Carousel } from "react-bootstrap";
import { Parallax, useParallaxController } from "react-scroll-parallax";
import FirstBackground from "../../assets/images/veleroCharterMangaMarMenor.jpg";
import SecondBackground from "../../assets/images/puertoTomasMaestre.jpg";
import ThirdBackground from "../../assets/images/sailboatMain.jpg";
import { ReactComponent as ForwardIcon } from "../../assets/icons/arrow_forward.svg";
import { ReactComponent as BackIcon } from "../../assets/icons/arrow_back.svg";
import useVisibility from "../../hooks/useVisibility";
import { AdjustableContainer } from "../Visual/Parallax/AdjustableParallaxBanner";
import RentingSlide from "./Slides/RentingSlide";
import ContactSlide from "./Slides/ContactSlide";
import SchoolSlide from "./Slides/SchoolSlide";
import ThemeContext from "../../contexts/ThemeContext";
import "./styles/MainCarousel.scss";
import "./Slides/styles/CarouselSlide.scss";
import LanguageContext from "../../contexts/LanguageContext";
import { LayoutContext } from "../Layout";

const speed = 20;
const scaleEase = [0.48, 0.98, 0, 1];
const scale = [0.8, 1, scaleEase];
const opacityEase = [0.29, 0.18, 0, 1.48];
const opacity = [0.25, 1, opacityEase];

const MainCarousel = () => {
  const {
    text: {
      Main: {
        Carousel: { title },
      },
    },
  } = useContext(LanguageContext);
  const childRef = useRef(null);
  const {
    sizes: { width },
  } = useContext(LayoutContext);
  const { theme } = useContext(ThemeContext);
  const [key, setKey] = useState(0);
  const [hover, setHover] = useState(true);
  const [interval, setInterval] = useState(null);
  const [show, setShow] = useState(false);
  const toggle = useCallback((v) => setInterval(v), []);
  /* const onChange = useCallback((e) => {}, []); */
  const { isVisible } = useVisibility({
    childRef,
  });
  const parallaxController = useParallaxController();

  useEffect(() => {
    setShow(true);
  }, []);

  const collapsed = useMemo(() => width < 930, [width]);

  const widthSwitch = useCallback(
    (width) => {
      switch (true) {
        case width < 530: {
          return { height: 800, key, collapsed, hover };
        }
        default: {
          return { height: 700, key, collapsed, hover };
        }
      }
    },
    [key, collapsed, hover]
  );

  useEffect(() => {
    if (isVisible) {
      toggle(8000);
    } else {
      toggle(null);
    }
  }, [isVisible, toggle]);

  /* useEffect(() => {
    console.log("isVisible: ", isVisible);
  }, [isVisible]); */

  const changeKey = (t) => {
    setKey((s) => {
      if (t === "back") {
        return s > 0 ? s - 1 : 2;
      } else if (t === "fwd") {
        return s < 2 ? s + 1 : 0;
      }
    });
    setShow(false);
  };

  useEffect(() => {
    if (collapsed) {
      setHover(true);
    }
  }, [collapsed]);

  useEffect(() => {
    if (show) {
      parallaxController.update();
    }
  }, [show, parallaxController]);

  const carousel = useMemo(
    () => (
      <AdjustableContainer widthSwitch={widthSwitch} includeWidthContainer>
        {({ result: { height, collapsed, hover } }) => (
          <>
            {console.log({ height, collapsed, hover })}
            <Carousel
              /* fade */
              activeIndex={collapsed ? key : undefined}
              controls={!collapsed}
              interval={interval}
              className="MainCarousel__carousel"
              onSlide={(k) => {
                /* parallaxController.update(); */
                /* setKey(k);
                setShow(false); */
              }}
              style={{ height }}
              onSlid={(k) => {
                /* parallaxController.update(); */
                setShow(true);
              }}
              onSelect={(k) => {
                setKey(k);
                setShow(false);
              }}
              nextIcon={
                <div
                  className={`MainCarousel__carousel--icon MainCarousel__carousel--icon${
                    hover ? "Show" : "Hide"
                  }`}
                >
                  <span
                    aria-hidden="true"
                    className="carousel-control-next-icon"
                  />
                </div>
              }
              nextLabel="Siguiente"
              prevIcon={
                <div
                  className={`MainCarousel__carousel--icon MainCarousel__carousel--icon${
                    hover ? "Show" : "Hide"
                  }`}
                >
                  <span
                    aria-hidden="true"
                    className="carousel-control-prev-icon"
                  />
                </div>
              }
              prevLabel="Anterior"
            >
              <Carousel.Item
                className="MainCarousel__carousel--item"
                style={{
                  height,
                  backgroundImage: `url(${FirstBackground})`,
                }}
              >
                <Carousel.Caption className="MainCarousel__carousel--caption">
                  <Parallax
                    id="blabla0"
                    /* ref={key === 0 ? captionRef : null} */
                    speed={speed}
                    scale={scale}
                    opacity={opacity}
                    className="MainCarousel__carousel--captionWrapper"
                  >
                    <div
                      className={`MainCarousel__carousel--captionContainer MainCarousel__carousel--captionContainer${
                        show ? "Show" : "Hide"
                      }`}
                    >
                      <RentingSlide />
                    </div>
                  </Parallax>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item
                className="MainCarousel__carousel--item"
                style={{
                  height,
                  backgroundImage: `url(${SecondBackground})`,
                }}
              >
                <Carousel.Caption className="MainCarousel__carousel--caption">
                  <Parallax
                    id="blabla1"
                    speed={speed}
                    scale={scale}
                    opacity={opacity}
                    /* ref={key === 1 || key === 0 ? captionRef : null} */
                    className="MainCarousel__carousel--captionWrapper"
                  >
                    <div
                      className={`MainCarousel__carousel--captionContainer MainCarousel__carousel--captionContainer${
                        show ? "Show" : "Hide"
                      }`}
                    >
                      <SchoolSlide />
                    </div>
                  </Parallax>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item
                className="MainCarousel__carousel--item"
                style={{
                  height,
                  backgroundImage: `url(${ThirdBackground})`,
                }}
              >
                <Carousel.Caption className="MainCarousel__carousel--caption">
                  <Parallax
                    id="blabla2"
                    speed={speed}
                    scale={scale}
                    opacity={opacity}
                    /* ref={key === 2 ? captionRef : null} */
                    className="MainCarousel__carousel--captionWrapper"
                  >
                    <div
                      className={`MainCarousel__carousel--captionContainer MainCarousel__carousel--captionContainer${
                        show ? "Show" : "Hide"
                      }`}
                    >
                      <ContactSlide />
                    </div>
                  </Parallax>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
            {collapsed ? (
              <div className="MainCarousel__collapsed--container">
                <Button
                  as="div"
                  variant="outline-secondary"
                  onClick={() => changeKey("fwd")}
                  className={`MainCarousel__collapsed--controlers ${
                    show && (collapsed || hover) ? "show" : "hide"
                  } MainCarousel__collapsed--right`}
                >
                  <ForwardIcon />
                </Button>
                <Button
                  as="div"
                  variant="outline-secondary"
                  onClick={() => changeKey("back")}
                  className={`MainCarousel__collapsed--controlers ${
                    show && (collapsed || hover) ? "show" : "hide"
                  } MainCarousel__collapsed--left`}
                >
                  <BackIcon />
                </Button>
              </div>
            ) : null}
          </>
        )}
      </AdjustableContainer>
    ),
    [show, interval, key, widthSwitch]
  );

  return (
    <div
      className={`MainCarousel ${theme.name}`}
      ref={childRef}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onTouchStart={() => setHover(true)}
    >
      <div className="MainCarousel__header">
        <h2 style={{ color: theme.color }}>{title}</h2>
      </div>
      <div className="MainCarousel__body">{carousel}</div>
    </div>
  );
};

export default MainCarousel;
