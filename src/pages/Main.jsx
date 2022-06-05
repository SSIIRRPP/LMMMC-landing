import "./styles/Main.scss";
import MainCarousel from "../components/Main/MainCarousel";
import FadeIn from "react-fade-in";
import MainFirst from "../components/Main/MainFirst";
import MainLocation from "../components/Main/MainLocation";
import { useRef } from "react";

const Main = () => {
  const mainRef = useRef(null);

  return (
    <div ref={mainRef}>
      <FadeIn delay={200} transitionDuration={800}>
        <section
          id="presentation"
          className="Main__section Main--section--first"
        >
          <MainFirst />
        </section>
        <section id="services" className="Main__section Main--section--second">
          <MainCarousel />
        </section>
        <section id="location">
          <MainLocation />
        </section>
      </FadeIn>
    </div>
  );
};

export default Main;
