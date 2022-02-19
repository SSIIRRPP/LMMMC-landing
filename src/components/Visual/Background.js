import { useEffect, useRef } from "react";
import { useParallax, ParallaxBanner } from "react-scroll-parallax";
import "./styles/Background.scss";

const BackgroundParallax = ({
  childRef,
  parallaxProps,
  className,
  style,
  img,
  children,
}) => {
  const { ref } = useParallax(parallaxProps);
  useEffect(() => {
    if (ref.current) {
      childRef.current = ref.current;
    }
  }, [ref]);
  return (
    <div
      ref={ref}
      className={`Background${className ? ` ${className}` : ""}`}
      style={{ ...style, background: `url(${img}) repeat fixed 100%` }}
    >
      {children}
    </div>
  );
};

const Background = (props) => {
  const childRef = useRef(null);
  const { parallax, parallaxProps, className, banner, style, img, children } =
    props;

  return parallax ? (
    <>
      {banner ? (
        <ParallaxBanner
          /* onProgress={(e) => console.log(e)} */
          layers={[{ image: img, ...parallaxProps, opacity: [0.3, 1] }]}
          style={{
            aspectRatio: "1 / 1",
            ...style,
          }}
        >
          {children}
        </ParallaxBanner>
      ) : (
        <BackgroundParallax childRef={childRef} {...props} />
      )}
    </>
  ) : (
    <div
      ref={childRef}
      className={`Background${className ? ` ${className}` : ""}`}
      style={{ ...style, background: `url(${img}) repeat fixed 100%` }}
    >
      {children}
    </div>
  );
};

export default Background;
