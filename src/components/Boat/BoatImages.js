import { useCallback, useContext, useMemo, useState } from "react";
import ThemeContext from "../../contexts/ThemeContext";
import ImageModal from "../Boats/ImageModal";
import FadeInComp from "../Visual/FadeInComp";
import { AdjustableContainer } from "../Visual/Parallax/AdjustableParallaxBanner";
import BoatImageList from "./BoatImageList";
import "./styles/BoatImages.scss";

const BoatImages = ({ boat }) => {
  const [openModal, setOpenModal] = useState(false);
  const [activeImage, setActiveImage] = useState(0);
  const { theme } = useContext(ThemeContext);

  const mainImage = useMemo(
    () =>
      boat ? require(`../../assets/images/boats/${boat.id}/main.jpeg`) : null,
    [boat]
  );

  const backgroundImage = useMemo(
    () =>
      boat
        ? require(`../../assets/images/boats/${boat.id}/background.jpeg`)
        : null,
    [boat]
  );

  const imagesArray = useMemo(() => {
    if (boat) {
      const imags = boat.images
        .map((img) =>
          require(`../../assets/images/boats/${boat.id}/${img}.jpeg`)
        )
        .map((src, i) => ({ src, alt: `${boat.id}-${i + 1}` }));
      if (mainImage) {
        return [
          { src: mainImage, alt: boat.id },
          { src: backgroundImage, añt: boat.id },
          ...imags,
        ];
      } else {
        return imags;
      }
    } else {
      return null;
    }
  }, [mainImage, backgroundImage, boat]);

  const widthSwitch = useCallback((width) => {
    switch (true) {
      default: {
        return { height: 100 };
      }
    }
  }, []);

  return (
    <FadeInComp>
      <AdjustableContainer
        widthSwitch={widthSwitch}
        heightModifier={(h) => h + 1}
      >
        {({ result: { height } }) => (
          <>
            <BoatImageList
              images={imagesArray}
              height={height}
              setActive={setActiveImage}
              setOpenModal={setOpenModal}
            />
            <ImageModal
              openModal={openModal}
              setOpenModal={setOpenModal}
              images={imagesArray}
              active={activeImage}
              setActive={setActiveImage}
            />
          </>
        )}
      </AdjustableContainer>
      <div style={{ border: `1px solid ${theme.backgroundSecondary}` }} />
    </FadeInComp>
  );
};

export default BoatImages;
