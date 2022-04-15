import { useContext, useMemo } from "react";
import { Parallax } from "react-scroll-parallax";
import ThemeContext from "../../../contexts/ThemeContext";
import "./styles/ParallaxBCKLines.scss";

const ParallaxBackgroundLines = ({ lines = [], style: sty, height }) => {
  const { theme } = useContext(ThemeContext);
  const items = useMemo(() => {
    return lines.map((line, i) => {
      const {
        scale = {},
        startScroll = height * 0.7,
        style = {},
        rotated = false,
        toLeft = false,
      } = line;
      const { x, y } = scale;
      return (
        <Parallax
          key={`ParallaxBCKLines-${i}-${Date.now() / i}`}
          scaleY={y ? y : undefined}
          scaleX={x ? x : undefined}
          startScroll={startScroll}
          shouldAlwaysCompleteAnimation={true}
          style={style}
        >
          <div
            className={`ParallaxBCKLines__item${rotated ? " rotated" : ""} ${
              toLeft ? "toleft" : "toright"
            } ParallaxBCKLines__item${
              theme.name === "dark" ? "-dark" : "-light"
            }`}
          />
        </Parallax>
      );
    });
  }, [theme?.name, lines, height]);
  return (
    <div className="ParallaxBCKLines" style={{ ...sty, height }}>
      {items}
    </div>
  );
};

export default ParallaxBackgroundLines;
