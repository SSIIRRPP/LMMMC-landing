import { useMemo } from "react";
import ImageGalleryInt from "react-image-gallery";
import "react-image-gallery/styles/scss/image-gallery.scss";
import "./styles/ImageGallery.scss";

const thumbnailConfigPreset = {
  /* thumbnailWidth: "50px",
  thumbnailHeight: "50px",
  thumbnailClass: "prueba ", */
};

const ImageGallery = ({
  active = 0,
  setActive = () => {},
  slides = [],
  images = [],
  thumbnails,
  imagesClass = null,
}) => {
  const _items = useMemo(() => {
    let t = [];
    if (slides && slides.length > 0) {
      slides.forEach((s) => {
        t.push({ renderItem: () => s });
      });
    } else {
      if (images && images.length > 0) {
        slides.forEach((s) => {
          let _s = { original: s };
          if (imagesClass) {
            _s = { ..._s, originalClass: imagesClass };
          }
          t.push(_s);
        });
      }
    }
    if (thumbnails && thumbnails.length > 0) {
      t = t.map((_s, _i) => ({
        ..._s,
        thumbnail: thumbnails[_i][0],
        renderThumbInner: thumbnails[_i][1],
        ...thumbnailConfigPreset,
      }));
    }
    t = t.map((_s) => ({ ..._s }));
    return t;
  }, [slides, images, imagesClass, thumbnails]);

  return (
    <ImageGalleryInt
      startIndex={active}
      additionalClass="ImageGallery"
      onSlide={(id) => setActive(id)}
      items={_items}
      showBullets
      showThumbnails
    />
  );
};

export default ImageGallery;
