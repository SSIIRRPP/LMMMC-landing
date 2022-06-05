import { useContext, useEffect, useMemo, useRef, useState } from "react";
import { ParallaxBanner, useParallaxController } from "react-scroll-parallax";
import LayoutContext from "../../../contexts/LayoutContext";
import FadeInComp from "../FadeInComp";

const a = () => {
  if (false) {
    console.log("test");
  }
};

export const AdjustableContainer = ({
  children,
  width: wd,
  containerClass,
  containerStyle = {},
  includeWidthContainer,
  updateParallaxControllerOnResultUpdate = false,
  heightModifier,
  widthSwitch,
  fadeIn = false,
}) => {
  const containerRef = useRef(null);
  const {
    sizes: { width: _wd },
    fontSizeTransform,
  } = useContext(LayoutContext);
  const parallaxController = useParallaxController();
  const [height, setHeight] = useState(800);

  const width = useMemo(() => (wd ? wd : _wd), [wd, _wd]);

  const result = useMemo(() => {
    const a = includeWidthContainer
      ? { ...widthSwitch(width), width } || { height: 800, width }
      : widthSwitch(width) || { height: 800 };
    return { ...a, height: a.height * fontSizeTransform };
  }, [width, widthSwitch, includeWidthContainer, fontSizeTransform]);

  const render = useMemo(
    () =>
      typeof children === "function"
        ? children({ result, ref: containerRef })
        : children,
    [children, result]
  );

  useEffect(() => {
    if (result?.height) {
      if (typeof heightModifier === "function") {
        setHeight(heightModifier(result?.height));
      } else {
        setHeight(result?.height);
      }
    } else {
      setHeight(800);
    }
  }, [heightModifier, result?.height]);

  useEffect(() => {
    if (updateParallaxControllerOnResultUpdate) {
      a(result);
      parallaxController.update();
    }
  }, [result, updateParallaxControllerOnResultUpdate, parallaxController]);

  const ret = useMemo(
    () => (
      <>
        {width ? (
          <div
            ref={containerRef}
            className={containerClass ? containerClass : ""}
            style={
              result?.constainerStyle
                ? {
                    ...containerStyle,
                    ...result?.constainerStyle,
                    minHeight: height,
                    width: includeWidthContainer ? width : undefined,
                  }
                : {
                    ...containerStyle,
                    minHeight: height,
                    width: includeWidthContainer ? width : undefined,
                  }
            }
          >
            {fadeIn ? <FadeInComp>{render}</FadeInComp> : <>{render}</>}
          </div>
        ) : null}
      </>
    ),
    [
      containerClass,
      containerStyle,
      includeWidthContainer,
      fadeIn,
      render,
      result,
      height,
      width,
    ]
  );

  return ret;
};

const AdjustableParallaxBanner = (props) => {
  const { children, className, style = {}, layers = [] } = props;
  return (
    <AdjustableContainer {...props}>
      {({ result, ref }) => (
        <>
          <ParallaxBanner
            className={className ? className : ""}
            layers={typeof layers === "function" ? layers(result, ref) : layers}
            style={
              result?.style
                ? {
                    ...style,
                    ...result.style,
                    height: result?.height || 800,
                  }
                : {
                    ...style,
                    height: result?.height || 800,
                  }
            }
          />
          {children ? children : null}
        </>
      )}
    </AdjustableContainer>
  );
};

/* const Test = () => <ParallaxBanner layers={[{  }]} />; */

export default AdjustableParallaxBanner;
