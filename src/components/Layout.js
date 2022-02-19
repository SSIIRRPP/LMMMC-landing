import {
  createContext,
  Suspense,
  lazy,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { useResizeDetector } from "react-resize-detector";
import { Routes, Route } from "react-router-dom";
import { useParallaxController } from "react-scroll-parallax";
/* import Main from "../pages/Main"; */
import Us from "../pages/Us";
import Header from "./Header";
import { useLocation, useNavigate } from "react-router";
import "./styles/Layout.scss";
import Boat from "../pages/Boat";
import Contact from "../pages/Contact";
import School from "../pages/School";
import Legal from "../pages/Legal";
import { Spinner } from "react-bootstrap";
import Footer from "./Footer";

// lazy loaded pages
const Boats = lazy(() => import("../pages/Boats"));
const Main = lazy(() => import("../pages/Main"));

export const LayoutContext = createContext({});
const LayoutProvider = LayoutContext.Provider;

const Layout = () => {
  const [openHeader, setOpenHeader] = useState(false);
  const layoutRef = useRef(null);
  const [sizes, setSizes] = useState({
    width: 0,
    height: 0,
    windowWidth: 0,
    windowHeight: 0,
  });
  const navigate = useNavigate();
  const location = useLocation();
  window.navigate = navigate;
  const [touch, setTouch] = useState(false);
  const { height, width } = useResizeDetector({
    targetRef: layoutRef,
    refreshMode: "debounce",
    refreshRate: 250,
  });
  const parallaxController = useParallaxController();

  useEffect(() => {
    setSizes((s) => ({ ...s, height, width }));
    parallaxController.update();
  }, [height, width, parallaxController]);

  const el = layoutRef.current;

  useEffect(() => {
    const rm = () => el.removeEventListener("touchstart", handleTouch);
    const handleTouch = () => {
      setTouch(true);
      rm();
    };
    if (el) {
      /* parallaxController.updateScrollContainer(el); */
      el.addEventListener("touchstart", handleTouch);
      return rm;
    }
  }, [el, parallaxController]);
  const setWindowSize = useCallback(() => {
    setSizes((s) => ({
      ...s,
      windowHeight: window.innerHeight,
      windowWidth: window.innerWidth,
    }));
    parallaxController.update();
  }, [parallaxController]);

  const scrollTo = useCallback(
    (path = "") => {
      setOpenHeader(false);
      const pars = path.split("#");
      const scrl = () => {
        parallaxController.update();
        document
          .getElementById(pars[1])
          ?.scrollIntoView({ behavior: "smooth" });
      };
      if (location.pathname === pars[0]) {
        scrl();
      } else {
        navigate(pars[0]);
        let tm = setTimeout(scrl, 500);
        return () => clearTimeout(tm);
      }
    },
    [location, navigate, parallaxController]
  );

  useEffect(() => {
    /* const el = document.getElementById("layout"); */
    /* if (el) { */
    window.scrollTo(0, 0);
    parallaxController.update(); /* 
    } */
  }, [location, parallaxController]);

  /* window.scrollTo = scrollTo; */

  useEffect(() => {
    window.addEventListener("resize", setWindowSize);
    setWindowSize();
    return () => window.removeEventListener("resize", setWindowSize);
  }, [setWindowSize]);

  const Fallback = useCallback(() => {
    return (
      <div
        className="Layout__loader"
        style={{
          height: sizes.windowHeight - 80 /* header height */,
        }}
      >
        <Spinner size="xl" animation="border" role="status" />
      </div>
    );
  }, [sizes.windowHeight]);

  return (
    <LayoutProvider value={{ layoutRef, sizes, touch, scrollTo }}>
      <div className="Layout" id="layout">
        <Header open={openHeader} setOpen={setOpenHeader} />
        <div className="Layout__main" ref={layoutRef}>
          <Suspense fallback={<Fallback />}>
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/nosotros" element={<Us />} />
              <Route path="/escuela" element={<School />} />
              <Route path="/contacto" element={<Contact />} />
              <Route path="/embarcaciones" element={<Boats />} />
              <Route path="/embarcaciones/:boatId" element={<Boat />} />
              <Route path="/aviso-legal" element={<Legal />} />
              <Route path="/pruebaCarga" element={<Fallback />} />
            </Routes>
            <Footer />
          </Suspense>
        </div>
      </div>
    </LayoutProvider>
  );
};

export default Layout;
