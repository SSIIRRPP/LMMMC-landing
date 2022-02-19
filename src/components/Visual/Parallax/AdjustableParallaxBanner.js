import { useContext, useEffect, useMemo } from "react";
import { ParallaxBanner, useParallaxController } from "react-scroll-parallax";
import { LayoutContext } from "../../Layout";

const a = () => {
  if (false) {
    console.log("hola");
  }
};

export const AdjustableContainer = ({
  children,
  containerClass,
  containerStyle = {},
  includeWidthContainer,
  updateParallaxControllerOnResultUpdate = false,
  widthSwitch,
}) => {
  const {
    sizes: { width },
  } = useContext(LayoutContext);
  /* const [result, setResult] = useState({}); */
  const parallaxController = useParallaxController();

  const result = useMemo(
    () =>
      includeWidthContainer
        ? { ...widthSwitch(width), width } || { height: 800, width }
        : widthSwitch(width) || { height: 800 },
    [width, widthSwitch, includeWidthContainer]
  );

  /* useEffect(() => {    
    const res = (() =>
      includeWidthContainer
        ? { ...widthSwitch(width), width } || { height: 800, width }
        : widthSwitch(width) || { height: 800 })();
    setResult(res);
  }, [width, widthSwitch, includeWidthContainer]); */

  useEffect(() => {
    if (updateParallaxControllerOnResultUpdate) {
      a(result);
      parallaxController.update();
    }
  }, [result, updateParallaxControllerOnResultUpdate, parallaxController]);

  const { height } = result;
  return (
    <div
      className={containerClass ? containerClass : ""}
      style={
        result?.constainerStyle
          ? {
              ...containerStyle,
              ...result.constainerStyle,
              minHeight: height ? height : 800,
              width: includeWidthContainer ? width : undefined,
            }
          : {
              ...containerStyle,
              minHeight: height ? height : 800,
              width: includeWidthContainer ? width : undefined,
            }
      }
    >
      {typeof children === "function" ? children({ result }) : children}
    </div>
  );
};

const AdjustableParallaxBanner = (props) => {
  const { children, className, style = {}, layers = [] } = props;
  return (
    <AdjustableContainer {...props}>
      {({ result }) => (
        <>
          <ParallaxBanner
            className={className ? className : ""}
            layers={typeof layers === "function" ? layers(result) : layers}
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
