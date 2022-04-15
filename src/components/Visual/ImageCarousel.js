import { useMemo, useEffect } from "react";
import { Carousel } from "react-bootstrap";

const ImageCarousel = ({
  id,
  images = [],
  height,
  interval,
  showControls,
  showIndicators,
}) => {
  const on = useMemo(
    () => (typeof showControls === "boolean" ? showControls : false),
    [showControls]
  );
  const ind = useMemo(
    () => (typeof showIndicators === "boolean" ? showIndicators : false),
    [showIndicators]
  );
  const slides = useMemo(
    () =>
      images.map((img, i) => {
        let style = {
          height,
          backgroundImage: `url(${img.src})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        };
        if (img.style) {
          style = {
            ...style,
            ...img.style,
          };
        }
        return (
          <Carousel.Item
            key={`${id ? id : Date.now()}_slide-${i}`}
            style={style}
          >
            {img.body ? (
              <Carousel.Caption {...(img.bodyProps ? img.bodyProps : {})}>
                {img.body(img)}
              </Carousel.Caption>
            ) : null}
          </Carousel.Item>
        );
      }),
    [height, id, images]
  );

  useEffect(() => {
    images.forEach((img, i) => {
      if (i > 0) {
        fetch(img.img);
      }
    });
  }, [images]);

  return (
    <Carousel
      controls={on}
      indicators={ind || on}
      keyboard={on}
      touch={on}
      pause={on ? "hover" : false}
      interval={interval ? interval : 5000}
      style={{ height }}
    >
      {slides}
    </Carousel>
  );
};

export default ImageCarousel;
