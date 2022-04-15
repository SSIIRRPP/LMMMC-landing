import { Divider, ImageList, ImageListItem } from "@mui/material";
import { useCallback, useContext, useMemo } from "react";
import { useResizeDetector } from "react-resize-detector";
import ThemeContext from "../../contexts/ThemeContext";

const BoatImageList = ({ images = [], height, setActive, setOpenModal }) => {
  const { width, ref } = useResizeDetector();
  const { theme } = useContext(ThemeContext);

  const makeImage = useCallback(
    (img = {}, height) => {
      return (
        <div
          style={{
            backgroundImage: `url(${img.src})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            width: "100%",
            height: "100%",
            borderTop: `1px solid ${theme.borderColorPrimary}`,
            borderLeft: `1px solid ${theme.borderColorPrimary}`,
          }}
        />
      );
    },
    [theme]
  );

  const makeOneRow = useCallback(
    (img) => {
      return makeImage(img, height);
    },
    [makeImage, height]
  );

  const makeTwoRows = useCallback(
    (arr) => {
      return (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gridTemplateRows: "1fr 1fr",
          }}
        >
          {arr.map((img) => makeImage(img, height / 2))}
        </div>
      );
    },
    [makeImage, height]
  );

  const makeThreeRows = useCallback(
    (arr) => {
      return (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gridTemplateRows: "1fr 1fr 1fr",
          }}
        >
          {arr.map((img) => makeImage(img, height / 3))}
        </div>
      );
    },
    [makeImage, height]
  );

  const imageList = useMemo(() => {
    const f = () => {
      switch (true) {
        case width > 750: {
          return [
            makeOneRow(images[0]),
            makeTwoRows(images.slice(1, 5)),
            makeThreeRows(images.slice(5, 14)),
          ];
        }
        default: {
          return [];
        }
      }
    };
    const res = f();
    return res.flat();
  }, [images, width, makeOneRow, makeTwoRows, makeThreeRows]);

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
      ref={ref}
      style={{
        height,
      }}
    >
      <div
        style={{
          height: height - 1,
          width: height * 3 + 1,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: `${`${height}px `.repeat(3)}`,
          gridTemplateRows: `${height}px`,
          borderBottom: `1px solid ${theme.borderColorPrimary}`,
          borderRight: `1px solid ${theme.borderColorPrimary}`,
          overflow: "hidden",
        }}
      >
        {imageList}
      </div>
    </div>
  );
};

export default BoatImageList;
