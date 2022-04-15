import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { ReactComponent as ClearIcon } from "../../assets/icons/clear.svg";
import { Modal } from "@mui/material";
import "./styles/ImageModal.scss";
import {
  /* useCallback,  */ useEffect,
  useMemo,
  /* useRef,  */ useState,
  useContext,
} from "react";
import FadeIn from "react-fade-in";
import ImageGallery from "../Visual/ImageGallery";
import LayoutContext from "../../contexts/LayoutContext";

const Pinch = ({ img, active, resetTransform }) => {
  useEffect(() => {
    resetTransform();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  return (
    <TransformComponent>
      <div className="ImageModal__carousel--caption">
        <div className="ImageModal__carousel--body">
          <div
            className="ImageModal__carousel--image"
            style={{}}
            onClick={(e) => e.stopPropagation()}
          >
            <img src={img.src} alt={img.alt} />
          </div>
        </div>
      </div>
    </TransformComponent>
  );
};

const Body = ({
  setOpenModal,
  src,
  alt,
  compact,
  carousel = false,
  active,
}) => {
  const [show, setShow] = useState(false);
  const [im, setIm] = useState(null);

  useEffect(() => {
    let tm;
    if (carousel) {
      setShow(false);
      tm = setTimeout(() => {
        setShow(true);
      }, 300);
    } else {
      setShow(false);
      tm = setTimeout(() => {
        setIm(src);
        setShow(true);
      }, 300);
    }
    return () => clearTimeout(tm);
  }, [src, carousel, active]);

  const comp = useMemo(() => {
    return (
      <>
        <TransformComponent wrapperStyle={{ height: "100%", width: "100%" }}>
          <FadeIn visible={show} transitionDuration={300}>
            <div
              className="ImageModal__image"
              onClick={(e) => e.stopPropagation()}
            >
              {im ? <img src={im} alt={alt} /> : null}
            </div>
          </FadeIn>
        </TransformComponent>
      </>
    );
  }, [alt, show, im]);

  return comp;
};

// const ImageSelector = ({
//   active,
//   setActive,
//   openModal,
//   images,
//   /* prs: { resetTransform }, */
// }) => {
//   const wrpRef = useRef();
//   const cntRef = useRef();
//   const [translation, _setTranslation] = useState(0);
//   const { width: wrpWidth } = useResizeDetector({ targetRef: wrpRef });
//   const { width: cntWidth } = useResizeDetector({ targetRef: cntRef });
//
//   const maxTranslation = useMemo(() => {
//     return cntWidth > wrpWidth ? cntWidth - wrpWidth / 2 : wrpWidth;
//   }, [cntWidth, wrpWidth]);
//
//   const minTranslation = useMemo(() => {
//     return wrpWidth / 2;
//   }, [wrpWidth]);
//
//   const setTranslation = useCallback(
//     (t) => {
//       if (t > maxTranslation) {
//         /* console.log("t1: ", t, maxTranslation, minTranslation); */
//         _setTranslation(maxTranslation);
//       } else if (t < minTranslation) {
//         /* console.log("t2: ", t, maxTranslation, minTranslation); */
//         _setTranslation(minTranslation);
//       } else {
//         /* console.log("t3: ", t, maxTranslation, minTranslation); */
//         _setTranslation(t);
//       }
//     },
//     [maxTranslation, minTranslation]
//   );
//
//   useEffect(() => {
//     if (cntWidth < wrpWidth) {
//       _setTranslation(cntWidth / 2);
//     } else {
//       _setTranslation(minTranslation);
//     }
//   }, [wrpWidth, cntWidth, _setTranslation, openModal, minTranslation]);
//
//   const changeActive = useCallback(
//     (activeId) => {
//       setActive(activeId);
//       /* resetTransform(); */
//       if (cntWidth > wrpWidth) {
//         setTranslation(activeId * 90 + 45);
//       }
//     },
//     [cntWidth, wrpWidth, /*  resetTransform,  */ setTranslation, setActive]
//   );
//
//   const fwdPage = useCallback(() => {
//     setTranslation(translation + wrpWidth * 0.75);
//   }, [wrpWidth, translation, setTranslation]);
//   const bckPage = useCallback(() => {
//     setTranslation(translation - wrpWidth * 0.75);
//   }, [wrpWidth, translation, setTranslation]);
//
//   return (
//     <div className="ImageModal__selector">
//       <Button
//         bsPrefix=" "
//         className="ImageModal__selector--button"
//         disabled={!(cntWidth > wrpWidth) || !(translation > minTranslation)}
//         onClick={bckPage}
//       >
//         <BackIcon
//           style={{
//             opacity: `${
//               !(cntWidth > wrpWidth) || !(translation > minTranslation)
//                 ? ".3"
//                 : "1"
//             }`,
//           }}
//         />
//       </Button>
//       <div className="ImageModal__selector--wrapper" ref={wrpRef}>
//         <div
//           className="ImageModal__selector--container"
//           ref={cntRef}
//           style={{ transform: `translateX(${translation * -1}px)` }}
//         >
//           {images.map((it, i) => (
//             <div
//               onClick={() => changeActive(i)}
//               key={`image-selector-${i}_${it.alt}`}
//               className={`ImageModal__selector--item${
//                 active === i ? " active-img" : ""
//               }`}
//             >
//               <img src={it.src} alt={`${it.alt}-mini`} />
//             </div>
//           ))}
//         </div>
//       </div>
//       <Button
//         bsPrefix=" "
//         onClick={fwdPage}
//         disabled={!(cntWidth > wrpWidth) || !(translation < maxTranslation)}
//         className="ImageModal__selector--button"
//       >
//         <ForwardIcon
//           style={{
//             opacity: `${
//               !(cntWidth > wrpWidth) || !(translation < maxTranslation)
//                 ? ".3"
//                 : "1"
//             }`,
//           }}
//         />
//       </Button>
//     </div>
//   );
// };

const Stepper = ({ openModal, setOpenModal, images, active, setActive }) => {
  useEffect(() => {
    if (!openModal) {
      let tm = setTimeout(() => {
        setActive(0);
      }, 400);
      return () => clearTimeout(tm);
    }
  }, [openModal, setActive]);

  const _items = useMemo(() => {
    const _i = images.map((img, i) => {
      return (
        <div
          key={`${img.alt}-img-${i}-${Date.now()}`}
          className="ImageModal__carousel--item"
        >
          <TransformWrapper>
            {(prs) => (
              <Pinch
                img={img}
                active={active}
                resetTransform={prs.resetTransform}
              />
            )}
          </TransformWrapper>
        </div>
      );
    });
    return _i;
  }, [images, active]);

  const _thumbnails = useMemo(
    () =>
      images.map((img) => [
        img.src,
        (a) => (
          <div className="ImageGallery__image--container">
            <div
              className="ImageGallery__image"
              style={{
                backgroundImage: `url(${img.src})`,
              }}
            />
          </div>
        ),
      ]),
    [images]
  );

  return (
    <FadeIn visible={openModal} className="ImageGallery__wrapper">
      <ImageGallery
        active={active}
        setActive={setActive}
        slides={_items}
        thumbnails={_thumbnails}
      />
    </FadeIn>
  );
};

const ImageModal = (props) => {
  const { openModal, setOpenModal, images, alt } = props;
  const {
    sizes: { windowHeight },
  } = useContext(LayoutContext);

  const handleModalClose = (e) => {
    e.stopPropagation();
    setOpenModal(false);
  };

  return (
    <Modal
      open={openModal}
      keepMounted
      onBackdropClick={handleModalClose}
      onClose={handleModalClose}
    >
      <div className="ImageModal__wrapper" style={{ height: windowHeight }}>
        <div className="ImageModal__close" onClick={handleModalClose}>
          <ClearIcon width={40} height={40} />
        </div>
        {images && (
          <>
            {typeof images === "string" ? (
              <TransformWrapper
                wrapperStyle={{
                  width: "100%",
                  height: "100%",
                }}
              >
                {(prs) => (
                  <Body
                    src={images}
                    alt={alt}
                    setOpenModal={setOpenModal}
                    compact
                  />
                )}
              </TransformWrapper>
            ) : (
              <Stepper {...props} />
            )}
          </>
        )}
      </div>
    </Modal>
  );
};

export default ImageModal;
