import { Suspense, useCallback, useContext } from "react";
import { Spinner } from "react-bootstrap";
import { LayoutContext } from "../components/Layout";

const LazyLoader = ({ children }) => {
  const {
    sizes: { windowHeight },
  } = useContext(LayoutContext);
  const Fallback = useCallback(() => {
    return (
      <div
        className="Layout__loader"
        style={{
          height: windowHeight - 80 /* header height */,
        }}
      >
        <Spinner size="xl" animation="border" role="status" />
      </div>
    );
  }, [windowHeight]);

  return <Suspense fallback={<Fallback />}>{children}</Suspense>;
};

export default LazyLoader;
