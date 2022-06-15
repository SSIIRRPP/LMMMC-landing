import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { ReactComponent as ClearIcon } from "../../assets/icons/clear.svg";
import { Modal } from "@mui/material";
import "./styles/ImageModal.scss";
import { useEffect, useMemo, useState, useContext, useCallback } from "react";
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
  wrapperStyle,
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
        <TransformComponent wrapperStyle={wrapperStyle}>
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
  }, [alt, show, im, wrapperStyle]);

  return comp;
};

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

const defStyle = {
  width: "100%",
  height: "100%",
};

const ImageModal = (props) => {
  const { openModal, setOpenModal, images, alt } = props;
  const [touched, setTouched] = useState(false);
  const {
    sizes: { windowHeight },
  } = useContext(LayoutContext);

  const handleModalClose = (e) => {
    e.stopPropagation();
    setOpenModal(false);
  };

  const _handleChange = useCallback(() => {
    setTouched(true);
  }, []);

  const handleChange = useMemo(
    () => (touched ? undefined : _handleChange),
    [touched, _handleChange]
  );

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
                onWheelStart={handleChange}
                onPanningStart={handleChange}
                onPinchingStart={handleChange}
                onZoomStart={handleChange}
              >
                {(prs) => (
                  <Body
                    src={images}
                    alt={alt}
                    setOpenModal={setOpenModal}
                    wrapperStyle={
                      touched
                        ? defStyle
                        : {
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            ...defStyle,
                          }
                    }
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
