import { useContext, useMemo } from "react";
import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from "react-parallax-mouse";
import LayoutContext from "../../../contexts/LayoutContext";

const genStyle = (h, w) => {
  let style = {};
  const f = (it, t) => {
    if (it) {
      style = {
        ...style,
        [t]: it,
      };
    }
  };
  f(h, "height");
  f(w, "width");
  if (Object.keys(style).length === 0) {
    console.warn("No height or width provided");
  }
  return style;
};

const defFactor = { x: 0.002, y: 0.005 };

const MouseParallax = ({
  children,
  width,
  height,
  factor = defFactor,
  containerStyles = {},
  updateStyles = () => ({}),
}) => {
  const { x = 0.002, y = 0.005 } = factor;
  const { touch } = useContext(LayoutContext);
  const styles = useMemo(() => genStyle(height, width), [height, width]);
  return (
    <MouseParallaxContainer
      enabled={!touch}
      useWindowMouseEvents
      containerStyles={{
        ...styles,
        ...containerStyles,
      }}
    >
      <MouseParallaxChild
        factorX={x}
        factorY={y}
        updateStyles={(o) => {
          if (typeof updateStyles === "function") {
            return {
              ...styles,
              ...updateStyles(o),
            };
          } else if (typeof updateStyles === "object") {
            return {
              ...styles,
              ...updateStyles,
            };
          } else {
            return styles;
          }
        }}
      >
        {children}
      </MouseParallaxChild>
    </MouseParallaxContainer>
  );
};

export default MouseParallax;
