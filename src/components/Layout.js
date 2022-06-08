import {
  Suspense,
  lazy,
  useCallback,
  useEffect,
  useRef,
  useState,
  useMemo,
} from "react";
import { useResizeDetector } from "react-resize-detector";
import { Routes, Route } from "react-router-dom";
import { useParallaxController } from "react-scroll-parallax";
/* import Main from "../pages/Main"; */
import Header from "./Header";
import { useLocation, useNavigate } from "react-router";
import { Spinner } from "react-bootstrap";
import Footer from "./Footer";
import useIsScrolling from "../hooks/useIsScrolling";
import "./styles/Layout.scss";
import "../styles/animations.scss";
import "../components/Visual/styles/index.scss";
import { LayoutProvider } from "../contexts/LayoutContext";
import Main from "../pages/Main";

// lazy loaded pages
const Boats = lazy(() => import("../pages/Boats"));
const Boat = lazy(() => import("../pages/Boat"));
const Course = lazy(() => import("../pages/Course"));
const CoursesPrices = lazy(() => import("../pages/CoursesPrices"));
const NotFound = lazy(() => import("../pages/NotFound"));
const Legal = lazy(() => import("../pages/Legal"));
const School = lazy(() => import("../pages/School"));
const Contact = lazy(() => import("../pages/Contact"));
const Us = lazy(() => import("../pages/Us"));

const Layout = () => {
  const [openHeader, setOpenHeader] = useState(false);
  const [fontSizeTransform, setFontSizeTransform] = useState(null);
  const layoutRef = useRef(null);
  const footerRef = useRef(null);
  const [sizes, setSizes] = useState({
    width: 0,
    height: 0,
    windowWidth: 0,
    windowHeight: 0,
  });
  const navigate = useNavigate();
  const location = useLocation();
  const [touch, setTouch] = useState(false);
  const { height, width } = useResizeDetector({
    targetRef: layoutRef,
    refreshMode: "debounce",
    refreshRate: 150,
  });
  const { height: footerHeight } = useResizeDetector({ targetRef: footerRef });
  const { scrolling } = useIsScrolling();
  const parallaxController = useParallaxController();

  useEffect(() => {
    setSizes((s) => ({ ...s, height }));
    parallaxController.update();
  }, [height, parallaxController]);

  useEffect(() => {
    setSizes((s) => ({ ...s, width }));
    parallaxController.update();
  }, [width, parallaxController]);

  const el = layoutRef.current;

  useEffect(() => {
    const rm = () => {
      el.removeEventListener("touchstart", handleTouch);
    };
    const handleTouch = () => {
      setTouch(true);
      rm();
    };
    if (el) {
      el.addEventListener("touchstart", handleTouch);
      return rm;
    }
  }, [el]);
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
    [location.pathname, navigate, parallaxController]
  );

  useEffect(() => {
    window.scrollTo(0, 0);
    parallaxController.update();
  }, [location, parallaxController]);

  useEffect(() => {
    window.addEventListener("resize", setWindowSize);
    setWindowSize();
    return () => window.removeEventListener("resize", setWindowSize);
  }, [setWindowSize]);

  useEffect(() => {
    const el = document.getElementsByTagName("html")[0];
    const prt = window.getComputedStyle(el)["fontSize"];
    if (prt) {
      setFontSizeTransform(parseInt(prt) / 16);
    }
  }, []);

  useEffect(() => {
    const elm = document.getElementsByTagName("body")[0];
    if (location.pathname.startsWith("/contacto")) {
      !elm.classList.replace("hide-recaptcha", "show-recaptcha") &&
        elm.classList.add("show-recaptcha");
    } else {
      !elm.classList.replace("show-recaptcha", "hide-recaptcha") &&
        elm.classList.add("hide-recaptcha");
    }
  }, [location.pathname]);

  const fallbackMinHeight = useMemo(
    () => sizes.windowHeight - 72 || 0 /* header height */,
    [sizes.windowHeight]
  );

  const pageMinHeight = useMemo(
    () => sizes.windowHeight - 72 /* header height */ - footerHeight || 0,
    [sizes.windowHeight, footerHeight]
  );

  const Fallback = useCallback(() => {
    return (
      <div
        className="Layout__loader"
        style={{
          height: fallbackMinHeight,
        }}
      >
        <Spinner size="xl" animation="border" role="status" />
      </div>
    );
  }, [fallbackMinHeight]);

  return (
    <LayoutProvider
      value={{
        layoutRef,
        sizes,
        touch,
        scrolling,
        scrollTo,
        fontSizeTransform,
        fallbackMinHeight,
        Fallback,
      }}
    >
      <layout is="custom" id="layout">
        <Header open={openHeader} setOpen={setOpenHeader} />
        <div className="Layout__main" ref={layoutRef}>
          <Suspense fallback={<Fallback />}>
            {width ? (
              <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/nosotros" element={<Us />} />
                <Route path="/contacto" element={<Contact />} />
                <Route path="/embarcaciones/*" element={<Boats />} />
                <Route
                  path="/embarcaciones/:boatType/:boatId"
                  element={<Boat />}
                />
                <Route path="/aviso-legal" element={<Legal />} />
                <Route path="/cursos/:courseId" element={<Course />} />
                <Route path="/cursos/tarifas" element={<CoursesPrices />} />
                <Route path="/cursos" element={<School />} />
                <Route
                  path="*"
                  element={
                    <NotFound
                      minHeight={pageMinHeight}
                      footerHeight={footerHeight}
                    />
                  }
                />
              </Routes>
            ) : (
              <Fallback />
            )}
            <Footer footerRef={footerRef} />
          </Suspense>
        </div>
      </layout>
    </LayoutProvider>
  );
};

export default Layout;
