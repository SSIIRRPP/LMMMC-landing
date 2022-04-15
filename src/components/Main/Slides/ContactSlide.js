import { useNavigate } from "react-router";
import { Button } from "react-bootstrap";
import { useContext } from "react";
import LanguageContext from "../../../contexts/LanguageContext";

const ContactSlide = () => {
  const {
    text: {
      Main: {
        Carousel: {
          slides: {
            Contact: { h2, p, button },
          },
        },
      },
    },
  } = useContext(LanguageContext);
  const navigate = useNavigate();
  return (
    <div className="CarouselSlide">
      <div className="CarouselSlide__title--container">
        <h2 className="CarouselSlide__title"> {h2} </h2>
      </div>
      <div className="CarouselSlide__body">
        <p className="CarouselSlide__body--text">{p}</p>
      </div>
      <Button
        className="CarouselSlide__button"
        onClick={() => navigate("contacto/", { state: { from: "/#services" } })}
      >
        {button}
      </Button>
    </div>
  );
};

export default ContactSlide;