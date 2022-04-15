import { useMemo, useCallback, useContext } from "react";
import ADJParallaxBanner from "../Visual/Parallax/AdjustableParallaxBanner";
import ImageCarousel from "../Visual/ImageCarousel";
import "./styles/UsSection.scss";
import ThemeContext from "../../contexts/ThemeContext";
import LanguageContext from "../../contexts/LanguageContext";

const TextCard = ({ width, inverted = false, text = "" }) => {
  const { theme } = useContext(ThemeContext);
  const { lang } = useContext(LanguageContext);
  return (
    <div
      style={{
        width: width * 0.3,
        minWidth: 300,
        maxWidth: 500,
        backgroundColor: theme.backgroundSecondaryTranslucid,
        padding: "1rem",
        paddingRight: !inverted ? "2rem" : "1rem",
        paddingLeft: inverted ? "2rem" : "1rem",
        textAlign: inverted ? "right" : "left",
        clipPath: inverted
          ? "polygon(0 0, 100% 0, 100% 100%, 5% 100%)"
          : "polygon(0 0, 100% 0, 95% 100%, 0% 100%)",
      }}
    >
      <p style={{ color: theme.color, margin: 0 }}>{text[lang]}</p>
    </div>
  );
};

const UsSection = ({
  text,
  id,
  inverted,
  images: _images = [],
  imagesScale,
  body,
  extraLayer,
  widthSwitch,
}) => {
  const images = useMemo(() => {
    const imgs = [];
    if (_images.length > 0) {
      _images.forEach((p, it) => {
        let i = it + 1;
        let src;
        if (p.useBasePath) {
          src = require(`../../assets/images/${p.src}`);
        } else {
          src = require(`../../assets/images/us/${p.src}`);
        }
        let obj = { ...p, src, i };
        if (body) {
          if (Array.isArray(body)) {
            obj = { ...obj, body: body[i - 1] };
          } else {
            obj = { ...obj, body };
          }
        }
        imgs.push(obj);
      });
      return imgs;
    }
  }, [_images, body]);

  const layers = useCallback(
    (_props) => {
      const { height, width } = _props;
      if (images) {
        let _layers = [
          {
            scale: imagesScale ? imagesScale : [1.3, 1],
            children: <ImageCarousel {..._props} images={images} id={id} />,
          },
        ];
        if (text) {
          _layers.push({
            speed: 10,
            children: <TextCard {..._props} inverted={inverted} text={text} />,
            style: {
              width,
              height: height * 0.8,
              margin: `${height * 0.1}px 0`,
              display: "flex",
              justifyContent: inverted ? "flex-end" : "flex-start",
              alignItems: "flex-end",
            },
          });
        }
        if (extraLayer) {
          _layers = [..._layers, extraLayer].flat();
        }
        return _layers;
      } else {
        return [];
      }
    },
    [images, id, text, inverted, extraLayer, imagesScale]
  );

  return (
    <ADJParallaxBanner
      includeWidthContainer
      layers={layers}
      widthSwitch={widthSwitch}
    />
  );
};

export default UsSection;
