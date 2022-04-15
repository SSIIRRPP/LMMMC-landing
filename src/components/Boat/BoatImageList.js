import { useCallback, useContext, useMemo } from "react";
import { Container } from "react-bootstrap";
import { useResizeDetector } from "react-resize-detector";
import LanguageContext from "../../contexts/LanguageContext";
import ThemeContext from "../../contexts/ThemeContext";

const BoatImageList = ({ images, height, setActive, setOpenModal }) => {
  const { theme } = useContext(ThemeContext);
  const {
    text: {
      Boat: {
        Images: { h5 },
      },
    },
  } = useContext(LanguageContext);
  const { width, ref } = useResizeDetector();

  const cols = useMemo(() => {
    return parseInt(width / 90);
  }, [width]);

  const handleImageClick = useCallback(
    (e, id) => {
      e.preventDefault();
      e.stopPropagation();
      setOpenModal(true);
      setActive(id);
    },
    [setActive, setOpenModal]
  );

  return (
    <div
      className="BoatImageList__wrapper"
      style={{
        backgroundColor: theme.background,
      }}
    >
      <Container>
        <div className="BoatImageList">
          <div className="BoatImageList__header">
            <h5 style={{ color: theme.color }}>{h5}: </h5>
          </div>
          <div className="BoatImageList__list--container" ref={ref}>
            <div
              className="BoatImageList__list"
              style={{
                height,
                backgroundColor: theme.backgroundSecondary,
                gridTemplateColumns:
                  cols < images.length
                    ? `${"1fr ".repeat(cols)}`
                    : `${"92px ".repeat(images.length)}`,
              }}
            >
              {images.map((img, i) => {
                if (i <= cols - 1) {
                  let st = {};
                  let rd = ".2rem";
                  if (i === 0) {
                    st = {
                      borderBottomLeftRadius: rd,
                      borderTopLeftRadius: rd,
                    };
                  } else if (i + 1 === cols) {
                    st = {
                      borderBottomRightRadius: rd,
                      borderTopRightRadius: rd,
                    };
                  }
                  return (
                    <div
                      className="BoatImageList__item--container"
                      key={`image-list-${i}_${img.alt}`}
                      style={{ height }}
                    >
                      <div
                        className="BoatImageList__item"
                        onClick={(e) => handleImageClick(e, i)}
                        style={{ backgroundImage: `url(${img.src})`, ...st }}
                      >
                        {i === cols - 1 && images.length - cols > 0 ? (
                          <div
                            className="BoatImageList__item--last"
                            style={{ ...st }}
                          >
                            <span>+ {images.length - cols}</span>
                          </div>
                        ) : null}
                      </div>
                    </div>
                  );
                } else {
                  return null;
                }
              })}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BoatImageList;
